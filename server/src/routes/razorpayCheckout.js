import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { config } from '../config/env.js';
import { logger } from '../logger.js';

const router = express.Router();

/**
 * Initialize Razorpay SDK client with environment credentials
 */
function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID || config.razorpayKeyId;
  const keySecret = process.env.RAZORPAY_KEY_SECRET || config.razorpayKeySecret;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

/**
 * GET /api/razorpay/config (or /api/config)
 * Public key endpoint so frontend can initialize checkout modal
 */
router.get('/config', (req, res) => {
  const keyId = process.env.RAZORPAY_KEY_ID || config.razorpayKeyId || '';
  res.json({
    success: true,
    key_id: keyId,
  });
});

/**
 * POST /api/create-order
 * Creates a new Razorpay order
 * Request body: { amount (in paise), currency, receipt, notes }
 * Minimum amount: 100 paise (₹1.00)
 */
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes = {} } = req.body;

    // Validate amount
    const numericAmount = Number(amount);
    if (!amount || isNaN(numericAmount) || numericAmount < 100) {
      return res.status(400).json({
        success: false,
        error: 'Amount is required and must be at least 100 paise (minimum ₹1.00)',
      });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || config.razorpayKeyId;
    const keySecret = process.env.RAZORPAY_KEY_SECRET || config.razorpayKeySecret;

    if (!keyId || !keySecret) {
      return res.status(401).json({
        success: false,
        error: 'Razorpay API credentials (RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET) are missing or unauthorized',
      });
    }

    const razorpay = getRazorpayClient();
    if (!razorpay) {
      return res.status(401).json({
        success: false,
        error: 'Failed to initialize Razorpay client due to missing credentials',
      });
    }

    const orderOptions = {
      amount: Math.round(numericAmount),
      currency: currency.toUpperCase(),
      receipt: receipt || `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      notes: {
        platform: 'Floorly',
        ...notes,
      },
    };

    const order = await razorpay.orders.create(orderOptions);

    logger.info({ orderId: order.id, amount: order.amount, currency: order.currency }, 'Razorpay order created');

    return res.status(200).json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: keyId,
      receipt: order.receipt,
    });
  } catch (err) {
    logger.error({ err: err.message, stack: err.stack }, 'Razorpay order creation failed');

    // Handle authentication / permission failure from Razorpay API
    if (err.statusCode === 401 || err.error?.code === 'BAD_REQUEST_ERROR' && err.message?.toLowerCase().includes('auth')) {
      return res.status(401).json({
        success: false,
        error: err.error?.description || err.message || 'Razorpay authentication failed',
      });
    }

    return res.status(500).json({
      success: false,
      error: err.error?.description || err.message || 'Internal server error while creating Razorpay order',
    });
  }
});

/**
 * POST /api/verify-payment
 * Verifies Razorpay payment signature using HMAC-SHA256
 * Request body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 */
router.post('/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate presence of all three required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        isPaid: false,
        error: 'Missing required fields: razorpay_order_id, razorpay_payment_id, and razorpay_signature must all be provided',
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET || config.razorpayKeySecret;
    if (!keySecret) {
      return res.status(500).json({
        success: false,
        isPaid: false,
        error: 'Razorpay key secret is not configured on this server',
      });
    }

    // Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(payload)
      .digest('hex');

    // Secure timing-safe comparison
    let isSignatureValid = false;
    try {
      const expectedBuffer = Buffer.from(expectedSignature, 'utf-8');
      const providedBuffer = Buffer.from(razorpay_signature, 'utf-8');

      if (expectedBuffer.length === providedBuffer.length && crypto.timingSafeEqual(expectedBuffer, providedBuffer)) {
        isSignatureValid = true;
      }
    } catch {
      isSignatureValid = false;
    }

    if (!isSignatureValid) {
      logger.warn({ order_id: razorpay_order_id, payment_id: razorpay_payment_id }, 'Razorpay payment signature mismatch');
      return res.status(400).json({
        success: false,
        isPaid: false,
        error: 'Payment verification failed: signature mismatch. Payment was NOT verified.',
      });
    }

    logger.info({ order_id: razorpay_order_id, payment_id: razorpay_payment_id }, 'Razorpay payment verified successfully');

    return res.status(200).json({
      success: true,
      isPaid: true,
      message: 'Payment verified successfully',
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    });
  } catch (err) {
    logger.error({ err: err.message }, 'Error during payment signature verification');
    return res.status(500).json({
      success: false,
      isPaid: false,
      error: 'Internal error during payment verification',
    });
  }
});

export default router;
