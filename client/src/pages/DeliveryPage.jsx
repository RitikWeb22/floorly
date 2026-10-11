import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe,
  Mail,
  Zap,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';
import { siteConfig } from '../config/site';

export function DeliveryPage() {
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
              <Zap className="w-5 h-5" />
            </div>
            <h1
              className="text-2xl sm:text-3xl font-black text-[#0E1A2B] tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
            >
              Digital Service Delivery Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#5B6676] mt-2">
              Comprehensive information regarding electronic fulfillment, access timelines, and our 100% digital SaaS model.
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-[#0E1A2B] leading-relaxed">
            {/* 1. 100% Digital SaaS Service */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">1. 100% Digital SaaS Service (No Physical Shipping)</h2>
              <p className="text-[#5B6676]">
                Floorly is a cloud-hosted Software-as-a-Service (SaaS) platform providing AI requirement analysis, proposal creation, and freelance business workflows.
              </p>
              <div className="p-4 rounded-xl bg-[#ECFDF3] border border-[#A6F4C5] text-[#067647] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Zero Physical Shipping Required: </span>
                  Floorly does not sell, manufacture, warehouse, package, or ship any physical goods or tangible postal merchandise. No couriers or physical parcel shipments are involved.
                </div>
              </div>
            </section>

            {/* 2. Instant Delivery Timeline */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">2. Delivery Timelines & Instant Provisioning</h2>
              <p className="text-[#5B6676]">
                All services are delivered electronically and instantaneously over the Internet:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#5B6676]">
                <li>
                  <strong>Free Accounts:</strong> Instant activation upon successful registration. Workspace access is available immediately without delay.
                </li>
                <li>
                  <strong>Paid Subscriptions (Solo, Pro, Agency):</strong> Account tier upgrades and feature entitlements are provisioned instantaneously upon payment confirmation via our payment gateway (Razorpay). There is zero waiting time.
                </li>
                <li>
                  <strong>Document Exports (PDF, AGENTS.md):</strong> Generated dynamically on demand and delivered directly to your browser for immediate download.
                </li>
              </ul>
            </section>

            {/* 3. Access Method & Confirmation */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">3. Access Method & Electronic Confirmation</h2>
              <p className="text-[#5B6676]">
                Upon successful signup or subscription upgrade:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#5B6676]">
                <li>You receive immediate authenticated access to your cloud workspace dashboard.</li>
                <li>An electronic receipt and confirmation containing transaction identifiers are generated in your Billing Settings.</li>
                <li>You can access the platform from any modern web browser across desktop, laptop, tablet, or smartphone devices.</li>
              </ul>
            </section>

            {/* 4. Support for Fulfillment or Access Inquiries */}
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0E1A2B]">4. Troubleshooting & Delivery Support</h2>
              <p className="text-[#5B6676]">
                In the rare event that a bank network interruption or payment gateway webhook delay prevents your plan features from appearing immediately:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#5B6676]">
                <li>Log out and log back in to refresh your active session token.</li>
                <li>
                  Contact our support team at{' '}
                  <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#0047AB] underline font-semibold">
                    {siteConfig.supportEmail}
                  </a>{' '}
                  with your payment transaction reference or registered email address.
                </li>
                <li>Our technical support desk investigates and resolves digital fulfillment inquiries within 24 business hours.</li>
              </ul>
            </section>

            {/* 5. Contact Information */}
            <section className="space-y-2 pt-4 border-t border-[#E8E0CF]">
              <h2 className="text-base font-bold text-[#0E1A2B]">5. Questions Regarding Digital Delivery</h2>
              <p className="text-[#5B6676]">
                If you have questions regarding electronic delivery or digital service access, please visit our{' '}
                <Link to="/contact" className="text-[#0047AB] underline font-semibold">
                  Contact Page
                </Link>{' '}
                or reach out directly to{' '}
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
