import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid var(--line, #E8E0CF)', color: 'var(--muted, #5B6676)', padding: '56px 0 36px', fontSize: '14px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ maxWidth: '340px' }}>
            <Logo size="md" />
            <p style={{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--muted, #5B6676)' }}>
              AI-powered requirement scoping and deterministic floor pricing workstation for independent developers and design studios.
            </p>
            <p style={{ marginTop: '8px', fontSize: '13px', lineHeight: '1.5', color: 'var(--muted, #5B6676)' }}>
              Support:{' '}
              <a href={`mailto:${siteConfig.supportEmail}`} style={{ color: 'var(--cobalt, #0047AB)', textDecoration: 'none', fontWeight: 600 }}>
                {siteConfig.supportEmail}
              </a>
            </p>
            {siteConfig.contactAddress && (
              <p style={{ marginTop: '6px', fontSize: '12px', lineHeight: '1.5', color: 'var(--muted, #5B6676)', whiteSpace: 'pre-line' }}>
                {siteConfig.contactAddress}
              </p>
            )}
          </div>

          <nav aria-label="Footer Navigation">
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '12px' }}>
                  Product
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/about" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Pricing &amp; Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Digital Delivery Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0E1A2B', marginBottom: '12px' }}>
                  Legal &amp; Compliance
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li>
                    <Link to="/terms" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/refund-policy" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Cancellation &amp; Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" style={{ color: 'var(--muted, #5B6676)', textDecoration: 'none' }} className="hover:text-[var(--cobalt,#0047AB)]">
                      Contact &amp; Grievances
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--line, #E8E0CF)', fontSize: '13px', color: 'var(--muted, #5B6676)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div>
            {siteConfig.legalName ? (
              <p>&copy; {currentYear} Floorly. Operated by {siteConfig.legalName}. All rights reserved.</p>
            ) : (
              <p>&copy; {currentYear} Floorly. All rights reserved.</p>
            )}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--muted, #5B6676)' }}>
            100% Digital SaaS &bull; Instant Electronic Delivery
          </div>
        </div>
      </div>
    </footer>
  );
}
