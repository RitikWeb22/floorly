/**
 * Razorpay Standard Web Checkout Client Helper
 * Handles SDK loading, order initialization, modal opening, and signature verification.
 */
import { api } from './api';

const SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

/**
 * Loads the Razorpay checkout.js script asynchronously if not already present
 */
export function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      return resolve(true);
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Razorpay SDK')));
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Failed to load Razorpay Checkout script from ' + SCRIPT_URL));
    document.body.appendChild(script);
  });
}

/**
 * Initiates Razorpay Standard Web Checkout
 *
 * @param {Object} options
 * @param {number} options.amountInPaise - Amount in smallest currency unit (paise for INR, min 100)
 * @param {string} [options.currency='INR'] - Currency code
 * @param {string} [options.name='Floorly'] - Business name shown in modal
 * @param {string} [options.description='Payment'] - Description shown in modal
 * @param {Object} [options.prefill] - { name, email, contact }
 * @param {Object} [options.notes] - Custom metadata
 * @param {Function} [options.onSuccess] - Callback when payment is verified: (verifyResult, paymentData)
 * @param {Function} [options.onFailure] - Callback on payment failure or verification error: (error)
 * @param {Function} [options.onDismiss] - Callback when modal is dismissed by user
 */
export async function launchRazorpayCheckout({
  amountInPaise,
  currency = 'INR',
  name = 'Floorly',
  description = 'Payment via Razorpay Standard Checkout',
  prefill = {},
  notes = {},
  theme = { color: '#2563EB' },
  onSuccess = () => {},
  onFailure = () => {},
  onDismiss = () => {},
}) {
  try {
    // 1. Ensure Razorpay checkout.js SDK is loaded
    await loadRazorpayScript();

    if (!window.Razorpay) {
      throw new Error('Razorpay SDK is unavailable on window object');
    }

    // Validate minimum amount (100 paise)
    if (!amountInPaise || Number(amountInPaise) < 100) {
      throw new Error('Minimum payment amount is 100 paise (₹1.00)');
    }

    // 2. Call backend endpoint to create order: POST /api/create-order
    const orderRes = await api.createRazorpayOrder({
      amount: amountInPaise,
      currency,
      notes,
    });

    if (!orderRes.success || !orderRes.order_id) {
      throw new Error(orderRes.error || 'Failed to create Razorpay order on server');
    }

    // Determine public key: use key_id returned from server or Vite env var
    const razorpayKey =
      orderRes.key_id ||
      import.meta.env.VITE_RAZORPAY_KEY_ID ||
      'rzp_test_TmqM7yD9Sgy60G';

    // 3. Configure Razorpay modal options
    const razorpayOptions = {
      key: razorpayKey,
      amount: orderRes.amount,
      currency: orderRes.currency,
      name,
      description,
      order_id: orderRes.order_id,
      prefill: {
        name: prefill.name || '',
        email: prefill.email || '',
        contact: prefill.contact || '',
      },
      notes: {
        order_receipt: orderRes.receipt,
        ...notes,
      },
      theme: {
        color: theme.color || '#2563EB',
      },
      // Payment success handler from Razorpay modal
      handler: async function (response) {
        try {
          // STEP 3: Verify signature on backend
          // Sends { razorpay_order_id, razorpay_payment_id, razorpay_signature }
          const verifyRes = await api.verifyRazorpayPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.success && verifyRes.isPaid) {
            onSuccess(verifyRes, response);
          } else {
            const err = new Error(verifyRes.error || 'Payment signature verification failed on server');
            onFailure(err);
          }
        } catch (verifyErr) {
          onFailure(verifyErr);
        }
      },
      // Modal dismissed by user (cancel)
      modal: {
        ondismiss: function () {
          if (typeof onDismiss === 'function') {
            onDismiss();
          }
        },
      },
    };

    const rzp = new window.Razorpay(razorpayOptions);

    // Handle payment.failed event
    rzp.on('payment.failed', function (response) {
      const errorMsg =
        response.error?.description ||
        response.error?.reason ||
        'Payment failed on Razorpay checkout gateway';
      onFailure(new Error(errorMsg), response.error);
    });

    // Open Razorpay Standard Checkout modal
    rzp.open();
  } catch (err) {
    onFailure(err);
  }
}
