import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, ArrowLeft, CheckCircle2, AlertCircle, HelpCircle, Clock } from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';
import { siteConfig } from '../config/site';

export function RefundPage() {
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
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8F0FB] text-[#0047AB]">
            Official Policy
          </span>
          <span className="text-xs text-[#5B6676]">Last Updated: October 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-8">
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="border-b border-[#E8E0CF] pb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] text-[#0047AB] border border-[#E8E0CF] flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h1
              className="text-2xl sm:text-3xl font-semibold text-[#0E1A2B] tracking-[-0.03em] font-display"
            >
              Subscription Cancellation & Refund Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#5B6676] mt-2">
              Clear and transparent guidelines regarding Floorly SaaS subscription cancellations, refund eligibility, and settlement timelines.
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#0E1A2B] leading-relaxed">
            {/* 1. Subscription Scope */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">1. Overview & Policy Scope</h2>
              <p className="text-[#5B6676]">
                This Cancellation and Refund Policy applies exclusively to subscription plans and software licenses purchased directly on the Floorly software platform (including Starter, Solo, Pro, and Agency tiers).
              </p>
            </section>

            {/* 2. Cancellation Terms */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">2. Subscription Cancellation</h2>
              <p className="text-[#5B6676]">
                You have full control over your billing arrangement and may cancel your active subscription at any time:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#5B6676]">
                <li>
                  <strong>Self-Serve Cancellation:</strong> You can cancel directly from your workspace dashboard under <em>Settings &rarr; Billing & Subscription &rarr; Cancel subscription</em>.
                </li>
                <li>
                  <strong>Continued Access:</strong> When you cancel, your paid subscription features remain fully accessible until the conclusion of your current prepaid billing cycle (monthly or annual).
                </li>
                <li>
                  <strong>No Hidden Penalties:</strong> There are zero cancellation penalties, lock-in fees, or termination charges.
                </li>
                <li>
                  <strong>Post-Expiry Data Preservation:</strong> After plan expiration, your workspace reverts to the Starter tier. Your historical proposals, invoice ledgers, and client records remain completely safe and accessible in read-only mode.
                </li>
              </ul>
            </section>

            {/* 3. Refund Conditions */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-[#0E1A2B]">3. Refund Eligibility Criteria</h2>
              <p className="text-[#5B6676]">
                We want you to be completely confident in using Floorly. We offer refunds under the following documented circumstances:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] space-y-1.5">
                  <div className="font-bold text-[#0E1A2B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#067647]" />
                    <span>7-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-xs text-[#5B6676]">
                    If you are a first-time subscriber and request a refund within 7 calendar days of your initial payment, we will issue a full 100% refund without hassle.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] space-y-1.5">
                  <div className="font-bold text-[#0E1A2B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#067647]" />
                    <span>Billing Errors & Technical Failures</span>
                  </div>
                  <p className="text-xs text-[#5B6676]">
                    If you experience duplicate charges, technical inability to access paid features, or verified service outages, you are entitled to a full refund of that billing cycle.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Refund Processing Timeline */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">4. Refund Processing Timeline (5–7 Business Days)</h2>
              <p className="text-[#5B6676]">
                Once a refund request is approved by our billing team:
              </p>
              <div className="p-4 rounded-xl bg-[#ECFDF3] border border-[#A6F4C5] text-[#067647] flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Timeline: </span>
                  Approved refunds are processed immediately through our payment gateway (Razorpay) and are credited back to your original source payment method (credit card, debit card, UPI account, or net banking) within <strong>5 to 7 business days</strong>, subject to your issuing bank's clearing schedule.
                </div>
              </div>
            </section>

            {/* 5. How to Request a Refund */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">5. How to Submit a Refund Request</h2>
              <p className="text-[#5B6676]">
                To request a refund, simply send an email to our support team with the following details:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#5B6676]">
                <li>Registered Floorly account email address</li>
                <li>Payment transaction ID or invoice reference (e.g., Razorpay payment ID)</li>
                <li>Date of transaction and plan tier (Solo, Pro, Agency)</li>
                <li>Brief explanation of the reason for your refund request</li>
              </ul>
              <p className="text-[#5B6676] pt-1">
                Send your request to:{' '}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#0047AB] underline font-semibold">
                  {siteConfig.supportEmail}
                </a>. Our billing team will acknowledge your request within 24 business hours.
              </p>
            </section>

            {/* 6. Contact & Support */}
            <section className="space-y-2 pt-4 border-t border-[#E8E0CF]">
              <h2 className="text-base font-bold text-[#0E1A2B]">6. Questions or Inquiries</h2>
              <p className="text-[#5B6676]">
                For any questions or clarification regarding subscription refunds, visit our{' '}
                <Link to="/contact" className="text-[#0047AB] underline font-semibold">
                  Contact Page
                </Link>{' '}
                or reach out directly at{' '}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#0047AB] underline font-semibold">
                  {siteConfig.supportEmail}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
