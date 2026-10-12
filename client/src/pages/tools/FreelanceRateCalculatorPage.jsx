import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  TrendingUp,
  HelpCircle,
  Sparkles,
  DollarSign,
  Briefcase,
  Calendar,
  Layers,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';
import { AdSenseBanner } from '../../components/common/AdSenseBanner';

const CURRENCIES = {
  USD: { symbol: '$', code: 'USD', defaultIncome: 90000, defaultExpenses: 12000, step: 1000 },
  INR: { symbol: '₹', code: 'INR', defaultIncome: 1800000, defaultExpenses: 240000, step: 25000 },
  EUR: { symbol: '€', code: 'EUR', defaultIncome: 80000, defaultExpenses: 11000, step: 1000 },
  GBP: { symbol: '£', code: 'GBP', defaultIncome: 70000, defaultExpenses: 10000, step: 1000 },
};

export function FreelanceRateCalculatorPage() {
  const [currency, setCurrency] = useState('USD');
  const activeCurrency = CURRENCIES[currency];

  const [targetIncome, setTargetIncome] = useState(activeCurrency.defaultIncome);
  const [annualExpenses, setAnnualExpenses] = useState(activeCurrency.defaultExpenses);
  const [weeksOff, setWeeksOff] = useState(4); // Vacation + sick days
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25); // Realistic billable hours
  const [taxRatePercent, setTaxRatePercent] = useState(25);

  const handleCurrencyChange = (newCurr) => {
    setCurrency(newCurr);
    setTargetIncome(CURRENCIES[newCurr].defaultIncome);
    setAnnualExpenses(CURRENCIES[newCurr].defaultExpenses);
  };

  // Calculations
  const workingWeeks = Math.max(1, 52 - weeksOff);
  const annualBillableHours = workingWeeks * billableHoursPerWeek;

  // Total gross income needed = (targetIncome / (1 - taxRate)) + annualExpenses
  const taxMultiplier = Math.max(0.01, 1 - taxRatePercent / 100);
  const grossIncomeNeeded = Math.round(targetIncome / taxMultiplier + annualExpenses);

  // Minimum survival rate
  const minHourlyRate = Math.max(5, Math.round(grossIncomeNeeded / Math.max(1, annualBillableHours)));
  // Target rate with 20% safety margin
  const targetHourlyRate = Math.round(minHourlyRate * 1.25);
  // Premium rate with 50% margin
  const premiumHourlyRate = Math.round(minHourlyRate * 1.6);

  // Recommended project floor (minimum fee to accept any project, typically 10 billable hours)
  const minProjectFloor = minHourlyRate * 10;

  const fmt = (val) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: activeCurrency.code,
      maximumFractionDigits: 0,
    }).format(val);

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
      {/* Navigation */}
      <header className="border-b border-[#E8E0CF] bg-[#FAF5EA]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Floorly Home">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/pricing" className="text-sm font-semibold text-[#5B6676] hover:text-[#0E1A2B]">
              Pricing
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

      {/* Hero Header */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#CCE0FF] text-xs font-bold text-[#0047AB] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>100% Free Public Tool • No Signup Required</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#0E1A2B] tracking-tight leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Freelance Hourly Rate &amp; Project Floor Calculator
          </h1>
          <p className="text-base sm:text-lg text-[#5B6676] mt-4 leading-relaxed">
            Stop guessing your rates. Calculate your real minimum break-even hourly rate and project price floor based on your living expenses, taxes, and true billable capacity.
          </p>
        </div>

        {/* Currency Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#F0E8D5] rounded-xl border border-[#E8E0CF] gap-1">
            {Object.keys(CURRENCIES).map((curr) => (
              <button
                key={curr}
                onClick={() => handleCurrencyChange(curr)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currency === curr ? 'bg-[#0047AB] text-white shadow-sm' : 'text-[#5B6676] hover:text-[#0E1A2B]'
                }`}
              >
                {curr} ({CURRENCIES[curr].symbol})
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E0CF] shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#0E1A2B] border-b border-[#E8E0CF] pb-3">
              1. Your Financial &amp; Capacity Inputs
            </h2>

            {/* Target Income */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Target Annual Take-Home Income</span>
                <span className="text-[#0047AB] font-mono text-sm">{fmt(targetIncome)}</span>
              </div>
              <input
                type="range"
                min={activeCurrency.step * 10}
                max={activeCurrency.step * 250}
                step={activeCurrency.step}
                value={targetIncome}
                onChange={(e) => setTargetIncome(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Net income you need to cover personal lifestyle and savings.</span>
            </div>

            {/* Annual Overhead Expenses */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Annual Business Overhead</span>
                <span className="text-[#0047AB] font-mono text-sm">{fmt(annualExpenses)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={activeCurrency.step * 60}
                step={activeCurrency.step / 2}
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Software subscriptions, laptop, gear, co-working, accounting.</span>
            </div>

            {/* Billable Hours / Week */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Billable Hours per Week</span>
                <span className="text-[#0047AB] font-mono text-sm">{billableHoursPerWeek} hrs/week</span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                step={1}
                value={billableHoursPerWeek}
                onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">
                ⚠️ Most freelancers can only bill 20–25 hrs/week. The rest goes to sales, email, and admin.
              </span>
            </div>

            {/* Vacation & Sick Weeks */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Weeks Off per Year (Vacation, Holidays, Sick)</span>
                <span className="text-[#0047AB] font-mono text-sm">{weeksOff} weeks</span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={weeksOff}
                onChange={(e) => setWeeksOff(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Leaves {workingWeeks} active client-billing weeks per year.</span>
            </div>

            {/* Tax Rate Buffer */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0E1A2B] mb-1">
                <span>Estimated Taxes &amp; Self-Employment Buffer</span>
                <span className="text-[#0047AB] font-mono text-sm">{taxRatePercent}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={45}
                step={1}
                value={taxRatePercent}
                onChange={(e) => setTaxRatePercent(Number(e.target.value))}
                className="w-full accent-[#0047AB]"
              />
              <span className="text-xs text-[#5B6676]">Income taxes, freelance reserves, and retirement contributions.</span>
            </div>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF5EA] p-6 sm:p-8 rounded-2xl border-2 border-[#0047AB] shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-[#0047AB]">
                Your Calculated Pricing Floor
              </span>
              <div className="mt-3">
                <div className="text-xs font-bold text-[#5B6676]">MINIMUM HOURLY RATE (BREAK-EVEN)</div>
                <div
                  className="text-4xl sm:text-5xl font-black text-[#0E1A2B] mt-1"
                  style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
                >
                  {fmt(minHourlyRate)}
                  <span className="text-lg font-normal text-[#5B6676]">/hr</span>
                </div>
                <p className="text-xs text-[#5B6676] mt-1">
                  Charging below this rate means working at a financial loss after taxes and overhead.
                </p>
              </div>

              {/* Rate Tiers */}
              <div className="mt-6 pt-6 border-t border-[#E8E0CF] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5B6676]">Target Rate (+25% buffer):</span>
                  <span className="font-bold text-[#0E1A2B]">{fmt(targetHourlyRate)}/hr</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5B6676]">Premium Specialist Rate:</span>
                  <span className="font-bold text-[#0E1A2B]">{fmt(premiumHourlyRate)}/hr</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5B6676]">Standard Day Rate (8 hrs):</span>
                  <span className="font-bold text-[#0E1A2B]">{fmt(targetHourlyRate * 8)}/day</span>
                </div>
              </div>

              {/* Project Floor Box */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#E8E0CF]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0E1A2B]">
                  <ShieldAlert className="w-4 h-4 text-[#0047AB]" />
                  <span>Recommended Minimum Project Floor:</span>
                </div>
                <div className="text-2xl font-black text-[#0047AB] mt-1">
                  {fmt(minProjectFloor)}
                </div>
                <p className="text-[11px] text-[#5B6676] mt-0.5">
                  Never accept a project below this amount, regardless of how "small" the client claims it is.
                </p>
              </div>

              {/* High-Converting CTA */}
              <div className="mt-6 pt-6 border-t border-[#E8E0CF]">
                <Link
                  to="/signup"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0047AB] text-white font-bold text-sm hover:bg-[#003A8C] transition shadow"
                >
                  <span>Lock this floor in Floorly</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-center text-[#5B6676] mt-2">
                  Floorly automatically enforces this minimum price floor in your client proposals.
                </p>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] text-xs text-[#5B6676] space-y-1">
              <div>• Total Gross Revenue Needed: <strong className="text-[#0E1A2B]">{fmt(grossIncomeNeeded)}</strong></div>
              <div>• Annual Billable Capacity: <strong className="text-[#0E1A2B]">{annualBillableHours} hours/yr</strong></div>
            </div>
          </div>
        </div>

        {/* Isolated AdSense Placement (Only on this free calculator tool) */}
        <AdSenseBanner className="mt-12" />

        {/* Answer Engine FAQ Section (AEO) */}
        <section className="mt-20 pt-12 border-t border-[#E8E0CF] max-w-3xl mx-auto space-y-8">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0E1A2B] text-center"
            style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
          >
            Frequently Asked Questions on Freelance Rates
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
              <h3 className="text-base font-bold text-[#0E1A2B]">
                What is a freelance price floor?
              </h3>
              <p className="text-sm text-[#5B6676] mt-2 leading-relaxed">
                A freelance price floor is the minimum monetary quote you accept for a project to cover your living expenses and business costs. It accounts for non-billable overhead, time off, self-employment taxes, and software costs so your baseline financial requirements are met.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
              <h3 className="text-base font-bold text-[#0E1A2B]">
                Why can't freelancers bill 40 hours per week?
              </h3>
              <p className="text-sm text-[#5B6676] mt-2 leading-relaxed">
                Freelancers operate a full business by themselves. Significant work time is consumed by unbilled activities: client prospecting, scope drafting, contract negotiations, invoicing, and administration. Realistic weekly billable capacity often ranges between 20 and 25 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8E0CF]">
              <h3 className="text-base font-bold text-[#0E1A2B]">
                How does Floorly enforce a price floor?
              </h3>
              <p className="text-sm text-[#5B6676] mt-2 leading-relaxed">
                Floorly takes your predefined minimum hourly rate and risk criteria, analyzes client briefs with AI, and computes the project floor. When generating proposals, the system checks totals against your floor, helping you maintain your minimum pricing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
