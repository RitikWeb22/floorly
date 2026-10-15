import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  MessageSquare,
  Sparkles,
  Shield,
  Layers,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';

export function PreventScopeCreepPage() {
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
            to="/pricing"
            className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] px-3 py-1.5 transition-colors hidden sm:inline-block"
          >
            Pricing Plans
          </Link>
          <Link
            to="/signup"
            className="text-xs font-semibold bg-[#0047AB] text-white px-3.5 py-1.5 rounded-lg hover:bg-[#003A8C] transition-colors shadow-sm"
          >
            Create Defensible Proposals
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
          <span className="text-[#0E1A2B]">Prevent Scope Creep</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Contract Protection Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1A2B] leading-tight mb-5">
            How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics
          </h1>

          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed mb-6 font-normal">
            Scope creep is the single largest cause of project unprofitability for independent developers, designers, and boutique agencies. It rarely happens with dramatic arguments; it starts with innocent requests: "Could we also quickly add this button?" Here is how to eliminate uncompensated work using 7 contractual and communication tactics.
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
            <Shield className="w-4 h-4 text-[#0047AB]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[#5B6676] space-y-2 list-disc list-inside">
            <li><strong>The "Free Work" Fallacy:</strong> Freelancers do free work not because they want to, but because saying "no" feels confrontational during client Slack chats.</li>
            <li><strong>The Power of "Yes, and...":</strong> Never say a flat "no" to a client request. Say: <em>"Yes, we can absolutely build that! Here is the change order estimate and timeline adjustment for that feature."</em></li>
            <li><strong>Deterministic Price Floor Protection:</strong> By setting a non-negotiable price floor in Floorly, your proposals and subsequent change orders cannot be quoted beneath your sustainable profit baseline.</li>
          </ul>
        </aside>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-[#0E1A2B] space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              1. The Anatomy of Scope Creep: How $5,000 Projects Turn Into Disasters
            </h2>
            <p>
              Scope creep rarely enters a project as a massive new module. It creeps into your calendar in increments of 30 minutes, an hour, or an afternoon:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-[#5B6676]">
              <li><em>"Can you just make the logo pulse on hover and add sound effects?"</em></li>
              <li><em>"Our marketing lead wants to add 4 new fields to the registration modal."</em></li>
              <li><em>"We decided to switch from Stripe to a regional payment provider with custom webhooks."</em></li>
            </ul>
            <p className="mt-3">
              Individually, each task sounds trivial. But across a 4-week engagement, 15 small requests add up to 28 unbilled hours. If your project fee was $5,000 based on 50 hours of work ($100/hr), you just worked 78 hours—diluting your real hourly wage down to $64/hr, eroding your profit margins, and delaying your next client intake.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              2. The 4 Forms of Scope Creep in Tech Projects
            </h2>
            <p>
              Understanding how scope creep manifests allows you to catch it before it destroys your margins:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-1">1. Scope Expansion</h3>
                <p className="text-xs text-[#5B6676]">The client asks for entirely new deliverables that were never part of the initial brief (e.g. &ldquo;We also need an iOS mobile app&rdquo;).</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-1">2. Feature Creep</h3>
                <p className="text-xs text-[#5B6676]">An agreed-upon deliverable grows in complexity (e.g. &ldquo;Search&rdquo; becomes &ldquo;Algorithmic fuzzy elastic search with faceted filters&rdquo;).</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-1">3. Hope Creep</h3>
                <p className="text-xs text-[#5B6676]">The freelancer falls behind schedule and hopes that extra unbilled hours will magically catch them up without alerting the client.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-1">4. Effort Creep</h3>
                <p className="text-xs text-[#5B6676]">Third-party dependencies or external API changes require unexpected architectural rework not budgeted in the quote.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              3. Seven Practical Tactics to Defend Against Scope Creep
            </h2>

            <div className="space-y-6 mt-4 not-prose">
              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 1: Mandatory Deliverable Inclusions AND Explicit Exclusions</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  Never write a contract that only lists what you are building. Dedicate a prominent section titled <strong>"Items Explicitly Out of Scope"</strong>. For example, explicitly state: <em>"Mobile native apps, custom data migrations, automated email newsletter workflows, and copywriting are not included."</em> When the client requests an excluded item, point directly to this agreed clause.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 2: Capped Revision Rounds with Calendar Expiry</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  Define revision caps mathematically: <em>"Each milestone includes up to TWO (2) consolidated rounds of feedback. Feedback must be provided in writing within 5 business days of staging deployment. Revisions must align with the original brief."</em> If the client takes 3 weeks to respond, the milestone automatically locks as accepted.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 3: The "Yes, And..." Change Order Script</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  When a client asks for extra work, don't get defensive. Use this battle-tested communication script:
                </p>
                <div className="bg-[#FAF5EA] p-4 rounded-lg mt-3 text-xs text-[#0E1A2B] border border-[#E8E0CF] font-mono">
                  "That's a fantastic idea and will definitely improve user onboarding! That falls outside the deliverables scoped in Milestone 2. I would love to build it for you—I can prepare a quick Change Order for $650 and add 3 business days to our delivery schedule. Would you like me to send that over?"
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 4: Apply a Deterministic 15% Scope Contingency Buffer</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  Fixed quotes calculated purely on best-case hours fail 100% of the time. When calculating hours in your proposal, build in a 10% to 20% contingency cushion to absorb minor revisions and testing edge cases without requiring constant renegotiations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 5: Single Point of Client Contact</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  In corporate and agency client projects, multiple stakeholders (the founder, product manager, and designer) often send conflicting feedback. Stipulate in your SOW that only ONE designated project sponsor has authority to request revisions and sign off on milestones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 6: Milestone Invoicing Tied to Functional Staging</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  Never work on net-30 calendar payment terms. Tie payments strictly to milestone deliverables (e.g., 50% upfront deposit, 30% staging demo, 20% final deployment). Do not write a single line of code for Milestone 2 until Milestone 1 invoice is fully cleared in your bank account.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-base text-[#0E1A2B] mb-2">Tactic 7: Deliverable-Locked AGENTS.md Specifications</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">
                  If the client or their team uses Cursor or Copilot, commit an <code>AGENTS.md</code> file locking down the scoped features. This prevents AI agents from generating out-of-scope code during project handoffs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              4. How Floorly Enforces These Guardrails Automatically
            </h2>
            <p>
              Protecting yourself against scope creep shouldn't require hiring an expensive contract attorney. Floorly is built from the ground up as a contract defense system for solo professionals:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-[#5B6676]">
              <li><strong>Brief Scoping:</strong> Automatically categorizes client messages into deliverables, exclusions, and technical risks.</li>
              <li><strong>Price Floor Calculation:</strong> Automatically checks every quote and change order against your minimum sustainable rate so discounts cannot breach your baseline.</li>
              <li><strong>Direct Payment Links:</strong> Milestone invoices link directly to your Stripe, PayPal, or UPI payment channels with zero intermediary commission.</li>
            </ul>

            <div className="bg-[#0047AB]/5 border border-[#0047AB]/20 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
              <div>
                <h3 className="font-bold text-sm text-[#0047AB]">Protect Your Next Client Project</h3>
                <p className="text-xs text-[#5B6676] mt-0.5">Generate scoped proposals with built-in revision caps and price floors.</p>
              </div>
              <Link
                to="/signup"
                className="bg-[#0047AB] hover:bg-[#003A8C] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Create Free Proposal
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              Frequently Asked Questions About Scope Creep
            </h2>
            <div className="space-y-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-2">What if the client says a new request was &ldquo;implied&rdquo; in the original scope?</h3>
                <p className="text-xs text-[#5B6676] leading-relaxed">Refer back to the written SOW document. Point to the specific inclusions and exclusions list. Explain gently: &ldquo;Our initial pricing and timeline were calculated strictly based on the items itemized in Section 1. To maintain high code quality and hit our launch deadline, any item not listed there requires a change order.&rdquo;</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF]">
                <h3 className="font-bold text-sm text-[#0E1A2B] mb-2">How do I handle scope creep on an hourly contract?</h3>
                <p className="text-xs text-[#5B6676] leading-relaxed">Even on hourly contracts, clients have mental budget caps. Whenever total logged hours approach 75% of the original estimate, send a progress report detailing completed deliverables and remaining tasks. If new requests have expanded the backlog, explicitly warn the client about the updated cost estimate before proceeding.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 pt-8 border-t border-[#E8E0CF]">
          <h2 className="text-xl font-bold text-[#0E1A2B] mb-6">Related Freelance Engineering Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/blog/how-to-price-a-freelance-project"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Pricing Strategy</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                How to Price a Freelance Project: Hourly Floors, Fixed Fees &amp; Break-Even Math
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
