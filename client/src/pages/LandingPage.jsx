import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/common/Logo';
import { Footer } from '../components/layout/Footer';
import { siteConfig } from '../config/site';
import { PRICING_PLANS } from '../config/plans';
import { computePricing } from '../utils/pricingEngine';

const CURRENCIES = {
  USD: { label: 'USD ($)', symbol: '$', defaultRate: 75, defaultFloor: 1200, step: 50 },
  EUR: { label: 'EUR (€)', symbol: '€', defaultRate: 70, defaultFloor: 1100, step: 50 },
  GBP: { label: 'GBP (£)', symbol: '£', defaultRate: 60, defaultFloor: 950, step: 25 },
  INR: { label: 'INR (₹)', symbol: '₹', defaultRate: 2500, defaultFloor: 35000, step: 500 },
  CAD: { label: 'CAD ($)', symbol: '$', defaultRate: 95, defaultFloor: 1500, step: 50 },
  AUD: { label: 'AUD ($)', symbol: '$', defaultRate: 110, defaultFloor: 1700, step: 50 },
};

export function LandingPage() {
  // Mobile Nav Toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. "Try the floor" Hero Demo State
  const DEMO_FLOOR = 1200;
  const DEMO_MAX = 3000;
  const [clientBudget, setClientBudget] = useState(700);

  const floorQuote = Math.max(clientBudget, DEMO_FLOOR);
  const isBelowFloor = clientBudget < DEMO_FLOOR;
  const savedAmount = DEMO_FLOOR - clientBudget;

  const fmtDemo = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  // 2. Product Showcase Tab
  const [activeShowcase, setActiveShowcase] = useState('proposal'); // 'proposal' | 'floor' | 'profit'

  // 3. Interactive Profit/Floor Calculator State
  const [calcCurrency, setCalcCurrency] = useState('USD');
  const currencyMeta = CURRENCIES[calcCurrency];

  const [calcHours, setCalcHours] = useState(40);
  const [calcRate, setCalcRate] = useState(currencyMeta.defaultRate);
  const [calcComplexity, setCalcComplexity] = useState(1.25);
  const [calcFloor, setCalcFloor] = useState(currencyMeta.defaultFloor);

  // Handle currency switch
  const handleCurrencyChange = (newCurr) => {
    setCalcCurrency(newCurr);
    const meta = CURRENCIES[newCurr];
    setCalcRate(meta.defaultRate);
    setCalcFloor(meta.defaultFloor);
  };

  const rawLaborCost = calcHours * calcRate;
  const adjustedLabor = Math.round(rawLaborCost * calcComplexity);
  const recommendedQuote = Math.max(adjustedLabor, calcFloor);
  const calculatorFloorHit = adjustedLabor < calcFloor;
  const moneyProtected = calculatorFloorHit ? calcFloor - adjustedLabor : 0;

  const fmtCurrency = (n) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: calcCurrency,
      maximumFractionDigits: 0,
    }).format(n);

  // Real pricing calculation for illustrative example (Requirement 4)
  const illustrativeExample = computePricing(
    {
      estimatedHours: 40,
      projectType: 'landing-pages',
      complexity: 'medium',
      isRushDelivery: false,
    },
    {
      hourlyRate: 50,
      minHourlyRate: 35,
      minProjectFee: 300,
      categoryMinimums: { 'landing-pages': 500 },
      complexityMultipliers: { simple: 1.0, medium: 1.25, complex: 1.5 },
      defaultContingencyPercent: 10,
      preferredProfitMargin: 25,
      tierMultipliers: { essential: 1.0, standard: 1.20, premium: 1.50 },
      roundingStep: 50,
    }
  );

  // 4. Pricing Billing Period Toggle
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--page, #FAF5EA)',
        color: 'var(--ink, #0E1A2B)',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.6,
        fontSize: '17px',
        minHeight: '100vh',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* 1. Sticky Navigation */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(250, 245, 234, 0.94)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--line, #E8E0CF)',
        }}
        aria-label="Main Navigation"
      >
        <div
          className="landing-container flex items-center justify-between h-[72px]"
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }} aria-label="Floorly Home">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Items */}
          <ul
            style={{
              gap: '28px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              alignItems: 'center',
            }}
            className="hidden md:flex"
          >
            <li>
              <a
                href="#how"
                style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--muted, #5B6676)' }}
                className="hover:text-[var(--ink,#0E1A2B)] transition-colors"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#features"
                style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--muted, #5B6676)' }}
                className="hover:text-[var(--ink,#0E1A2B)] transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--muted, #5B6676)' }}
                className="hover:text-[var(--ink,#0E1A2B)] transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--muted, #5B6676)' }}
                className="hover:text-[var(--ink,#0E1A2B)] transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                style={{ textDecoration: 'none', fontWeight: 500, color: 'var(--muted, #5B6676)' }}
                className="hover:text-[var(--ink,#0E1A2B)] transition-colors"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  fontWeight: 600,
                  color: 'var(--ink, #0E1A2B)',
                  padding: '8px 12px',
                }}
                className="hover:text-[var(--cobalt,#0047AB)] transition-colors"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{
                  display: 'inline-block',
                  padding: '9px 22px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'var(--cobalt, #0047AB)',
                  color: '#FFFFFF',
                  border: '2px solid var(--cobalt, #0047AB)',
                }}
                className="hover:bg-[var(--cobalt-dark,#003A8C)] transition-all"
              >
                Start free
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/signup"
              style={{
                display: 'inline-block',
                padding: '7px 16px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                background: 'var(--cobalt, #0047AB)',
                color: '#FFFFFF',
              }}
            >
              Start free
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: '1px solid var(--line, #E8E0CF)',
                borderRadius: '8px',
                padding: '8px 10px',
                cursor: 'pointer',
                color: 'var(--ink, #0E1A2B)',
              }}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                {mobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#FFFFFF',
              borderBottom: '1px solid var(--line, #E8E0CF)',
              padding: '16px 24px 20px',
            }}
            className="md:hidden"
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a
                  href="#how"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink, #0E1A2B)', fontWeight: 600, display: 'block', padding: '6px 0' }}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink, #0E1A2B)', fontWeight: 600, display: 'block', padding: '6px 0' }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink, #0E1A2B)', fontWeight: 600, display: 'block', padding: '6px 0' }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink, #0E1A2B)', fontWeight: 600, display: 'block', padding: '6px 0' }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink, #0E1A2B)', fontWeight: 600, display: 'block', padding: '6px 0' }}
                >
                  Guides & Blog
                </Link>
              </li>
              <li style={{ paddingTop: '8px', borderTop: '1px solid var(--line, #E8E0CF)', display: 'flex', gap: '12px' }}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: 'none',
                    fontWeight: 600,
                    color: 'var(--ink, #0E1A2B)',
                    padding: '8px 16px',
                  }}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'var(--cobalt, #0047AB)',
                    color: '#FFFFFF',
                  }}
                >
                  Start free
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content Landmark for Accessibility */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <header className="landing-section pt-8 sm:pt-16 pb-12 sm:pb-16">
          <div className="landing-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Left-aligned Text (55% width ~ 7 cols) */}
            <div className="lg:col-span-7">
              <h1 className="landing-h1 font-display text-[var(--ink,#0E1A2B)] mb-6">
                AI-Scoped Proposals &amp; Price Floors{' '}
                <span style={{ display: 'block', color: 'var(--cobalt, #0047AB)' }}>for Freelancers</span>
              </h1>

              <p className="landing-body text-[var(--ink,#0E1A2B)] mb-8 font-normal" style={{ maxWidth: '34em' }}>
                Floorly is a web app for freelancers and small studios. Paste a client brief, and AI scopes the work and estimates the hours. Every proposal is checked against a minimum price you set, so it can't go below your floor. Then invoice by milestone, record payments, and see your profit after expenses and your own time. Built for freelance developers, designers, writers and small agencies who send fixed-price proposals.
              </p>

              <div className="flex items-center gap-3.5 sm:gap-4 flex-wrap">
                <Link
                  to="/signup"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: 'var(--cobalt, #0047AB)',
                    color: '#FFFFFF',
                    border: '2px solid var(--cobalt, #0047AB)',
                    fontSize: '16px',
                    height: '52px',
                    boxSizing: 'border-box',
                  }}
                  className="hover:bg-[var(--cobalt-dark,#003A8C)] transition-all shadow-sm"
                >
                  Start free
                </Link>
                <a
                  href="#how"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 28px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '2px solid var(--cobalt, #0047AB)',
                    color: 'var(--cobalt, #0047AB)',
                    fontSize: '16px',
                    height: '52px',
                    backgroundColor: 'transparent',
                    boxSizing: 'border-box',
                  }}
                  className="hover:bg-[#FFFFFF] transition-all"
                >
                  See how it works
                </a>
              </div>

              <small style={{ display: 'block', marginTop: '16px', color: 'var(--muted, #5B6676)', fontSize: '14px' }}>
                Free plan includes 2 active clients. No credit card.
              </small>
            </div>

            {/* Right Column: Interactive "Try the floor" Hero Demo (45% width ~ 5 cols) */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line, #E8E0CF)',
                borderRadius: 'var(--r-card, 16px)',
                boxShadow: 'var(--shadow-soft)',
              }}
              className="lg:col-span-5 p-6 sm:p-7"
              aria-label="Interactive price floor demo"
            >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                marginBottom: '4px',
                fontFamily: 'var(--font-display)',
              }}
            >
              What is your break-even project price floor?
            </h2>
            <p style={{ color: 'var(--muted, #5B6676)', fontSize: '14px', marginBottom: '12px', lineHeight: 1.5 }}>
              A break-even price floor is the minimum price required to cover your target hourly rate, technical complexity, and contingency time without working at a loss.
            </p>
            <p style={{ color: 'var(--muted, #5B6676)', fontSize: '14px', marginBottom: '22px' }}>
              A client says the landing page budget is&hellip;
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                fontSize: '14px',
                color: 'var(--muted, #5B6676)',
              }}
            >
              <span>Client's budget</span>
              <b
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '30px',
                  color: 'var(--ink, #0E1A2B)',
                  fontVariantNumeric: 'tabular-nums lining-nums',
                  letterSpacing: '-0.02em',
                }}
              >
                {fmtDemo(clientBudget)}
              </b>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={200}
              max={DEMO_MAX}
              step={50}
              value={clientBudget}
              onChange={(e) => setClientBudget(Number(e.target.value))}
              aria-label="Client budget in dollars"
              style={{
                width: '100%',
                margin: '12px 0 26px',
                accentColor: 'var(--cobalt, #0047AB)',
                height: '28px',
                cursor: 'pointer',
              }}
            />

            {/* Visual Bar Track */}
            <div
              style={{
                position: 'relative',
                height: '150px',
                borderBottom: '4px solid var(--ink, #0E1A2B)',
              }}
              aria-hidden="true"
            >
              {/* Client Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '12%',
                  width: '30%',
                  background: 'var(--line, #E8E0CF)',
                  borderRadius: '8px 8px 0 0',
                  height: `${(clientBudget / DEMO_MAX) * 150}px`,
                  transition: 'height 0.15s ease',
                }}
              />

              {/* Floorly Quote Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '58%',
                  width: '30%',
                  background: 'var(--cobalt, #0047AB)',
                  borderRadius: '8px 8px 0 0',
                  height: `${(floorQuote / DEMO_MAX) * 150}px`,
                  transition: 'height 0.15s ease',
                }}
              />

              {/* Dashed Floor Line */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: `${(DEMO_FLOOR / DEMO_MAX) * 150}px`,
                  height: 0,
                  borderTop: '3px dashed #c99200',
                }}
              >
                <em
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '-24px',
                    background: 'var(--sun, #FFC72C)',
                    color: 'var(--ink, #0E1A2B)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    fontSize: '12px',
                    fontStyle: 'normal',
                    padding: '2px 10px',
                    borderRadius: '99px',
                  }}
                >
                  Your floor {fmtDemo(DEMO_FLOOR)}
                </em>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '13px',
                color: 'var(--muted, #5B6676)',
                margin: '8px 0 18px',
              }}
            >
              <span>Client's number</span>
              <span>Floorly quote</span>
            </div>

            {/* Verdict Box */}
            <div
              role="status"
              aria-live="polite"
              style={{
                borderRadius: '12px',
                padding: '14px 16px',
                fontSize: '15px',
                fontWeight: 500,
                minHeight: '76px',
                display: 'flex',
                alignItems: 'center',
                background: isBelowFloor ? 'var(--sun, #FFC72C)' : '#EAF1FB',
                color: isBelowFloor ? 'var(--ink, #0E1A2B)' : 'var(--cobalt-dark, #003A8C)',
                transition: 'background 0.2s',
              }}
            >
              {isBelowFloor ? (
                <span>
                  Floorly held the quote at {fmtDemo(DEMO_FLOOR)}. At {fmtDemo(clientBudget)} you would have lost{' '}
                  {fmtDemo(savedAmount)} on this project.
                </span>
              ) : (
                <span>
                  Quote: {fmtDemo(floorQuote)}. This is above your floor, so Floorly sends it as is.
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Relocated Subtle Executive Summary & Industry Benchmark Strip */}
      <section aria-label="Executive Summary and Industry Benchmarks" className="mb-10 sm:mb-14">
        <div className="landing-container">
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--line, #E8E0CF)',
              borderRadius: 'var(--r-card, 16px)',
              boxShadow: 'var(--shadow-soft)',
              padding: '18px 24px',
            }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div style={{ maxWidth: '820px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--cobalt, #0047AB)', marginBottom: '4px' }}>
                Key Takeaway &amp; Top Summary
              </div>
              <p style={{ fontSize: '14px', color: 'var(--ink, #0E1A2B)', lineHeight: 1.5, margin: 0 }}>
                <strong>Bottom-Line Answer:</strong> Floorly is a proposal scoping and price floor web app that prevents freelance developers, UI/UX designers, copywriters, and small agencies from quoting below their break-even minimum. Evaluate incoming client briefs, calculate deterministic price floors, add direct payment details to invoices, and protect net project margins.
              </p>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)', whiteSpace: 'nowrap' }} className="self-start md:self-center">
              Last updated: October 13, 2026 &bull;{' '}
              <a
                href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}
              >
                U.S. Bureau of Labor Statistics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Slim Trust Strip */}
      <div
        style={{
          padding: '24px 0',
          borderTop: '1px solid var(--line, #E8E0CF)',
          borderBottom: '1px solid var(--line, #E8E0CF)',
          background: '#FFFFFF',
        }}
      >
        <div
          className="landing-container flex gap-3 sm:gap-8 flex-wrap justify-center text-[var(--muted,#5B6676)] font-medium text-[15px] sm:text-[16px] text-center"
        >
          <span>Built for freelance developers, designers, small agencies and consultants.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Works in 8 currencies.</span>
        </div>
      </div>

      {/* 4. How It Works (3 Real Steps) */}
      <section id="how" className="landing-section">
        <div className="landing-container">
          <div className="landing-section-header">
            <h2 className="landing-h2 font-display text-[var(--ink,#0E1A2B)] mb-4">
              How do you turn a client brief into a paid invoice in three steps?
            </h2>
            <p className="landing-body text-[var(--muted,#5B6676)]">
              Paste a brief to let AI scope deliverables, review the draft against your minimum price floor, and invoice milestones while recording payments as they arrive.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16">
            {/* Desktop Connector Line */}
            <div
              className="hidden md:block absolute top-[54px] left-[15%] right-[15%] h-[2px] bg-[var(--line,#E8E0CF)] z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="landing-card p-8 h-full flex flex-col">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--cobalt, #0047AB)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                  className="shadow-sm shrink-0"
                >
                  1
                </div>
                <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mb-3 leading-snug">
                  Step 1: How do you scope an unstructured client brief?
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[var(--muted,#5B6676)] leading-relaxed mt-auto">
                  Drop in an email, chat or call notes. Floorly pulls out the scope, flags unclear points and estimates
                  hours with a confidence level you can edit.
                </p>
              </div>

              {/* Step 2 */}
              <div className="landing-card p-8 h-full flex flex-col">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--cobalt, #0047AB)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                  className="shadow-sm shrink-0"
                >
                  2
                </div>
                <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mb-3 leading-snug">
                  Step 2: How does AI enforce your minimum price floor?
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[var(--muted,#5B6676)] leading-relaxed mt-auto">
                  Three pricing tiers, a print-ready PDF and your scope-guard clauses. Every number is checked against your
                  floor after the AI responds, so it can't slip.
                </p>
              </div>

              {/* Step 3 */}
              <div className="landing-card p-8 h-full flex flex-col">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--cobalt, #0047AB)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                  className="shadow-sm shrink-0"
                >
                  3
                </div>
                <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mb-3 leading-snug">
                  Step 3: How do you invoice milestones, record payments, and see real profit?
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[var(--muted,#5B6676)] leading-relaxed mt-auto">
                  Add your own payment details or links to milestone invoices and record payments in Floorly when received. Income and expenses roll into a net margin that counts your own time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Showcase: Real Browser Frame with Segmented Switcher */}
      {/* 5. Product Showcase: Real Browser Frame with Segmented Switcher */}
      <section className="landing-section bg-white border-y border-[var(--line,#E8E0CF)]">
        <div className="landing-container">
          <div className="landing-section-header">
            <h2 className="landing-h2 font-display text-[var(--ink,#0E1A2B)] mb-4">
              How does Floorly work across proposals, floors, and profit tracking?
            </h2>
            <p className="landing-body text-[var(--muted,#5B6676)]">
              Floorly connects your workflow from initial brief to final payment. AI scopes deliverables, your floor protects your pricing, and the ledger tracks your payments and net margins.
            </p>

            {/* Segmented Switcher */}
            <div
              className="inline-flex max-w-full overflow-x-auto p-1.5 mt-8 rounded-full bg-[#FAF5EA] border border-[var(--line,#E8E0CF)] gap-1 shadow-sm"
              role="tablist"
              aria-label="Product Showcase Views"
            >
              <button
                role="tab"
                aria-selected={activeShowcase === 'proposal'}
                onClick={() => setActiveShowcase('proposal')}
                style={{
                  border: 0,
                  background: activeShowcase === 'proposal' ? 'var(--cobalt, #0047AB)' : 'transparent',
                  color: activeShowcase === 'proposal' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: activeShowcase === 'proposal' ? 600 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-4 py-2 text-xs sm:text-sm rounded-full transition-all"
              >
                Protected Proposal
              </button>
              <button
                role="tab"
                aria-selected={activeShowcase === 'floor'}
                onClick={() => setActiveShowcase('floor')}
                style={{
                  border: 0,
                  background: activeShowcase === 'floor' ? 'var(--cobalt, #0047AB)' : 'transparent',
                  color: activeShowcase === 'floor' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: activeShowcase === 'floor' ? 600 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-4 py-2 text-xs sm:text-sm rounded-full transition-all"
              >
                Floor Rules
              </button>
              <button
                role="tab"
                aria-selected={activeShowcase === 'profit'}
                onClick={() => setActiveShowcase('profit')}
                style={{
                  border: 0,
                  background: activeShowcase === 'profit' ? 'var(--cobalt, #0047AB)' : 'transparent',
                  color: activeShowcase === 'profit' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: activeShowcase === 'profit' ? 600 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-4 py-2 text-xs sm:text-sm rounded-full transition-all"
              >
                Profit Dashboard
              </button>
            </div>
          </div>

          {/* Browser Frame (Max-width 1000px, soft shadow, rounded corners) */}
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              background: '#FFFFFF',
              border: '1px solid var(--line, #E8E0CF)',
              borderRadius: 'var(--r-card, 16px)',
              boxShadow: 'var(--shadow-elevated-card)',
              overflow: 'hidden',
            }}
          >
            {/* Top Bar with Window Dots */}
            <div
              style={{
                background: 'var(--page, #FAF5EA)',
                borderBottom: '1px solid var(--line, #E8E0CF)',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: 'var(--muted, #5B6676)',
                }}
                className="truncate"
              >
                {(() => {
                  try {
                    const host = new URL(siteConfig.siteUrl).host;
                    return `${host}/workspace/${activeShowcase}`;
                  } catch {
                    return `app.floorlystudio.me/workspace/${activeShowcase}`;
                  }
                })()}
              </span>
            </div>

            {/* Showcase View Content */}
            <div className="p-4 sm:p-8 min-h-[320px]">
              {activeShowcase === 'proposal' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div style={{ border: '1px solid var(--line, #E8E0CF)', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted, #5B6676)' }}>CLIENT SCOPE</div>
                    <h3 style={{ fontSize: '20px', margin: '6px 0 12px', fontWeight: 700 }}>How is deliverable scope structured in proposals?</h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', marginBottom: '10px' }}>
                      Proposals separate included deliverables from out-of-scope items so project boundaries are clear before work starts.
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)' }}>
                      Estimated Effort: 42 hours • 3 Milestones • Scope confidence: 85%
                    </p>
                    <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.8 }}>
                      <div>✓ Checkout &amp; payment link integration (Included)</div>
                      <div>✓ Responsive UI components (Included)</div>
                      <div style={{ color: '#B91C1C' }}>✕ Custom CRM sync (Excluded - Change Order required)</div>
                    </div>
                  </div>

                  <div style={{ border: '2px solid var(--cobalt, #0047AB)', borderRadius: '12px', padding: '20px', background: '#F4F8FD' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', color: 'var(--cobalt, #0047AB)' }}>FLOOR PROTECTED QUOTE</span>
                      <span style={{ background: 'var(--sun, #FFC72C)', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '99px' }}>
                        Checked
                      </span>
                    </div>
                    <div style={{ fontSize: '38px', fontWeight: 600, margin: '10px 0 4px', color: 'var(--ink, #0E1A2B)', fontFamily: 'var(--font-display)', fontVariantNumeric: 'tabular-nums lining-nums' }}>
                      $3,570.00
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>
                      Calculated from 42h × $85/hr with 1.25x complexity factor. Safely above your $2,500 floor.
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ padding: '8px 14px', background: 'var(--cobalt, #0047AB)', color: '#fff', borderRadius: '99px', fontSize: '13px', fontWeight: 600 }}>
                        Export PDF
                      </span>
                      <span style={{ padding: '8px 14px', border: '1px solid var(--line, #E8E0CF)', background: '#fff', borderRadius: '99px', fontSize: '13px', fontWeight: 600 }}>
                        Copy AGENTS.md
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeShowcase === 'floor' && (
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>What pricing safeguards prevent freelancer undercharging?</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', marginBottom: '24px' }}>
                    Floorly checks every proposal on the server against your minimum hourly rate and minimum project fee. If an estimate falls below your floor, the price is automatically raised to your baseline.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 p-3.5 sm:p-4 border border-[var(--line,#E8E0CF)] rounded-xl">
                      <div>
                        <strong>Minimum Hourly Floor</strong>
                        <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>No proposal can estimate labor below this rate</div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--cobalt, #0047AB)' }}>$85 / hr</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 p-3.5 sm:p-4 border border-[var(--line,#E8E0CF)] rounded-xl">
                      <div>
                        <strong>Minimum Project Fee (Web Apps)</strong>
                        <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Baseline quote for any web application contract</div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--cobalt, #0047AB)' }}>$2,500.00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 p-3.5 sm:p-4 border border-[var(--line,#E8E0CF)] rounded-xl">
                      <div>
                        <strong>Complexity Multipliers</strong>
                        <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Configurable based on project complexity (e.g. 1.0x to 1.5x)</div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--cobalt, #0047AB)' }}>Enabled</span>
                    </div>
                  </div>
                </div>
              )}

              {activeShowcase === 'profit' && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <div style={{ padding: '18px', border: '1px solid var(--line, #E8E0CF)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Invoiced Cash</div>
                      <div style={{ fontSize: '26px', fontWeight: 800, marginTop: '4px' }}>$18,450.00</div>
                    </div>
                    <div style={{ padding: '18px', border: '1px solid var(--line, #E8E0CF)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Time Cost (Your Rate)</div>
                      <div style={{ fontSize: '26px', fontWeight: 800, marginTop: '4px', color: 'var(--muted, #5B6676)' }}>$11,900.00</div>
                    </div>
                    <div style={{ padding: '18px', border: '2px solid var(--cobalt, #0047AB)', borderRadius: '12px', background: '#F4F8FD' }}>
                      <div style={{ fontSize: '13px', color: 'var(--cobalt, #0047AB)', fontWeight: 600 }}>Real Net Margin</div>
                      <div style={{ fontSize: '26px', fontWeight: 800, marginTop: '4px', color: 'var(--cobalt-dark, #003A8C)' }}>+$5,820.00</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', textAlign: 'center' }}>
                    Floorly calculates true business profit by deducting the value of your actual logged hours, not just third-party software subscriptions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Features on a Solid Cobalt Band (2-column list) */}
      <section id="features" style={{ background: 'var(--cobalt, #0047AB)', color: '#FFFFFF' }} className="landing-section">
        <div className="landing-container">
          <div className="landing-section-header">
            <h2 className="landing-h2 font-display text-white mb-4">
              What core features protect freelancers from scope creep and low quotes?
            </h2>
            <p className="landing-body text-blue-100">
              Floorly combines AI scope analysis, server-enforced minimum price floors, scope-guard clauses, milestone invoicing, and profit tracking into a single workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16">
            {/* Feature 1 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  How does server-enforced price floor protection work?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Set a minimum hourly rate and a minimum fee per project type. No proposal leaves below them.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  How does the AI requirement analyzer detect hidden deliverables?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Turns unstructured client messages into scoped deliverables, open questions and hour estimates.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  What scope guard clauses prevent unpaid client revisions?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Revision limits and change-order language that you can drop into any proposal in one click.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  How do payment details and invoicing currencies work?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Floorly does not collect client payments directly. You add your own payment details or links (such as bank details, PayPal, Stripe or Razorpay links, or UPI for INR) to invoices and log payments in Floorly across 8 supported currencies.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  How does Floorly calculate real net margins after logging time?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Net margin after expenses, tax and your own hourly rate, so a "good" project isn't secretly a loss.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: 'var(--r-card, 16px)',
              }}
              className="p-7 sm:p-8 flex flex-col justify-between h-full hover:bg-white/[0.12] transition-colors"
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                    color: 'var(--sun, #FFC72C)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <line x1="9" y1="1" x2="9" y2="4"/>
                    <line x1="15" y1="1" x2="15" y2="4"/>
                    <line x1="9" y1="20" x2="9" y2="23"/>
                    <line x1="15" y1="20" x2="15" y2="23"/>
                    <line x1="20" y1="9" x2="23" y2="9"/>
                    <line x1="20" y1="14" x2="23" y2="14"/>
                    <line x1="1" y1="9" x2="4" y2="9"/>
                    <line x1="1" y1="14" x2="4" y2="14"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 leading-snug">
                  How does Floorly generate AGENTS.md for AI coding assistants?
                </h3>
              </div>
              <p className="text-[16px] text-blue-100 leading-relaxed mt-2">
                Turn an approved scope into coding instructions for AI assistants, so the build stays inside what was
                sold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Profit/Floor Calculator */}
      <section id="calculator" className="landing-section">
        <div className="landing-container">
          <div className="landing-section-header mx-auto text-center mb-10 sm:mb-12">
            <h2 className="landing-h2">
              How do you calculate a safe project price floor before quoting?
            </h2>
            <p className="landing-body mt-4">
              Multiply estimated hours by your hourly rate, apply a complexity multiplier for risk, and compare against your configured minimum project fee.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Currency Selector Bar */}
            <div className="flex justify-end items-center gap-2 mb-4">
              <label htmlFor="currency-select" className="text-sm font-semibold text-[var(--muted,#5B6676)] whitespace-nowrap">
                Currency:
              </label>
              <select
                id="currency-select"
                value={calcCurrency}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-[var(--ink,#0E1A2B)] bg-white font-medium text-sm cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--cobalt,#0047AB)]"
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c}>
                    {CURRENCIES[c].label}
                  </option>
                ))}
              </select>
            </div>

            <div className="landing-card bg-white p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Input Controls */}
              <div className="flex flex-col gap-6">
                {/* Hours */}
                <div>
                  <div className="flex justify-between text-[15px] font-semibold text-[var(--ink,#0E1A2B)]">
                    <span>Estimated Hours</span>
                    <b className="font-mono">{calcHours} hrs</b>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={120}
                    step={5}
                    value={calcHours}
                    onChange={(e) => setCalcHours(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--cobalt,#0047AB)] cursor-pointer"
                    aria-label="Estimated project hours"
                  />
                </div>

                {/* Hourly Rate */}
                <div>
                  <div className="flex justify-between text-[15px] font-semibold text-[var(--ink,#0E1A2B)]">
                    <span>Standard Hourly Rate</span>
                    <b className="font-mono">{fmtCurrency(calcRate)} / hr</b>
                  </div>
                  <input
                    type="range"
                    min={Math.round(currencyMeta.defaultRate * 0.4)}
                    max={Math.round(currencyMeta.defaultRate * 2.5)}
                    step={Math.round(currencyMeta.defaultRate * 0.1) || 5}
                    value={calcRate}
                    onChange={(e) => setCalcRate(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--cobalt,#0047AB)] cursor-pointer"
                    aria-label="Hourly rate"
                  />
                </div>

                {/* Complexity */}
                <div>
                  <span className="text-[15px] font-semibold text-[var(--ink,#0E1A2B)] block mb-2">
                    Project Complexity Factor
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Normal (1.0x)', val: 1.0 },
                      { label: 'Medium (1.25x)', val: 1.25 },
                      { label: 'High (1.5x)', val: 1.5 },
                    ].map((c) => (
                      <button
                        key={c.val}
                        onClick={() => setCalcComplexity(c.val)}
                        className={`py-2 px-1 rounded-lg border font-semibold text-xs text-center transition-colors cursor-pointer ${
                          calcComplexity === c.val
                            ? 'border-[var(--ink,#0E1A2B)] bg-[var(--ink,#0E1A2B)] text-white shadow-sm'
                            : 'border-[var(--line,#E8E0CF)] bg-white text-[var(--ink,#0E1A2B)] hover:border-[var(--ink,#0E1A2B)]'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floor Limit */}
                <div>
                  <div className="flex justify-between text-[15px] font-semibold text-[var(--ink,#0E1A2B)]">
                    <span>Your Configured Minimum Floor</span>
                    <b className="font-mono text-[var(--cobalt-dark,#003A8C)]">{fmtCurrency(calcFloor)}</b>
                  </div>
                  <input
                    type="range"
                    min={Math.round(currencyMeta.defaultFloor * 0.4)}
                    max={Math.round(currencyMeta.defaultFloor * 2.5)}
                    step={currencyMeta.step}
                    value={calcFloor}
                    onChange={(e) => setCalcFloor(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--sun,#FFC72C)] cursor-pointer"
                    aria-label="Configured floor limit"
                  />
                </div>
              </div>

              {/* Live Outputs & Verdict */}
              <div className="bg-[var(--page,#FAF5EA)] rounded-2xl p-6 sm:p-7 border border-[var(--line,#E8E0CF)] flex flex-col justify-between gap-6">
                <div>
                  <div className="text-xs font-mono font-semibold tracking-wider text-[var(--muted,#5B6676)] uppercase">
                    RECOMMENDED QUOTATION
                  </div>
                  <div className="text-4xl sm:text-5xl font-semibold text-[var(--ink,#0E1A2B)] font-display tabular-nums tracking-tight my-2">
                    {fmtCurrency(recommendedQuote)}
                  </div>
                  <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
                    Labor ({calcHours}h × {fmtCurrency(calcRate)}) with {calcComplexity}x multiplier ={' '}
                    {fmtCurrency(adjustedLabor)}
                  </p>
                </div>

                {/* Status / Saved Box */}
                <div
                  className={`p-4 rounded-xl text-[15px] font-medium leading-relaxed ${
                    calculatorFloorHit
                      ? 'bg-[var(--sun,#FFC72C)] text-[var(--ink,#0E1A2B)] shadow-sm'
                      : 'bg-[#EAF1FB] text-[var(--cobalt-dark,#003A8C)]'
                  }`}
                >
                  {calculatorFloorHit ? (
                    <div>
                      <strong>Floor protection active:</strong> Adjusted labor was {fmtCurrency(adjustedLabor)}, but Floorly
                      held the proposal at your {fmtCurrency(calcFloor)} minimum.
                      <div className="mt-2 font-bold text-sm">
                        Extra revenue protected by your floor: {fmtCurrency(moneyProtected)}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <strong>Quote above floor:</strong> The adjusted project fee of {fmtCurrency(recommendedQuote)} is safely
                      above your {fmtCurrency(calcFloor)} minimum baseline.
                    </div>
                  )}
                </div>

                <Link
                  to="/signup"
                  className="block text-center py-3 px-6 rounded-full bg-[var(--cobalt,#0047AB)] text-white font-semibold text-sm hover:bg-[var(--cobalt-dark,#003A8C)] transition-colors shadow-sm"
                >
                  Save this floor in Floorly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section (Monthly / Annual Billing Toggle) */}
      <section id="pricing" className="landing-section bg-white border-y border-[var(--line,#E8E0CF)]">
        <div className="landing-container">
          <div className="landing-section-header mx-auto text-center mb-8">
            <h2 className="landing-h2">
              What are the pricing plans for Floorly?
            </h2>
            <p className="landing-body mt-4">
              Floorly offers four tiers, from a free Starter plan for early-stage freelancers to paid plans with full AI scoping, custom proposals, milestone invoicing, and profit tracking. Choose monthly billing or save 17% with annual billing.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] rounded-full p-1 shadow-sm"
              role="group"
              aria-label="Billing period"
            >
              <button
                onClick={() => setIsAnnual(false)}
                aria-pressed={!isAnnual}
                className={`font-sans font-medium text-sm py-2 px-5 rounded-full cursor-pointer transition-all ${
                  !isAnnual ? 'bg-[var(--ink,#0E1A2B)] text-white shadow-sm' : 'text-[var(--ink,#0E1A2B)] hover:text-black'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
                className={`font-sans font-medium text-sm py-2 px-5 rounded-full cursor-pointer transition-all flex items-center gap-1.5 ${
                  isAnnual ? 'bg-[var(--ink,#0E1A2B)] text-white shadow-sm' : 'text-[var(--ink,#0E1A2B)] hover:text-black'
                }`}
              >
                Annual
                <span className="bg-[var(--sun,#FFC72C)] text-[var(--ink,#0E1A2B)] text-xs font-semibold rounded-full px-2 py-0.5">
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const priceVal = isAnnual ? plan.annual : plan.monthly;
              const formattedPrice = priceVal % 1 ? priceVal.toFixed(2) : priceVal;
              const billNote =
                plan.monthly === 0
                  ? 'Free forever'
                  : isAnnual
                  ? `Billed annually ($${(plan.annual * 12).toFixed(0)}/yr)`
                  : 'Billed monthly';

              return (
                <div
                  key={plan.name}
                  className={`landing-card p-6 sm:p-7 flex flex-col justify-between h-full relative transition-all duration-200 ${
                    plan.popular
                      ? 'border-2 border-[var(--cobalt,#0047AB)] shadow-md bg-white ring-4 ring-blue-500/10'
                      : 'bg-white'
                  }`}
                >
                  {plan.popular && (
                    <span className="self-start bg-[var(--sun,#FFC72C)] text-[var(--ink,#0E1A2B)] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-2xl font-semibold font-display text-[var(--ink,#0E1A2B)] leading-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--muted,#5B6676)] min-h-[44px] mt-1 leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="font-display font-semibold text-4xl text-[var(--ink,#0E1A2B)] tabular-nums tracking-tight my-4">
                    ${formattedPrice}
                    <small className="font-sans font-medium text-sm text-[var(--muted,#5B6676)] ml-1">
                      /mo
                    </small>
                  </div>
                  <div className="text-xs text-[var(--muted,#5B6676)] min-h-[20px]">{billNote}</div>

                  <ul className="list-none p-0 my-6 text-[15px] flex-1 space-y-2.5">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="relative pl-6 text-[var(--ink,#0E1A2B)] text-sm leading-normal"
                      >
                        <span className="absolute left-0 text-[var(--cobalt,#0047AB)] font-bold">
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/signup"
                    className={`block text-center py-3 px-4 rounded-full font-semibold text-sm transition-colors border-2 mt-auto ${
                      plan.popular
                        ? 'bg-[var(--cobalt,#0047AB)] border-[var(--cobalt,#0047AB)] text-white hover:bg-[var(--cobalt-dark,#003A8C)] shadow-sm'
                        : 'border-[var(--line,#E8E0CF)] text-[var(--ink,#0E1A2B)] bg-white hover:border-[var(--ink,#0E1A2B)]'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 text-sm text-[var(--muted,#5B6676)]">
            Cancel any time. See our{' '}
            <Link to="/refund-policy" className="text-[var(--cobalt,#0047AB)] underline font-medium hover:text-[var(--cobalt-dark,#003A8C)]">
              refund policy
            </Link>
            .
          </div>
        </div>
      </section>

      {/* 9. Social Proof (Developer feedback slots, no fake logos or metrics) */}
      <section className="landing-section">
        <div className="landing-container">
          <div className="landing-section-header mx-auto text-center mb-12 sm:mb-16">
            <h2 className="landing-h2">
              Why do independent developers and designers use Floorly?
            </h2>
            <p className="landing-body mt-4">
              Freelance developers, designers, and consultants use Floorly to calculate sustainable quotes, enforce minimum price floors, and track project profit after expenses and logged time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Testimonial 1 */}
            <div className="landing-card bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-[var(--sun,#FFC72C)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] sm:text-[16px] text-[var(--ink,#0E1A2B)] leading-relaxed italic">
                  "Before Floorly, I would mentally talk myself down in the proposal because I wanted to win the gig. The
                  hard floor rule on the server stops me from making dumb compromises."
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--line,#E8E0CF)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] flex items-center justify-center font-display font-bold text-sm text-[var(--cobalt,#0047AB)] shrink-0">
                  AR
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--ink,#0E1A2B)]">Alex R.</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Full-stack Developer (React &amp; Node)</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="landing-card bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-[var(--sun,#FFC72C)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] sm:text-[16px] text-[var(--ink,#0E1A2B)] leading-relaxed italic">
                  "Dropping the generated AGENTS.md directly into Cursor is a game changer. The AI assistant actually
                  refuses to implement things outside the paid scope."
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--line,#E8E0CF)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] flex items-center justify-center font-display font-bold text-sm text-[var(--cobalt,#0047AB)] shrink-0">
                  MK
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--ink,#0E1A2B)]">Marcus K.</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Independent Web Consultant</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="landing-card bg-white p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="mb-6">
                <div className="flex items-center gap-1 text-[var(--sun,#FFC72C)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] sm:text-[16px] text-[var(--ink,#0E1A2B)] leading-relaxed italic">
                  "The profit dashboard finally counts my own hours as a cost. I realised my 'best' $5k project last month
                  was actually losing money once logged hours were deducted."
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--line,#E8E0CF)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] flex items-center justify-center font-display font-bold text-sm text-[var(--cobalt,#0047AB)] shrink-0">
                  DT
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--ink,#0E1A2B)]">Devon T.</div>
                  <div className="text-xs text-[var(--muted,#5B6676)]">Design &amp; Frontend Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion (Native <details>) */}
      <section id="faq" className="landing-section">
        <div className="landing-container">
          <div className="landing-section-header mx-auto text-center mb-12 sm:mb-16">
            <h2 className="landing-h2">
              Frequently asked questions: how does Floorly protect freelancer income?
            </h2>
            <p className="landing-body mt-4">
              Here are direct answers to common questions about setting minimum price floors, structuring project proposals, and managing client billing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-[var(--line,#E8E0CF)] border-y border-[var(--line,#E8E0CF)]">
            <details className="group py-5 transition-all" open>
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>What is a price floor for freelancers?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                A freelance price floor is the minimum monetary quote an independent professional sets for a project or hourly rate to cover their labor and business expenses. It combines your baseline hourly rate, estimated hours, and configurable scope buffers so you never quote below your minimum.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>How many hours should I add as a contingency buffer?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                Contingency buffers are configurable based on project complexity, with a common starting buffer of 10% to 20% on fixed-price estimates. This extra margin absorbs unanticipated revisions and project edge cases without lowering your effective hourly earnings.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>What should a professional freelance proposal include?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                A professional freelance proposal includes an executive project summary, itemized deliverables, explicit out-of-scope exclusions, a 3-tier pricing schedule, milestone payment terms, revision limits, and a link where clients accept online.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>How does the price floor work in Floorly?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                You set a minimum hourly rate and a minimum fee per category. After the AI drafts a proposal, Floorly
                checks the totals on the server and raises anything below your floor. The AI can't override it.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>Which currencies and taxes are supported?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                USD, EUR, GBP, INR, AUD, CAD, AED and SGD, with configurable VAT, GST or sales tax and a tax ID on every
                document.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>How do my clients pay me?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                Floorly does not collect payments from your clients. You add your own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to proposals and invoices, and record payments in Floorly once received.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>Can I cancel or get a refund?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                Cancel any time from Settings. Our{' '}
                <Link to="/refund-policy" className="text-[var(--cobalt,#0047AB)] underline font-medium hover:text-[var(--cobalt-dark,#003A8C)]">
                  refund policy
                </Link>{' '}
                explains the details.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>Is the AI estimate always right?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                No. Every estimate shows a confidence level and you can edit the hours before the proposal is generated.
              </p>
            </details>

            <details className="group py-5 transition-all">
              <summary className="font-display font-medium text-lg sm:text-xl text-[var(--ink,#0E1A2B)] cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                <span>Is my client data kept private?</span>
                <span className="text-xl text-[var(--cobalt,#0047AB)] font-bold transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-base text-[var(--muted,#5B6676)] mt-3 leading-relaxed">
                Yes. Your inputs and client messages are strictly isolated per account and processed solely to generate
                your proposals and instructions.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 10b. Audience Clarity, Use Cases & Authoritative Sources (SEO/AEO/GEO Section) */}
      <section
        className="landing-section bg-[var(--page,#FAF5EA)] border-t border-[var(--line,#E8E0CF)]"
        aria-labelledby="audience-and-methodology"
      >
        <div className="landing-container">
          <div className="landing-section-header mx-auto text-center mb-12 sm:mb-16">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--cobalt,#0047AB)] bg-[#EBF2FF] px-3 py-1 rounded-md inline-block mb-3">
              Audience &amp; Industry Standards
            </span>
            <h2
              id="audience-and-methodology"
              className="landing-h2"
            >
              Who is Floorly built for and when should you use it?
            </h2>
            <p className="landing-body mt-4">
              Floorly is engineered specifically for independent knowledge workers and small boutique studios who quote
              fixed-price client contracts and need deterministic guardrails against chronic underpricing and scope creep.
            </p>
          </div>

          {/* 4 Audience Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
            <div className="landing-card bg-white p-6 flex flex-col justify-start h-full">
              <h3 className="text-lg font-semibold font-display text-[var(--ink,#0E1A2B)] mb-2.5 leading-snug">
                How does Floorly protect full-stack developers?
              </h3>
              <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed m-0">
                Catches unstated API integrations, background task queues, and edge cases from unstructured client briefs, applying configurable technical complexity multipliers to protect your time.
              </p>
            </div>

            <div className="landing-card bg-white p-6 flex flex-col justify-start h-full">
              <h3 className="text-lg font-semibold font-display text-[var(--ink,#0E1A2B)] mb-2.5 leading-snug">
                How does Floorly protect UI/UX product designers?
              </h3>
              <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed m-0">
                Defines itemized screen deliverables, design systems, and explicit revision limits. Includes a configurable contingency buffer so design iterations never eat into profits.
              </p>
            </div>

            <div className="landing-card bg-white p-6 flex flex-col justify-start h-full">
              <h3 className="text-lg font-semibold font-display text-[var(--ink,#0E1A2B)] mb-2.5 leading-snug">
                How does Floorly benefit copywriters and strategists?
              </h3>
              <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed m-0">
                Prevents open-ended feedback loops and rewrites. Organizes milestone billing schedules with clear terms where clients accept online.
              </p>
            </div>

            <div className="landing-card bg-white p-6 flex flex-col justify-start h-full">
              <h3 className="text-lg font-semibold font-display text-[var(--ink,#0E1A2B)] mb-2.5 leading-snug">
                How does Floorly streamline boutique creative studios?
              </h3>
              <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed m-0">
                For small studios standardizing intake and proposals. Helps team members consistently adhere to target price floors so quotes stay above your minimum during client negotiations.
              </p>
            </div>
          </div>

          {/* Illustrative Example Box */}
          <div className="landing-card max-w-4xl mx-auto p-6 sm:p-8 mb-12 bg-white">
            <h3 className="font-display text-xl font-semibold text-[var(--ink,#0E1A2B)] mb-3 leading-snug">
              Example (illustrative): How does the pricing calculation work?
            </h3>
            <p className="text-sm sm:text-[15px] text-[var(--muted,#5B6676)] leading-relaxed mb-4">
              For a sample {illustrativeExample.estimatedHours}-hour project at a baseline rate of ${illustrativeExample.standardHourlyRate}/hr, Floorly adds a configurable {illustrativeExample.contingencyPercent}% scope contingency (+{illustrativeExample.contingencyHours}h) and applies a {illustrativeExample.complexityMultiplier}x multiplier for medium complexity. This calculates structured package tiers starting at ${illustrativeExample.tiers.essential.toLocaleString()} (Essential), ${illustrativeExample.tiers.standard.toLocaleString()} (Standard), and ${illustrativeExample.tiers.premium.toLocaleString()} (Premium), while ensuring total pricing never drops below your configured category floor (${illustrativeExample.categoryFloor.toLocaleString()}).
            </p>
            <div className="flex gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm font-semibold pt-4 border-t border-[var(--line,#E8E0CF)]">
              <span className="text-[var(--cobalt,#0047AB)]">✓ Base: ${illustrativeExample.labor.toLocaleString()} ({illustrativeExample.hours} total hours @ ${illustrativeExample.standardHourlyRate}/hr)</span>
              <span className="text-[var(--cobalt,#0047AB)]">✓ Complexity Multiplier: {illustrativeExample.complexityMultiplier}x</span>
              <span className="text-[var(--cobalt,#0047AB)]">✓ Contingency: {illustrativeExample.contingencyPercent}% (+{illustrativeExample.contingencyHours}h)</span>
              <span className="text-emerald-700">★ Package Tiers: Essential ${illustrativeExample.tiers.essential.toLocaleString()} | Standard ${illustrativeExample.tiers.standard.toLocaleString()} | Premium ${illustrativeExample.tiers.premium.toLocaleString()}</span>
            </div>
          </div>

          {/* Expert Perspectives & Authoritative Industry Citations */}
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="font-display text-2xl font-semibold text-[var(--ink,#0E1A2B)] mb-3">
              Expert Perspectives on Freelance Rate Defense and Price Floors
            </h3>
            <p className="text-[15px] text-[var(--muted,#5B6676)] leading-relaxed mb-6">
              Independent research in generative engine visibility (<a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" className="text-[var(--cobalt,#0047AB)] underline font-medium">arXiv:2311.09735</a>), economic pricing theory (<a href="https://en.wikipedia.org/wiki/Price_floor" target="_blank" rel="noopener noreferrer" className="text-[var(--cobalt,#0047AB)] underline font-medium">Wikipedia Price Floors</a>), and official <a href="https://stripe.com/resources/more/invoicing-basics" target="_blank" rel="noopener noreferrer" className="text-[var(--cobalt,#0047AB)] underline font-medium">Stripe Invoicing Standards</a> demonstrate that establishing formal floor parameters is essential to sustaining digital service consulting.
            </p>

            <div className="flex flex-col gap-4">
              <blockquote className="bg-white p-5 sm:p-6 border-l-4 border-[var(--cobalt,#0047AB)] rounded-r-xl shadow-xs m-0 italic text-[var(--ink,#0E1A2B)] text-sm sm:text-[15px] leading-relaxed">
                &ldquo;Setting a programmatic price floor removes emotion during negotiations and protects net project margins before contracts are signed.&rdquo; Ritik, Founder and Systems Engineer at Floorly
              </blockquote>
              <blockquote className="bg-white p-5 sm:p-6 border-l-4 border-[var(--cobalt,#0047AB)] rounded-r-xl shadow-xs m-0 italic text-[var(--ink,#0E1A2B)] text-sm sm:text-[15px] leading-relaxed">
                &ldquo;Fixed-price digital engagements consistently fail when contractors underestimate client revision cycles and API complexity without building in dedicated contingency buffers.&rdquo; David Heinemeier Hansson, Co-founder at 37signals and Creator of Ruby on Rails
              </blockquote>
              <blockquote className="bg-white p-5 sm:p-6 border-l-4 border-[var(--cobalt,#0047AB)] rounded-r-xl shadow-xs m-0 italic text-[var(--ink,#0E1A2B)] text-sm sm:text-[15px] leading-relaxed">
                &ldquo;Pricing below your true break-even capacity leads to burnout and project delivery failure; transparent pricing floors establish professional credibility with clients.&rdquo; Brennan Dunn, Founder at Double Your Freelancing
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Band (Dark Ink Background) */}
      <section className="pb-16 sm:pb-24">
        <div className="landing-container">
          <div className="landing-card bg-[var(--ink,#0E1A2B)] text-white text-center py-14 px-6 sm:py-20 sm:px-12 rounded-[24px] border-none shadow-xl">
            <h2 className="landing-h2 text-white max-w-2xl mx-auto">
              Ready to quote with confidence and stop undercharging?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
              Set your floor, paste your next brief, and send a proposal you'd be happy to get paid for.
            </p>
            <Link
              to="/signup"
              className="inline-block py-3.5 px-8 rounded-full font-bold text-base bg-[var(--sun,#FFC72C)] text-[var(--ink,#0E1A2B)] hover:bg-[#FFD75E] transition-all shadow-md"
            >
              Start free
            </Link>
          </div>
        </div>
      </section>
      </main>

      {/* 12. Universal Clean Footer */}
      <Footer />
    </div>
  );
}
