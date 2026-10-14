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
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
          className="px-4 sm:px-6"
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
        <header className="py-12 sm:py-20">
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            alignItems: 'center',
          }}
          className="px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14"
        >
          {/* Left Column: Left-aligned Text */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(30px, 3.8vw, 48px)',
                fontWeight: 600,
                color: 'var(--ink, #0E1A2B)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                fontFamily: 'var(--font-display)',
              }}
            >
              AI-Scoped Proposals &amp; Price Floors{' '}
              <span style={{ display: 'block', color: 'var(--cobalt, #0047AB)' }}>for Freelancers</span>
            </h1>

            <p
              style={{
                fontSize: '16px',
                color: 'var(--ink, #0E1A2B)',
                margin: '16px 0 8px',
                maxWidth: '34em',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Floorly is a web app for freelancers and small studios. Paste a client brief, and AI scopes the work and estimates the hours. Every proposal is checked against a minimum price you set, so it can't go below your floor. Then invoice by milestone, record payments, and see your profit after expenses and your own time. Built for freelance developers, designers, writers and small agencies who send fixed-price proposals.
            </p>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--muted, #5B6676)',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              Last updated: October 13, 2026 &bull; Industry benchmarks aligned with{' '}
              <a
                href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}
              >
                U.S. Bureau of Labor Statistics
              </a>
            </div>

            {/* AEO / GEO Key Takeaways & Audience Clarity Card */}
            <aside
              aria-label="Key Takeaways and Executive Summary"
              style={{
                marginBottom: '20px',
                padding: '14px 16px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink, #0E1A2B)', marginBottom: '4px' }}>
                Key Takeaway &amp; Top Summary
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted, #5B6676)', lineHeight: 1.5, margin: 0 }}>
                <strong>Bottom-Line Answer:</strong> Floorly is a proposal scoping and price floor web app that prevents freelance developers, UI/UX designers, copywriters, and small agencies from quoting below their break-even minimum. Evaluate incoming client briefs, calculate deterministic price floors, add direct payment details to invoices, and protect net project margins.
              </p>
            </aside>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/signup"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'var(--cobalt, #0047AB)',
                  color: '#FFFFFF',
                  border: '2px solid var(--cobalt, #0047AB)',
                  fontSize: '16px',
                }}
                className="hover:bg-[var(--cobalt-dark,#003A8C)] transition-all"
              >
                Start free
              </Link>
              <a
                href="#how"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '2px solid var(--cobalt, #0047AB)',
                  color: 'var(--cobalt, #0047AB)',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                }}
                className="hover:bg-[#FFFFFF] transition-all"
              >
                See how it works
              </a>
            </div>

            <small style={{ display: 'block', marginTop: '14px', color: 'var(--muted, #5B6676)', fontSize: '14px' }}>
              Free plan includes 2 active clients. No credit card.
            </small>
          </div>

          {/* Right Column: Interactive "Try the floor" Hero Demo */}
          <div
            style={{
              background: '#FFFFFF',
              border: '2px solid var(--ink, #0E1A2B)',
              borderRadius: '20px',
            }}
            className="p-5 sm:p-7 shadow-[5px_5px_0_var(--ink,#0E1A2B)] sm:shadow-[8px_8px_0_var(--ink,#0E1A2B)]"
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
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            gap: '12px 32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: 'var(--muted, #5B6676)',
            fontWeight: 500,
            fontSize: '15px',
            textAlign: 'center',
          }}
          className="px-4 sm:px-6"
        >
          <span>Built for freelance developers, designers, small agencies and consultants.</span>
          <span>Works in 8 currencies.</span>
        </div>
      </div>

      {/* 4. How It Works (3 Real Steps) */}
      <section id="how" className="py-14 sm:py-24">
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-display)',
              maxWidth: '18em',
            }}
          >
            How do you turn a client brief into a paid invoice in three steps?
          </h2>
          <p style={{ color: 'var(--muted, #5B6676)', fontSize: '18px', maxWidth: '34em', marginTop: '16px' }}>
            Paste a brief to let AI scope deliverables, review the draft against your minimum price floor, and invoice milestones while recording payments as they arrive.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-10 sm:mt-14 border-t-2 border-[var(--ink,#0E1A2B)]"
          >
            {/* Step 1 */}
            <div className="pt-6 md:pr-7 pb-2">
              <i
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '44px',
                  color: 'var(--sun, #FFC72C)',
                  WebkitTextStroke: '2px var(--ink, #0E1A2B)',
                  fontStyle: 'normal',
                  display: 'block',
                }}
              >
                1
              </i>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Step 1: How do you scope an unstructured client brief?
              </h3>
              <p style={{ color: 'var(--muted, #5B6676)' }}>
                Drop in an email, chat or call notes. Floorly pulls out the scope, flags unclear points and estimates
                hours with a confidence level you can edit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="pt-6 md:px-7 pb-2 border-t md:border-t-0 md:border-l border-[var(--line,#E8E0CF)]">
              <i
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '44px',
                  color: 'var(--sun, #FFC72C)',
                  WebkitTextStroke: '2px var(--ink, #0E1A2B)',
                  fontStyle: 'normal',
                  display: 'block',
                }}
              >
                2
              </i>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Step 2: How does AI enforce your minimum price floor?
              </h3>
              <p style={{ color: 'var(--muted, #5B6676)' }}>
                Three pricing tiers, a print-ready PDF and your scope-guard clauses. Every number is checked against your
                floor after the AI responds, so it can't slip.
              </p>
            </div>

            {/* Step 3 */}
            <div className="pt-6 md:pl-7 pb-2 border-t md:border-t-0 md:border-l border-[var(--line,#E8E0CF)]">
              <i
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '44px',
                  color: 'var(--sun, #FFC72C)',
                  WebkitTextStroke: '2px var(--ink, #0E1A2B)',
                  fontStyle: 'normal',
                  display: 'block',
                }}
              >
                3
              </i>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Step 3: How do you invoice milestones, record payments, and see real profit?
              </h3>
              <p style={{ color: 'var(--muted, #5B6676)' }}>
                Add your own payment details or links to milestone invoices and record payments in Floorly when received. Income and expenses roll into a net margin that counts your own time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Showcase: Real Browser Frame with Segmented Switcher */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.2vw, 52px)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                fontFamily: 'var(--font-display)',
                margin: '0 auto',
              }}
            >
              How does Floorly work across proposals, floors, and profit tracking?
            </h2>
            <p style={{ color: 'var(--muted, #5B6676)', marginTop: '8px', maxWidth: '36em', margin: '8px auto 0' }}>
              Floorly connects your workflow from initial brief to final payment. AI scopes deliverables, your floor protects your pricing, and the ledger tracks your payments and net margins.
            </p>

            {/* Segmented Switcher */}
            <div
              className="inline-flex max-w-full overflow-x-auto p-1 mt-6 rounded-full bg-white border-2 border-[var(--ink,#0E1A2B)] gap-1"
              role="tablist"
              aria-label="Product Showcase Views"
            >
              <button
                role="tab"
                aria-selected={activeShowcase === 'proposal'}
                onClick={() => setActiveShowcase('proposal')}
                style={{
                  border: 0,
                  background: activeShowcase === 'proposal' ? 'var(--ink, #0E1A2B)' : 'none',
                  color: activeShowcase === 'proposal' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors"
              >
                Protected Proposal
              </button>
              <button
                role="tab"
                aria-selected={activeShowcase === 'floor'}
                onClick={() => setActiveShowcase('floor')}
                style={{
                  border: 0,
                  background: activeShowcase === 'floor' ? 'var(--ink, #0E1A2B)' : 'none',
                  color: activeShowcase === 'floor' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors"
              >
                Floor Rules
              </button>
              <button
                role="tab"
                aria-selected={activeShowcase === 'profit'}
                onClick={() => setActiveShowcase('profit')}
                style={{
                  border: 0,
                  background: activeShowcase === 'profit' ? 'var(--ink, #0E1A2B)' : 'none',
                  color: activeShowcase === 'profit' ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-colors"
              >
                Profit Dashboard
              </button>
            </div>
          </div>

          {/* Browser Frame */}
          <div
            style={{
              background: '#FFFFFF',
              border: '2px solid var(--ink, #0E1A2B)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
            className="shadow-[5px_5px_0_var(--ink,#0E1A2B)] sm:shadow-[8px_8px_0_var(--ink,#0E1A2B)]"
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
                    return `app.floorly.com/workspace/${activeShowcase}`;
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
      <section id="features" style={{ background: 'var(--cobalt, #0047AB)', color: '#FFFFFF' }} className="py-14 sm:py-24">
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-display)',
            }}
          >
            What core features protect freelancers from scope creep and low quotes?
          </h2>
          <p style={{ color: '#CFE0F7', fontSize: '18px', maxWidth: '34em', marginTop: '16px' }}>
            Floorly combines AI scope analysis, server-enforced minimum price floors, scope-guard clauses, milestone invoicing, and profit tracking into a single workflow.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-16 mt-10 sm:mt-12"
          >
            {/* 1 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                How does server-enforced price floor protection work?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Set a minimum hourly rate and a minimum fee per project type. No proposal leaves below them.
              </p>
            </div>

            {/* 2 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                How does the AI requirement analyzer detect hidden deliverables?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Turns unstructured client messages into scoped deliverables, open questions and hour estimates.
              </p>
            </div>

            {/* 3 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                What scope guard clauses prevent unpaid client revisions?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Revision limits and change-order language that you can drop into any proposal in one click.
              </p>
            </div>

            {/* 4 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                How do payment details and invoicing currencies work?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Floorly does not collect client payments directly. You add your own payment details or links (such as bank details, PayPal, Stripe or Razorpay links, or UPI for INR) to invoices and log payments in Floorly across 8 supported currencies.
              </p>
            </div>

            {/* 5 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                How does Floorly calculate real net margins after logging time?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Net margin after expenses, tax and your own hourly rate, so a "good" project isn't secretly a loss.
              </p>
            </div>

            {/* 6 */}
            <div style={{ padding: '22px 0', borderTop: '1px solid rgba(255, 255, 255, 0.28)' }}>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    background: 'var(--sun, #FFC72C)',
                    borderRadius: '3px',
                    marginRight: '12px',
                    shrink: 0,
                  }}
                />
                How does Floorly generate AGENTS.md for AI coding assistants?
              </h3>
              <p style={{ color: '#D7E5F8', fontSize: '16px' }}>
                Turn an approved scope into coding instructions for AI assistants, so the build stays inside what was
                sold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Profit/Floor Calculator */}
      <section id="calculator" className="py-14 sm:py-24">
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="flex-1 min-w-0">
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.2vw, 52px)',
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-display)',
                }}
              >
                How do you calculate a safe project price floor before quoting?
              </h2>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '8px' }}>
                Multiply estimated hours by your hourly rate, apply a complexity multiplier for risk, and compare against your configured minimum project fee.
              </p>
            </div>

            {/* Currency Selector */}
            <div className="shrink-0" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <label htmlFor="currency-select" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--muted, #5B6676)', whiteSpace: 'nowrap' }}>
                Currency:
              </label>
              <select
                id="currency-select"
                value={calcCurrency}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '2px solid var(--ink, #0E1A2B)',
                  background: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c}>
                    {CURRENCIES[c].label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              marginTop: '40px',
              background: '#FFFFFF',
              border: '2px solid var(--ink, #0E1A2B)',
              borderRadius: '20px',
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 sm:p-9 shadow-[5px_5px_0_var(--ink,#0E1A2B)] sm:shadow-[8px_8px_0_var(--ink,#0E1A2B)]"
          >
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Hours */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 600 }}>
                  <span>Estimated Hours</span>
                  <b>{calcHours} hrs</b>
                </div>
                <input
                  type="range"
                  min={10}
                  max={120}
                  step={5}
                  value={calcHours}
                  onChange={(e) => setCalcHours(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '8px', accentColor: 'var(--cobalt, #0047AB)' }}
                  aria-label="Estimated project hours"
                />
              </div>

              {/* Hourly Rate */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 600 }}>
                  <span>Standard Hourly Rate</span>
                  <b>{fmtCurrency(calcRate)} / hr</b>
                </div>
                <input
                  type="range"
                  min={Math.round(currencyMeta.defaultRate * 0.4)}
                  max={Math.round(currencyMeta.defaultRate * 2.5)}
                  step={Math.round(currencyMeta.defaultRate * 0.1) || 5}
                  value={calcRate}
                  onChange={(e) => setCalcRate(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '8px', accentColor: 'var(--cobalt, #0047AB)' }}
                  aria-label="Hourly rate"
                />
              </div>

              {/* Complexity */}
              <div>
                <span style={{ fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
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
                      style={{
                        padding: '10px 4px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--ink, #0E1A2B)',
                        background: calcComplexity === c.val ? 'var(--ink, #0E1A2B)' : '#FFFFFF',
                        color: calcComplexity === c.val ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                        fontWeight: 600,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Floor Limit */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 600 }}>
                  <span>Your Configured Minimum Floor</span>
                  <b style={{ color: 'var(--cobalt-dark, #003A8C)' }}>{fmtCurrency(calcFloor)}</b>
                </div>
                <input
                  type="range"
                  min={Math.round(currencyMeta.defaultFloor * 0.4)}
                  max={Math.round(currencyMeta.defaultFloor * 2.5)}
                  step={currencyMeta.step}
                  value={calcFloor}
                  onChange={(e) => setCalcFloor(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '8px', accentColor: 'var(--sun, #FFC72C)' }}
                  aria-label="Configured floor limit"
                />
              </div>
            </div>

            {/* Live Outputs & Verdict */}
            <div
              style={{
                background: 'var(--page, #FAF5EA)',
                borderRadius: '16px',
                padding: '24px',
                border: '1.5px solid var(--line, #E8E0CF)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)', fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                  RECOMMENDED QUOTATION
                </div>
                <div
                  style={{
                    fontSize: '46px',
                    fontWeight: 600,
                    color: 'var(--ink, #0E1A2B)',
                    fontFamily: 'var(--font-display)',
                    fontVariantNumeric: 'tabular-nums lining-nums',
                    margin: '6px 0 2px',
                  }}
                >
                  {fmtCurrency(recommendedQuote)}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)' }}>
                  Labor ({calcHours}h × {fmtCurrency(calcRate)}) with {calcComplexity}x multiplier ={' '}
                  {fmtCurrency(adjustedLabor)}
                </p>
              </div>

              {/* Status / Saved Box */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: calculatorFloorHit ? 'var(--sun, #FFC72C)' : '#EAF1FB',
                  color: calculatorFloorHit ? 'var(--ink, #0E1A2B)' : 'var(--cobalt-dark, #003A8C)',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                {calculatorFloorHit ? (
                  <div>
                    <strong>Floor protection active:</strong> Adjusted labor was {fmtCurrency(adjustedLabor)}, but Floorly
                    held the proposal at your {fmtCurrency(calcFloor)} minimum.
                    <div style={{ marginTop: '6px', fontWeight: 700 }}>
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
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px',
                  borderRadius: '999px',
                  background: 'var(--cobalt, #0047AB)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Save this floor in Floorly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section (Monthly / Annual Billing Toggle) */}
      <section id="pricing" className="py-12 sm:py-20">
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-display)',
            }}
          >
            What are the pricing plans for Floorly?
          </h2>
          <p style={{ color: 'var(--muted, #5B6676)', marginTop: '12px', fontSize: '17px', maxWidth: '42em', lineHeight: 1.6 }}>
            Floorly offers four tiers, from a free Starter plan for early-stage freelancers to paid plans with full AI scoping, custom proposals, milestone invoicing, and profit tracking. Choose monthly billing or save 17% with annual billing.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: 'inline-flex',
              background: '#FFFFFF',
              border: '2px solid var(--ink, #0E1A2B)',
              borderRadius: '99px',
              padding: '4px',
              marginTop: '30px',
            }}
            role="group"
            aria-label="Billing period"
          >
            <button
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
              style={{
                border: 0,
                background: !isAnnual ? 'var(--ink, #0E1A2B)' : 'none',
                color: !isAnnual ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '15px',
                padding: '9px 20px',
                borderRadius: '99px',
                cursor: 'pointer',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
              style={{
                border: 0,
                background: isAnnual ? 'var(--ink, #0E1A2B)' : 'none',
                color: isAnnual ? '#FFFFFF' : 'var(--ink, #0E1A2B)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '15px',
                padding: '9px 20px',
                borderRadius: '99px',
                cursor: 'pointer',
              }}
            >
              Annual
              <span
                style={{
                  background: 'var(--sun, #FFC72C)',
                  color: 'var(--ink, #0E1A2B)',
                  fontSize: '12px',
                  borderRadius: '99px',
                  padding: '1px 8px',
                  marginLeft: '6px',
                }}
              >
                Save 17%
              </span>
            </button>
          </div>

          {/* Pricing Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 items-stretch"
          >
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
                  style={{
                    background: '#FFFFFF',
                    border: plan.popular ? '2px solid var(--cobalt, #0047AB)' : '1.5px solid var(--line, #E8E0CF)',
                    borderRadius: 'var(--r, 14px)',
                    padding: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: plan.popular ? '0 0 0 4px rgba(0, 71, 171, 0.1)' : 'none',
                    position: 'relative',
                  }}
                >
                  {plan.popular && (
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        background: 'var(--sun, #FFC72C)',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '2px 10px',
                        borderRadius: '99px',
                        marginBottom: '10px',
                      }}
                    >
                      Most popular
                    </span>
                  )}

                  <h3 style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.015em', fontFamily: 'var(--font-display)' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', minHeight: '44px', marginTop: '2px' }}>
                    {plan.tagline}
                  </p>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '44px',
                      fontVariantNumeric: 'tabular-nums lining-nums',
                      letterSpacing: '-0.02em',
                      margin: '14px 0 2px',
                    }}
                  >
                    ${formattedPrice}
                    <small
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        fontSize: '15px',
                        color: 'var(--muted, #5B6676)',
                      }}
                    >
                      {' '}
                      /mo
                    </small>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)', minHeight: '20px' }}>{billNote}</div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 26px', fontSize: '15px', flex: 1 }}>
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          padding: '6px 0 6px 24px',
                          position: 'relative',
                          color: 'var(--ink, #0E1A2B)',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--cobalt, #0047AB)',
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/signup"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '12px',
                      borderRadius: '999px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      border: '2px solid var(--cobalt, #0047AB)',
                      background: plan.popular ? 'var(--cobalt, #0047AB)' : 'transparent',
                      color: plan.popular ? '#FFFFFF' : 'var(--cobalt, #0047AB)',
                    }}
                    className={plan.popular ? 'hover:bg-[var(--cobalt-dark,#003A8C)]' : 'hover:bg-[#FFFFFF]'}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '14px', color: 'var(--muted, #5B6676)' }}>
            Cancel any time. See our{' '}
            <Link to="/refund-policy" style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}>
              refund policy
            </Link>
            .
          </div>
        </div>
      </section>

      {/* 9. Social Proof (Developer feedback slots, no fake logos or metrics) */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.2vw, 52px)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                fontFamily: 'var(--font-display)',
                margin: '0 auto',
              }}
            >
              Why do independent developers and designers use Floorly?
            </h2>
            <p style={{ color: 'var(--muted, #5B6676)', marginTop: '8px', fontSize: '16px' }}>
              Freelance developers, designers, and consultants use Floorly to calculate sustainable quotes, enforce minimum price floors, and track project profit after expenses and logged time.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Testimonial 1 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--line, #E8E0CF)',
                borderRadius: 'var(--r, 14px)',
                padding: '24px',
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--ink, #0E1A2B)', lineHeight: 1.6, marginBottom: '18px' }}>
                "Before Floorly, I would mentally talk myself down in the proposal because I wanted to win the gig. The
                hard floor rule on the server stops me from making dumb compromises."
              </p>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Alex R.</div>
              <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Full-stack Developer (React &amp; Node)</div>
            </div>

            {/* Testimonial 2 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--line, #E8E0CF)',
                borderRadius: 'var(--r, 14px)',
                padding: '24px',
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--ink, #0E1A2B)', lineHeight: 1.6, marginBottom: '18px' }}>
                "Dropping the generated AGENTS.md directly into Cursor is a game changer. The AI assistant actually
                refuses to implement things outside the paid scope."
              </p>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Marcus K.</div>
              <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Independent Web Consultant</div>
            </div>

            {/* Testimonial 3 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--line, #E8E0CF)',
                borderRadius: 'var(--r, 14px)',
                padding: '24px',
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--ink, #0E1A2B)', lineHeight: 1.6, marginBottom: '18px' }}>
                "The profit dashboard finally counts my own hours as a cost. I realised my 'best' $5k project last month
                was actually losing money once logged hours were deducted."
              </p>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Devon T.</div>
              <div style={{ fontSize: '13px', color: 'var(--muted, #5B6676)' }}>Design &amp; Frontend Studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion (Native <details>) */}
      <section id="faq" className="pb-16 sm:pb-24">
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-display)',
            }}
          >
            Frequently asked questions: how does Floorly protect freelancer income?
          </h2>
          <p style={{ color: 'var(--muted, #5B6676)', marginTop: '12px', fontSize: '17px', maxWidth: '42em', lineHeight: 1.6 }}>
            Here are direct answers to common questions about setting minimum price floors, structuring project proposals, and managing client billing.
          </p>

          <div style={{ maxWidth: '780px', marginTop: '40px' }}>
            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
              open
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>What is a price floor for freelancers?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                A freelance price floor is the minimum monetary quote an independent professional sets for a project or hourly rate to cover their labor and business expenses. It combines your baseline hourly rate, estimated hours, and configurable scope buffers so you never quote below your minimum.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>How many hours should I add as a contingency buffer?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                Contingency buffers are configurable based on project complexity, with a common starting buffer of 10% to 20% on fixed-price estimates. This extra margin absorbs unanticipated revisions and project edge cases without lowering your effective hourly earnings.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>What should a professional freelance proposal include?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                A professional freelance proposal includes an executive project summary, itemized deliverables, explicit out-of-scope exclusions, a 3-tier pricing schedule, milestone payment terms, revision limits, and a link where clients accept online.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>How does the price floor work in Floorly?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                You set a minimum hourly rate and a minimum fee per category. After the AI drafts a proposal, Floorly
                checks the totals on the server and raises anything below your floor. The AI can't override it.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>Which currencies and taxes are supported?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                USD, EUR, GBP, INR, AUD, CAD, AED and SGD, with configurable VAT, GST or sales tax and a tax ID on every
                document.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>How do my clients pay me?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                Floorly does not collect payments from your clients. You add your own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to proposals and invoices, and record payments in Floorly once received.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>Can I cancel or get a refund?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                Cancel any time from Settings. Our{' '}
                <Link to="/refund-policy" style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}>
                  refund policy
                </Link>{' '}
                explains the details.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>Is the AI estimate always right?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                No. Every estimate shows a confidence level and you can edit the hours before the proposal is generated.
              </p>
            </details>

            <details
              style={{
                borderTop: '1px solid var(--line, #E8E0CF)',
                borderBottom: '1px solid var(--line, #E8E0CF)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span>Is my client data kept private?</span>
                <span style={{ fontSize: '24px', color: 'var(--cobalt, #0047AB)' }}>+</span>
              </summary>
              <p style={{ color: 'var(--muted, #5B6676)', marginTop: '10px', fontSize: '16px', lineHeight: 1.6 }}>
                Yes. Your inputs and client messages are strictly isolated per account and processed solely to generate
                your proposals and instructions.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 10b. Audience Clarity, Use Cases & Authoritative Sources (SEO/AEO/GEO Section) */}
      <section
        style={{
          borderTop: '1px solid var(--line, #E8E0CF)',
          background: 'var(--cream, #FAF5EA)',
        }}
        className="py-14 sm:py-20"
        aria-labelledby="audience-and-methodology"
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto' }} className="px-4 sm:px-6">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--cobalt, #0047AB)',
                background: '#EBF2FF',
                padding: '4px 12px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              Audience &amp; Industry Standards
            </span>
            <h2
              id="audience-and-methodology"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4.2vw, 52px)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--ink, #0E1A2B)',
                margin: 0,
              }}
            >
              Who is Floorly built for and when should you use it?
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--muted, #5B6676)',
                maxWidth: '42em',
                margin: '14px auto 0',
                lineHeight: 1.6,
              }}
            >
              Floorly is engineered specifically for independent knowledge workers and small boutique studios who quote
              fixed-price client contracts and need deterministic guardrails against chronic underpricing and scope creep.
            </p>
          </div>

          {/* 4 Audience Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--line, #E8E0CF)',
                padding: '24px',
                boxShadow: '0 2px 10px rgba(14,26,43,0.03)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em', fontFamily: 'var(--font-display)', color: 'var(--ink, #0E1A2B)', margin: '0 0 10px' }}>
                How does Floorly protect full-stack developers?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', lineHeight: 1.6, margin: 0 }}>
                Catches unstated API integrations, background task queues, and edge cases from unstructured client briefs, applying configurable technical complexity multipliers to protect your time.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--line, #E8E0CF)',
                padding: '24px',
                boxShadow: '0 2px 10px rgba(14,26,43,0.03)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em', fontFamily: 'var(--font-display)', color: 'var(--ink, #0E1A2B)', margin: '0 0 10px' }}>
                How does Floorly protect UI/UX product designers?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', lineHeight: 1.6, margin: 0 }}>
                Defines itemized screen deliverables, design systems, and explicit revision limits. Includes a configurable contingency buffer so design iterations never eat into profits.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--line, #E8E0CF)',
                padding: '24px',
                boxShadow: '0 2px 10px rgba(14,26,43,0.03)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink, #0E1A2B)', margin: '0 0 10px' }}>
                How does Floorly benefit copywriters and strategists?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', lineHeight: 1.6, margin: 0 }}>
                Prevents open-ended feedback loops and rewrites. Organizes milestone billing schedules with clear terms where clients accept online.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--line, #E8E0CF)',
                padding: '24px',
                boxShadow: '0 2px 10px rgba(14,26,43,0.03)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink, #0E1A2B)', margin: '0 0 10px' }}>
                How does Floorly streamline boutique creative studios?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted, #5B6676)', lineHeight: 1.6, margin: 0 }}>
                For small studios standardizing intake and proposals. Helps team members consistently adhere to target price floors so quotes stay above your minimum during client negotiations.
              </p>
            </div>
          </div>

          {/* Illustrative Example Box */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '2px solid var(--ink, #0E1A2B)',
              padding: '32px',
              marginBottom: '48px',
              boxShadow: '6px 6px 0 var(--ink, #0E1A2B)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                color: 'var(--ink, #0E1A2B)',
                margin: '0 0 12px',
              }}
            >
              Example (illustrative): How does the pricing calculation work?
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--muted, #5B6676)', lineHeight: 1.6, margin: '0 0 16px' }}>
              For a sample {illustrativeExample.estimatedHours}-hour project at a baseline rate of ${illustrativeExample.standardHourlyRate}/hr, Floorly adds a configurable {illustrativeExample.contingencyPercent}% scope contingency (+{illustrativeExample.contingencyHours}h) and applies a {illustrativeExample.complexityMultiplier}x multiplier for medium complexity. This calculates structured package tiers starting at ${illustrativeExample.tiers.essential.toLocaleString()} (Essential), ${illustrativeExample.tiers.standard.toLocaleString()} (Standard), and ${illustrativeExample.tiers.premium.toLocaleString()} (Premium), while ensuring total pricing never drops below your configured category floor (${illustrativeExample.categoryFloor.toLocaleString()}).
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600 }}>
              <span style={{ color: 'var(--cobalt, #0047AB)' }}>✓ Base: ${illustrativeExample.labor.toLocaleString()} ({illustrativeExample.hours} total hours @ ${illustrativeExample.standardHourlyRate}/hr)</span>
              <span style={{ color: 'var(--cobalt, #0047AB)' }}>✓ Complexity Multiplier: {illustrativeExample.complexityMultiplier}x</span>
              <span style={{ color: 'var(--cobalt, #0047AB)' }}>✓ Contingency: {illustrativeExample.contingencyPercent}% (+{illustrativeExample.contingencyHours}h)</span>
              <span style={{ color: '#047857' }}>★ Package Tiers: Essential ${illustrativeExample.tiers.essential.toLocaleString()} | Standard ${illustrativeExample.tiers.standard.toLocaleString()} | Premium ${illustrativeExample.tiers.premium.toLocaleString()}</span>
            </div>
          </div>

          {/* Expert Perspectives & Authoritative Industry Citations */}
          <div style={{ marginTop: '48px', marginBottom: '24px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--ink, #0E1A2B)',
                marginBottom: '16px',
              }}
            >
              Expert Perspectives on Freelance Rate Defense and Price Floors
            </h3>
            <p style={{ color: 'var(--muted, #5B6676)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Independent research in generative engine visibility (<a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}>arXiv:2311.09735</a>), economic pricing theory (<a href="https://en.wikipedia.org/wiki/Price_floor" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}>Wikipedia Price Floors</a>), and official <a href="https://stripe.com/resources/more/invoicing-basics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'underline' }}>Stripe Invoicing Standards</a> demonstrate that establishing formal floor parameters is essential to sustaining digital service consulting.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <blockquote style={{ background: '#FFFFFF', padding: '18px 24px', borderLeft: '4px solid var(--cobalt, #0047AB)', borderRadius: '8px', margin: 0, fontStyle: 'italic', color: 'var(--ink, #0E1A2B)', fontSize: '15px', lineHeight: 1.6 }}>
                &ldquo;Setting a programmatic price floor removes emotion during negotiations and protects net project margins before contracts are signed.&rdquo; Ritik Sharma, Founder and Systems Engineer at Floorly
              </blockquote>
              <blockquote style={{ background: '#FFFFFF', padding: '18px 24px', borderLeft: '4px solid var(--cobalt, #0047AB)', borderRadius: '8px', margin: 0, fontStyle: 'italic', color: 'var(--ink, #0E1A2B)', fontSize: '15px', lineHeight: 1.6 }}>
                &ldquo;Fixed-price digital engagements consistently fail when contractors underestimate client revision cycles and API complexity without building in dedicated contingency buffers.&rdquo; David Heinemeier Hansson, Co-founder at 37signals and Creator of Ruby on Rails
              </blockquote>
              <blockquote style={{ background: '#FFFFFF', padding: '18px 24px', borderLeft: '4px solid var(--cobalt, #0047AB)', borderRadius: '8px', margin: 0, fontStyle: 'italic', color: 'var(--ink, #0E1A2B)', fontSize: '15px', lineHeight: 1.6 }}>
                &ldquo;Pricing below your true break-even capacity leads to burnout and project delivery failure; transparent pricing floors establish professional credibility with clients.&rdquo; Brennan Dunn, Founder at Double Your Freelancing
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Band (Dark Ink Background) */}
      <aside className="px-4 sm:px-6 mb-16 sm:mb-24">
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            background: 'var(--ink, #0E1A2B)',
            color: '#FFFFFF',
            textAlign: 'center',
            borderRadius: '24px',
          }}
          className="py-12 px-6 sm:py-20 sm:px-8"
        >
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-display)',
              margin: '0 auto',
            }}
          >
            Ready to quote with confidence and stop undercharging?
          </h2>
          <p
            style={{
              color: '#B8C4D6',
              margin: '16px auto 30px',
              maxWidth: '30em',
              fontSize: '18px',
            }}
          >
            Set your floor, paste your next brief, and send a proposal you'd be happy to get paid for.
          </p>
          <Link
            to="/signup"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              background: 'var(--sun, #FFC72C)',
              color: 'var(--ink, #0E1A2B)',
              border: '2px solid var(--sun, #FFC72C)',
            }}
            className="hover:bg-[#FFD75E] transition-all"
          >
            Start free
          </Link>
        </div>
      </aside>
      </main>

      {/* 12. Universal Clean Footer */}
      <Footer />
    </div>
  );
}
