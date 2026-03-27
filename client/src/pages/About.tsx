/*
 * OPS BY NOELL — About Page (NeuraFlas Design System)
 * - Background: #010509, Satoshi headings, Sora body, #A78BFA accent
 * - Sections: Hero, Who We Are, Why We Built This, Differentiators, CTA
 */

import { ArrowRight, Zap, Shield, Target, TrendingUp } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

function FadeItem({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s ease-out ${delay}s, transform 0.65s ease-out ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.375rem 1rem', borderRadius: '99px',
      border: '1px solid rgba(167,139,250,0.25)', background: 'rgba(167,139,250,0.08)',
      fontFamily: "'Sora', sans-serif", fontSize: '0.6875rem', fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#A78BFA',
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A78BFA', display: 'inline-block' }} />
      {children}
    </span>
  );
}

const differentiators = [
  {
    icon: Target,
    title: "We specialize in local businesses.",
    body: "No enterprise clients. No SaaS. No corporate workflows. Every system we've built is for a local service business owner who wears every hat and needs infrastructure that fits their life.",
  },
  {
    icon: Zap,
    title: "We build it. We manage it. We keep it running.",
    body: "We design your system, install every component, test it before go-live, and manage it from there. You never touch a setting.",
  },
  {
    icon: TrendingUp,
    title: "We focus on revenue, not vanity metrics.",
    body: "We track leads recovered, appointments booked, no-shows prevented, reviews generated, clients reactivated. Every conversation is anchored in revenue impact.",
  },
  {
    icon: Shield,
    title: "We show you the math first. Always.",
    body: "Before you spend a dollar on a build, you see exactly what your operational gaps cost you monthly, quantified from your actual numbers. Informed decisions, every step.",
    highlight: true,
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#010509', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', paddingTop: '80px', overflow: 'hidden' }}>
        {/* Hero gradient bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(36,64,180,0.18) 0%, rgba(100,50,220,0.12) 35%, #010509 72%)',
        }} />
        <div style={{ position: 'absolute', top: '-80px', left: '-100px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '60px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '5.5rem' }}>
          <FadeItem delay={0}>
            <div style={{ marginBottom: '2rem' }}>
              <SectionBadge>About Ops by Noell</SectionBadge>
            </div>
          </FadeItem>
          <FadeItem delay={0.1}>
            <h1 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em',
              maxWidth: '800px', marginBottom: '1.75rem', color: '#ffffff',
            }}>
              Built by The Noells.{' '}
              <span style={{ background: 'linear-gradient(90deg, #A78BFA 0%, #C4B5FD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Powered by automation.
              </span>
            </h1>
          </FadeItem>
          <FadeItem delay={0.2}>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)', color: '#a0a8b8', lineHeight: 1.75, maxWidth: '580px' }}>
              We're Nikki and James Noell, and we put our last name on this for a reason.
            </p>
          </FadeItem>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <FadeItem delay={0}>
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <SectionBadge>Who We Are</SectionBadge>
                </div>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700, color: '#ffffff',
                  lineHeight: 1.1, marginBottom: '1.75rem',
                }}>
                  We come from operations. We build what actually works.
                </h2>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  We're Nikki and James Noell, a husband-and-wife team from Lake Forest, California. We've spent years inside fast-growing companies building systems, managing operations, and fixing what was broken. That's just how we're wired.
                </p>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  We kept seeing the same thing: talented people running great businesses, losing clients not because of bad service, but because nothing happened after the call. No follow-up. No reminder. No review request. The work was excellent. The systems behind it were nonexistent.
                </p>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  So we built the fix. And then we built it for everyone else.
                </p>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Today, we work with appointment-based service businesses, from wellness practices and salons to dental offices and home services. If your business runs on bookings and phone calls, we build the AI systems that make sure nothing falls through the cracks.
                </p>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.8 }}>
                  Ops by Noell is our family name on the door. That means something to us. Every system we build, we build like it's our own business on the line. Because in a way, it is.
                </p>
              </div>
            </FadeItem>

            <FadeItem delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(167,139,250,0.12)', borderRadius: '8px', overflow: 'hidden' }}>
                {[
                  { label: 'Founded', value: '2025', sub: 'Lake Forest, CA' },
                  { label: 'Avg. Time to Live', value: '2 wks', sub: 'From audit to launch' },
                  { label: 'No-Show Reduction', value: '30–50%', sub: 'With automated reminders' },
                  { label: 'Response Time', value: '< 10 sec', sub: 'Missed call text-back' },
                ].map((stat, i) => (
                  <div key={i} style={{ background: 'rgba(167,139,250,0.03)', padding: '2rem 1.5rem' }}>
                    <p style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: '2rem', fontWeight: 700,
                      color: '#ffffff', lineHeight: 1,
                      marginBottom: '0.375rem', letterSpacing: '-0.02em',
                    }}>
                      {stat.value}
                    </p>
                    <p style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: '0.6875rem', fontWeight: 600,
                      color: '#A78BFA', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '0.25rem',
                    }}>
                      {stat.label}
                    </p>
                    <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#6b7280' }}>
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── WHY WE BUILT THIS / PROCESS ─── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <SectionBadge>Why We Built This</SectionBadge>
              </div>
              <h2 style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700, color: '#ffffff',
                lineHeight: 1.1, marginBottom: '1.5rem',
              }}>
                Most automation stops at the surface. We go deeper.
              </h2>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.0625rem', color: '#a0a8b8', lineHeight: 1.8 }}>
                Most hand you a login and call it done. We built Ops by Noell because we believed businesses deserved something different: a partner who builds the system, runs it, and stands behind it.
              </p>
            </div>
          </FadeItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Intro Call',
                body: 'A free 15-minute conversation. We learn about your business, you learn about us, and we figure out if automation is the right move. No pitch. No pressure.',
              },
              {
                step: '02',
                title: 'Revenue Audit',
                body: 'A paid deep-dive into your operation. We map every gap, quantify the monthly revenue impact, and design your custom system. You see the full picture before committing to a build.',
              },
              {
                step: '03',
                title: 'Manage',
                body: "We monitor your systems, optimize what's working, and adjust as your business grows. And when you have questions, Nova (our AI assistant) is available around the clock. When something needs us directly, we're here.",
              },
            ].map((item, i) => (
              <FadeItem key={i} delay={i * 0.12}>
                <div className="feature-card" style={{ padding: '2.5rem', height: '100%', position: 'relative', overflow: 'hidden' }}>
                  {/* Large faded step number */}
                  <span style={{
                    position: 'absolute', top: '-10px', right: '1.5rem',
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: '7rem', fontWeight: 800, lineHeight: 1,
                    background: 'linear-gradient(179deg, rgb(71,85,102) 0%, rgba(30,38,47,0.7) 56%, rgba(0,0,0,0) 74%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    userSelect: 'none', pointerEvents: 'none',
                  }}>
                    {item.step}
                  </span>
                  <h3 style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: '1.375rem', fontWeight: 700,
                    color: '#ffffff', marginBottom: '0.875rem',
                    lineHeight: 1.2, position: 'relative', zIndex: 1,
                    marginTop: '2.5rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#a0a8b8', lineHeight: 1.75, position: 'relative', zIndex: 1 }}>
                    {item.body}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS ─── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ maxWidth: '520px', marginBottom: '4rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <SectionBadge>Why Ops by Noell</SectionBadge>
              </div>
              <h2 style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700, color: '#ffffff', lineHeight: 1.1,
              }}>
                Four things that make us different.
              </h2>
            </div>
          </FadeItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="md:grid-cols-2">
            {differentiators.map((d, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div
                  className="feature-card"
                  style={{
                    padding: '2.5rem', height: '100%', position: 'relative',
                    border: d.highlight ? '1px solid rgba(167,139,250,0.35)' : '1px solid rgba(167,139,250,0.12)',
                    background: d.highlight ? 'rgba(167,139,250,0.06)' : 'rgba(167,139,250,0.02)',
                  }}
                >
                  {d.highlight && (
                    <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                      <span style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: '0.5625rem', fontWeight: 600,
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: '#A78BFA', border: '1px solid rgba(167,139,250,0.3)',
                        padding: '0.25rem 0.625rem', borderRadius: '4px',
                        background: 'rgba(167,139,250,0.08)',
                      }}>
                        Signature Promise
                      </span>
                    </div>
                  )}
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <d.icon size={22} color="#A78BFA" />
                  </div>
                  <h3 style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: '1.25rem', fontWeight: 700,
                    color: '#ffffff', lineHeight: 1.2, marginBottom: '1rem',
                  }}>
                    {d.title}
                  </h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#a0a8b8', lineHeight: 1.75 }}>
                    {d.body}
                  </p>
                  {d.highlight && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <a href="/book" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontFamily: "'Sora', sans-serif",
                        fontSize: '0.75rem', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: '#A78BFA', textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C4B5FD'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A78BFA'; }}
                      >
                        Book Free Intro Call <ArrowRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ position: 'relative', padding: '7rem 0', borderTop: '1px solid rgba(167,139,250,0.08)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(167,139,250,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <FadeItem delay={0}>
            <div style={{ marginBottom: '1.5rem' }}>
              <SectionBadge>Work With Us</SectionBadge>
            </div>
            <h2 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em',
              marginBottom: '1.25rem', maxWidth: '600px', margin: '0 auto 1.25rem',
              background: 'linear-gradient(90deg, #A78BFA 0%, #C4B5FD 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'block',
            }}>
              Let's find out what your gaps are costing you.
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 2.5rem' }}>
              15 minutes. Free. No obligation. We learn about your business, you learn about us, and figure out together if we're the right fit.
            </p>
            <a href="/book" className="btn-gradient" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '1rem', padding: '1rem 2.25rem' }}>
              Book Free Intro Call <ArrowRight size={16} />
            </a>
          </FadeItem>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
