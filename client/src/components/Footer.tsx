/*
 * OPS BY NOELL — Footer v9 (Light Theme)
 * Spec: Background #FAFAF8, 60px vertical padding, two rows
 * Row 1: Left — wordmark teal. Right — nav links #555555
 * Row 2: Centered copyright #AAAAAA
 * Top border: 1px solid #E5E5E5
 */

import { Link } from 'wouter';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#F7EDE8', borderTop: '1px solid #E5E5E5' }}>
      <div className="container" style={{ paddingTop: '3.75rem', paddingBottom: '3.75rem' }}>
        {/* Row 1 */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          {/* Left: wordmark + tagline + socials */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: "'Nicholas', serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#0CA2A2',
                letterSpacing: '-0.01em',
                display: 'block',
                marginBottom: '0.75rem',
              }}>
                Ops by Noell
              </span>
            </Link>
            <p style={{
              fontFamily: "'Nicholas', serif",
              fontSize: '0.875rem',
              color: '#555555',
              lineHeight: 1.75,
              maxWidth: '260px',
              marginBottom: '1.25rem',
            }}>
              AI automation systems for local service businesses. Done for you. Running 24/7.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/opsbynoell' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/opsbynoell' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #E5E5E5',
                    color: '#555555',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#0CA2A2';
                    el.style.color = '#0CA2A2';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#E5E5E5';
                    el.style.color = '#555555';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: nav links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 3rem', alignItems: 'flex-start' }}>
            {[
              { label: 'How It Works', href: '/#how-it-works' },
              { label: 'Nova Support', href: '/nova' },
              { label: 'Results', href: '/case-study' },
              { label: 'Book Audit', href: '/book' },
              { label: 'Privacy', href: '/privacy-policy' },
              { label: 'Terms', href: '/terms' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Nicholas', serif",
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: '#555555',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0CA2A2'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555555'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#E5E5E5', margin: '0 0 1.75rem' }} />

        {/* Row 2: copyright */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Nicholas', serif",
            fontSize: '0.8125rem',
            color: '#AAAAAA',
            fontWeight: 400,
          }}>
            © 2026 Ops by Noell. Mission Viejo, CA. Built for the practices doing the real work.
          </p>
        </div>
      </div>
    </footer>
  );
}
