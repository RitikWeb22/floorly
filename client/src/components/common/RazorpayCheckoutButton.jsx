import React, { useState } from 'react';
import { Loader2, ShieldCheck, CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';
import { launchRazorpayCheckout } from '../../lib/razorpayCheckout';

/**
 * Reusable Razorpay Standard Checkout Button Component
 *
 * Props:
 * - amount: number (in rupees, e.g. 500 for ₹500, or in paise if isAmountInPaise is true)
 * - isAmountInPaise: boolean (default false, if true amount is already in paise)
 * - currency: string (default 'INR')
 * - name: string (business / product name)
 * - description: string (order description)
 * - prefill: { name, email, contact }
 * - notes: object
 * - buttonText: string
 * - className: string
 * - onSuccess: (verifyResult, paymentData) => void
 * - onFailure: (error) => void
 */
export function RazorpayCheckoutButton({
  amount = 500,
  isAmountInPaise = false,
  currency = 'INR',
  name = 'Floorly Platform',
  description = 'Service Payment via Razorpay',
  prefill = {},
  notes = {},
  buttonText,
  className = '',
  onSuccess,
  onFailure,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error' | 'info', text }

  const amountInPaise = isAmountInPaise ? Math.round(amount) : Math.round(amount * 100);
  const displayAmount = isAmountInPaise ? (amount / 100).toFixed(2) : amount.toLocaleString('en-IN');

  const defaultButtonLabel = buttonText || `Pay ₹${displayAmount} with Razorpay`;

  const handleCheckoutClick = async () => {
    setIsLoading(true);
    setStatusMessage(null);

    await launchRazorpayCheckout({
      amountInPaise,
      currency,
      name,
      description,
      prefill,
      notes,
      theme: { color: '#0047AB' },
      onSuccess: (verifyResult, paymentData) => {
        setIsLoading(false);
        setStatusMessage({
          type: 'success',
          text: `Payment of ₹${displayAmount} verified! Payment ID: ${paymentData.razorpay_payment_id}`,
        });
        if (typeof onSuccess === 'function') {
          onSuccess(verifyResult, paymentData);
        }
      },
      onFailure: (error) => {
        setIsLoading(false);
        setStatusMessage({
          type: 'error',
          text: error.message || 'Payment failed or was cancelled.',
        });
        if (typeof onFailure === 'function') {
          onFailure(error);
        }
      },
      onDismiss: () => {
        setIsLoading(false);
        setStatusMessage({
          type: 'info',
          text: 'Payment modal closed by user.',
        });
      },
    });
  };

  return (
    <div className="inline-flex flex-col gap-2">
      <button
        type="button"
        id="razorpay-checkout-btn"
        onClick={handleCheckoutClick}
        disabled={isLoading}
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-all shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${
          className ||
          'bg-brand-600 hover:bg-brand-700 shadow-brand-500/20 hover:shadow-brand-500/30'
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            <span>Processing Order...</span>
          </>
        ) : (
          <>
            <CreditCard className="w-4 h-4" />
            <span>{defaultButtonLabel}</span>
            <ShieldCheck className="w-3.5 h-3.5 opacity-80" />
          </>
        )}
      </button>

      {/* Inline Feedback Alerts */}
      {statusMessage && (
        <div
          className={`flex items-start gap-2 p-2.5 rounded-md text-xs font-medium max-w-sm ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : statusMessage.type === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-charcoal-50 text-charcoal-700 border border-charcoal-200'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}
    </div>
  );
}
