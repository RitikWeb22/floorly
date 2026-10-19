import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  FileText,
  DollarSign,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Layers,
  ChevronDown,
  ChevronUp,
  Lock,
  Zap,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';
import { AdSenseBanner } from '../../components/common/AdSenseBanner';

const PRESET_TEMPLATES = {
  webdev: {
    name: 'Web Application / SaaS MVP',
    clientName: 'Acme Health Inc.',
    projectTitle: 'Patient Telehealth Portal & Scheduling MVP',
    brief: 'Client needs a full-stack React + Node.js portal where patients can register, book appointments, and pay consultation fees. Need Stripe integration, calendar syncing, and HIPAA-compliant data storage.',
    hours: 55,
    hourlyRate: 85,
    complexity: 1.25,
    deliverables: [
      'Responsive React frontend with patient onboarding flow',
      'Node.js REST API with authentication and JWT role management',
      'Stripe Elements checkout for instant consultation payments',
      'Google Calendar API two-way synchronization',
      'PostgreSQL database schemas with encryption at rest',
      'Production deployment on AWS/Vercel with SSL and monitoring',
    ],
    outOfScope: [
      'Native iOS / Android mobile application development',
      'Direct EHR/EMR legacy integration (quoted under Phase 2)',
      'Ongoing customer support and live user chat hosting',
    ],
  },
  design: {
    name: 'UI/UX & Brand Design System',
    clientName: 'FinPulse Media',
    projectTitle: 'B2B Fintech Dashboard Redesign & Design System',
    brief: 'Redesign existing analytics dashboard to improve usability and retention. Create a comprehensive Figma design system with light/dark modes, 40+ responsive components, and clickable desktop/mobile prototypes.',
    hours: 40,
    hourlyRate: 75,
    complexity: 1.0,
    deliverables: [
      'Discovery audit & user journey mapping for 5 core flows',
      'Interactive Figma component library (light and dark mode)',
      'High-fidelity interactive prototypes (desktop and mobile web)',
      'Design tokens documentation for engineering handoff',
      'Two revision rounds per approved design milestone',
    ],
    outOfScope: [
      'Frontend React / HTML implementation',
      'Marketing collateral (brochures, business cards, pitch decks)',
      'Third-party usability testing participant recruit fees',
    ],
  },
  seo: {
    name: 'SEO & Content Growth Engine',
    clientName: 'NorthStar Logistics',
    projectTitle: 'Enterprise B2B Organic Search & Content Architecture',
    brief: 'Perform technical SEO audit, fix crawl budget and indexing bottlenecks, identify 50 high-intent transactional keywords, and draft 8 pillar articles with FAQ/HowTo schema markup.',
    hours: 30,
    hourlyRate: 80,
    complexity: 1.0,
    deliverables: [
      'Comprehensive Core Web Vitals & technical crawl audit',
      'Keyword gap analysis & competitor content mapping (50 clusters)',
      '8 search-optimized technical pillar articles with custom schemas',
      'Internal linking matrix and canonical taxonomy setup',
      'Monthly reporting dashboard via Google Search Console & GA4',
    ],
    outOfScope: [
      'Paid Google Search Ads management or PPC spend budget',
      'Website codebase migration or server infrastructure changes',
      'Outreach link acquisition purchasing or PR distributions',
    ],
  },
};

const CURRENCIES = {
  USD: { symbol: '$', code: 'USD' },
  EUR: { symbol: '€', code: 'EUR' },
  GBP: { symbol: '£', code: 'GBP' },
  INR: { symbol: '₹', code: 'INR' },
  AUD: { symbol: 'A$', code: 'AUD' },
  CAD: { symbol: 'C$', code: 'CAD' },
};

