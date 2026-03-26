import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const GHL_BOOKING = 'https://api.leadconnectorhq.com/widget/booking/ko7eXb5zooItceadiV02';

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Case Study', href: '/case-study' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
];

const LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/logo_v4_final_36ce7ad5.jpg';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(9,9,11,0.96)' : 'rgba(9,9,11,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <img
              src={LOGO}
              alt="Ops by Noell"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(1.1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: location === link.href ? '#FAFAFA' : '#71717A',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FAFAFA'; }}
                onMouseLeave={(e) => { if (location !== link.href) (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GHL_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.5625rem 1.25rem', fontSize: '0.8125rem' }}
            >
              Book Free Intro Call
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#FAFAFA', padding: '0.25rem', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
          backgroundColor: '#09090B',
          zIndex: 99,
          display: 'flex', flexDirection: 'column',
          padding: '2rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: location === link.href ? '#A855F7' : '#FAFAFA',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: '2rem' }}>
            <a
              href={GHL_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'block', textAlign: 'center' }}
            >
              Book Free Intro Call
            </a>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#52525B' }}>
              Based in Orange County. Built for businesses everywhere.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
