/*
 * OPS BY NOELL — Navigation Component
 * Design: Quiet Editorial Luxury
 * - Logo wordmark: "Ops" / rule / "by Noell" in Cormorant Garamond
 * - Thin 1px bottom border on scroll
 * - DM Sans nav links, small-caps tracking
 * - CTA button in burnished gold (#B8956A)
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Study', href: '/case-study' },
  { label: 'About', href: '/about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(245, 240, 235, 0.97)' : 'rgba(245, 240, 235, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #C9BFB8' : '1px solid transparent',
          transition: 'border-color 0.3s ease, background-color 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/logo_v4_final_36ce7ad5.jpg"
              alt="Ops by Noell"
              style={{ height: '68px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: location === link.href ? '#B8956A' : '#3D3530',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = '#B8956A'; }}
                onMouseLeave={(e) => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = '#3D3530'; }}
              >
                {link.label}
              </Link>
            ))}
            <a href="/book" className="btn-primary" style={{ padding: '0.625rem 1.375rem', fontSize: '0.6875rem' }}>
              Book Free Audit
            </a>
            <a
              href="https://t.me/opsbynoell_web_alerts_bot?start=website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FDFAF7',
                backgroundColor: '#229ED9',
                padding: '0.625rem 1.375rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.627l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.932z"/></svg>
              Book a Call
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#3D3530', padding: '0.25rem' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#F5F0EB',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.5rem',
            borderTop: '1px solid #C9BFB8',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: location === link.href ? '#B8956A' : '#3D3530',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid #E8E2DA',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/book" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
              Book Your Free Audit
            </a>
            <a
              href="https://t.me/opsbynoell_web_alerts_bot?start=website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#229ED9',
                color: '#FDFAF7',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.875rem 1.5rem',
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.627l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.932z"/></svg>
              Book a Call via Telegram
            </a>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#7A6F68', letterSpacing: '0.05em' }}>
              Based in Orange County. Built for businesses everywhere.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
