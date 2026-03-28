/*
 * OPS BY NOELL — Footer (NeuraFlas Design System)
 * - Background: #010509, border: rgba(167,139,250,0.12)
 * - Sora font, purple accents
 */

import { Link } from 'wouter';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const LOGO_URL = '/logo.png';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#010509', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src={LOGO_URL}
                alt="Ops by Noell"
                style={{ width: '140px', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#868583', lineHeight: 1.75, maxWidth: '260px', marginBottom: '1.5rem' }}>
              AI automation systems for local service businesses. Done for you. Running 24/7.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/opsbynoell' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgba(167,139,250,0.2)',
                    color: 'rgba(160,168,184,0.7)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#A78BFA';
                    el.style.color = '#C4B5FD';
                    el.style.background = 'rgba(167,139,250,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(167,139,250,0.2)';
                    el.style.color = 'rgba(160,168,184,0.7)';
                    el.style.background = 'transparent';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(167,139,250,0.2)',
                  color: 'rgba(160,168,184,0.7)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#A78BFA';
                  el.style.color = '#C4B5FD';
                  el.style.background = 'rgba(167,139,250,0.1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(167,139,250,0.2)';
                  el.style.color = 'rgba(160,168,184,0.7)';
                  el.style.background = 'transparent';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A78BFA', marginBottom: '1.25rem' }}>Navigation</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Results', href: '/case-study' },
                { label: 'About', href: '/about' },
                { label: 'Book a Free Intro Call', href: '/book' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '0.875rem',
                    color: '#868583',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#868583'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + CTA */}
          <div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A78BFA', marginBottom: '1.25rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#868583' }}>
                Mission Viejo, CA
              </p>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#868583' }}>
                Based in Orange County. Built for businesses everywhere.
              </p>
              <a
                href="mailto:hello@opsbynoell.com"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#A78BFA', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C4B5FD'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A78BFA'; }}
              >
                hello@opsbynoell.com
              </a>
              <a
                href="tel:+19492429161"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#A78BFA', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C4B5FD'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A78BFA'; }}
              >
                (949) 242-9161
              </a>
            </div>
            <a href="/book" className="btn-gradient" style={{ fontSize: '0.8125rem', padding: '0.75rem 1.5rem', display: 'inline-block' }}>
              Book Free Intro Call
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(167,139,250,0.12)', margin: '2.5rem 0 1.75rem' }} />

        {/* Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="sm:flex-row sm:justify-between sm:items-center">
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#868583' }}>
            © 2026 Ops by Noell. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/privacy-policy"
              style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#868583', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#868583'; }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#868583', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#868583'; }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
