import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Check,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Building2,
  User as UserIcon,
  Crown,
  CheckCircle2,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { Footer } from '../components/layout/Footer';
import { PLANS, PRICING_PLANS } from '../config/plans';
import { useAuthStore } from '../store/useAuthStore';
import { api } from '../lib/api';
import { RazorpayCheckoutButton } from '../components/common/RazorpayCheckoutButton';

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [notice, setNotice] = useState(null);
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const userPlan = (user?.plan || 'starter').toLowerCase();

  const handleSelectPlan = async (planKey) => {
    if (!isAuthenticated) {
      navigate(planKey === 'free' ? '/signup' : `/signup?plan=${planKey}`);
      return;
    }

    if (userPlan === planKey) {
      setNotice({
        type: 'info',
        message: `You are currently on the ${PLANS[planKey]?.name || planKey} plan.`,
      });
      return;
    }

    setLoadingPlan(planKey);
    setNotice(null);

    try {
      // Attempt checkout session creation via backend adapter
      const res = await api.createCheckoutSession({
        plan: planKey,
        interval: isAnnual ? 'year' : 'month',
        returnUrl: `${window.location.origin}/settings/billing?status=success`,
        cancelUrl: `${window.location.origin}/pricing`,
      });

      if (res.provider === 'razorpay' || res.mode === 'razorpay') {
        if (!window.Razorpay) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load Razorpay SDK'));
            document.body.appendChild(script);
          });
        }

        const options = {
          key: res.keyId,
          amount: res.amount,
          currency: res.currency || 'INR',
          name: `Floorly ${res.planName || ''}`,
          description: `Floorly ${res.planName || ''} Subscription (${isAnnual ? 'Annual' : 'Monthly'})`,
          order_id: res.orderId,
          prefill: {
            name: user?.name || user?.businessName || '',
            email: user?.email || '',
          },
          theme: {
            color: '#0047AB',
          },
          handler: async function (response) {
            setLoadingPlan(planKey);
            try {
              const verifyRes = await api.verifyRazorpaySubscription({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                plan: planKey,
                interval: isAnnual ? 'year' : 'month',
              });

              if (verifyRes.success) {
                await useAuthStore.getState().fetchUser();
                setNotice({
                  type: 'success',
                  message: `Payment successful! Your account is now upgraded to the ${PLANS[planKey]?.name} plan.`,
                });
                setTimeout(() => {
                  navigate('/dashboard');
                }, 1500);
              } else {
                setNotice({
                  type: 'error',
                  message: verifyRes.error || 'Payment verification failed.',
                });
              }
            } catch (vErr) {
              setNotice({
                type: 'error',
                message: vErr.message || 'Error verifying Razorpay payment.',
              });
            } finally {
              setLoadingPlan(null);
            }
          },
          modal: {
            ondismiss: function () {
              setLoadingPlan(null);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        return;
      }

      if (res.url) {
        window.location.href = res.url;
      } else if (res.checkoutUrl) {
        window.location.href = res.checkoutUrl;
      } else {
        setNotice({
          type: 'info',
          message:
            res.message ||
            'Subscription billing checkout could not be prepared.',
        });
      }
    } catch (err) {
      if (err.data?.code === 'BILLING_DISABLED' || err.message?.includes('closed') || err.message?.includes('BILLING_DISABLED')) {
        setNotice({
          type: 'notice',
          message:
            'Platform subscription billing is in launch preparation mode. All core features including proposal generation, AI requirement analysis, and invoice tracking remain fully accessible on your account.',
        });
      } else {
        setNotice({
          type: 'error',
          message: err.message || 'Unable to initiate plan change. Please contact support.',
        });
      }
    } finally {
      setLoadingPlan(null);
    }
  };

  const planIcons = {
    free: UserIcon,
    solo: Zap,
    pro: Sparkles,
    agency: Crown,
  };

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
            to={isAuthenticated ? '/dashboard' : '/'}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isAuthenticated ? 'Back to Dashboard' : 'Back to Home'}</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Link
              to="/settings/billing"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E8E0CF] hover:bg-[#FAF5EA] text-[#0E1A2B] transition-colors"
            >
              Billing Settings
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#0047AB] hover:bg-[#003A8C] text-white shadow-xs transition-colors"
              >
                Start free
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FB] text-[#0047AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest, Transparent Pricing</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#0E1A2B] tracking-tight leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Manage your freelance career with complete clarity
          </h1>
          <p className="text-sm sm:text-base text-[#5B6676] leading-relaxed">
            From your very first client brief to multi-milestone agency contracts. Every plan includes the strict mathematical price floor guard.
          </p>

          {/* Billing Toggle */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-bold cursor-pointer ${
                !isAnnual ? 'text-[#0E1A2B]' : 'text-[#5B6676]'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#0047AB] ${
                isAnnual ? 'bg-[#0047AB]' : 'bg-[#D2C8B8]'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-xs font-bold cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'text-[#0E1A2B]' : 'text-[#5B6676]'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual billing</span>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-[#ECFDF3] text-[#067647] border border-[#A6F4C5]">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Notice alert */}
        {notice && (
          <div
            className={`max-w-3xl mx-auto p-4 rounded-xl text-xs flex items-start gap-3 animate-in fade-in ${
              notice.type === 'error'
                ? 'bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318]'
                : notice.type === 'success'
                ? 'bg-[#ECFDF3] border border-[#A6F4C5] text-[#067647]'
                : notice.type === 'notice'
                ? 'bg-[#FFF4CC] border border-[#FFC72C] text-[#B54708]'
                : 'bg-[#E8F0FB] border border-[#B2CCF2] text-[#0047AB]'
            }`}
          >
            <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{notice.message}</p>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const planKey = plan.id;
            const priceVal = isAnnual ? plan.annual : plan.monthly;
            const formattedPrice = priceVal % 1 ? priceVal.toFixed(2) : priceVal;
            const isCurrent = isAuthenticated && (userPlan === planKey || (userPlan === 'starter' && planKey === 'free'));
            const Icon = planIcons[planKey] || Zap;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'border-2 border-[#0047AB] shadow-lg shadow-[#0047AB]/5 ring-4 ring-[#0047AB]/10'
                    : 'border border-[#E8E0CF] shadow-xs hover:border-[#D2C8B8]'
                }`}
              >
                {/* Popular or Current Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#FFC72C] text-[#0E1A2B] text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] flex items-center justify-center text-[#0047AB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {isCurrent && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ECFDF3] text-[#067647] border border-[#A6F4C5]">
                        Your current plan
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-xl font-black text-[#0E1A2B]"
                    style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#5B6676] mt-1 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-4 mb-6 pb-6 border-b border-[#E8E0CF]">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl font-black text-[#0E1A2B] tracking-tight"
                        style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
                      >
                        ${formattedPrice}
                      </span>
                      <span className="text-xs font-semibold text-[#5B6676]">
                        {plan.monthly === 0 ? 'forever' : isAnnual ? '/mo billed yearly' : '/month'}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5B6676] block mt-1">
                      {plan.maxClients === Infinity
                        ? 'Unlimited active clients'
                        : `Up to ${plan.maxClients} active clients`}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 text-xs text-[#0E1A2B]">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">
                      What's included
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#067647] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled={isCurrent || loadingPlan === planKey}
                    onClick={() => handleSelectPlan(planKey)}
                    className={`w-full h-11 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                      isCurrent
                        ? 'bg-[#FAF5EA] text-[#5B6676] border border-[#E8E0CF] cursor-default'
                        : plan.popular
                        ? 'bg-[#0047AB] hover:bg-[#003A8C] text-white'
                        : 'bg-white hover:bg-[#FAF5EA] text-[#0E1A2B] border border-[#E8E0CF]'
                    }`}
                  >
                    {loadingPlan === planKey ? (
                      <span>Processing...</span>
                    ) : isCurrent ? (
                      <span>Current Plan</span>
                    ) : (
                      <>
                        <span>{isAuthenticated ? `Switch to ${plan.name}` : plan.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Currency & Tax Notice for Indian and Global Customers */}
        <div className="bg-[#FAF5EA] rounded-2xl border border-[#E8E0CF] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E0CF] flex items-center justify-center text-[#0047AB] shrink-0 mt-0.5">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0E1A2B]">Global USD &amp; Indian Domestic INR Billing</div>
              <p className="text-xs text-[#5B6676] mt-0.5 leading-relaxed">
                Prices shown in USD. Indian customers paying via Razorpay are billed in Indian Rupees (INR) at standard bank conversion rates (approx. ₹749/mo for Solo, ₹1,577/mo for Pro, ₹4,067/mo for Agency) with digital tax invoices provided immediately upon settlement.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <RazorpayCheckoutButton
              amount={100}
              currency="INR"
              name="Floorly SaaS"
              description="Test Razorpay Standard Checkout (₹1.00)"
              buttonText="Pay ₹1 with Razorpay"
              className="bg-[#0047AB] hover:bg-[#003A8C] text-xs px-4 py-2"
              onSuccess={(res, data) => {
                setNotice({
                  type: 'success',
                  message: `Razorpay payment verified successfully! ID: ${data.razorpay_payment_id}`,
                });
              }}
            />
            <Link
              to="/checkout-test"
              className="text-xs font-bold text-[#0047AB] hover:underline whitespace-nowrap"
            >
              Full Checkout Test →
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-6 sm:p-8 space-y-6">
          <div>
            <h2
              className="text-xl sm:text-2xl font-black text-[#0E1A2B]"
              style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
            >
              Compare features across tiers
            </h2>
            <p className="text-xs text-[#5B6676] mt-1">
              Detailed capabilities designed around independent engineering and studio operations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E8E0CF] text-[#5B6676]">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Capability</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-center">Starter</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-center">Solo ($9)</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-center text-[#0047AB]">Pro ($19)</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-center">Agency ($49)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0CF]/60 text-[#0E1A2B]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Active Clients Capacity</td>
                  <td className="py-3.5 px-4 text-center">2 Clients</td>
                  <td className="py-3.5 px-4 text-center">10 Clients</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0047AB]">Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Deterministic Price Floor Guard</td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">AI Requirement Analyzer</td>
                  <td className="py-3.5 px-4 text-center">Standard</td>
                  <td className="py-3.5 px-4 text-center">Standard</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0047AB]">Advanced Multi-phase</td>
                  <td className="py-3.5 px-4 text-center font-bold">Priority Processing</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Client-Specific AGENTS.md Generator</td>
                  <td className="py-3.5 px-4 text-center text-[#5B6676]">—</td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">PDF Document Exports & Sharing</td>
                  <td className="py-3.5 px-4 text-center">Basic</td>
                  <td className="py-3.5 px-4 text-center">Print A4</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0047AB]">Custom Branding</td>
                  <td className="py-3.5 px-4 text-center font-bold">100% White-label</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Online Gateway Integration</td>
                  <td className="py-3.5 px-4 text-center">Manual wire</td>
                  <td className="py-3.5 px-4 text-center">Manual + UPI/PayPal</td>
                  <td className="py-3.5 px-4 text-center font-bold text-[#0047AB]">Stripe / Razorpay</td>
                  <td className="py-3.5 px-4 text-center font-bold">Multi-gateway Global</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold">Profitability & Expense Ledger</td>
                  <td className="py-3.5 px-4 text-center text-[#5B6676]">—</td>
                  <td className="py-3.5 px-4 text-center text-[#5B6676]">—</td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><CheckCircle2 className="w-4 h-4 text-[#067647] mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-[#FAF5EA]/60 rounded-2xl border border-[#E8E0CF] p-6 sm:p-8 space-y-6">
          <h2
            className="text-xl sm:text-2xl font-black text-[#0E1A2B]"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#0E1A2B]">
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm">Can I change or cancel my plan at any time?</h3>
              <p className="text-[#5B6676] leading-relaxed">
                Yes. If you cancel or change tiers, your features remain active through the end of your prepaid billing period. We never lock you into long contracts.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm">What happens to my data if I downgrade?</h3>
              <p className="text-[#5B6676] leading-relaxed">
                No proposals, invoices, or client records are ever deleted. Existing client records remain intact and readable even if you exceed the Starter limit.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm">What is the "Pricing Floor Guard"?</h3>
              <p className="text-[#5B6676] leading-relaxed">
                Floorly mathematically prohibits AI recommendations from dropping below your minimum hourly rate or minimum project floor, ensuring you never work at a loss.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm">Do clients need a Floorly account to view proposals?</h3>
              <p className="text-[#5B6676] leading-relaxed">
                No. Shareable client document links allow clients to securely view, approve, and print proposals and invoices without creating an account.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
