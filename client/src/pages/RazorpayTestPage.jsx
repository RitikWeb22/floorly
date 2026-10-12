import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { RazorpayCheckoutButton } from '../components/common/RazorpayCheckoutButton';
import { launchRazorpayCheckout } from '../lib/razorpayCheckout';
import { api } from '../lib/api';

export function RazorpayTestPage() {
  const [amountRupees, setAmountRupees] = useState(500);
  const [customerName, setCustomerName] = useState('John Doe');
  const [customerEmail, setCustomerEmail] = useState('john@example.com');
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [paymentLog, setPaymentLog] = useState(null);
  const [serverConfig, setServerConfig] = useState(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await api.getRazorpayConfig();
        setServerConfig(res);
      } catch (err) {
        console.warn('Could not load Razorpay config:', err);
      }
    }
    loadConfig();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0E1A2B] flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#E8E0CF] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Logo size="sm" />
          </Link>
          <div className="h-4 w-px bg-[#E8E0CF]" />
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Pricing</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            Standard Web Checkout (Test Mode)
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Razorpay Standard Web Checkout</span>
          </div>
          <h1 className="font-display font-semibold text-[30px] text-[#0E1A2B] tracking-[-0.02em] leading-[1.15]">
            Razorpay Payment Gateway Integration
          </h1>
          <p className="text-sm text-[#5B6676] mt-1">
            Complete 3-step Standard Checkout implementation: Order creation on backend, Razorpay checkout modal, and HMAC-SHA256 signature verification.
          </p>
        </div>

        {/* Credentials & System Status */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-5 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#5B6676] uppercase tracking-wider block">
              Key ID (Public)
            </span>
            <code className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded mt-1 inline-block">
              {serverConfig?.key_id || import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_TmqM7yD9Sgy60G'}
            </code>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#5B6676] uppercase tracking-wider block">
              Backend Endpoints
            </span>
            <div className="text-xs font-mono text-[#0E1A2B] mt-1 space-y-0.5">
              <div>POST /api/create-order</div>
              <div>POST /api/verify-payment</div>
            </div>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#5B6676] uppercase tracking-wider block">
              Verification Algorithm
            </span>
            <div className="text-xs font-mono text-emerald-700 font-semibold mt-1">
              HMAC-SHA256(order_id|payment_id)
            </div>
          </div>
        </div>

        {/* Interactive Payment Simulator Form */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="font-display font-medium text-lg text-[#0E1A2B] tracking-[-0.01em]">
            Test Payment Parameters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-1">
                Amount (INR ₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-sm font-bold text-[#5B6676]">₹</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={amountRupees}
                  onChange={(e) => setAmountRupees(Math.max(1, Number(e.target.value)))}
                  className="w-full pl-8 pr-3 py-2 border border-[#E8E0CF] rounded-xl text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <span className="text-[11px] text-[#5B6676] mt-1 block">
                Calculates to {Math.round(amountRupees * 100)} paise (minimum 100 paise)
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-1">
                Quick Preset Amounts
              </label>
              <div className="flex items-center gap-2 pt-0.5">
                {[1, 100, 499, 749, 1500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmountRupees(preset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      amountRupees === preset
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-[#FAF5EA] text-[#5B6676] border-[#E8E0CF] hover:bg-[#F2ECE0]'
                    }`}
                  >
                    ₹{preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-1">
                Customer Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 border border-[#E8E0CF] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-1">
                Customer Email
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full px-3 py-2 border border-[#E8E0CF] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Trigger Button */}
          <div className="pt-4 border-t border-[#E8E0CF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <RazorpayCheckoutButton
              amount={amountRupees}
              currency="INR"
              name="Floorly Platform"
              description={`Test Checkout for ₹${amountRupees.toLocaleString('en-IN')}`}
              prefill={{
                name: customerName,
                email: customerEmail,
                contact: customerPhone,
              }}
              buttonText={`Pay ₹${amountRupees.toLocaleString('en-IN')} with Razorpay`}
              className="bg-[#0047AB] hover:bg-[#003A8C] text-sm px-6 py-3"
              onSuccess={(verifyResult, paymentData) => {
                setPaymentLog({
                  status: 'SUCCESS',
                  timestamp: new Date().toISOString(),
                  order_id: paymentData.razorpay_order_id,
                  payment_id: paymentData.razorpay_payment_id,
                  signature: paymentData.razorpay_signature,
                  verifyResult,
                });
              }}
              onFailure={(error) => {
                setPaymentLog({
                  status: 'FAILED',
                  timestamp: new Date().toISOString(),
                  error: error.message || 'Payment failed',
                });
              }}
            />

            <span className="text-xs text-[#5B6676]">
              Test card numbers available in Razorpay Test Mode.
            </span>
          </div>
        </div>

        {/* Live Payment Verification Log Output */}
        {paymentLog && (
          <div
            className={`rounded-2xl border p-6 shadow-xs ${
              paymentLog.status === 'SUCCESS'
                ? 'bg-emerald-50/70 border-emerald-200'
                : 'bg-red-50/70 border-red-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              {paymentLog.status === 'SUCCESS' ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-emerald-900">
                    Payment Verified Successfully by Backend!
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="font-bold text-sm text-red-900">
                    Payment / Verification Error
                  </span>
                </>
              )}
            </div>

            <pre className="text-xs font-mono bg-white p-4 rounded-xl border border-black/5 overflow-x-auto text-[#0E1A2B]">
              {JSON.stringify(paymentLog, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
