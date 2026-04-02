/*
 * OPS BY NOELL — Navigation (NeuraFlas Design System)
 * - nav-blur: rgba(1,5,9,0.7) backdrop-filter blur(20px)
 * - Sora font, accent #A78BFA
 * - Active: gradient underline
 * - Industries dropdown with 5 vertical landing pages
 */

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Nova', href: '/nova' },
  { label: 'Results', href: '/case-study' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const industries = [
  { label: 'Massage Therapists', href: '/massage-therapist-automation', desc: 'From zero infrastructure to automated' },
  { label: 'Med Spas', href: '/med-spa-automation', desc: 'High-value appointments, zero missed calls' },
  { label: 'Salons', href: '/salon-automation', desc: 'Fill your chair. Keep it full.' },
  { label: 'Dental Offices', href: '/dental-automation', desc: 'Reduce no-shows, automate recall' },
  { label: 'Home Services', href: '/home-services-automation', desc: 'Never miss a job request again' },
];

const LOGO_URL = '/logo.svg';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setIndustriesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isIndustriesActive = industries.some(i => location === i.href);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(1,5,9,0.88)' : 'rgba(1,5,9,0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(167,139,250,0.15)' : '1px solid rgba(167,139,250,0.08)',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src={LOGO_URL}
              alt="Ops by Noell"
              style={{ width: '160px', height: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }} className="hidden md:flex">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#ffffff' : 'rgba(160,168,184,0.85)',
                    textDecoration: 'none',
                    padding: '0.5rem 0.875rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(160,168,184,0.85)';
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0.875rem',
                      right: '0.875rem',
                      height: '2px',
                      background: 'linear-gradient(90deg, #A78BFA, #C4B5FD)',
                      borderRadius: '99px',
                    }} />
                  )}
                </Link>
              );
            })}

            {/* Industries Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: isIndustriesActive ? 600 : 400,
                  color: isIndustriesActive ? '#ffffff' : 'rgba(160,168,184,0.85)',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isIndustriesActive) (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!industriesOpen && !isIndustriesActive) (e.currentTarget as HTMLElement).style.color = 'rgba(160,168,184,0.85)';
                }}
              >
                Industries
                <ChevronDown size={14} style={{ transition: 'transform 0.2s ease', transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                {isIndustriesActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0.875rem',
                    right: '0.875rem',
                    height: '2px',
                    background: 'linear-gradient(90deg, #A78BFA, #C4B5FD)',
                    borderRadius: '99px',
                  }} />
                )}
              </button>

              {industriesOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '280px',
                  background: 'rgba(4,8,14,0.97)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  zIndex: 200,
                }}>
                  {industries.map((item) => {
                    const isItemActive = location === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          background: isItemActive ? 'rgba(167,139,250,0.12)' : 'transparent',
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!isItemActive) (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.07)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isItemActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', fontWeight: 600, color: isItemActive ? '#C4B5FD' : '#ffffff', marginBottom: '0.2rem' }}>
                          {item.label}
                        </div>
                        <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', color: 'rgba(160,168,184,0.7)', lineHeight: 1.4 }}>
                          {item.desc}
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden md:flex">
            <a href="/book" className="btn-gradient" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
              Book Free Audit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#ffffff', padding: '0.5rem', borderRadius: '0.375rem', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(1,5,9,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            borderTop: '1px solid rgba(167,139,250,0.15)',
            overflowY: 'auto',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '1.125rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#ffffff' : 'rgba(160,168,184,0.85)',
                    textDecoration: 'none',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: isActive ? 'rgba(167,139,250,0.1)' : 'transparent',
                    borderLeft: isActive ? '3px solid #A78BFA' : '3px solid transparent',
                    transition: 'background 0.15s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Industries Accordion */}
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '1.125rem',
                fontWeight: isIndustriesActive ? 600 : 400,
                color: isIndustriesActive ? '#ffffff' : 'rgba(160,168,184,0.85)',
                background: isIndustriesActive ? 'rgba(167,139,250,0.1)' : 'transparent',
                border: 'none',
                borderLeft: isIndustriesActive ? '3px solid #A78BFA' : '3px solid transparent',
                padding: '0.875rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                width: '100%',
              }}
            >
              Industries
              <ChevronDown size={16} style={{ transition: 'transform 0.2s ease', transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
            </button>

            {mobileIndustriesOpen && (
              <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {industries.map((item) => {
                  const isItemActive = location === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: '1rem',
                        fontWeight: isItemActive ? 600 : 400,
                        color: isItemActive ? '#C4B5FD' : 'rgba(160,168,184,0.85)',
                        textDecoration: 'none',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        backgroundColor: isItemActive ? 'rgba(167,139,250,0.08)' : 'transparent',
                        borderLeft: isItemActive ? '3px solid rgba(167,139,250,0.5)' : '3px solid transparent',
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </nav>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/book" className="btn-gradient" style={{ display: 'flex', justifyContent: 'center', fontWeight: 600 }}>
              Book Free Audit
            </a>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(167,139,250,0.12)' }}>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', color: 'rgba(160,168,184,0.6)', letterSpacing: '0.04em' }}>
              Based in Orange County. Built for businesses everywhere.
            </p>
          </div>
        </div>
      )}
    </>
  );
}


