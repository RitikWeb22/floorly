import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Scale,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Code2,
  HelpCircle,
} from 'lucide-react';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';
import { MiniPricingCalculator } from '../../components/blog/MiniPricingCalculator';
import { PriceFloorDiagram } from '../../components/blog/PriceFloorDiagram';

export function HowToPriceFreelanceProjectPage() {
  const tocItems = [
    { id: 'quick-answer', title: 'Quick Answer & Executive Summary' },
    { id: 'three-pricing-models', title: '1. Comparing the 3 Freelance Pricing Models' },
    { id: 'billable-hours-trap', title: '2. The Billable Capacity Trap: Real Hours' },
    { id: 'mathematical-floor-formula', title: '3. The Deterministic Hourly Floor Formula' },
    { id: 'interactive-simulator', title: '4. Interactive Price Floor Simulator' },
    { id: 'fixed-pricing-multipliers', title: '5. Converting Hourly Floors to Fixed Fees' },
    { id: 'persona-case-studies', title: '6. Worked Examples: 3 Freelancer Personas' },
    { id: 'pricing-architecture-diagram', title: '7. Floorly Architecture Diagram' },
    { id: 'handling-client-pushback', title: '8. Defending Quotes & Handling Pushback' },
    { id: 'frequently-asked-questions', title: '9. Frequently Asked Questions' },
  ];

  const relatedArticles = [
    {
      title: 'How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics',
      category: 'Contract Protection',
      href: '/blog/prevent-scope-creep-freelance',
    },
    {
      title: 'Freelance Scope of Work (SOW) Template: Turning Vague Briefs into Clear Milestones',
      category: 'Client Scoping',
      href: '/blog/freelance-scope-of-work-template',
    },
    {
      title: 'What is AGENTS.md? Guide to AI Coding Assistant Handoffs in Cursor & Claude Code',
      category: 'AI Tooling & Workflow',
      href: '/blog/what-is-agents-md',
    },
  ];

  return (
    <BlogPostLayout
      title="How to Price a Freelance Project: Hourly Floors, Fixed Fees & The Break-Even Math"
      subtitle="Stop guessing your rates and underpricing client contracts. Discover the mathematical formula for non-negotiable hourly price floors, billable capacity adjustments, and risk-cushioned milestone packages."
      category="Freelance Pricing Strategy"
      publishDate="October 15, 2026"
      readTime="14 min read &bull; 2,350 words"
      tocItems={tocItems}
      relatedArticles={relatedArticles}
    >
      {/* Quick Answer Callout */}
      <section id="quick-answer" className="not-prose mb-10">
        <div className="bg-white rounded-2xl border-2 border-[var(--cobalt,#0047AB)] p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--cobalt,#0047AB)] mb-2">
            <ShieldCheck className="w-4 h-4 text-[var(--cobalt,#0047AB)]" />
            <span>Quick Answer &bull; Bottom-Line Formula</span>
          </div>
          <p className="text-base sm:text-[17px] text-[var(--ink,#0E1A2B)] leading-relaxed font-medium mb-3">
            To price a freelance project sustainably, first calculate your non-negotiable hourly price floor using{' '}
            <code className="bg-slate-100 text-[var(--cobalt-dark,#003A8C)] px-1.5 py-0.5 rounded font-mono text-sm">
              (Annual Living Expenses + Business Overhead) / (Annual Billable Hours &times; (1 - Tax Rate))
            </code>
            . Next, estimate base engineering hours, apply a 10% to 20% scope contingency cushion, multiply by a 1.1x to 1.5x technical complexity factor, and enforce that the quote never drops below your preconfigured project floor.
          </p>
          <div className="text-xs text-[var(--muted,#5B6676)] pt-3 border-t border-[var(--line,#E8E0CF)] flex flex-wrap gap-x-4 gap-y-1">
            <span>&bull; Full-time capacity: 1,000&ndash;1,200 billable hrs/yr</span>
            <span>&bull; Contingency buffer: 10%&ndash;20%</span>
            <span>&bull; Complexity multiplier: 1.1x&ndash;1.5x</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <p>
        Pricing freelance projects is rarely taught in technical university curricula, design academies, or engineering bootcamps. Most independent developers, visual designers, and technical consultants determine their client rates through emotional guesswork: they pick a round number that feels respectable ($50, $75, or $100 per hour), discount it under negotiation pressure when a prospective client hesitates, and end up working for less than a local minimum wage once taxes, health insurance, and unbilled revisions are factored in.
      </p>

      <p className="mt-4">
        Undercharging is not merely an inconvenience; it represents severe insolvency risk for solo knowledge workers. When you quote below your true break-even capacity, unexpected scope changes, delayed client approvals, and software dependencies directly cannibalize your personal savings.
      </p>

      <p className="mt-4">
        In this guide, we provide the complete mathematical architecture for professional freelance pricing. You will learn how to calculate your true billable hours, formulate a non-negotiable price floor, convert hourly baselines into fixed-price milestone tiers, and automate rate defense using deterministic validation rules.
      </p>

      {/* Section 1: The Three Primary Freelance Pricing Models */}
      <section id="three-pricing-models" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          1. Comparing the Three Primary Freelance Pricing Models
        </h2>
        <p>
          Before calculating formulas, independent contractors must understand the structural mechanics, economic incentives, and operational risks of the three standard pricing methodologies:
        </p>

        {/* Comparison Table */}
        <div className="my-8 not-prose overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <thead>
              <tr className="bg-[var(--page,#FAF5EA)] border-b border-[var(--line,#E8E0CF)] text-xs font-mono font-bold text-[var(--ink,#0E1A2B)] uppercase tracking-wider">
                <th className="p-3.5 sm:p-4">Pricing Model</th>
                <th className="p-3.5 sm:p-4">Risk to Freelancer</th>
                <th className="p-3.5 sm:p-4">Client Appeal</th>
                <th className="p-3.5 sm:p-4">Upside Potential</th>
                <th className="p-3.5 sm:p-4">Ideal Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#E8E0CF)] text-xs sm:text-sm">
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[var(--ink,#0E1A2B)]">
                  Hourly Billing
                </td>
                <td className="p-3.5 sm:p-4 text-amber-700 font-medium">
                  Moderate (Penalizes speed &amp; efficiency)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--muted,#5B6676)]">
                  Moderate (Fear of unconstrained budget)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--muted,#5B6676)]">
                  Low (Linear ceiling capped by hours)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--muted,#5B6676)]">
                  Open-ended research, maintenance retainers, debugging
                </td>
              </tr>
              <tr className="bg-blue-50/40">
                <td className="p-3.5 sm:p-4 font-bold text-[var(--cobalt,#0047AB)]">
                  Fixed Milestone Packages (With Floor)
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">
                  Low (Cushioned by contingency &amp; floor)
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                  Very High (Predictable client spend)
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">
                  High (Efficiency gains increase effective rate)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--ink,#0E1A2B)] font-medium">
                  Well-scoped web builds, MVPs, design sprints, brand overhauls
                </td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 font-bold text-[var(--ink,#0E1A2B)]">
                  Value-Based Pricing
                </td>
                <td className="p-3.5 sm:p-4 text-red-700 font-medium">
                  High (Outcome attribution uncertainty)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--muted,#5B6676)]">
                  Low to Moderate (Requires deep financial disclosure)
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">
                  Maximum (Direct share of client profit)
                </td>
                <td className="p-3.5 sm:p-4 text-[var(--muted,#5B6676)]">
                  Enterprise funnel optimization, mission-critical revenue systems
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mt-6 mb-3">
          The Structural Flaw of Pure Hourly Billing
        </h3>
        <p>
          While hourly billing protects the contractor from infinite exploratory meetings, it fundamentally penalizes senior craft. As your architectural intuition deepens and you learn to solve a complex database bug in 45 minutes instead of 8 hours, billing by the hour cuts your compensation by 90% for delivering the exact same business outcome. Clients also naturally become adversarial auditors, reviewing timesheets line-by-line and questioning whether a task should have taken 3 hours or 5 hours.
        </p>

        <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mt-6 mb-3">
          The Problem with Pure Value-Based Pricing for Small Clients
        </h3>
        <p>
          Value-based pricing sounds attractive in business theory: if you build an checkout workflow for a store generating $2,000,000 annually that increases conversions by 5%, you have created $100,000 in recurring value, easily justifying a $25,000 quote. However, for 90% of freelance developers and designers working with early-stage founders and small businesses, the client does not yet have established baseline metrics, or their internal stakeholders are completely unwilling to share their private balance sheets with an external contractor.
        </p>

        <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mt-6 mb-3">
          The Optimal Hybrid: Fixed Milestone Packages with a Hard Price Floor
        </h3>
        <p>
          The most robust and profitable operational model for independent contractors is <strong>Fixed Milestone Packages calculated from a deterministic Hourly Price Floor</strong>. This architecture gives your client the upfront budgetary certainty they require to get contract sign-off, while guaranteeing you never sell a sprint beneath your personal break-even cost.
        </p>
      </section>

      {/* Section 2: The Billable Capacity Trap */}
      <section id="billable-hours-trap" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          2. The Billable Capacity Trap: Why 40 Hours a Week is a Myth
        </h2>
        <p>
          The single most damaging mistake made by engineers transitioning from corporate employment to freelancing is dividing their desired annual income by 2,080 hours (40 hours &times; 52 weeks).
        </p>

        <p className="mt-4">
          In a salaried corporate role, your employer pays you for 2,080 hours annually regardless of whether you are actively writing code, sitting in administrative all-hands meetings, taking mandatory compliance seminars, or enjoying paid national holidays.
        </p>

        <p className="mt-4">
          As an independent contractor, you do not have a human resources department, a dedicated sales team, an in-house bookkeeper, or paid sick leave. According to occupational time-use surveys published by the{' '}
          <a
            href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cobalt,#0047AB)] underline font-medium"
          >
            U.S. Bureau of Labor Statistics (BLS)
          </a>{' '}
          and verified independent consultancy workflows, self-employed knowledge workers spend between <strong>35% and 45% of their working hours on completely non-billable operations</strong>:
        </p>

        <ul className="list-disc list-inside space-y-2 text-[var(--ink,#0E1A2B)] mt-4">
          <li><strong>Client Acquisition &amp; Pipeline:</strong> Reading chaotic briefs, drafting proposals, discovery calls, and follow-ups.</li>
          <li><strong>Administrative Bookkeeping:</strong> Invoicing, tracking expenses, chasing late payments, and calculating quarterly tax filings.</li>
          <li><strong>Technical Maintenance:</strong> Updating local toolchains, testing dependencies, and continuous professional learning.</li>
          <li><strong>Unplanned Downtime:</strong> Illness, family emergencies, public holidays, and client revision gaps.</li>
        </ul>

        {/* Calculation Box: Real Billable Capacity */}
        <div className="my-6 p-6 bg-white rounded-xl border border-[var(--line,#E8E0CF)] not-prose shadow-xs">
          <h4 className="text-sm font-bold font-mono text-[var(--ink,#0E1A2B)] uppercase tracking-wider mb-3">
            Real Freelance Capacity Breakdown (52-Week Year)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-[var(--page,#FAF5EA)] rounded-lg border border-[var(--line,#E8E0CF)]">
              <div className="text-2xl font-bold font-display text-[var(--ink,#0E1A2B)]">46 Weeks</div>
              <div className="text-xs text-[var(--muted,#5B6676)] mt-1">Working weeks (minus 4w vacation &amp; 2w sick/holidays)</div>
            </div>
            <div className="p-3 bg-[var(--page,#FAF5EA)] rounded-lg border border-[var(--line,#E8E0CF)]">
              <div className="text-2xl font-bold font-display text-[var(--cobalt,#0047AB)]">22 Hours</div>
              <div className="text-xs text-[var(--muted,#5B6676)] mt-1">Average billable focus per week (out of 40h total)</div>
            </div>
            <div className="p-3 bg-[var(--page,#FAF5EA)] rounded-lg border border-[var(--line,#E8E0CF)]">
              <div className="text-2xl font-bold font-display text-emerald-700">1,012 Hours</div>
              <div className="text-xs text-[var(--muted,#5B6676)] mt-1">Total realistic billable hours per calendar year</div>
            </div>
          </div>
        </div>

        <p className="mt-4">
          When you assume 2,080 billable hours, quoting $60/hour yields an assumed $124,800 gross salary. But in reality, at 1,012 billable hours, that same $60/hour rate only yields <strong>$60,720 gross</strong>. Once self-employment taxes (approx. 25%&ndash;30%) and business expenses ($10,000&ndash;$15,000) are deducted, your actual net take-home pay plunges below $32,000 per year.
        </p>
      </section>

      {/* Section 3: The Mathematical Floor Formula */}
      <section id="mathematical-floor-formula" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          3. The Mathematical Formula for Your Hourly Price Floor
        </h2>
        <p>
          Your <strong>Price Floor</strong> is not an arbitrary aspiration; it is the mathematical break-even threshold below which taking on a client project produces net economic loss.
        </p>

        <p className="mt-4">
          To derive your personal hourly floor, apply the three-step deterministic formula:
        </p>

        {/* Math Breakdown Table */}
        <div className="my-6 not-prose overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <thead>
              <tr className="bg-[var(--page,#FAF5EA)] border-b border-[var(--line,#E8E0CF)] text-xs font-mono font-bold text-[var(--ink,#0E1A2B)] uppercase">
                <th className="p-3.5">Step</th>
                <th className="p-3.5">Variable</th>
                <th className="p-3.5">Formula / Description</th>
                <th className="p-3.5">Sample Values</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#E8E0CF)] text-xs sm:text-sm">
              <tr>
                <td className="p-3.5 font-bold">Step 1</td>
                <td className="p-3.5 font-semibold text-[var(--cobalt,#0047AB)]">Net Annual Target</td>
                <td className="p-3.5">Living Expenses + Business Overhead</td>
                <td className="p-3.5 font-mono">$60,000 + $12,000 = $72,000</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Step 2</td>
                <td className="p-3.5 font-semibold text-[var(--cobalt,#0047AB)]">Pre-Tax Gross Target</td>
                <td className="p-3.5">Net Target / (1 - Effective Tax Rate)</td>
                <td className="p-3.5 font-mono">$72,000 / (1 - 0.30) = $102,857</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Step 3</td>
                <td className="p-3.5 font-semibold text-[var(--cobalt,#0047AB)]">Hourly Price Floor</td>
                <td className="p-3.5">Pre-Tax Gross Target / Total Annual Billable Hours</td>
                <td className="p-3.5 font-mono text-emerald-700 font-bold">$102,857 / 1,012 = $101.63 / hr</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Collapsible Clean Code Block */}
        <div className="my-6 not-prose">
          <div className="bg-[var(--ink,#0E1A2B)] rounded-xl p-5 text-slate-200 font-mono text-xs overflow-x-auto shadow-md">
            <div className="flex items-center justify-between text-slate-400 pb-3 mb-3 border-b border-slate-700 text-[11px]">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <Code2 className="w-3.5 h-3.5 text-[var(--sun,#FFC72C)]" />
                <span>calculatePriceFloor.js (Deterministic Reference Engine)</span>
              </span>
              <span>Node.js / ES Module</span>
            </div>
            <pre className="text-slate-300"><code>{`export function calculateHourlyPriceFloor({
  personalLivingNeeds = 60000,   // Housing, groceries, healthcare, debt, lifestyle
  businessOverhead = 12000,      // Software subscriptions, accounting, hardware depreciation
  effectiveTaxRate = 0.30,       // Self-employment tax + Federal/State bracket
  workingWeeksPerYear = 46,      // 52 weeks minus 4w vacation and 2w sick time
  billableHoursPerWeek = 22,     // Realistic client focus hours per week
}) {
  // Step 1: Net revenue needed to keep home and business solvent
  const netRequired = personalLivingNeeds + businessOverhead;

  // Step 2: Adjust for government tax liabilities
  const grossTarget = netRequired / (1 - effectiveTaxRate);

  // Step 3: Total capacity across 12 calendar months
  const annualBillableHours = workingWeeksPerYear * billableHoursPerWeek;

  // Step 4: Minimum non-negotiable hourly baseline
  const exactFloor = grossTarget / annualBillableHours;

  return {
    grossTarget: Math.round(grossTarget),
    annualBillableHours,
    hourlyFloor: Math.round(exactFloor * 100) / 100,
    cleanFloorQuote: Math.ceil(exactFloor / 5) * 5, // Round up to nearest $5
  };
}`}</code></pre>
          </div>
        </div>

        <p className="mt-4">
          In this realistic simulation, any quotation under <strong>$100/hour</strong> produces cumulative operational debt. If a client negotiates you down to $75/hour on a 100-hour milestone, you have sacrificed $2,500 of needed income.
        </p>
      </section>

      {/* Section 4: Interactive Simulator Component */}
      <section id="interactive-simulator" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          4. Interactive Price Floor &amp; Package Simulator
        </h2>
        <p>
          Use the interactive calculator below to adjust your estimated hours, baseline hourly floor, technical complexity, and contingency cushions. See in real time how Floorly guards the proposal from dropping beneath your minimum:
        </p>

        {/* Embedded Interactive Mini Calculator */}
        <MiniPricingCalculator />
      </section>

      {/* Section 5: Converting Hourly Floors to Fixed Milestone Quotes */}
      <section id="fixed-pricing-multipliers" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          5. Converting Hourly Floors into Fixed Milestone Quotes
        </h2>
        <p>
          Once your hourly floor (e.g., $100/hr) is established, you must never simply multiply base hours by your rate. If a project looks like 40 hours of work, quoting exactly <code>40 &times; $100 = $4,000</code> is a dangerous gamble.
        </p>

        <p className="mt-4">
          Fixed-price software development and digital design work invariably suffer from unforeseen edge cases: third-party API rate limits, undocumented legacy libraries, delayed client asset transfers, and multi-round subjective design feedback.
        </p>

        <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mt-6 mb-3">
          The Four-Step Conversion Algorithm
        </h3>

        <ol className="list-decimal list-inside space-y-3 text-[var(--ink,#0E1A2B)] mt-3">
          <li>
            <strong>Estimate Atomic Labor:</strong> Deconstruct the project brief into itemized deliverables. Estimate realistic engineering time under normal focus conditions (e.g. 40 hours).
          </li>
          <li>
            <strong>Apply Technical Complexity Multiplier (1.1x to 1.5x):</strong>
            <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1 text-sm text-[var(--muted,#5B6676)]">
              <li><strong>1.0x (Low):</strong> Standard greenfield static pages, proven component libraries, no external APIs.</li>
              <li><strong>1.25x (Medium):</strong> Stripe webhook integration, authentication state, responsive table interactions.</li>
              <li><strong>1.5x (High):</strong> Untyped legacy code refactoring, undocumented third-party SOAP/REST endpoints, real-time WebSockets.</li>
            </ul>
          </li>
          <li>
            <strong>Add Mandatory Scope Contingency Buffer (10% to 20%):</strong> Always append between 10% and 20% dedicated buffer hours to absorb client feedback loops and browser testing edge cases without decreasing your effective rate.
          </li>
          <li>
            <strong>Check Against Category Price Floor:</strong> Run the resulting quote against your configured minimum category threshold. If the calculated fee is $2,800 but your agency's minimum project threshold is $3,500, the quote automatically locks at $3,500.
          </li>
        </ol>
      </section>

      {/* Section 6: Worked Examples: 3 Freelancer Personas */}
      <section id="persona-case-studies" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          6. Worked Examples: Three Independent Freelancer Personas
        </h2>
        <p>
          To demonstrate how this pricing engine operates in practical consulting engagements, examine three real-world worked examples across different creative and technical disciplines:
        </p>

        {/* Persona Table */}
        <div className="my-8 not-prose overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <thead>
              <tr className="bg-[var(--page,#FAF5EA)] border-b border-[var(--line,#E8E0CF)] text-xs font-mono font-bold text-[var(--ink,#0E1A2B)] uppercase">
                <th className="p-3.5">Persona &amp; Discipline</th>
                <th className="p-3.5">Floor Rate</th>
                <th className="p-3.5">Base Hours</th>
                <th className="p-3.5">Complexity Multiplier</th>
                <th className="p-3.5">Contingency Cushion</th>
                <th className="p-3.5">Calculated Essential Quote</th>
                <th className="p-3.5">Category Floor Protection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line,#E8E0CF)] text-xs sm:text-sm">
              <tr>
                <td className="p-3.5">
                  <div className="font-bold text-[var(--ink,#0E1A2B)]">Senior Full-Stack Developer</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Next.js &bull; Supabase &bull; Stripe</div>
                </td>
                <td className="p-3.5 font-mono font-semibold">$110 / hr</td>
                <td className="p-3.5 font-mono">40 hrs</td>
                <td className="p-3.5 font-mono text-amber-700 font-bold">1.30x (Payment API)</td>
                <td className="p-3.5 font-mono text-emerald-700 font-bold">+15% (+6h)</td>
                <td className="p-3.5 font-mono font-bold text-[var(--cobalt,#0047AB)] text-base">
                  $6,578
                </td>
                <td className="p-3.5 text-xs text-emerald-700 font-semibold">
                  Safely above $3,500 floor
                </td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-3.5">
                  <div className="font-bold text-[var(--ink,#0E1A2B)]">Product &amp; UI/UX Designer</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Figma &bull; Design System &bull; iOS</div>
                </td>
                <td className="p-3.5 font-mono font-semibold">$85 / hr</td>
                <td className="p-3.5 font-mono">30 hrs</td>
                <td className="p-3.5 font-mono text-amber-700 font-bold">1.10x (Design tokens)</td>
                <td className="p-3.5 font-mono text-emerald-700 font-bold">+20% (+6h)</td>
                <td className="p-3.5 font-mono font-bold text-[var(--cobalt,#0047AB)] text-base">
                  $3,366
                </td>
                <td className="p-3.5 text-xs text-emerald-700 font-semibold">
                  Safely above $2,000 floor
                </td>
              </tr>
              <tr>
                <td className="p-3.5">
                  <div className="font-bold text-[var(--ink,#0E1A2B)]">B2B Technical Copywriter</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Landing Page &bull; Messaging &bull; SEO</div>
                </td>
                <td className="p-3.5 font-mono font-semibold">$70 / hr</td>
                <td className="p-3.5 font-mono">20 hrs</td>
                <td className="p-3.5 font-mono text-amber-700 font-bold">1.00x (Standard)</td>
                <td className="p-3.5 font-mono text-emerald-700 font-bold">+10% (+2h)</td>
                <td className="p-3.5 font-mono font-bold text-[var(--cobalt,#0047AB)] text-base">
                  $1,540
                </td>
                <td className="p-3.5 text-xs text-emerald-700 font-semibold">
                  Safely above $1,200 floor
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Notice how the developer persona's 40 hours of estimated labor did not yield a quote of $4,400 (40 &times; $110). Because external authentication and payment integrations carry non-trivial friction, the 1.30x complexity multiplier and 15% contingency expanded the contract to 59.8 billable units, yielding a professional quote of <strong>$6,578</strong>. When the inevitable webhook testing delay arises, the engineer's net profit remains 100% protected.
        </p>
      </section>

      {/* Section 7: Floorly Architecture Diagram */}
      <section id="pricing-architecture-diagram" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          7. The Floorly Deterministic Architecture
        </h2>
        <p>
          The entire flow from annual overhead calculation to online client acceptance is visualized below:
        </p>

        {/* Embedded SVG Diagram */}
        <PriceFloorDiagram />
      </section>

      {/* Section 8: Defending Quotes & Handling Pushback */}
      <section id="handling-client-pushback" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          8. Defending Your Rates and Handling Client Price Objections
        </h2>
        <p>
          When presenting a fixed milestone proposal of $6,500, a common response from prospective clients is: <em>"We really like your portfolio, but our maximum budget for this milestone is $4,500. Can you match our budget?"</em>
        </p>

        <p className="mt-4">
          The instinctive reaction of an inexperienced freelancer is to say yes and immediately slash their quote by 30%. <strong>This is a critical mistake.</strong> When you discount your price without changing the scope, you communicate to the client that your original pricing was arbitrary and marked up.
        </p>

        <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mt-6 mb-3">
          The Professional Scope Reduction Script
        </h3>
        <p>
          Instead of discounting your hourly price floor, maintain your rate baseline and reduce the scope of deliverables:
        </p>

        <div className="my-6 p-6 bg-white rounded-xl border-l-4 border-[var(--cobalt,#0047AB)] border border-[var(--line,#E8E0CF)] not-prose shadow-xs">
          <h4 className="text-xs font-mono font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider mb-2">
            Recommended Change Order / Scope Adjustment Script
          </h4>
          <blockquote className="text-sm text-[var(--ink,#0E1A2B)] leading-relaxed italic m-0">
            &ldquo;Thank you for sharing your budgetary parameters. We completely understand and respect that $4,500 is your ceiling for this phase. To stay precisely within your $4,500 budget while maintaining our standard engineering quality, we can adjust the scope by postponing the custom analytics dashboard and multi-language switcher to Phase 2. This focuses Phase 1 strictly on the core onboarding funnel and Stripe checkout. Shall I update the proposal deliverables to reflect this adjusted scope?&rdquo;
          </blockquote>
        </div>

        <p className="mt-4">
          This response establishes you as a seasoned partner rather than an interchangeable commodity. The client receives their desired price point, while you protect your hourly price floor and prevent uncompensated overtime.
        </p>
      </section>

      {/* Section 9: Frequently Asked Questions */}
      <section id="frequently-asked-questions" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-6">
          9. Frequently Asked Questions About Freelance Pricing
        </h2>

        <div className="space-y-4 not-prose">
          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>What is a freelance price floor?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              A freelance price floor is the minimum monetary baseline an independent professional sets for their hourly rate or project fees. It is calculated by dividing annual personal living expenses and business overhead by realistic annual billable hours, adjusted for self-employment tax. Quoting beneath your price floor mathematically results in net financial loss.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>How many hours should I add as a contingency buffer on fixed quotes?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Standard industry practice recommends a contingency buffer of 10% to 20% on fixed-price projects. For familiar, well-documented technical tasks, a 10% buffer is adequate. For projects involving external API integrations, legacy databases, or subjective multi-stakeholder design reviews, apply an 18% to 20% contingency cushion.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>How do I transition existing hourly clients to fixed milestone packages?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              When quoting the next feature or development cycle, present it as a packaged milestone: highlight the benefit of budget predictability for the client, specify clear deliverable milestones, and provide upfront payment terms (e.g. 50% upfront, 50% on completion). Clients almost always prefer knowing their exact financial commitment upfront.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>What if a prospective client demands an upfront discount?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Never provide unconditional discounts. If you offer a concession, tie it strictly to favorable cash flow: offer a 5% discount only if the client pays 100% upfront rather than standard 50/50 milestones, provided the discounted total still clears your configured category price floor.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>How does Floorly automate price floor enforcement?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              In Floorly, you configure your absolute minimum hourly rate and minimum category project fees in your settings. Whenever our AI scopes a brief or you draft a proposal, Floorly checks the totals on the server and automatically raises any line item or package total that breaches your floor, preventing emotional discounting during negotiations.
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>Which free tools are available to calculate my numbers right now?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Floorly provides two free, publicly accessible calculators: the{' '}
              <Link to="/tools/freelance-rate-calculator" className="text-[var(--cobalt,#0047AB)] underline font-medium">
                Freelance Hourly Rate &amp; Price Floor Calculator
              </Link>{' '}
              to compute your personal living baseline, and the{' '}
              <Link to="/tools/project-price-calculator" className="text-[var(--cobalt,#0047AB)] underline font-medium">
                Project Price &amp; Scope Risk Calculator
              </Link>{' '}
              to test milestone packages with complexity and contingency multipliers.
            </p>
          </details>
        </div>
      </section>
    </BlogPostLayout>
  );
}
