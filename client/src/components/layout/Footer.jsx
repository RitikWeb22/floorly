import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid var(--line, #E8E0CF)', color: 'var(--muted, #5B6676)', padding: '64px 0 36px', fontSize: '14px' }}>
      <div className="landing-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Info (4 cols on lg) */}
          <div className="lg:col-span-4">
            <Logo size="md" />
            <p style={{ marginTop: '14px', fontSize: '14px', lineHeight: '1.6', color: 'var(--muted, #5B6676)' }}>
              AI-powered requirement scoping and price floor enforcement for developers, designers, writers, consultants, and independent agencies.
            </p>
            <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: '1.5', color: 'var(--muted, #5B6676)' }}>
              Support:{' '}
              <a href={`mailto:${siteConfig.supportEmail}`} style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'none', fontWeight: 600 }}>
                {siteConfig.supportEmail}
              </a>
            </p>
            {siteConfig.contactAddress && (
              <p style={{ marginTop: '8px', fontSize: '13px', lineHeight: '1.5', color: 'var(--muted, #5B6676)', whiteSpace: 'pre-line' }}>
                {siteConfig.contactAddress}
              </p>
            )}
          </div>

          {/* 4 Column Navigation Grid (8 cols on lg) */}
          <nav aria-label="Footer Navigation" className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '14px' }}>
                  Product
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/about" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Pricing &amp; Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Digital Delivery Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '14px' }}>
                  Guides &amp; Blog
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/blog" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      All Guides &amp; Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/what-is-agents-md" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      What is AGENTS.md?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/how-to-price-a-freelance-project" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      How to Price a Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/freelance-scope-of-work-template" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Scope of Work Template
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/prevent-scope-creep-freelance" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Prevent Scope Creep
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '14px' }}>
                  Free Tools
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/tools/freelance-rate-calculator" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Rate &amp; Floor Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools/project-price-calculator" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Project Price Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools/freelance-proposal-generator" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      AI Proposal Generator
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '14px' }}>
                  Legal &amp; Compliance
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/terms" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/refund-policy" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Cancellation &amp; Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)] transition-colors">
                      Contact &amp; Grievances
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--line, #E8E0CF)', fontSize: '13px', color: 'var(--muted, #5B6676)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div>
            <p>&copy; {currentYear} Floorly. Operated by {siteConfig.legalName || 'Ritik'}. All rights reserved.</p>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--muted, #5B6676)' }}>
            100% Digital SaaS &bull; Instant Electronic Delivery
          </div>
        </div>
      </div>
    </footer>
  );
}
