import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  Copy,
  Sparkles,
  Shield,
  Layers,
  ListChecks,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';

export function FreelanceScopeOfWorkTemplatePage() {
  const tocItems = [
    { id: 'vague-brief-syndrome', title: '1. The Vague Client Brief Syndrome' },
    { id: 'five-pillars', title: '2. The 5 Core Pillars of a Bulletproof SOW' },
    { id: 'full-sow-template', title: '3. Production-Ready Freelance SOW Template' },
    { id: 'acceptance-criteria', title: '4. Writing Measurable Acceptance Criteria' },
    { id: 'ai-brief-parsing', title: '5. Automated Brief Parsing with Floorly' },
    { id: 'sow-faq', title: '6. Frequently Asked Questions' },
  ];

  const relatedArticles = [
    {
      title: 'How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics',
      category: 'Contract Protection',
      href: '/blog/prevent-scope-creep-freelance',
    },
    {
      title: 'How to Price a Freelance Project: Hourly Floors, Fixed Fees & The Break-Even Math',
      category: 'Pricing Strategy',
      href: '/blog/how-to-price-a-freelance-project',
    },
  ];

  return (
    <BlogPostLayout
      title="Freelance Scope of Work (SOW) Template: Turning Vague Briefs into Clear Milestones"
      subtitle="Clients rarely send comprehensive specifications. Instead, freelancers receive casual audio notes, fragmented bullet emails, or two-sentence briefs. Here is how to translate chaotic client messages into a professional Scope of Work with clear boundaries and enforceable payment milestones."
      category="Client Scoping & Contracts"
      publishDate="October 15, 2026"
      readTime="11 min read &bull; 1,900 words"
      tocItems={tocItems}
      relatedArticles={relatedArticles}
    >
      {/* Key Takeaways Callout */}
      <section className="not-prose mb-10">
        <aside className="bg-white rounded-2xl border-l-4 border-[var(--cobalt,#0047AB)] border border-[var(--line,#E8E0CF)] p-6 shadow-xs">
          <h2 className="text-base font-bold font-display text-[var(--ink,#0E1A2B)] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--cobalt,#0047AB)]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[var(--muted,#5B6676)] space-y-2 list-disc list-inside">
            <li><strong>Why SOWs Fail:</strong> Most freelancers write vague deliverable descriptions (&ldquo;Design a website&rdquo;) instead of defining explicit acceptance criteria, revision caps, and non-included modules.</li>
            <li><strong>The Power of Exclusions:</strong> What you explicitly exclude from a proposal protects you far more than what you include. Documenting out-of-scope items eliminates 90% of client disputes.</li>
            <li><strong>Automated Brief Parsing:</strong> Floorly’s AI Scope Analyzer extracts structured inclusions, exclusions, and milestone payment schedules from unstructured client text in under 10 seconds.</li>
          </ul>
        </aside>
      </section>

      {/* Section 1 */}
      <section id="vague-brief-syndrome" className="scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          1. The Vague Client Brief Syndrome
        </h2>
        <p>
          Every independent contractor knows the feeling. A prospect messages you:
        </p>
        <blockquote className="bg-white border-l-4 border-amber-500 p-5 rounded-r-xl italic text-sm text-[var(--ink,#0E1A2B)] not-prose my-4 shadow-xs">
          &ldquo;Hey! We need a clean, modern web app with user login, dashboard, payment gateway, and maybe an AI assistant. How much will this cost and can you finish it in 3 weeks?&rdquo;
        </blockquote>
        <p>
          If you reply with a dollar figure (e.g. &ldquo;$4,000&rdquo;), you have entered an operational trap. To you, &ldquo;user login&rdquo; means basic email and password with Supabase. To the client, &ldquo;user login&rdquo; meant SAML Single Sign-On, two-factor SMS authentication, role-based organizational permissions, and social logins with Apple, Google, and LinkedIn.
        </p>
        <p className="mt-4">
          A <strong>Scope of Work (SOW)</strong> is the legal and operational bridge that aligns client expectations with engineering realities before any code is committed.
        </p>
      </section>

      {/* Section 2 */}
      <section id="five-pillars" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          2. The 5 Core Pillars of a Bulletproof Scope of Work
        </h2>
        <p>
          Whether you are drafting a $1,500 landing page or a $25,000 custom web application, every resilient SOW must include these five structural pillars:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <span className="text-xs font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider">Pillar 1</span>
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mt-1 mb-1">Itemized Deliverables (Inclusions)</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">Granular, observable outcomes rather than abstract effort descriptions.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <span className="text-xs font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider">Pillar 2</span>
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mt-1 mb-1">Explicit Exclusions (Out of Scope)</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">A mandatory list of related services that are specifically NOT included without a change order.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <span className="text-xs font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider">Pillar 3</span>
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mt-1 mb-1">Acceptance Criteria &amp; Revision Caps</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">Clear mathematical bounds (e.g. max 2 revision rounds within 5 business days).</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <span className="text-xs font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider">Pillar 4</span>
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mt-1 mb-1">Milestone Payment Schedule</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">Staged deposits (e.g. 50% upfront, 25% on staging deployment, 25% on production release).</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="full-sow-template" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          3. Production-Ready Freelance SOW Template
        </h2>
        <p>
          Here is a full, battle-tested Scope of Work markdown template you can adapt for your client contracts:
        </p>

        <div className="bg-[var(--ink,#0E1A2B)] text-slate-200 rounded-xl p-5 font-mono text-xs overflow-x-auto shadow-md not-prose my-6">
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

      {/* Section 4 */}
      <section id="acceptance-criteria" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          4. How to Write Measurable Acceptance Criteria
        </h2>
        <p>
          The difference between a contentious invoice dispute and a seamless client payout is whether your acceptance criteria are subjective or objective. Subjective criteria rely on opinion (&ldquo;The application feels fast and clean&rdquo;). Objective criteria rely on verifiable data.
        </p>
        <p className="mt-4">
          Every milestone in your SOW should define three categories of objective criteria:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-[var(--ink,#0E1A2B)]">
          <li><strong>Core Web Vitals &amp; Performance:</strong> Define measurable metrics, such as: &ldquo;The landing page achieves a Google Lighthouse performance score of 90+ on mobile devices, with a Largest Contentful Paint (LCP) under 2.0 seconds on standard 4G networks.&rdquo;</li>
          <li><strong>Browser &amp; Device Compatibility Matrix:</strong> Explicitly state the supported test targets: &ldquo;Tested and verified on Google Chrome (latest 2 versions), Safari 17+, iOS Mobile Safari (iOS 16+), and Google Chrome for Android. Legacy browsers including Internet Explorer are strictly excluded.&rdquo;</li>
          <li><strong>Bug Liability Period:</strong> Establish a defined warranty: &ldquo;Contractor provides a 14-day warranty period following staging deployment to remediate functional defects adhering to the agreed deliverables. Any bug reports submitted after 14 days or resulting from third-party API changes fall under an ongoing maintenance agreement.&rdquo;</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="ai-brief-parsing" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          5. How to Convert Vague Client Emails in 10 Seconds
        </h2>
        <p>
          Extracting deliverables and identifying missing requirements by hand takes hours of back-and-forth email communication.
        </p>
        <p className="mt-4">
          With <strong>Floorly's AI Scope Analyzer</strong>, you can paste raw client messages directly into the intake engine. The system automatically identifies:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-[var(--ink,#0E1A2B)]">
          <li>Core deliverable features vs exploratory ideas.</li>
          <li>Hidden technical risks (e.g. unstated payment webhooks, database migrations).</li>
          <li>Recommended explicit exclusions tailored to that specific technology stack.</li>
          <li>Milestone breakdown and automated proposal formatting with your configured price floor.</li>
        </ul>

        <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-6 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <div>
            <h3 className="font-bold text-base text-[var(--cobalt,#0047AB)] font-display">Try the AI Scope Analyzer</h3>
            <p className="text-xs sm:text-sm text-[var(--muted,#5B6676)] mt-1">Turn vague briefs into structured proposals and protect your time.</p>
          </div>
          <Link
            to="/signup"
            className="bg-[var(--cobalt,#0047AB)] hover:bg-[var(--cobalt-dark,#003A8C)] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors whitespace-nowrap shadow-xs"
          >
            Analyze a Brief Free
          </Link>
        </div>
      </section>

      {/* Section 6 */}
      <section id="sow-faq" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-6">
          6. Frequently Asked Questions About SOWs
        </h2>
        <div className="space-y-4 not-prose">
          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all" open>
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>What is the difference between a Contract and a Scope of Work (SOW)?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              A contract establishes general legal governing terms (liability, confidentiality, IP ownership). The Scope of Work (SOW) is a specific project addendum detailing exactly what deliverables will be built, timelines, milestones, and payment schedules.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>Should I start work before the client signs the SOW?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Never begin work before obtaining a signed SOW and collecting your non-refundable project deposit (typically 30% to 50%). Starting without a signed SOW exposes you to uncompensated labor.
            </p>
          </details>
        </div>
      </section>
    </BlogPostLayout>
  );
}