export function AiProposalGeneratorPage() {
  const [selectedPreset, setSelectedPreset] = useState('webdev');
  const [currency, setCurrency] = useState('USD');
  const [clientName, setClientName] = useState(PRESET_TEMPLATES.webdev.clientName);
  const [projectTitle, setProjectTitle] = useState(PRESET_TEMPLATES.webdev.projectTitle);
  const [brief, setBrief] = useState(PRESET_TEMPLATES.webdev.brief);
  const [estimatedHours, setEstimatedHours] = useState(PRESET_TEMPLATES.webdev.hours);
  const [hourlyRate, setHourlyRate] = useState(PRESET_TEMPLATES.webdev.hourlyRate);
  const [complexity, setComplexity] = useState(PRESET_TEMPLATES.webdev.complexity);
  const [deliverables, setDeliverables] = useState(PRESET_TEMPLATES.webdev.deliverables);
  const [outOfScope, setOutOfScope] = useState(PRESET_TEMPLATES.webdev.outOfScope);
  const [milestoneType, setMilestoneType] = useState('50_50'); // '50_50' | '33_33_34' | '100_upfront'

  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const activeCurrency = CURRENCIES[currency];

  const handlePresetChange = (presetKey) => {
    setSelectedPreset(presetKey);
    const data = PRESET_TEMPLATES[presetKey];
    setClientName(data.clientName);
    setProjectTitle(data.projectTitle);
    setBrief(data.brief);
    setEstimatedHours(data.hours);
    setHourlyRate(data.hourlyRate);
    setComplexity(data.complexity);
    setDeliverables(data.deliverables);
    setOutOfScope(data.outOfScope);
  };

  // Floor Price calculations
  const rawLabor = estimatedHours * hourlyRate;
  const adjustedLabor = Math.round(rawLabor * complexity);
  const contingencyBuffer = Math.round(adjustedLabor * 0.15); // 15% safety buffer

  // Tier 1: Minimum Acceptable Price Floor
  const floorPrice = adjustedLabor + contingencyBuffer;
  // Tier 2: Recommended Market Price (adds 25% profit margin)
  const recommendedPrice = Math.round(floorPrice * 1.25);
  // Tier 3: Premium Turnkey Price (adds 60% margin + priority SLA)
  const premiumPrice = Math.round(floorPrice * 1.6);

  const fmt = (val) => `${activeCurrency.symbol}${val.toLocaleString('en-US')}`;

  // Milestone splits
  const calculateMilestones = (total) => {
    if (milestoneType === '50_50') {
      return [
        { name: 'Milestone 1: Project Kickoff & Discovery', amount: Math.round(total * 0.5), percent: '50%' },
        { name: 'Milestone 2: Final Acceptance & Asset Delivery', amount: Math.round(total * 0.5), percent: '50%' },
      ];
    }
    if (milestoneType === '33_33_34') {
      return [
        { name: 'Milestone 1: Deposit & Architecture Approval', amount: Math.round(total * 0.33), percent: '33%' },
        { name: 'Milestone 2: Functional Prototype & Review', amount: Math.round(total * 0.33), percent: '33%' },
        { name: 'Milestone 3: Final Handoff & Production Deploy', amount: Math.round(total * 0.34), percent: '34%' },
      ];
    }
    return [
      { name: 'Full Pre-Payment: 100% Upfront Retainer', amount: total, percent: '100%' },
    ];
  };

  const currentMilestones = calculateMilestones(recommendedPrice);

  const generateProposalMarkdown = () => {
    return `# Freelance Project Proposal: ${projectTitle}
**Prepared for:** ${clientName}
**Generated via:** Floorly Proposal Studio (https://floorlystudio.me)
**Currency:** ${currency}

---

## 1. Executive Summary & Objective
This proposal outlines the strategy, scope of deliverables, and execution schedule for **${projectTitle}**. Our objective is to deliver a robust, high-performance solution that directly resolves core business bottlenecks while maintaining strict production standards.

### Client Problem Statement:
${brief}

---

## 2. Itemized Deliverables & Scope of Work
${deliverables.map((item, idx) => `${idx + 1}. [x] ${item}`).join('\n')}

---

## 3. Explicit Project Exclusions (Out of Scope)
To prevent unbilled scope creep, the following items are strictly excluded from this agreement unless formalized through a written Change Order:
${outOfScope.map((item) => `- ${item}`).join('\n')}

---

## 4. Quotation Tiers & Price Floor Guardrails
- **Minimum Acceptable Floor Rate:** ${fmt(floorPrice)} (Covers baseline labor, contingency buffer, and operational overhead)
- **★ Recommended Project Package:** ${fmt(recommendedPrice)} (Standard turnaround, comprehensive testing, 2 revision cycles)
- **Premium Turnkey Tier:** ${fmt(premiumPrice)} (Priority SLA, 14-day warranty, extended post-launch support)

---

## 5. Milestone Invoicing & Payment Terms
${currentMilestones.map((m, i) => `- **${m.name}:** ${fmt(m.amount)} (${m.percent})`).join('\n')}

- **Payment Methods:** Direct ACH / Wire / UPI / Card (Zero middleman platform cut).
- **Invoicing Grace Period:** Net 7 days from milestone sign-off.
- **Revision Policy:** Includes up to 2 review cycles per milestone. Additional requests billed at ${fmt(hourlyRate)}/hour.
- **Copyright Ownership:** Full intellectual property transfers upon 100% receipt of final payment.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateProposalMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const faqs = [
    {
      q: 'What is an AI freelance proposal generator?',
      a: 'An AI freelance proposal generator is specialized software that transforms client briefs, emails, or project requirements into professional, structured proposals. Unlike generic text writers, modern generators calculate deliverables, estimate labor hours, incorporate scope-creep guardrails, and enforce price floors to prevent underquoting.',
    },
    {
      q: 'Why is a price floor necessary in freelance proposals?',
      a: 'According to independent contracting studies, over 64% of freelancers experience scope creep and unbilled revisions on fixed-fee projects. A price floor sets an unbreakable minimum monetary threshold covering taxes, software overhead, and contingency risk (typically 15-20%) so you never lose money on a job.',
    },
    {
      q: 'How does Floorly differ from PandaDoc, Bonsai, and Venngage?',
      a: 'PandaDoc and Bonsai offer static templates that still require manual price guessing. Venngage only creates visual presentation slides. Floorly combines AI brief parsing with a deterministic pricing engine that mathematically checks your minimum acceptable floor, structures milestone invoices, and generates AI coding agent instructions (AGENTS.md).',
    },
    {
      q: 'What should every winning freelance proposal include?',
      a: 'A winning proposal includes 6 non-negotiable sections: (1) Executive Summary mirroring the client\'s problem, (2) Detailed Scope of Work with deliverables, (3) Explicit Exclusions (Out of Scope) to eliminate scope creep, (4) Tiered Pricing Options (Basic vs. Recommended vs. Premium), (5) Payment Milestones with upfront deposit, and (6) Revision & IP Transfer Terms.',
    },
    {
      q: 'Can I export this proposal directly to a PDF or client web link?',
      a: 'Yes. You can copy the clean Markdown draft with 1-click, print or save as a polished PDF using your browser dialog, or create a free Floorly account to send an interactive web proposal link with direct payment acceptance.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--page, #FAF5EA)',
        color: 'var(--ink, #0E1A2B)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        fontSize: '16px',
        minHeight: '100vh',
      }}
    >
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://floorlystudio.me/tools/freelance-proposal-generator#software',
                name: 'Floorly AI Freelance Proposal & Scope Generator',
                url: 'https://floorlystudio.me/tools/freelance-proposal-generator',
                applicationCategory: 'BusinessApplication',
                applicationSubCategory: 'Freelance Proposal Generator & Price Floor Calculator',
                operatingSystem: 'All modern browsers (Web, Desktop, Mobile)',
                description:
                  'Free AI freelance proposal generator that converts client briefs into scoped proposals with price floors, milestone schedules, and scope-creep protection.',
                featureList: [
                  'AI Client Brief to Scoped Proposal Converter',
                  'Deterministic Freelance Price Floor Guardrail',
                  'Milestone Invoicing Schedule Generator',
                  'Itemized Deliverables & Out-of-Scope Clause Builder',
                  'One-Click Markdown & Printable PDF Export',
                ],
                offers: {
                  '@type': 'Offer',
                  price: '0.00',
                  priceCurrency: 'USD',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://floorlystudio.me/tools/freelance-proposal-generator#faq',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.a,
                  },
                })),
              },
              {
                '@type': 'HowTo',
                '@id': 'https://floorlystudio.me/tools/freelance-proposal-generator#howto',
                name: 'How to Generate a Winning Freelance Proposal with a Price Floor',
                description:
                  'Step-by-step methodology to turn an unformatted client brief into a locked, professional proposal that protects your profit margin.',
                step: [
                  {
                    '@type': 'HowToStep',
                    position: 1,
                    name: 'Select Industry or Paste Raw Client Brief',
                    text: 'Choose an established template or paste unstructured project notes from client emails, WhatsApp, or discovery calls.',
                  },
                  {
                    '@type': 'HowToStep',
                    position: 2,
                    name: 'Set Realistic Hours and Baseline Hourly Rate',
                    text: 'Input billable effort hours and baseline rate to compute production labor costs.',
                  },
                  {
                    '@type': 'HowToStep',
                    position: 3,
                    name: 'Apply Complexity Multipliers and Contingency Buffer',
                    text: 'Add a 15% to 25% safety buffer to safeguard against ambiguous specs and third-party dependencies.',
                  },
                  {
                    '@type': 'HowToStep',
                    position: 4,
                    name: 'Define Milestone Invoicing & Explicit Exclusions',
                    text: 'Choose your payment cadence (e.g. 50/50 or 33/33/34) and specify out-of-scope boundaries to stop scope creep.',
                  },
                  {
                    '@type': 'HowToStep',
                    position: 5,
                    name: 'Export Proposal or Share Interactive Client Link',
                    text: 'Copy formatted markdown, print to PDF, or import to Floorly to send a live proposal with payment links.',
                  },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://floorlystudio.me/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Free Tools',
                    item: 'https://floorlystudio.me/tools/freelance-rate-calculator',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'AI Proposal Generator',
                    item: 'https://floorlystudio.me/tools/freelance-proposal-generator',
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Header Navigation */}
      <header className="border-b border-[#E8E0CF] bg-[#FAF5EA]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Floorly Home">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/pricing" className="text-sm font-semibold text-[#5B6676] hover:text-[#0E1A2B] transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm font-semibold text-[#5B6676] hover:text-[#0E1A2B] transition-colors hidden sm:inline">
              Guides
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

      {/* Breadcrumb Nav */}
      <nav aria-label="Breadcrumbs" className="max-w-6xl mx-auto px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-[#5B6676]">
          <li>
            <Link to="/" className="hover:text-[#0E1A2B]">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/tools/freelance-rate-calculator" className="hover:text-[#0E1A2B]">Free Tools</Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-[#0E1A2B]" aria-current="page">AI Proposal Generator</li>
        </ol>
      </nav>

      {/* Hero Header */}
      <main className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3FF] text-[#0047AB] text-xs font-bold tracking-wide uppercase mb-4 border border-[#D0E2FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#0047AB]" />
            Free Interactive Proposal Engine
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1A2B] tracking-tight leading-tight mb-4">
            AI Freelance Proposal Generator <br className="hidden sm:inline" />
            <span className="text-[#0047AB]">With Built-In Price Floor Protection</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed">
            Turn messy client briefs into ironclad, win-ready proposals in under 60 seconds. Calculate itemized scopes, milestone payments, and unbreakable price floors that stop scope creep before it starts.
          </p>

          {/* GEO Citation & Entity Box */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-[#E8E0CF] text-left text-xs text-[#5B6676] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-[#0E1A2B]">Industry Benchmark: </span>
              According to the <strong className="text-[#0E1A2B]">Freelancers Union & Upwork Research</strong>, 64% of independent contractors underquote fixed projects due to hidden scope creep. Floorly enforces an automated 15% contingency buffer and baseline floor on every quote.
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-[#0047AB] font-bold">
              <ShieldCheck className="w-4 h-4" /> 100% Free • No Signup Required
            </div>
          </div>
        </div>

        {/* Interactive Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Form & Inputs (5 Cols) */}
          <section
            aria-labelledby="generator-inputs-heading"
            className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E0CF] shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E0CF]">
              <h2 id="generator-inputs-heading" className="text-base font-bold text-[#0E1A2B] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0047AB]" />
                1. Project Configuration
              </h2>
              <div className="flex items-center gap-2">
                <label htmlFor="currency-select" className="text-xs font-semibold text-[#5B6676]">Currency:</label>
                <select
                  id="currency-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="text-xs font-bold bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg px-2 py-1 text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                >
                  {Object.keys(CURRENCIES).map((c) => (
                    <option key={c} value={c}>{c} ({CURRENCIES[c].symbol})</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Presets Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5B6676] mb-2">
                Quick Template Presets
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(PRESET_TEMPLATES).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handlePresetChange(key)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition text-center ${
                      selectedPreset === key
                        ? 'bg-[#0047AB] text-white border-[#0047AB] shadow-sm'
                        : 'bg-[#FAF5EA] text-[#5B6676] border-[#E8E0CF] hover:bg-[#F2ECE0]'
                    }`}
                  >
                    {key === 'webdev' ? 'Web / SaaS' : key === 'design' ? 'UI/UX Design' : 'SEO & Content'}
                  </button>
                ))}
              </div>
            </div>

            {/* Client & Project Info */}
            <div className="space-y-3">
              <div>
                <label htmlFor="client-name" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                  Client / Company Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full text-sm px-3 py-2 bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="project-title" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                  Proposal Project Title
                </label>
                <input
                  id="project-title"
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full text-sm px-3 py-2 bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                  placeholder="e.g. Next.js SaaS MVP"
                />
              </div>

              <div>
                <label htmlFor="brief-text" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                  Client Brief / Core Objective
                </label>
                <textarea
                  id="brief-text"
                  rows={3}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  className="w-full text-sm px-3 py-2 bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                  placeholder="Paste raw email notes or project requirements..."
                />
              </div>
            </div>

            {/* Hourly & Effort Calculation */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label htmlFor="estimated-hours" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                  Estimated Hours
                </label>
                <input
                  id="estimated-hours"
                  type="number"
                  min="5"
                  max="500"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(Math.max(1, Number(e.target.value)))}
                  className="w-full text-sm px-3 py-2 bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                />
              </div>
              <div>
                <label htmlFor="hourly-rate" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                  Hourly Rate ({activeCurrency.symbol})
                </label>
                <input
                  id="hourly-rate"
                  type="number"
                  min="10"
                  max="1000"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(5, Number(e.target.value)))}
                  className="w-full text-sm px-3 py-2 bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
                />
              </div>
            </div>

            {/* Complexity & Multiplier */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="complexity-select" className="text-xs font-semibold text-[#0E1A2B]">
                  Complexity &amp; Tech Risk
                </label>
                <span className="text-xs font-bold text-[#0047AB]">{complexity}x Multiplier</span>
              </div>
              <select
                id="complexity-select"
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="w-full text-xs font-medium bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg px-3 py-2 text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
              >
                <option value={1.0}>Standard Scope (1.0x - Clear specs, known tech)</option>
                <option value={1.25}>Moderate Risk (1.25x - API integrations, responsive edge cases)</option>
                <option value={1.5}>High Complexity (1.5x - Legacy codebase, auth, payment flows)</option>
                <option value={2.0}>Rush / Shifting Requirements (2.0x - Tight deadline, ambiguous)</option>
              </select>
            </div>

            {/* Milestone Payment Model */}
            <div>
              <label htmlFor="milestone-model" className="block text-xs font-semibold text-[#0E1A2B] mb-1">
                Milestone Payment Structure
              </label>
              <select
                id="milestone-model"
                value={milestoneType}
                onChange={(e) => setMilestoneType(e.target.value)}
                className="w-full text-xs font-medium bg-[#FAF5EA] border border-[#E8E0CF] rounded-lg px-3 py-2 text-[#0E1A2B] focus:outline-none focus:ring-2 focus:ring-[#0047AB]"
              >
                <option value="50_50">50% Upfront Deposit / 50% Final Delivery (Standard)</option>
                <option value="33_33_34">33% Deposit / 33% Mid-Sprint / 34% Final Handoff</option>
                <option value="100_upfront">100% Upfront Retainer (Best for quick sprints)</option>
              </select>
            </div>
          </section>

          {/* Right Column: Live Generated Proposal Preview (7 Cols) */}
          <section
            aria-labelledby="proposal-preview-heading"
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E0CF] shadow-md space-y-6"
          >
            {/* Header Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E8E0CF]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0047AB] block">
                  Live Proposal Preview
                </span>
                <h2 id="proposal-preview-heading" className="text-xl font-bold text-[#0E1A2B]">
                  {projectTitle}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FAF5EA] hover:bg-[#E8E0CF] text-[#0E1A2B] border border-[#E8E0CF] transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied Draft!' : 'Copy Markdown'}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FAF5EA] hover:bg-[#E8E0CF] text-[#0E1A2B] border border-[#E8E0CF] transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / PDF
                </button>
              </div>
            </div>

            {/* Price Floor Guardrail Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                <span className="text-[11px] font-bold uppercase text-[#5B6676] block mb-1">
                  1. Break-Even Floor
                </span>
                <div className="text-lg font-black text-[#0E1A2B]">{fmt(floorPrice)}</div>
                <p className="text-[11px] text-[#5B6676] mt-0.5">Absolute lowest rate to prevent taking a loss</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EBF3FF] border-2 border-[#0047AB] relative">
                <span className="absolute -top-2.5 right-3 bg-[#0047AB] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                  Recommended
                </span>
                <span className="text-[11px] font-bold uppercase text-[#0047AB] block mb-1">
                  2. Target Quote
                </span>
                <div className="text-xl font-black text-[#0047AB]">{fmt(recommendedPrice)}</div>
                <p className="text-[11px] text-[#0047AB]/80 mt-0.5">Standard 25% margin + 15% contingency</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                <span className="text-[11px] font-bold uppercase text-[#5B6676] block mb-1">
                  3. Premium Turnkey
                </span>
                <div className="text-lg font-black text-[#0E1A2B]">{fmt(premiumPrice)}</div>
                <p className="text-[11px] text-[#5B6676] mt-0.5">Priority timeline + extended post-launch support</p>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6676] mb-1.5">
                Executive Summary &amp; Objective
              </h3>
              <p className="text-sm text-[#0E1A2B] leading-relaxed bg-[#FAF5EA]/60 p-3 rounded-lg border border-[#E8E0CF]">
                This project proposal covers the engineering and delivery of <strong>{projectTitle}</strong> for <strong>{clientName}</strong>. Our primary objective is to execute all deliverables to production grade, addressing the client’s core objective: &quot;<em>{brief}</em>&quot; within an estimated timeline of {estimatedHours} billable hours.
              </p>
            </div>

            {/* Scope of Deliverables */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6676] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                Included Deliverables
              </h3>
              <ul className="space-y-1.5 text-xs text-[#0E1A2B]">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#FAF5EA]/50 p-2 rounded border border-[#E8E0CF]">
                    <span className="font-bold text-[#0047AB] shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explicit Exclusions */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D9381E] mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D9381E]" />
                Project Exclusions (Strictly Out of Scope)
              </h3>
              <ul className="space-y-1 text-xs text-[#5B6676]">
                {outOfScope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D9381E] font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestone Payment Schedule */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6676] mb-2 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#0047AB]" />
                Milestone Invoicing Schedule ({fmt(recommendedPrice)} Total)
              </h3>
              <div className="space-y-2">
                {currentMilestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF5EA] border border-[#E8E0CF] text-xs"
                  >
                    <span className="font-semibold text-[#0E1A2B]">{m.name}</span>
                    <span className="font-bold text-[#0047AB] bg-white px-2 py-0.5 rounded border border-[#E8E0CF]">
                      {fmt(m.amount)} ({m.percent})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to Floorly App */}
            <div className="pt-4 border-t border-[#E8E0CF] bg-[#F7FAFE] p-5 rounded-xl border border-[#D0E2FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#0E1A2B] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#0047AB]" />
                  Want to send this proposal directly to your client?
                </h4>
                <p className="text-xs text-[#5B6676] mt-0.5">
                  Import this into Floorly Studio to get client e-acceptance, direct payment links, and zero platform cuts.
                </p>
              </div>
              <Link
                to="/signup"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0047AB] text-white text-xs font-bold hover:bg-[#003A8C] transition shadow-sm"
              >
                Send via Floorly
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>

        {/* AdSense Placement */}
        <AdSenseBanner slot="7849301245" format="auto" />

        {/* Deep Content Section 1: AEO & GEO Foundations */}
        <section className="my-16 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E0CF] shadow-sm">
          {/* AEO Direct Answer Block */}
          <div className="p-4 rounded-xl bg-[#EBF3FF] border border-[#D0E2FF] mb-8">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0047AB] block mb-1">
              Direct Answer (AEO Summary)
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#0E1A2B] leading-relaxed">
              A freelance proposal is a legally binding project document that specifies objectives, itemized deliverables, timelines, pricing tiers, and payment milestones. Winning proposals differentiate themselves by setting explicit scope exclusions and calculated price floors to ensure freelancers never work below break-even rates.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#0E1A2B] mb-4">
            Why 64% of Freelancers Underquote (And How a Price Floor Solves It)
          </h2>
          <p className="text-sm sm:text-base text-[#5B6676] leading-relaxed mb-6">
            Most freelancers estimate project pricing by performing back-of-the-napkin math: multiplying raw hours by an arbitrary hourly rate. This standard approach fails because it ignores non-billable administrative hours, self-employment taxes, tool subscriptions, and inevitable revision cycles. When unexpected client requests appear, the effective hourly rate frequently plunges below minimum wage.
          </p>

          {/* Key Takeaways Box (GEO Block) */}
          <div className="p-5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E1A2B] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0047AB]" />
              Key Takeaways for Proposal Strategy
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0E1A2B]">
              <li className="flex items-start gap-2">
                <span className="text-[#0047AB] font-bold">•</span>
                <span><strong>Include 15-20% Scope Contingency:</strong> Prevents unbudgeted loss from ambiguous requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0047AB] font-bold">•</span>
                <span><strong>Define What is NOT Included:</strong> Listing out-of-scope tasks eliminates 80% of client disputes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0047AB] font-bold">•</span>
                <span><strong>Always Present 3 Pricing Tiers:</strong> Shifts the client’s mindset from &quot;Should I hire them?&quot; to &quot;Which package do I want?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0047AB] font-bold">•</span>
                <span><strong>Enforce 50% Upfront Deposits:</strong> Guarantees commitment and covers upfront operational expenses.</span>
              </li>
            </ul>
          </div>

          {/* Competitor Comparison Table */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-[#0E1A2B] mb-3">
              Floorly Proposal Studio vs. Legacy Competitors
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6676] mb-4">
              How Floorly compares to HelloBonsai, PandaDoc, and Venngage for modern freelance professionals:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#E8E0CF]">
                <thead>
                  <tr className="bg-[#FAF5EA] text-[#0E1A2B]">
                    <th className="p-3 border border-[#E8E0CF] font-bold">Feature / Capability</th>
                    <th className="p-3 border border-[#E8E0CF] font-bold text-[#0047AB]">Floorly Studio</th>
                    <th className="p-3 border border-[#E8E0CF] font-bold text-[#5B6676]">HelloBonsai</th>
                    <th className="p-3 border border-[#E8E0CF] font-bold text-[#5B6676]">PandaDoc</th>
                    <th className="p-3 border border-[#E8E0CF] font-bold text-[#5B6676]">Venngage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E0CF] text-[#0E1A2B]">
                  <tr>
                    <td className="p-3 font-medium">Deterministic Price Floor Guard</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50">✓ Built-in Server Floor</td>
                    <td className="p-3 text-[#5B6676]">✗ Manual Guessing</td>
                    <td className="p-3 text-[#5B6676]">✗ None</td>
                    <td className="p-3 text-[#5B6676]">✗ None</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">AI Client Brief Scoping</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50">✓ Auto-extracts scope & risks</td>
                    <td className="p-3 text-[#5B6676]">✗ Static Templates</td>
                    <td className="p-3 text-[#5B6676]">✗ Basic AI Writer</td>
                    <td className="p-3 text-[#5B6676]">Partial (Slide maker)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Transaction Commission Cut</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50">0% (Keep 100%)</td>
                    <td className="p-3 text-[#5B6676]">Credit card fees</td>
                    <td className="p-3 text-[#5B6676]">Payment gateway fees</td>
                    <td className="p-3 text-[#5B6676]">N/A (No invoicing)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Client-Specific AGENTS.md Export</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50">✓ Generates AI Coding Guides</td>
                    <td className="p-3 text-[#5B6676]">✗ None</td>
                    <td className="p-3 text-[#5B6676]">✗ None</td>
                    <td className="p-3 text-[#5B6676]">✗ None</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Free Access without Signup</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50">✓ Instant 100% Free Tool</td>
                    <td className="p-3 text-[#5B6676]">✗ Paywall / Trial</td>
                    <td className="p-3 text-[#5B6676]">✗ Requires Signup</td>
                    <td className="p-3 text-[#5B6676]">Partial Free Credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Methodology */}
        <section className="my-16">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0E1A2B] text-center mb-4">
            How to Write a Winning Freelance Proposal in 5 Steps
          </h2>
          <p className="text-center text-sm sm:text-base text-[#5B6676] max-w-2xl mx-auto mb-10">
            Follow this battle-tested structure used by top 1% independent consultants to close 5-figure projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#0047AB] font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">Mirror the Client’s Pain</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Do not start with an autobiography of your skills. Start by restating the client’s exact bottleneck in their own terminology to prove you paid close attention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#0047AB] font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">Itemize Clear Deliverables</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Break work down into tangible, measurable milestones. Avoid vague terms like &quot;work on app&quot;; use concrete lines like &quot;Stripe checkout API integration&quot;.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#0047AB] font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">Establish Out-of-Scope Walls</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Explicitly write what is NOT included. Stating upfront that revisions beyond 2 rounds are billable saves dozens of unpaid hours later.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#0047AB] font-black text-sm flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">Present 3 Strategic Tiers</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Offer a Minimum Floor, Recommended Package, and Premium Turnkey tier. Clients rarely pick the cheapest when the value of the recommended tier is clear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#0047AB] font-black text-sm flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">Lock Milestone Deposits</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Never start work without a 50% upfront deposit. Tie subsequent payments to clear milestone approvals, not arbitrary calendar dates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E0CF] shadow-sm bg-gradient-to-br from-[#FAF5EA] to-[#EBF3FF]">
              <div className="w-8 h-8 rounded-full bg-[#0047AB] text-white font-black text-sm flex items-center justify-center mb-4">
                ★
              </div>
              <h3 className="text-base font-bold text-[#0E1A2B] mb-2">One-Click Client Acceptance</h3>
              <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                Give your client a friction-free way to sign and pay immediately via interactive web proposals on Floorly Studio.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Frequently Asked Questions (Accordion) */}
        <section className="my-16 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E0CF] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0E1A2B] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6676]">
              Everything you need to know about freelance proposals, scope protection, and pricing calculations.
            </p>
          </div>

          <div className="divide-y divide-[#E8E0CF] max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-[#0E1A2B] hover:text-[#0047AB] transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0047AB]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#5B6676]" />}
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-[#5B6676] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Internal Links & Free Tools Hub */}
        <section className="my-16 p-8 rounded-2xl bg-[#FAF5EA] border border-[#E8E0CF] text-center">
          <h2 className="text-xl font-bold text-[#0E1A2B] mb-3">
            Explore More Free Freelance Growth Tools
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6676] max-w-xl mx-auto mb-6">
            Complement your proposals with our interactive financial calculators and comprehensive contracting guides.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link
              to="/tools/freelance-rate-calculator"
              className="px-4 py-2 bg-white rounded-xl border border-[#E8E0CF] text-[#0E1A2B] hover:border-[#0047AB] transition shadow-sm"
            >
              Hourly Rate &amp; Floor Calculator →
            </Link>
            <Link
              to="/tools/project-price-calculator"
              className="px-4 py-2 bg-white rounded-xl border border-[#E8E0CF] text-[#0E1A2B] hover:border-[#0047AB] transition shadow-sm"
            >
              Fixed Project Price Calculator →
            </Link>
            <Link
              to="/blog/how-to-price-a-freelance-project"
              className="px-4 py-2 bg-white rounded-xl border border-[#E8E0CF] text-[#0E1A2B] hover:border-[#0047AB] transition shadow-sm"
            >
              How to Price a Project Guide →
            </Link>
            <Link
              to="/blog/freelance-scope-of-work-template"
              className="px-4 py-2 bg-white rounded-xl border border-[#E8E0CF] text-[#0E1A2B] hover:border-[#0047AB] transition shadow-sm"
            >
              Scope of Work Template →
            </Link>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0E1A2B] to-[#1E293B] text-white text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFC72C] mb-2 block">
            Never Undercharge Again
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Run Your Entire Freelance Studio on Autopilot?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Create AI proposals, enforce automated price floors, track project margin profitability, and issue milestone invoices with zero transaction cuts.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0047AB] hover:bg-[#003A8C] text-white text-sm font-bold transition shadow-lg"
          >
            Create Your Free Floorly Account
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
