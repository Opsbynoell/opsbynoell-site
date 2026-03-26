/*
 * OPS BY NOELL — Footer Component
 * Design: Quiet Editorial Luxury
 * - Warm #E8E2DA background
 * - Logo wordmark repeated
 * - Thin divider, minimal links
 * - Copyright line in small DM Sans
 */

import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#E8E2DA', borderTop: '1px solid #C9BFB8' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/logo_v4_final_36ce7ad5.jpg"
                alt="Ops by Noell"
                style={{ height: '72px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#7A6F68', lineHeight: 1.7, maxWidth: '260px' }}>
              AI Automation Systems for Local Businesses. Done for you — designed, installed, and managed.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Navigation</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Case Study', href: '/case-study' },
                { label: 'About', href: '/about' },
                { label: 'Book a Free Audit', href: '/book' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8125rem',
                    color: '#7A6F68',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#B8956A'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#7A6F68'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + CTA */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#7A6F68' }}>
                Lake Forest, CA
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#7A6F68' }}>
                Based in Orange County. Built for businesses everywhere.
              </p>
              <a
                href="mailto:hello@opsbynoell.com"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#B8956A', textDecoration: 'none' }}
              >
                hello@opsbynoell.com
              </a>
            </div>
            <a href="/book" className="btn-primary" style={{ fontSize: '0.6875rem', padding: '0.75rem 1.5rem' }}>
              Book Free Audit
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#C9BFB8', margin: '2.5rem 0 1.75rem' }} />

        {/* Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="sm:flex-row sm:justify-between sm:items-center">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', color: '#7A6F68', letterSpacing: '0.04em' }}>
            © 2026 Ops by Noell. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', color: '#7A6F68', letterSpacing: '0.04em' }}>
            AI-Powered Operations for Local Businesses · Based in Orange County. Built for businesses everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
