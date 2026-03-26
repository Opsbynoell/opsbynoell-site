import { Link } from 'wouter';

const GHL_BOOKING = 'https://api.leadconnectorhq.com/widget/booking/ko7eXb5zooItceadiV02';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#09090B',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand column */}
          <div style={{ maxWidth: '340px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/logo_v4_final_36ce7ad5.jpg"
                alt="Ops by Noell"
                style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }}
              />
            </Link>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: '#52525B',
              lineHeight: 1.6,
              marginTop: '0.75rem',
            }}>
              AI automation systems for service businesses. Done for you. Running 24/7.
            </p>
          </div>

          {/* Links columns — shown side by side on larger screens */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#52525B', marginBottom: '1rem' }}>
                Navigation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Services', href: '/services' },
                  { label: 'Case Study', href: '/case-study' },
                  { label: 'About', href: '/about' },
                  { label: 'Industries', href: '/industries' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#71717A',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FAFAFA'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#52525B', marginBottom: '1rem' }}>
                Contact
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A' }}>Mission Viejo, CA</p>
                <a href="mailto:hello@opsbynoell.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FAFAFA'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
                >
                  hello@opsbynoell.com
                </a>
                <a href="tel:9492429161" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FAFAFA'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
                >
                  (949) 242-9161
                </a>
                <a
                  href={GHL_BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#A855F7', textDecoration: 'none', fontWeight: 500 }}
                >
                  Book Free Intro Call →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#3F3F46' }}>
            © 2026 Ops by Noell. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map((link) => (
              <a key={link.href} href={link.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#3F3F46', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#3F3F46'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
