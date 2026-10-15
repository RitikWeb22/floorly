import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Percent,
  CheckCircle2,
  AlertTriangle,
  Scale,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';

export function HowToPriceFreelanceProjectPage() {
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
            to="/tools/freelance-rate-calculator"
            className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] px-3 py-1.5 transition-colors hidden sm:inline-block"
          >
            Rate Calculator
          </Link>
          <Link
            to="/signup"
            className="text-xs font-semibold bg-[#0047AB] text-white px-3.5 py-1.5 rounded-lg hover:bg-[#003A8C] transition-colors shadow-sm"
          >
            Calculate Your Floor
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
          <span className="text-[#0E1A2B]">How to Price a Freelance Project</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Freelance Pricing Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1A2B] leading-tight mb-5">
            How to Price a Freelance Project: Hourly Floors, Fixed Fees &amp; The Break-Even Math
          </h1>

          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed mb-6 font-normal">
            Pricing freelance projects is rarely taught in technical bootcamps or design degrees. Most solo contractors guess a rate, discount emotionally under client pressure, and end up working for less than minimum wage after taxes and unbilled revisions. Here is how to mathematically calculate your break-even floor and price projects profitably.
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
                <span>11 min read</span>
              </span>
            </div>
          </div>
        </header>

        {/* Executive Summary Callout */}
        <aside className="bg-white rounded-2xl border-l-4 border-[#0047AB] border border-[#E8E0CF] p-6 mb-10 shadow-sm">
          <h2 className="text-base font-bold text-[#0E1A2B] mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#0047AB]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[#5B6676] space-y-2 list-disc list-inside">
            <li><strong>The Freelance Capacity Trap:</strong> Full-time corporate employees work 2,080 paid hours per year, but freelancers can only realistically bill between 1,000 and 1,300 hours annually due to administrative and business development overhead.</li>
            <li><strong>The Break-Even Floor Formula:</strong> Never quote below <code>(Annual Personal Living Costs + Business Overhead) / (Annual Billable Hours &times; (1 - Tax Rate))</code>. Quoting below this number mathematically loses money.</li>
            <li><strong>Fixed-Price Risk Cushion:</strong> On fixed-fee client contracts, always apply a 10% to 20% scope contingency buffer and technical complexity multipliers (1.1x to 1.5x) to cushion against revision cycles.</li>
          </ul>
        </aside>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-[#0E1A2B] space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              1. The Three Primary Freelance Pricing Models
            </h2>
            <p>
              When quoting client work, independent contractors typically choose between three fundamental pricing methodologies:
            </p>

            <div className="space-y-4 mt-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B]">A. Hourly Billing</h3>
                <p className="text-xs text-[#5B6676] mt-1 leading-relaxed">
                  <strong>Pros:</strong> Straightforward to track; protects you if the client demands infinite exploratory revisions.<br />
                  <strong>Cons:</strong> Penalizes efficiency. As you become faster and more senior, you bill fewer hours for the exact same business value. Clients constantly audit timesheets and question individual logged hours.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B]">B. Fixed-Fee Milestone Pricing (With Hard Price Floors)</h3>
                <p className="text-xs text-[#5B6676] mt-1 leading-relaxed">
                  <strong>Pros:</strong> Predictable budget for the client; allows the freelancer to capture profit by working efficiently. High client conversion rate.<br />
                  <strong>Cons:</strong> Extreme risk of scope creep if deliverable boundaries, revision caps, and price floor calculations are not locked down in the contract.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B]">C. Value-Based Pricing</h3>
                <p className="text-xs text-[#5B6676] mt-1 leading-relaxed">
                  <strong>Pros:</strong> Massive upside if your project directly drives quantifiable client revenue (e.g. optimizing a checkout funnel generating $1M/year).<br />
                  <strong>Cons:</strong> Difficult to sell to early-stage startups and small businesses; requires deep access to client financial metrics that clients are frequently unwilling to share.
                </p>
              </div>
            </div>

            <p className="mt-4">
              For 85% of freelancers, the most effective hybrid approach is <strong>Fixed Milestone Packages calculated from a deterministic Hourly Price Floor</strong>. This gives the client the pricing certainty they demand while guaranteeing you never sell your time beneath your economic baseline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              2. The Billable Capacity Trap: Why $50/hr is Often Less Than $20/hr
            </h2>
            <p>
              The single biggest mistake beginner freelancers make is assuming a 40-hour work week equals 40 billable hours.
            </p>
            <p className="mt-3">
              According to workforce analytics from the U.S. Bureau of Labor Statistics and independent consulting surveys, freelance professionals spend between <strong>35% and 45% of their working time on non-billable tasks</strong>:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-[#5B6676]">
              <li>Writing proposals, analyzing briefs, and attending prospective discovery calls.</li>
              <li>Invoicing, bookkeeping, chasing late payments, and banking reconciliations.</li>
              <li>Maintaining local development environments, continuous learning, and portfolio updates.</li>
              <li>Sick leave, family emergencies, public holidays, and vacation downtime.</li>
            </ul>
            <p className="mt-3">
              In reality, a sustainable solo contractor working 40 hours per week only bills <strong>20 to 25 hours per week</strong> across roughly 46 to 48 working weeks per year. That yields an annual billable capacity of roughly <strong>1,000 to 1,200 billable hours</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              3. The Mathematical Formula for Your Hourly Price Floor
            </h2>
            <p>
              Your <strong>Price Floor</strong> is not what you wish to make in an ideal world; it is the mathematical break-even threshold below which taking a client project is financial suicide.
            </p>

            <div className="bg-[#0E1A2B] text-slate-200 rounded-xl p-5 font-mono text-xs overflow-x-auto shadow-lg not-prose my-4">
              <pre><code>{`// Deterministic Freelance Price Floor Formula
const annualLivingExpenses = 60000;      // Rent, food, insurance, living needs
const annualBusinessOverhead = 12000;    // Software subscriptions, hardware, legal, accounting
const selfEmploymentTaxRate = 0.30;       // 30% combined federal, state, and local taxes
const billableWeeksPerYear = 46;          // 52 weeks minus 4 weeks vacation & 2 weeks sick leave
const weeklyBillableHours = 22;           // Realistic sustainable billable focus

// Step 1: Pre-Tax Gross Target
const netTarget = annualLivingExpenses + annualBusinessOverhead;
const preTaxTarget = netTarget / (1 - selfEmploymentTaxRate); // $72,000 / 0.70 = $102,857

// Step 2: Total Annual Billable Hours
const totalBillableHours = billableWeeksPerYear * weeklyBillableHours; // 46 * 22 = 1,012 hours

// Step 3: Minimum Non-Negotiable Price Floor
const hourlyPriceFloor = preTaxTarget / totalBillableHours; // $102,857 / 1,012 = $101.63 / hour`}</code></pre>
            </div>

            <p>
              In this scenario, quoting $60/hour feels generous to the client, but it guarantees that you will fail to cover taxes and baseline living expenses over a 12-month period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              4. How to Convert Your Floor into Fixed-Price Milestones
            </h2>
            <p>
              Once you have calculated your hourly floor (e.g. $100/hr), how do you quote a client who demands a fixed project price of $4,000?
            </p>
            <ol className="list-decimal list-inside mt-3 space-y-2 text-[#5B6676]">
              <li><strong>Extract Baseline Labor Hours:</strong> Estimate the actual engineering time required to build the core deliverables (e.g., 30 hours).</li>
              <li><strong>Apply Complexity Multiplier:</strong> If the project involves legacy code, third-party authentication, or payment gateways, apply a 1.25x to 1.5x multiplier (30 hours &times; 1.3 = 39 hours).</li>
              <li><strong>Add Scope Contingency Buffer:</strong> Add a mandatory 15% contingency cushion to absorb client feedback loops and browser edge cases (39 hours &times; 1.15 = 45 total hours).</li>
              <li><strong>Enforce the Floor:</strong> Multiply total cushioned hours by your hourly price floor (45 hours &times; $100/hr = $4,500).</li>
            </ol>
            <p className="mt-3">
              If the client's absolute ceiling budget is $3,500, <strong>never lower your hourly rate</strong>. Instead, descope deliverables (e.g. drop the dark mode toggle or remove the multi-currency filter) so the required effort shrinks to 35 hours, maintaining your $100/hr floor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              5. Use Floorly's Free Interactive Calculators
            </h2>
            <p>
              To make this math effortless, we built two free, production-ready interactive tools:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 not-prose">
              <Link
                to="/tools/freelance-rate-calculator"
                className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 text-[#0047AB] font-bold text-sm mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Freelance Rate Calculator</span>
                </div>
                <p className="text-xs text-[#5B6676]">Input your rent, expenses, and billable capacity to discover your exact hourly price floor.</p>
              </Link>

              <Link
                to="/tools/project-price-calculator"
                className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 text-[#0047AB] font-bold text-sm mb-1">
                  <Scale className="w-4 h-4" />
                  <span>Project Price Calculator</span>
                </div>
                <p className="text-xs text-[#5B6676]">Apply risk multipliers and contingency buffers to calculate safe fixed project fees.</p>
              </Link>
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
              to="/blog/freelance-scope-of-work-template"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Client Scoping</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                Freelance Scope of Work (SOW) Template: Turning Vague Briefs into Clear Milestones
              </h3>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
