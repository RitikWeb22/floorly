import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import crypto from 'crypto';
import app from '../index.js';
import { config } from '../config/env.js';

describe('Razorpay Standard Web Checkout Suite', () => {
  const TEST_KEY_ID = 'rzp_test_TmqM7yD9Sgy60G';
  const TEST_KEY_SECRET = 'QGePnfYra5kR1CtKs3PQbslV';

  const origKeyId = process.env.RAZORPAY_KEY_ID;
  const origKeySecret = process.env.RAZORPAY_KEY_SECRET;
  const origConfigId = config.razorpayKeyId;
  const origConfigSecret = config.razorpayKeySecret;

  beforeEach(() => {
    process.env.RAZORPAY_KEY_ID = TEST_KEY_ID;
    process.env.RAZORPAY_KEY_SECRET = TEST_KEY_SECRET;
    config.razorpayKeyId = TEST_KEY_ID;
    config.razorpayKeySecret = TEST_KEY_SECRET;
  });

  afterEach(() => {
    process.env.RAZORPAY_KEY_ID = origKeyId;
    process.env.RAZORPAY_KEY_SECRET = origKeySecret;
    config.razorpayKeyId = origConfigId;
    config.razorpayKeySecret = origConfigSecret;
  });

  describe('STEP 1: Order Creation (POST /api/create-order)', () => {
    it('rejects order with amount less than 100 paise with HTTP 400', async () => {
      const res = await request(app)
        .post('/api/create-order')
        .send({ amount: 50, currency: 'INR' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('at least 100 paise');
    });

    it('rejects order with missing or non-numeric amount with HTTP 400', async () => {
      const res = await request(app)
        .post('/api/create-order')
        .send({ currency: 'INR' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('Amount is required');
    });

    it('returns HTTP 401 if Razorpay credentials are not configured', async () => {
      delete process.env.RAZORPAY_KEY_ID;
      delete process.env.RAZORPAY_KEY_SECRET;
      config.razorpayKeyId = '';
      config.razorpayKeySecret = '';

      const res = await request(app)
        .post('/api/create-order')
        .send({ amount: 50000, currency: 'INR' });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('credentials');
    });

    it('creates a valid Razorpay order with order_id, amount, and currency', async () => {
      const res = await request(app)
        .post('/api/create-order')
        .send({
          amount: 50000, // ₹500 in paise
          currency: 'INR',
          receipt: 'test_receipt_001',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.order_id).toBeDefined();
      expect(res.body.order_id).toMatch(/^order_/);
      expect(res.body.amount).toBe(50000);
      expect(res.body.currency).toBe('INR');
      expect(res.body.key_id).toBe(TEST_KEY_ID);
    });

    it('also responds identically on /api/v1/create-order', async () => {
      const res = await request(app)
        .post('/api/v1/create-order')
        .send({
          amount: 10000, // ₹100 in paise
          currency: 'INR',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.order_id).toBeDefined();
      expect(res.body.amount).toBe(10000);
    });
  });

  describe('STEP 3: Payment Signature Verification (POST /api/verify-payment)', () => {
    it('rejects verification if any required fields are missing with HTTP 400', async () => {
      const res = await request(app)
        .post('/api/verify-payment')
        .send({
          razorpay_order_id: 'order_test_123',
          // missing razorpay_payment_id and signature
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.isPaid).toBe(false);
      expect(res.body.error).toContain('Missing required fields');
    });

    it('rejects tampered or mismatched signature with HTTP 400 and isPaid: false', async () => {
      const orderId = 'order_test_123456';
      const paymentId = 'pay_test_987654';
      const fakeSignature = 'tampered_signature_invalid_hex_string_1234567890';

      const res = await request(app)
        .post('/api/verify-payment')
        .send({
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          razorpay_signature: fakeSignature,
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.isPaid).toBe(false);
      expect(res.body.error).toContain('signature mismatch');
    });

    it('verifies legitimate HMAC-SHA256 signature with HTTP 200 and isPaid: true', async () => {
      const orderId = 'order_valid_778899';
      const paymentId = 'pay_valid_112233';

      // Generate valid HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
      const payload = `${orderId}|${paymentId}`;
      const validSignature = crypto
        .createHmac('sha256', TEST_KEY_SECRET)
        .update(payload)
        .digest('hex');

      const res = await request(app)
        .post('/api/verify-payment')
        .send({
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          razorpay_signature: validSignature,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.isPaid).toBe(true);
      expect(res.body.order_id).toBe(orderId);
      expect(res.body.payment_id).toBe(paymentId);
      expect(res.body.message).toContain('Payment verified successfully');
    });

    it('also verifies identically on /api/v1/verify-payment', async () => {
      const orderId = 'order_v1_test_99';
      const paymentId = 'pay_v1_test_99';
      const payload = `${orderId}|${paymentId}`;
      const validSignature = crypto
        .createHmac('sha256', TEST_KEY_SECRET)
        .update(payload)
        .digest('hex');

      const res = await request(app)
        .post('/api/v1/verify-payment')
        .send({
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          razorpay_signature: validSignature,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.isPaid).toBe(true);
    });
  });

  describe('Config Endpoint (GET /api/config)', () => {
    it('returns the public Razorpay Key ID without exposing secret', async () => {
      const res = await request(app).get('/api/config');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.key_id).toBe(TEST_KEY_ID);
      expect(res.body.key_secret).toBeUndefined();
    });
  });
});
