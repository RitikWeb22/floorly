import React from 'react';

export function PriceFloorDiagram() {
  return (
    <figure className="my-10 not-prose">
      <div className="bg-white rounded-2xl border-2 border-[var(--ink,#0E1A2B)] p-4 sm:p-6 shadow-[5px_5px_0_var(--ink,#0E1A2B)] overflow-hidden">
        <svg
          viewBox="0 0 840 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[var(--ink,#0E1A2B)]"
          aria-label="Deterministic Price Floor Architecture Diagram"
        >
          {/* Background grid dots */}
          <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E8E0CF" />
          </pattern>
          <rect width="840" height="420" fill="url(#dotGrid)" rx="12" />

          {/* Title bar */}
          <rect x="20" y="20" width="800" height="44" rx="8" fill="#FAF5EA" stroke="#E8E0CF" strokeWidth="1.5" />
          <circle cx="42" cy="42" r="5" fill="#EF4444" />
          <circle cx="58" cy="42" r="5" fill="#F59E0B" />
          <circle cx="74" cy="42" r="5" fill="#10B981" />
          <text x="96" y="47" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#0E1A2B">
            FLOORLY DETERMINISTIC PRICING PIPELINE
          </text>
          <text x="790" y="47" textAnchor="end" fontFamily="sans-serif" fontSize="11" fill="#5B6676">
            v2.4 &bull; Specification Architecture
          </text>

          {/* Step 1: Baseline Floor Box */}
          <g transform="translate(40, 95)">
            <rect width="210" height="135" rx="10" fill="#FFFFFF" stroke="#0E1A2B" strokeWidth="2" />
            <rect x="0" y="0" width="210" height="32" rx="10" fill="#0047AB" />
            <text x="12" y="21" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#FFFFFF">
              1. ECONOMIC PRICE FLOOR
            </text>
            <text x="14" y="54" fontFamily="monospace" fontSize="11" fill="#5B6676">
              Living Needs: $60k/yr
            </text>
            <text x="14" y="72" fontFamily="monospace" fontSize="11" fill="#5B6676">
              Overhead: $12k/yr
            </text>
            <text x="14" y="90" fontFamily="monospace" fontSize="11" fill="#5B6676">
              Taxes: 30% self-employed
            </text>
            <path d="M 12 102 L 198 102" stroke="#E8E0CF" strokeWidth="1" />
            <text x="14" y="122" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#0047AB">
              Hourly Floor = $100 / hr
            </text>
          </g>

          {/* Arrow 1 to 2 */}
          <path d="M 250 162 L 285 162" stroke="#0E1A2B" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="285,157 295,162 285,167" fill="#0E1A2B" />

          {/* Step 2: Scoping & Risk Multipliers */}
          <g transform="translate(295, 95)">
            <rect width="230" height="135" rx="10" fill="#FFFFFF" stroke="#0E1A2B" strokeWidth="2" />
            <rect x="0" y="0" width="230" height="32" rx="10" fill="#0E1A2B" />
            <text x="12" y="21" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#FFFFFF">
              2. SCOPE &amp; RISK MULTIPLIERS
            </text>
            <text x="14" y="54" fontFamily="sans-serif" fontSize="11" fill="#5B6676">
              Base Estimated Work: 40 hrs
            </text>
            <text x="14" y="72" fontFamily="sans-serif" fontSize="11" fill="#D97706" fontWeight="bold">
              Complexity Factor: &times; 1.25x
            </text>
            <text x="14" y="90" fontFamily="sans-serif" fontSize="11" fill="#047857" fontWeight="bold">
              Scope Buffer: +15% (+6h)
            </text>
            <path d="M 12 102 L 218 102" stroke="#E8E0CF" strokeWidth="1" />
            <text x="14" y="122" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#0E1A2B">
              Cushioned Labor = 56 hrs
            </text>
          </g>

          {/* Arrow 2 to 3 */}
          <path d="M 525 162 L 560 162" stroke="#0E1A2B" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="560,157 570,162 560,167" fill="#0E1A2B" />

          {/* Step 3: Server Floor Validation */}
          <g transform="translate(570, 95)">
            <rect width="230" height="135" rx="10" fill="#FAF5EA" stroke="#0E1A2B" strokeWidth="2" />
            <rect x="0" y="0" width="230" height="32" rx="10" fill="#FFC72C" />
            <text x="12" y="21" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#0E1A2B">
              3. SERVER ENFORCEMENT
            </text>
            <text x="14" y="54" fontFamily="sans-serif" fontSize="11" fill="#5B6676">
              Calculated Labor: $5,600
            </text>
            <text x="14" y="72" fontFamily="sans-serif" fontSize="11" fill="#5B6676">
              Category Minimum: $2,500
            </text>
            <text x="14" y="90" fontFamily="sans-serif" fontSize="11" fill="#047857" fontWeight="bold">
              Rule: max(Calculated, Floor)
            </text>
            <path d="M 12 102 L 218 102" stroke="#E8E0CF" strokeWidth="1" />
            <text x="14" y="122" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#0047AB">
              Locked Essential Quote: $5,600
            </text>
          </g>

          {/* Downward Connector to Final Step */}
          <path d="M 685 230 L 685 260 L 420 260 L 420 280" stroke="#0E1A2B" strokeWidth="2" fill="none" />
          <polygon points="415,280 420,290 425,280" fill="#0E1A2B" />

          {/* Step 4: Three-Tier Milestone Output */}
          <g transform="translate(100, 290)">
            <rect width="640" height="105" rx="12" fill="#FFFFFF" stroke="#0047AB" strokeWidth="2" />
            <rect x="0" y="0" width="640" height="28" rx="12" fill="#0047AB" />
            <text x="20" y="19" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#FFFFFF">
              4. FINAL THREE-TIER CLIENT PROPOSAL SCHEDULE
            </text>

            <g transform="translate(25, 42)">
              <rect width="180" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="14" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#0E1A2B">Essential Tier</text>
              <text x="14" y="38" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#0047AB">$5,600</text>
              <text x="100" y="35" fontFamily="sans-serif" fontSize="10" fill="#64748B">Base Deliverables</text>
            </g>

            <g transform="translate(230, 42)">
              <rect width="180" height="50" rx="6" fill="#FEFCE8" stroke="#FDE047" strokeWidth="1.5" />
              <text x="14" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#854D0E">Standard Tier (Most Popular)</text>
              <text x="14" y="38" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#0E1A2B">$7,000</text>
              <text x="95" y="35" fontFamily="sans-serif" fontSize="10" fill="#64748B">+ QA &amp; 30d Support</text>
            </g>

            <g transform="translate(435, 42)">
              <rect width="180" height="50" rx="6" fill="#F0FDF4" stroke="#86EFAC" />
              <text x="14" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#166534">Premium Tier</text>
              <text x="14" y="38" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#047857">$8,950</text>
              <text x="95" y="35" fontFamily="sans-serif" fontSize="10" fill="#64748B">+ Priority SLA</text>
            </g>
          </g>
        </svg>
      </div>
      <figcaption className="text-center text-xs text-[var(--muted,#5B6676)] mt-3">
        Figure 1: The deterministic price floor architecture converts living expenses and billable capacity into high-margin package proposals.
      </figcaption>
    </figure>
  );
}
