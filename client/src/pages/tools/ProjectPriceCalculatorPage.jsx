import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  Layers,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';
import { AdSenseBanner } from '../../components/common/AdSenseBanner';

const COMPLEXITY_TIERS = [
  { label: 'Standard / Familiar Stack', multiplier: 1.0, desc: 'Well-defined specs, standard technologies' },
  { label: 'Moderate Complexity', multiplier: 1.25, desc: 'Third-party APIs, custom components, responsive edge cases' },
  { label: 'High Complexity', multiplier: 1.5, desc: 'Real-time sync, auth flows, database migrations, heavy state' },
  { label: 'High-Risk / Ambiguous Brief', multiplier: 2.0, desc: 'Legacy codebase, unvetted client, tight deadline, shifting requirements' },
];

const CONTINGENCY_BUFFERS = [
  { label: '10% (Low Risk)', value: 0.10 },
  { label: '20% (Standard Freelance Buffer)', value: 0.20 },
  { label: '30% (High-Risk Scope)', value: 0.30 },
];

export function ProjectPriceCalculatorPage() {
  const [currencySymbol, setCurrencySymbol] = useState('$');
  const [estimatedHours, setEstimatedHours] = useState(35);
  const [baseHourlyRate, setBaseHourlyRate] = useState(75);
  const [complexityIndex, setComplexityIndex] = useState(1); // 1.25x
  const [contingencyBuffer, setContingencyBuffer] = useState(0.20); // 20%
  const [clientValueTier, setClientValueTier] = useState(1.2); // 1.2x value factor

  // Calculations
  const rawLabor = estimatedHours * baseHourlyRate;
  const complexityMultiplier = COMPLEXITY_TIERS[complexityIndex].multiplier;
  const laborWithComplexity = Math.round(rawLabor * complexityMultiplier);
  const contingencyAmount = Math.round(laborWithComplexity * contingencyBuffer);

  // 1. Safety Floor (Minimum Quote)
  const safetyFloor = laborWithComplexity + contingencyAmount;

  // 2. Target Market Price (adds 20% profit margin)
  const targetPrice = Math.round(safetyFloor * 1.2);

  // 3. Value-Based Price (adjusts for client business upside)
  const valueBasedPrice = Math.round(safetyFloor * clientValueTier * 1.25);

  // Recommended 50% deposit
  const upfrontDeposit = Math.round(targetPrice * 0.5);

  const fmt = (n) => `${currencySymbol}${n.toLocaleString('en-US')}`;

  return (
    <div
      style={{
        backgroundColor: 'var(--page, #FAF5EA)',
        color: 'var(--ink, #0E1A2B)',
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        lineHeight: 1.6,
        fontSize: '16px',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <header className="border-b border-[#E8E0CF] bg-[#FAF5EA]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Floorly Home">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/tools/freelance-rate-calculator" className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B]">
              Rate Calculator
            </Link>
            <Link
              to="/signup"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-[#0047AB] text-white hover:bg-[#003A8C] transition"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#CCE0FF] text-xs font-bold text-[#0047AB] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Project Scoping &amp; Price Floor Tool</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#0E1A2B] tracking-tight leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Freelance Project Price &amp; Risk Calculator
          </h1>
          <p className="text-base sm:text-lg text-[#5B6676] mt-4 leading-relaxed">
            Estimate hours × rate × complexity multipliers × scope contingency buffers to calculate your 3 proposal pricing tiers.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#F0E8D5] rounded-xl border border-[#E8E0CF] gap-1">
            {['$', '₹', '€', '£'].map((sym) => (
              <button
                key={sym}
                onClick={() => setCurrencySymbol(sym)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currencySymbol === sym ? 'bg-[#0047AB] text-white shadow-sm' : 'text-[#5B6676] hover:text-[#0E1A2B]'
                }`}
              >
                Currency ({sym})
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E0CF] shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#0E1A2B] border-b border-[#E8E0CF] pb-3">
              1. Project Scope &amp; Complexity Inputs
            </h2>

            {/* Estimated Hours */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Estimated Raw Scope (Hours)</span>
                <span className="text-[#0047AB] font-mono text-sm">{estimatedHours} hours</span>
              </div>
              <input
                type="range"
                min={5}
                max={150}
                step={5}
                value={estimatedHours}
                onChange={(e) => setEstimatedHours(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Pure technical execution time (coding, design, assembly).</span>
            </div>

            {/* Base Hourly Rate */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Base Hourly Rate</span>
                <span className="text-[#0047AB] font-mono text-sm">{fmt(baseHourlyRate)}/hr</span>
              </div>
              <input
                type="range"
                min={20}
                max={300}
                step={5}
                value={baseHourlyRate}
                onChange={(e) => setBaseHourlyRate(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Raw baseline rate before complexity or risk adjustments.</span>
            </div>

            {/* Complexity Tier */}
            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-2">
                Project Technical Complexity Tier
              </label>
              <div className="space-y-2">
                {COMPLEXITY_TIERS.map((tier, idx) => (
                  <button
                    key={tier.label}
                    onClick={() => setComplexityIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${
                      complexityIndex === idx
                        ? 'border-[#0047AB] bg-[#EBF3FF] text-[#0E1A2B] font-bold'
                        : 'border-[#E8E0CF] hover:border-[#CCD5E0] text-[#5B6676]'
                    }`}
                  >
                    <div>
                      <div>{tier.label} ({tier.multiplier}x)</div>
                      <div className="text-[11px] font-normal text-[#5B6676] mt-0.5">{tier.desc}</div>
                    </div>
                    {complexityIndex === idx && <CheckCircle2 className="w-4 h-4 text-[#0047AB] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Contingency Scope Buffer */}
            <div>
              <label className="block text-xs font-bold text-[#0E1A2B] mb-2">
                Scope Creep Contingency Buffer
              </label>
              <div className="grid grid-cols-3 gap-2">
                {CONTINGENCY_BUFFERS.map((b) => (
                  <button
                    key={b.label}
                    onClick={() => setContingencyBuffer(b.value)}
                    className={`p-2.5 rounded-xl border text-center text-xs transition ${
                      contingencyBuffer === b.value
                        ? 'border-[#0047AB] bg-[#0047AB] text-white font-bold'
                        : 'border-[#E8E0CF] hover:border-[#CCD5E0] text-[#5B6676]'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              <span className="text-xs text-[#5B6676] block mt-1.5">
                Every project has unstated client revisions. A 20% buffer protects your take-home rate.
              </span>
            </div>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF5EA] p-6 sm:p-8 rounded-2xl border-2 border-[#0047AB] shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-[#0047AB]">
                Your 3 Proposal Quote Tiers
              </span>

              {/* 3 Tiers Cards */}
              <div className="mt-4 space-y-3">
                {/* Tier 1: Floor */}
                <div className="p-4 rounded-xl bg-white border border-[#E8E0CF]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0E1A2B] flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#0047AB]" />
                      Tier 1: Safety Price Floor
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FAF5EA] text-[#0047AB] font-bold">
                      DO NOT GO BELOW
                    </span>
                  </div>
                  <div className="text-2xl font-black text-[#0E1A2B] mt-1">{fmt(safetyFloor)}</div>
                  <p className="text-[11px] text-[#5B6676] mt-0.5">
                    Your absolute break-even minimum (covers {estimatedHours}h × {complexityMultiplier}x + {Math.round(contingencyBuffer * 100)}% buffer).
                  </p>
                </div>

                {/* Tier 2: Target Fair Market */}
                <div className="p-4 rounded-xl bg-white border-2 border-[#0047AB] shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-[#0047AB] flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#0047AB]" />
                      Tier 2: Recommended Target Quote
                    </span>
                    <span className="text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded">
                      HEALTHY MARGIN
                    </span>
                  </div>
                  <div className="text-3xl font-black text-[#0047AB] mt-1">{fmt(targetPrice)}</div>
                  <p className="text-[11px] text-[#5B6676] mt-0.5">
                    The ideal quote to present to the client. Includes healthy studio profit.
                  </p>
                </div>

                {/* Tier 3: Value-Based Quote */}
                <div className="p-4 rounded-xl bg-white border border-[#E8E0CF]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0E1A2B] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                      Tier 3: Value-Based Premium
                    </span>
                  </div>
                  <div className="text-2xl font-black text-[#0E1A2B] mt-1">{fmt(valueBasedPrice)}</div>
                  <p className="text-[11px] text-[#5B6676] mt-0.5">
                    If this deliverable directly generates revenue or saves the client significant money.
                  </p>
                </div>
              </div>

              {/* Deposit Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] text-xs">
                <span className="font-bold text-[#0E1A2B]">Recommended Milestone Schedule:</span>
                <div className="mt-1 flex items-center justify-between font-semibold text-[#5B6676]">
                  <span>50% Upfront Deposit:</span>
                  <span className="text-[#0E1A2B] font-bold">{fmt(upfrontDeposit)}</span>
                </div>
                <div className="flex items-center justify-between font-semibold text-[#5B6676]">
                  <span>50% On Final Delivery:</span>
                  <span className="text-[#0E1A2B] font-bold">{fmt(targetPrice - upfrontDeposit)}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-[#E8E0CF]">
                <Link
                  to="/signup"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0047AB] text-white font-bold text-sm hover:bg-[#003A8C] transition shadow"
                >
                  <span>Build a Proposal with this Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-center text-[#5B6676] mt-2">
                  Floorly scopes the deliverables, creates the proposal, and helps you invoice by milestone with your own payment details or links.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Isolated AdSense Placement (Only on this free calculator tool) */}
        <AdSenseBanner className="mt-12" />

        {/* Answer Engine Block (AEO) */}
        <section className="mt-20 pt-12 border-t border-[#E8E0CF] max-w-3xl mx-auto space-y-6">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0E1A2B] text-center"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            How to Price Freelance Projects Without Losing Money
          </h2>

          <div className="bg-white p-6 rounded-xl border border-[#E8E0CF] space-y-3">
            <h3 className="text-base font-bold text-[#0E1A2B]">
              Why fixed-price projects fail without risk multipliers
            </h3>
            <p className="text-sm text-[#5B6676] leading-relaxed">
              When a client says "it's just a simple 2-page website," they rarely account for browser cross-compatibility, third-party authentication errors, image formatting, or content delays. Applying configurable complexity multipliers ensures your quote covers technical realities instead of optimistic guesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E0CF] space-y-3">
            <h3 className="text-base font-bold text-[#0E1A2B]">
              The 3-tier pricing strategy for client proposals
            </h3>
            <p className="text-sm text-[#5B6676] leading-relaxed">
              Never give clients a single take-it-or-leave-it price. Presenting 3 tiers (Safety Floor, Target Package, and Premium Expansion) reframes the conversation from "Should I hire this freelancer?" to "Which package suits my budget best?".
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
