import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { computePricing } from '../../utils/pricingEngine';

export function MiniPricingCalculator() {
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(100);
  const [complexity, setComplexity] = useState(1.25);
  const [contingency, setContingency] = useState(0.15);
  const [minFloor, setMinFloor] = useState(2500);

  // Safe number formatting helper
  const fmt = (val) => (typeof val === 'number' && !isNaN(val) ? val.toLocaleString() : '0');

  // Perform calculation
  const calculation = useMemo(() => {
    const baseLabor = hours * rate;
    const adjustedForComplexity = Math.round(baseLabor * complexity);
    const contingencyHours = Math.round(hours * contingency);
    const contingencyLabor = Math.round(contingencyHours * rate * complexity);
    const rawTotal = adjustedForComplexity + contingencyLabor;

    // Use computePricing to compute package tiers
    const pricing = computePricing(
      {
        estimatedHours: hours + contingencyHours,
        hourlyRate: rate,
        projectComplexity: complexity === 1.5 ? 'high' : complexity === 1.25 ? 'medium' : 'low',
        category: 'landing-pages',
      },
      {
        hourlyRate: rate,
        minHourlyRate: 30,
        categoryFloors: { 'landing-pages': minFloor },
        minProjectFee: minFloor,
        standardMultiplier: 1.25,
        premiumMultiplier: 1.6,
      }
    );

    const essential = pricing?.tiers?.essential ?? Math.max(rawTotal, minFloor);
    const standard = pricing?.tiers?.standard ?? Math.round(essential * 1.25);
    const premium = pricing?.tiers?.premium ?? Math.round(essential * 1.6);
    const floorHit = rawTotal < minFloor;
    const moneyProtected = floorHit ? minFloor - rawTotal : 0;

    return {
      baseLabor,
      adjustedForComplexity,
      contingencyHours,
      contingencyLabor,
      rawTotal,
      floorHit,
      moneyProtected,
      essential,
      standard,
      premium,
    };
  }, [hours, rate, complexity, contingency, minFloor]);

  return (
    <div className="my-10 bg-white rounded-2xl border-2 border-[var(--ink,#0E1A2B)] p-6 sm:p-8 shadow-[5px_5px_0_var(--ink,#0E1A2B)] not-prose">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[var(--line,#E8E0CF)]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider text-[var(--cobalt,#0047AB)] uppercase mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool &bull; Live Price Floor Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[var(--ink,#0E1A2B)]">
            Test Your Project Price Floor &amp; Package Tiers
          </h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 self-start sm:self-center">
          Deterministic Engine
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Sliders and Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Estimated Hours */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-[var(--ink,#0E1A2B)] mb-1.5">
              <span>Estimated Base Hours</span>
              <span className="font-mono text-base text-[var(--cobalt,#0047AB)]">{hours} hrs</span>
            </div>
            <input
              type="range"
              min={10}
              max={120}
              step={5}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-[var(--cobalt,#0047AB)] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[var(--muted,#5B6676)] mt-0.5">
              <span>10h (Quick sprint)</span>
              <span>60h (Standard build)</span>
              <span>120h (Complex MVP)</span>
            </div>
          </div>

          {/* Hourly Rate */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-[var(--ink,#0E1A2B)] mb-1.5">
              <span>Your Hourly Rate Floor</span>
              <span className="font-mono text-base text-[var(--cobalt,#0047AB)]">${rate} / hr</span>
            </div>
            <input
              type="range"
              min={40}
              max={250}
              step={5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[var(--cobalt,#0047AB)] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[var(--muted,#5B6676)] mt-0.5">
              <span>$40/hr (Junior)</span>
              <span>$100/hr (Mid-Senior)</span>
              <span>$250/hr (Specialist)</span>
            </div>
          </div>

          {/* Complexity & Contingency Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--ink,#0E1A2B)] uppercase tracking-wider mb-2">
                Technical Complexity
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: '1.0x', val: 1.0 },
                  { label: '1.25x', val: 1.25 },
                  { label: '1.5x', val: 1.5 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setComplexity(item.val)}
                    className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                      complexity === item.val
                        ? 'bg-[var(--ink,#0E1A2B)] text-white border-[var(--ink,#0E1A2B)] shadow-xs'
                        : 'bg-white text-[var(--ink,#0E1A2B)] border-[var(--line,#E8E0CF)] hover:border-[var(--ink,#0E1A2B)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--ink,#0E1A2B)] uppercase tracking-wider mb-2">
                Scope Contingency
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: '10%', val: 0.1 },
                  { label: '15%', val: 0.15 },
                  { label: '20%', val: 0.2 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setContingency(item.val)}
                    className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                      contingency === item.val
                        ? 'bg-[var(--cobalt,#0047AB)] text-white border-[var(--cobalt,#0047AB)] shadow-xs'
                        : 'bg-white text-[var(--ink,#0E1A2B)] border-[var(--line,#E8E0CF)] hover:border-[var(--cobalt,#0047AB)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Minimum Floor Limit */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-[var(--ink,#0E1A2B)] mb-1.5">
              <span>Minimum Acceptable Project Fee</span>
              <span className="font-mono text-base text-[var(--cobalt-dark,#003A8C)]">
                ${fmt(minFloor)}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={8000}
              step={250}
              value={minFloor}
              onChange={(e) => setMinFloor(Number(e.target.value))}
              className="w-full accent-[var(--sun,#FFC72C)] cursor-pointer"
            />
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="lg:col-span-5 bg-[var(--page,#FAF5EA)] rounded-xl p-5 sm:p-6 border border-[var(--line,#E8E0CF)] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[var(--muted,#5B6676)] uppercase">
              RECOMMENDED ESSENTIAL QUOTE
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[var(--ink,#0E1A2B)] font-display tracking-tight my-2">
              ${fmt(calculation.essential)}
            </div>

            <div className="text-xs text-[var(--muted,#5B6676)] space-y-1 mb-4">
              <div>Base labor: {hours}h &times; ${rate} = ${fmt(calculation.baseLabor)}</div>
              <div>Complexity ({complexity}x): ${fmt(calculation.adjustedForComplexity)}</div>
              <div>Contingency buffer (+{calculation.contingencyHours}h): +${fmt(calculation.contingencyLabor)}</div>
            </div>

            {/* Verdict Box */}
            <div
              className={`p-3.5 rounded-lg text-xs leading-relaxed font-medium mb-4 ${
                calculation.floorHit
                  ? 'bg-[var(--sun,#FFC72C)] text-[var(--ink,#0E1A2B)]'
                  : 'bg-blue-50 text-[var(--cobalt-dark,#003A8C)] border border-blue-200'
              }`}
            >
              {calculation.floorHit ? (
                <div>
                  <strong>Floor Activated:</strong> Calculated scope totaled ${fmt(calculation.rawTotal)}, but Floorly raised the proposal to your <strong>${fmt(minFloor)}</strong> floor.
                  <div className="mt-1 font-bold">Protected profit: +${fmt(calculation.moneyProtected)}</div>
                </div>
              ) : (
                <div>
                  <ShieldCheck className="w-4 h-4 inline-block mr-1 text-emerald-600" />
                  <strong>Safely Above Floor:</strong> Total proposal is safely above your ${fmt(minFloor)} baseline.
                </div>
              )}
            </div>

            {/* 3 Package Tiers */}
            <div className="pt-3 border-t border-[var(--line,#E8E0CF)]">
              <div className="text-[11px] font-mono font-bold uppercase text-[var(--muted,#5B6676)] mb-2">
                Generated Package Options
              </div>
              <div className="space-y-1.5 text-xs font-semibold">
                <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-[var(--line,#E8E0CF)]">
                  <span>Essential (Base Scope)</span>
                  <span className="font-mono text-[var(--cobalt,#0047AB)]">${fmt(calculation.essential)}</span>
                </div>
                <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-[var(--line,#E8E0CF)]">
                  <span>Standard (+ Support &amp; QA)</span>
                  <span className="font-mono text-[var(--cobalt,#0047AB)]">${fmt(calculation.standard)}</span>
                </div>
                <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-[var(--line,#E8E0CF)]">
                  <span>Premium (+ Priority SLA)</span>
                  <span className="font-mono text-[var(--cobalt,#0047AB)]">${fmt(calculation.premium)}</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/tools/project-price-calculator"
            className="mt-6 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[var(--cobalt,#0047AB)] text-white text-xs font-bold hover:bg-[var(--cobalt-dark,#003A8C)] transition-colors shadow-xs"
          >
            <span>Open Advanced Full Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
