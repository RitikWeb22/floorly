import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Code2,
  FileCode2,
  Lock,
  Mail,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';
import { siteConfig } from '../config/site';

export function AboutPage() {
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
            About Floorly
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 space-y-10">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-8 sm:p-12 space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FB] text-[#0047AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Mission & Story</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-[#0E1A2B] tracking-tight leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Built for independent builders who refuse to undercharge.
          </h1>

          <p className="text-sm sm:text-base text-[#5B6676] leading-relaxed">
            Floorly is an AI-powered freelance management workstation designed specifically for independent software developers, UI/UX designers, and technical agencies. We help professionals transform unstructured client conversations into transparent quotations, ironclad proposals, client-specific <code className="bg-[#FAF5EA] px-1.5 py-0.5 rounded text-xs font-mono text-[#0E1A2B] border border-[#E8E0CF]">AGENTS.md</code> instruction files, and trackable financial records.
          </p>
        </div>

        {/* Why Floorly Exists */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-8 sm:p-12 space-y-8 shadow-xs">
          <div>
            <h2
              className="text-2xl font-black text-[#0E1A2B]"
              style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
            >
              Why We Built Floorly
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6676] mt-2 leading-relaxed">
              Every freelancer knows the painful cycle: a prospective client sends a messy WhatsApp thread, vague email, or sprawling brief. Freelancers spend hours guessing requirements, struggle to calculate a fair quote, and often end up severely undercharging because they fear losing the deal or fail to account for hidden complexities.
            </p>
            <p className="text-xs sm:text-sm text-[#5B6676] mt-3 leading-relaxed">
              Floorly fixes this with an opinionated, intelligent system. We believe independent professionals deserve enterprise-grade scoping tools and deterministic price protections so they run sustainable, profitable creative practices.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E8E0CF]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] flex items-center justify-center text-[#0047AB]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0E1A2B]">Deterministic Price Floor</h3>
              <p className="text-xs text-[#5B6676] leading-relaxed">
                Our pricing engine prevents AI recommendations from dropping below your configured minimum hourly floor or category minimum fee, protecting your baseline earnings.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] flex items-center justify-center text-[#0047AB]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0E1A2B]">AI Scoping Without Guesswork</h3>
              <p className="text-xs text-[#5B6676] leading-relaxed">
                Raw client messages are structured into confirmed requirements, explicit exclusions, and targeted clarification questions before you ever commit to a timeline.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] flex items-center justify-center text-[#0047AB]">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0E1A2B]">Code Agent Handoff</h3>
              <p className="text-xs text-[#5B6676] leading-relaxed">
                Once a proposal is approved, Floorly generates a tailored <code className="bg-[#FAF5EA] px-1 py-0.5 rounded font-mono text-[11px]">AGENTS.md</code> file optimized for Cursor, Claude Code, and Copilot to build the project accurately.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Philosophy & Data Privacy */}
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-8 sm:p-12 space-y-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] flex items-center justify-center text-[#067647]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-black text-[#0E1A2B]"
                style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
              >
                Our Commitment to Data Privacy
              </h2>
              <p className="text-xs text-[#5B6676]">Zero model training on your private client materials</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
            Freelance client relationships depend entirely on trust and confidentiality. Floorly processes inputs strictly in real-time to generate your deliverables. We never sell your data, never display third-party advertisements, and never use your proprietary client project briefs to train public generative foundation models.
          </p>

          <div className="pt-4 border-t border-[#E8E0CF] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#5B6676]">
              Have questions or want to partner with us?
            </span>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-xl bg-[#0047AB] text-white text-xs font-bold hover:bg-[#003A8C] transition-colors shadow-xs"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Machine-Readable Facts & Entity Specification (GEO / Knowledge Graph Ground Truth) */}
        <section className="bg-white rounded-2xl border border-[#E8E0CF] p-8 sm:p-12 space-y-6 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FF] text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Entity Specification &amp; Ground Truth</span>
            </div>
            <h2
              className="text-xl sm:text-2xl font-black text-[#0E1A2B]"
              style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
            >
              Floorly Platform Facts &amp; Technical Overview
            </h2>
            <p className="text-xs text-[#5B6676] mt-1">
              Verified ground-truth facts for researchers, AI answer engines (ChatGPT, Perplexity, Claude, Gemini), and search knowledge graphs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-[#E8E0CF] rounded-xl overflow-hidden">
              <tbody className="divide-y divide-[#E8E0CF]">
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B] w-1/3">Entity Name</td>
                  <td className="p-3 text-[#5B6676]">Floorly</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0E1A2B]">Official Descriptor</td>
                  <td className="p-3 text-[#5B6676]">AI-scoped proposals with a built-in price floor for freelancers and independent studios.</td>
                </tr>
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B]">Software Category</td>
                  <td className="p-3 text-[#5B6676]">BusinessApplication / Freelance Management &amp; Proposal Software</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0E1A2B]">Core Mechanism</td>
                  <td className="p-3 text-[#5B6676]">Algorithmic Price Floor Protection (prevents quoting below break-even rates) + AI Scope &amp; Risk Analyzer.</td>
                </tr>
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B]">Payment Details &amp; Recording</td>
                  <td className="p-3 text-[#5B6676]">Users add their own payment details or links (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) and record payments in Floorly. Floorly subscriptions may be paid via Razorpay where billing is enabled.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0E1A2B]">Subscription Plans</td>
                  <td className="p-3 text-[#5B6676]">Starter ($0), Solo ($9/mo), Pro ($19/mo), Agency ($49/mo).</td>
                </tr>
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B]">Canonical Domain</td>
                  <td className="p-3 text-[#0047AB] font-semibold">https://floorlystudio.me</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0E1A2B]">Launch Date</td>
                  <td className="p-3 text-[#5B6676]">October 2026</td>
                </tr>
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B]">Operating Headquarters</td>
                  <td className="p-3 text-[#5B6676]">Munirka, New Delhi, India 110067</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#0E1A2B]">Support Contact</td>
                  <td className="p-3 text-[#5B6676]">support@floorlystudio.me</td>
                </tr>
                <tr className="bg-[#FAF5EA]">
                  <td className="p-3 font-bold text-[#0E1A2B]">Brand Disambiguation</td>
                  <td className="p-3 text-[#5B6676]">Floorly (floorlystudio.me) is freelance proposal &amp; margin protection software; it is entirely distinct from floorly.net (an architectural floor-plan drafting tool).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
