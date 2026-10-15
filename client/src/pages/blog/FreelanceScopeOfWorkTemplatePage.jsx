import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  Sparkles,
  Shield,
  Layers,
  ListChecks,
  AlertCircle,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';

export function FreelanceScopeOfWorkTemplatePage() {
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
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Guides</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/about"
            className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] px-3 py-1.5 transition-colors hidden sm:inline-block"
          >
            AI Scope Analyzer
          </Link>
          <Link
            to="/signup"
            className="text-xs font-semibold bg-[#0047AB] text-white px-3.5 py-1.5 rounded-lg hover:bg-[#003A8C] transition-colors shadow-sm"
          >
            Scope a Brief Free
          </Link>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-1 py-12 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[#5B6676] flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-[#0047AB]">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#0047AB]">Blog</Link>
          <span>/</span>
          <span className="text-[#0E1A2B]">Freelance Scope of Work Template</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-4">
            <ListChecks className="w-3.5 h-3.5" />
            <span>Client Scoping &amp; Contracts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1A2B] leading-tight mb-5">
            Freelance Scope of Work (SOW) Template: Turning Vague Briefs into Clear Milestones
          </h1>

          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed mb-6 font-normal">
            Clients rarely send comprehensive specifications. Instead, freelancers receive casual WhatsApp audio notes, fragmented bullet emails, or two-sentence briefs asking for "something like Uber but for dog grooming". Here is how to translate chaotic client messages into a professional Scope of Work with clear boundaries and enforceable payment milestones.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E8E0CF] text-xs text-[#5B6676]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold text-sm">
                R
              </div>
              <div>
                <span className="font-bold text-[#0E1A2B] block text-sm">Ritik</span>
                <span>Founder &amp; Systems Engineer at Floorly</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>October 15, 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>10 min read</span>
              </span>
            </div>
          </div>
        </header>

        {/* Executive Summary Callout */}
        <aside className="bg-white rounded-2xl border-l-4 border-[#0047AB] border border-[#E8E0CF] p-6 mb-10 shadow-sm">
          <h2 className="text-base font-bold text-[#0E1A2B] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0047AB]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[#5B6676] space-y-2 list-disc list-inside">
            <li><strong>Why SOWs Fail:</strong> Most freelancers write vague deliverable descriptions ("Design a website") instead of defining explicit acceptance criteria, revision caps, and non-included modules.</li>
            <li><strong>The Power of Exclusions:</strong> What you explicitly exclude from a proposal protects you far more than what you include. Documenting out-of-scope items eliminates 90% of client arguments.</li>
            <li><strong>Automated Brief Parsing:</strong> Floorly’s AI Scope Analyzer extracts structured inclusions, exclusions, and milestone payment schedules from unstructured client text in under 10 seconds.</li>
          </ul>
        </aside>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-[#0E1A2B] space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              1. The Vague Client Brief Syndrome
            </h2>
            <p>
              Every independent contractor knows the feeling. A prospect messages you:
            </p>
            <blockquote className="bg-white border-l-4 border-amber-500 p-4 rounded-r-xl italic text-sm text-[#0E1A2B] not-prose my-4">
              "Hey! We need a clean, modern web app with user login, dashboard, payment gateway, and maybe an AI assistant. How much will this cost and can you finish it in 3 weeks?"
            </blockquote>
            <p>
              If you reply with a dollar figure (e.g. "$4,000"), you have entered a trap. To you, "user login" means basic email and password with Supabase. To the client, "user login" meant SAML Single Sign-On, two-factor SMS authentication, role-based organizational permissions, and social logins with Apple, Google, and LinkedIn.
            </p>
            <p className="mt-3">
              A <strong>Scope of Work (SOW)</strong> is the legal and operational bridge that aligns client expectations with engineering realities before any code is committed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              2. The 5 Core Pillars of a Bulletproof Scope of Work
            </h2>
            <p>
              Whether you are drafting a $1,500 landing page or a $25,000 custom web application, every resilient SOW must include these five structural pillars:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Pillar 1</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Itemized Deliverables (Inclusions)</h3>
                <p className="text-xs text-[#5B6676]">Granular, observable outcomes rather than abstract effort descriptions.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Pillar 2</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Explicit Exclusions (Out of Scope)</h3>
                <p className="text-xs text-[#5B6676]">A mandatory list of related services that are specifically NOT included without a change order.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Pillar 3</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Acceptance Criteria &amp; Revision Caps</h3>
                <p className="text-xs text-[#5B6676]">Clear mathematical bounds (e.g. max 2 revision rounds within 5 business days).</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Pillar 4</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Milestone Payment Schedule</h3>
                <p className="text-xs text-[#5B6676]">Staged deposits (e.g. 50% upfront, 25% on staging deployment, 25% on production release).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              3. Production-Ready Freelance SOW Template
            </h2>
            <p>
              Here is a full, battle-tested Scope of Work markdown template you can adapt for your client contracts:
            </p>

            <div className="bg-[#0E1A2B] text-slate-200 rounded-xl p-5 font-mono text-xs overflow-x-auto shadow-lg not-prose my-4">
              <pre><code>{`# SCOPE OF WORK (SOW) & MILESTONE SPECIFICATION
Project Name: Client Portal Web Application
Contractor: [Your Studio / Name]
Client: [Client Company Name]
Date: [Date]
Total Contract Value: $5,500 USD (Governed by Floorly Price Floor)

## 1. Project Objective & Core Deliverables
The contractor will design and build a responsive web application delivering the following items:
- Module A: Responsive Marketing Site (3 pages: Home, Pricing, Contact).
- Module B: Client Authentication via Email/Password & Google OAuth.
- Module C: User Dashboard displaying live project milestones and invoice records.
- Module D: Stripe Payment Checkout integration for digital invoices.

## 2. Explicit Exclusions (Out of Scope)
The following services are NOT included in this engagement and require a separate Change Order:
- Custom mobile apps (iOS / Android native binaries).
- Multi-language localization (i18n) beyond English.
- Content writing, copywriting, or video asset production.
- Migration of legacy database schemas older than PostgreSQL v14.
- Third-party API subscription costs or cloud hosting fees (incurred by Client).

## 3. Review Cycles & Acceptance Criteria
- Deliverable Acceptance: The Client has 5 business days upon staging deployment to review and submit consolidate written feedback.
- Revision Rounds: Each milestone includes up to TWO (2) rounds of revisions aligned with the original specification.
- Acceptance Trigger: If no feedback is provided within 5 business days, the milestone is deemed accepted and payable.

## 4. Milestone Schedule & Payment Terms
All payments settle directly via Contractor's payment link (Stripe / Bank Wire / UPI):
- Milestone 1 (Deposit): $2,200 (40%) - Due upon contract execution prior to work kickoff.
- Milestone 2 (Staging Review): $2,200 (40%) - Due upon functional staging URL deployment.
- Milestone 3 (Final Release): $1,100 (20%) - Due prior to DNS transfer and production deployment.`}</code></pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              4. How to Write Measurable Acceptance Criteria
            </h2>
            <p>
              The difference between a contentious invoice dispute and a seamless client payout is whether your acceptance criteria are subjective or objective. Subjective criteria rely on opinion (&ldquo;The application feels fast and clean&rdquo;). Objective criteria rely on verifiable data.
            </p>
            <p className="mt-3">
              Every milestone in your SOW should define three categories of objective criteria:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-[#5B6676]">
              <li><strong>Core Web Vitals &amp; Performance:</strong> Define measurable metrics, such as: &ldquo;The landing page achieves a Google Lighthouse performance score of 90+ on mobile devices, with a Largest Contentful Paint (LCP) under 2.0 seconds on standard 4G networks.&rdquo;</li>
              <li><strong>Browser &amp; Device Compatibility Matrix:</strong> Explicitly state the supported test targets: &ldquo;Tested and verified on Google Chrome (latest 2 versions), Safari 17+, iOS Mobile Safari (iOS 16+), and Google Chrome for Android. Legacy browsers including Internet Explorer are strictly excluded.&rdquo;</li>
              <li><strong>Bug Liability Period:</strong> Establish a defined warranty: &ldquo;Contractor provides a 14-day warranty period following staging deployment to remediate functional defects adhering to the agreed deliverables. Any bug reports submitted after 14 days or resulting from third-party API changes fall under an ongoing maintenance agreement.&rdquo;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              5. How to Convert Vague Client Emails in 10 Seconds
            </h2>
            <p>
              Extracting deliverables and identifying missing requirements by hand takes hours of back-and-forth email ping-pong.
            </p>
            <p className="mt-3">
              With <strong>Floorly's AI Scope Analyzer</strong>, you can paste raw client messages directly into the intake engine. The system automatically identifies:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-[#5B6676]">
              <li>Core deliverable features vs exploratory ideas.</li>
              <li>Hidden technical risks (e.g. unstated payment webhooks, database migrations).</li>
              <li>Recommended explicit exclusions tailored to that specific technology stack.</li>
              <li>Milestone breakdown and automated proposal formatting with your configured price floor.</li>
            </ul>

            <div className="bg-[#0047AB]/5 border border-[#0047AB]/20 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
              <div>
                <h3 className="font-bold text-sm text-[#0047AB]">Try the AI Scope Analyzer</h3>
                <p className="text-xs text-[#5B6676] mt-0.5">Turn vague briefs into structured proposals and protect your time.</p>
              </div>
              <Link
                to="/signup"
                className="bg-[#0047AB] hover:bg-[#003A8C] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Analyze a Brief Free
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              Frequently Asked Questions About SOWs
            </h2>
            <div className="space-y-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-2">What is the difference between a Contract and a Scope of Work (SOW)?</h3>
                <p className="text-xs text-[#5B6676] leading-relaxed">A contract establishes general legal governing terms (liability, confidentiality, IP ownership). The Scope of Work (SOW) is a specific project addendum detailing exactly what deliverables will be built, timelines, milestones, and payment schedules.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-2">Should I start work before the client signs the SOW?</h3>
                <p className="text-xs text-[#5B6676] leading-relaxed">Never begin work before obtaining a signed SOW and collecting your non-refundable project deposit (typically 30% to 50%). Starting without a signed SOW exposes you to uncompensated labor.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 pt-8 border-t border-[#E8E0CF]">
          <h2 className="text-xl font-bold text-[#0E1A2B] mb-6">Related Freelance Engineering Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/blog/prevent-scope-creep-freelance"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Contract Protection</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics
              </h3>
            </Link>

            <Link
              to="/blog/what-is-agents-md"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Developer Handoff</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                What is AGENTS.md? Guide to AI Coding Assistant Handoffs in Cursor &amp; Claude Code
              </h3>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
