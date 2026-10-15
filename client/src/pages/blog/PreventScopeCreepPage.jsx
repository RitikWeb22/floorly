import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  MessageSquare,
  Sparkles,
  Shield,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { BlogPostLayout } from '../../components/blog/BlogPostLayout';

export function PreventScopeCreepPage() {
  const tocItems = [
    { id: 'anatomy-of-scope-creep', title: '1. The Anatomy of Scope Creep' },
    { id: 'four-forms-of-creep', title: '2. The 4 Forms of Scope Creep' },
    { id: 'seven-tactics', title: '3. 7 Practical Defense Tactics' },
    { id: 'floorly-enforcement', title: '4. Automated Guardrails with Floorly' },
    { id: 'scope-creep-faq', title: '5. Frequently Asked Questions' },
  ];

  const relatedArticles = [
    {
      title: 'How to Price a Freelance Project: Hourly Floors, Fixed Fees & The Break-Even Math',
      category: 'Pricing Strategy',
      href: '/blog/how-to-price-a-freelance-project',
    },
    {
      title: 'Freelance Scope of Work (SOW) Template: Turning Vague Briefs into Clear Milestones',
      category: 'Client Scoping',
      href: '/blog/freelance-scope-of-work-template',
    },
  ];

  return (
    <BlogPostLayout
      title="How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics"
      subtitle="Scope creep is the single largest cause of project unprofitability for independent developers, designers, and boutique agencies. It rarely happens with dramatic arguments; it starts with innocent requests. Here is how to eliminate uncompensated work using 7 contractual and communication tactics."
      category="Contract Protection Strategy"
      publishDate="October 15, 2026"
      readTime="10 min read &bull; 1,950 words"
      tocItems={tocItems}
      relatedArticles={relatedArticles}
    >
      {/* Key Takeaways Callout */}
      <section className="not-prose mb-10">
        <aside className="bg-white rounded-2xl border-l-4 border-[var(--cobalt,#0047AB)] border border-[var(--line,#E8E0CF)] p-6 shadow-xs">
          <h2 className="text-base font-bold font-display text-[var(--ink,#0E1A2B)] mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[var(--cobalt,#0047AB)]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[var(--muted,#5B6676)] space-y-2 list-disc list-inside">
            <li><strong>The "Free Work" Fallacy:</strong> Freelancers do free work not because they want to, but because saying "no" feels confrontational during client Slack chats.</li>
            <li><strong>The Power of "Yes, and...":</strong> Never say a flat "no" to a client request. Say: <em>"Yes, we can absolutely build that! Here is the change order estimate and timeline adjustment for that feature."</em></li>
            <li><strong>Deterministic Price Floor Protection:</strong> By setting a non-negotiable price floor in Floorly, your proposals and subsequent change orders cannot be quoted beneath your sustainable profit baseline.</li>
          </ul>
        </aside>
      </section>

      {/* Section 1 */}
      <section id="anatomy-of-scope-creep" className="scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          1. The Anatomy of Scope Creep: How $5,000 Projects Turn Into Losses
        </h2>
        <p>
          Scope creep rarely enters a project as a massive new module. It creeps into your calendar in increments of 30 minutes, an hour, or an afternoon:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-[var(--ink,#0E1A2B)]">
          <li><em>&ldquo;Can you just make the logo pulse on hover and add sound effects?&rdquo;</em></li>
          <li><em>&ldquo;Our marketing lead wants to add 4 new fields to the registration modal.&rdquo;</em></li>
          <li><em>&ldquo;We decided to switch from Stripe to a regional payment provider with custom webhooks.&rdquo;</em></li>
        </ul>
        <p className="mt-4">
          Individually, each task sounds trivial. But across a 4-week engagement, 15 small requests add up to 28 unbilled hours. If your project fee was $5,000 based on 50 hours of work ($100/hr), you just worked 78 hours—diluting your real hourly wage down to $64/hr, eroding your profit margins, and delaying your next client intake.
        </p>
      </section>

      {/* Section 2 */}
      <section id="four-forms-of-creep" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          2. The 4 Forms of Scope Creep in Tech Projects
        </h2>
        <p>
          Understanding how scope creep manifests allows you to catch it before it destroys your margins:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mb-1">1. Scope Expansion</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">The client asks for entirely new deliverables that were never part of the initial brief (e.g. &ldquo;We also need an iOS mobile app&rdquo;).</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mb-1">2. Feature Creep</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">An agreed-upon deliverable grows in complexity (e.g. &ldquo;Search&rdquo; becomes &ldquo;Algorithmic fuzzy elastic search with faceted filters&rdquo;).</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mb-1">3. Hope Creep</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">The freelancer falls behind schedule and hopes that extra unbilled hours will magically catch them up without alerting the client.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-sm text-[var(--ink,#0E1A2B)] mb-1">4. Effort Creep</h3>
            <p className="text-xs text-[var(--muted,#5B6676)]">Third-party dependencies or external API changes require unexpected architectural rework not budgeted in the quote.</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="seven-tactics" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          3. Seven Practical Tactics to Defend Against Scope Creep
        </h2>

        <div className="space-y-6 my-6 not-prose">
          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 1: Mandatory Deliverable Inclusions AND Explicit Exclusions</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              Never write a contract that only lists what you are building. Dedicate a prominent section titled <strong>"Items Explicitly Out of Scope"</strong>. For example, explicitly state: <em>"Mobile native apps, custom data migrations, automated email newsletter workflows, and copywriting are not included."</em> When the client requests an excluded item, point directly to this agreed clause.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 2: Capped Revision Rounds with Calendar Expiry</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              Define revision caps mathematically: <em>"Each milestone includes up to TWO (2) consolidated rounds of feedback. Feedback must be provided in writing within 5 business days of staging deployment. Revisions must align with the original brief."</em> If the client takes 3 weeks to respond, the milestone automatically locks as accepted.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 3: The "Yes, And..." Change Order Script</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              When a client asks for extra work, don't get defensive. Use this battle-tested communication script:
            </p>
            <div className="bg-[var(--page,#FAF5EA)] p-4 rounded-lg mt-3 text-xs sm:text-sm text-[var(--ink,#0E1A2B)] border border-[var(--line,#E8E0CF)] font-mono leading-relaxed">
              &ldquo;That's a fantastic idea and will definitely improve user onboarding! That falls outside the deliverables scoped in Milestone 2. I would love to build it for you—I can prepare a quick Change Order for $650 and add 3 business days to our delivery schedule. Would you like me to send that over?&rdquo;
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 4: Apply a Deterministic 15% Scope Contingency Buffer</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              Fixed quotes calculated purely on best-case hours fail almost every time. When calculating hours in your proposal, build in a 10% to 20% contingency cushion to absorb minor revisions and testing edge cases without requiring constant renegotiations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 5: Single Point of Client Contact</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              In corporate and agency client projects, multiple stakeholders (the founder, product manager, and designer) often send conflicting feedback. Stipulate in your SOW that only ONE designated project sponsor has authority to request revisions and sign off on milestones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 6: Milestone Invoicing Tied to Functional Staging</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              Never work on net-30 calendar payment terms. Tie payments strictly to milestone deliverables (e.g., 50% upfront deposit, 30% staging demo, 20% final deployment). Do not write a single line of code for Milestone 2 until Milestone 1 invoice is fully cleared in your bank account.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--line,#E8E0CF)] shadow-xs">
            <h3 className="font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">Tactic 7: Deliverable-Locked AGENTS.md Specifications</h3>
            <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
              If the client or their team uses Cursor or Copilot, commit an <code>AGENTS.md</code> file locking down the scoped features. This prevents AI agents from generating out-of-scope code during project handoffs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="floorly-enforcement" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-4">
          4. How Floorly Enforces These Guardrails Automatically
        </h2>
        <p>
          Protecting yourself against scope creep shouldn't require hiring an expensive contract attorney. Floorly is built from the ground up as a contract defense system for solo professionals:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-[var(--ink,#0E1A2B)]">
          <li><strong>Brief Scoping:</strong> Automatically categorizes client messages into deliverables, exclusions, and technical risks.</li>
          <li><strong>Price Floor Calculation:</strong> Automatically checks every quote and change order against your minimum sustainable rate so discounts cannot breach your baseline.</li>
          <li><strong>Direct Payment Links:</strong> Milestone invoices link directly to your Stripe, PayPal, or UPI payment channels with zero intermediary commission.</li>
        </ul>

        <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-6 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <div>
            <h3 className="font-bold text-base text-[var(--cobalt,#0047AB)] font-display">Protect Your Next Client Project</h3>
            <p className="text-xs sm:text-sm text-[var(--muted,#5B6676)] mt-1">Generate scoped proposals with built-in revision caps and price floors.</p>
          </div>
          <Link
            to="/signup"
            className="bg-[var(--cobalt,#0047AB)] hover:bg-[var(--cobalt-dark,#003A8C)] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors whitespace-nowrap shadow-xs"
          >
            Create Free Proposal
          </Link>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section id="scope-creep-faq" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[var(--ink,#0E1A2B)] tracking-tight mb-6">
          5. Frequently Asked Questions About Scope Creep
        </h2>
        <div className="space-y-4 not-prose">
          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all" open>
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>What if the client says a new request was &ldquo;implied&rdquo; in the original scope?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Refer back to the written SOW document. Point to the specific inclusions and exclusions list. Explain gently: &ldquo;Our initial pricing and timeline were calculated strictly based on the items itemized in Section 1. To maintain high code quality and hit our launch deadline, any item not listed there requires a change order.&rdquo;
            </p>
          </details>

          <details className="group bg-white rounded-xl border border-[var(--line,#E8E0CF)] p-5 transition-all">
            <summary className="font-display font-semibold text-base sm:text-lg text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4">
              <span>How do I handle scope creep on an hourly contract?</span>
              <span className="text-[var(--cobalt,#0047AB)] font-bold transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="text-sm text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
              Even on hourly contracts, clients have mental budget caps. Whenever total logged hours approach 75% of the original estimate, send a progress report detailing completed deliverables and remaining tasks. If new requests have expanded the backlog, explicitly warn the client about the updated cost estimate before proceeding.
            </p>
          </details>
        </div>
      </section>
    </BlogPostLayout>
  );
}
