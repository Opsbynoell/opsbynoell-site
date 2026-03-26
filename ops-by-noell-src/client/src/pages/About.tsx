/*
 * OPS BY NOELL — About Page
 * Design: Quiet Editorial Luxury
 * Sections: Hero, Why We Exist, Differentiators, Revenue Leak Audit, CTA
 *
 * Special: "We show you the math first" card uses #FDFAF7 bg + #C9BFB8 border
 */

import { ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

const INTERIOR = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/dark-light-streams-52XeQV8Dryep9vHreBR7tQ.webp';
const LINEN = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/hero-light-motion-m2RtUgSKb9cHxo2CrwfdUd.webp';

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

const differentiators = [
  {
    number: '01',
    title: 'We specialize in local businesses.',
    body: 'We don\'t serve enterprise clients or SaaS companies. Our systems are designed specifically for appointment-based local service businesses — the nuances of your industry are built into everything we build.',
    highlight: false,
  },
  {
    number: '02',
    title: 'We build it. We manage it. We keep it running.',
    body: 'This is not a DIY platform. We design your system, install every component, and manage it ongoing. You never touch a setting. You never troubleshoot a workflow. You just run your business.',
    highlight: false,
  },
  {
    number: '03',
    title: 'We focus on revenue, not vanity metrics.',
    body: 'We don\'t report on impressions, open rates, or follower counts. We track the metrics that matter: leads captured, appointments booked, no-shows reduced, reviews generated, clients retained.',
    highlight: false,
  },
  {
    number: '04',
    title: 'We show you the math first.',
    body: 'Before you spend a dollar, we quantify exactly what your current gaps are costing you monthly. You see the numbers. You decide if the investment makes sense. No pressure, no pitch — just clarity.',
    highlight: true,
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#F5F0EB', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─── */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '5rem',
        backgroundColor: '#F5F0EB',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          backgroundImage: `url(${LINEN})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, #F5F0EB 55%, transparent 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>About Ops by Noell</p>
          </FadeItem>
          <FadeItem delay={0.1}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: '680px',
              marginBottom: '1.5rem',
            }}>
              We build systems.{' '}
              <em style={{ fontStyle: 'italic', color: '#B8956A' }}>You run your business.</em>
            </h1>
          </FadeItem>
          <FadeItem delay={0.2}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '560px',
              marginBottom: '1rem',
            }}>
              Ops by Noell is a premium AI automation agency based in Lake Forest, CA. We design, install, manage, and maintain complete done-for-you automation systems for local service businesses — based in Orange County, built for businesses everywhere.
            </p>
          </FadeItem>
          <FadeItem delay={0.25}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '560px',
            }}>
              We don’t sell software. We don’t hand you a tool and wish you luck. We build your complete operational back office — and we keep it running.
            </p>
          </FadeItem>
        </div>
      </section>

      {/* ─── WHY WE EXIST ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <FadeItem delay={0}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={INTERIOR}
                  alt="Refined architectural interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </FadeItem>

            <FadeItem delay={0.15}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>Why We Exist</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#3D3530',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  Excellent at their craft. Invisible to the systems that grow businesses.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  The massage therapists, chiropractors, med spa owners, salon owners, and wellness providers we work with are genuinely exceptional at what they do. Their clients love them. Their craft speaks for itself.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  But most of them are running their back office on memory, manual effort, and good intentions. Calls go unanswered. Leads fall through the cracks. Clients drift away without follow-up. Reviews never get requested. Marketing never happens consistently.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  The problem isn’t talent. It’s the absence of operational infrastructure. Every one of those gaps has a dollar amount attached to it — and most business owners have no idea how much they’re losing.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Ops by Noell exists to close that gap. We build the complete operational back office your business needs — lead capture, follow-up, booking, reviews, and marketing — designed, installed, and managed entirely by us. You focus on the work you're exceptional at. We handle the rest.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8 }}>
                  We've built automations that handle front desk functions, internal team workflows, client onboarding, reporting pipelines, and beyond. The five core systems are where most businesses start — but the ceiling is wherever your operational gaps are. If it's a repeatable process, it can be automated.
                </p>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ maxWidth: '520px', marginBottom: '4rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Why Ops by Noell</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: '#3D3530',
                lineHeight: 1.1,
              }}>
                Four things that make us different.
              </h2>
            </div>
          </FadeItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5px', backgroundColor: '#C9BFB8' }} className="md:grid-cols-2">
            {differentiators.map((d, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div style={{
                  backgroundColor: d.highlight ? '#FDFAF7' : '#EDE7DF',
                  border: d.highlight ? '2px solid #C9BFB8' : 'none',
                  padding: '2.5rem',
                  height: '100%',
                  position: 'relative',
                  boxShadow: d.highlight ? '0 4px 24px rgba(184,149,106,0.10), inset 0 0 0 1px rgba(201,191,184,0.5)' : 'none',
                  zIndex: d.highlight ? 1 : 0,
                }}>
                  {d.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                    }}>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.5625rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#B8956A',
                        border: '1px solid #C9BFB8',
                        padding: '0.25rem 0.625rem',
                        backgroundColor: '#F5F0EB',
                      }}>
                        Signature Promise
                      </span>
                    </div>
                  )}
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: d.highlight ? 'rgba(184,149,106,0.15)' : 'rgba(61,53,48,0.07)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    display: 'block',
                    marginBottom: '-0.75rem',
                  }}>
                    {d.number}
                  </span>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.625rem',
                    fontWeight: 400,
                    color: d.highlight ? '#3D3530' : '#3D3530',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {d.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#7A6F68', lineHeight: 1.75 }}>
                    {d.body}
                  </p>
                  {d.highlight && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #C9BFB8' }}>
                      <a href="/book" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#B8956A',
                        textDecoration: 'none',
                      }}>
                        See the Math <ArrowRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVENUE LEAK AUDIT ─── */}
      <section className="section-pad" style={{ backgroundColor: '#3D3530' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <FadeItem delay={0}>
              <div>
                <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>The Revenue Leak Audit</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  We don't guess. We quantify.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(253,250,247,0.7)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Every free audit includes a Revenue Leak Analysis — a plain-language breakdown of exactly what your current operational gaps are costing you, expressed in dollars per month.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(253,250,247,0.7)', lineHeight: 1.8 }}>
                  We look at your call volume, booking conversion, no-show rate, review generation, and follow-up cadence — and calculate the monthly revenue impact of each gap. You see the numbers before you make any decision.
                </p>
              </div>
            </FadeItem>

            <FadeItem delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(201,191,184,0.2)' }}>
                {[
                  { metric: 'Missed call recovery', example: 'If you miss 8 calls/week at $120 avg value, that\'s $960/week in lost revenue.' },
                  { metric: 'No-show reduction', example: 'A 30% no-show rate on 20 weekly appointments costs you 6 sessions — every week.' },
                  { metric: 'Review generation', example: 'Businesses with 50+ reviews convert 270% more website visitors than those with under 10.' },
                  { metric: 'Client retention', example: 'A client who returns 4x/year vs 1x/year is worth 4x the lifetime revenue.' },
                ].map((item, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '1.5rem 2rem' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8956A', marginBottom: '0.5rem' }}>
                      {item.metric}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(253,250,247,0.65)', lineHeight: 1.65 }}>
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Work With Us</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              maxWidth: '600px',
              margin: '0 auto 1.25rem',
            }}>
              Let's find out what your gaps are costing you.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '460px',
              margin: '0 auto 2.5rem',
            }}>
              30 minutes. Free. No obligation. We show you the numbers — you decide if it makes sense.
            </p>
            <a href="/book" className="btn-primary">
              Book Your Free Automation Audit
              <ArrowRight size={14} />
            </a>
          </FadeItem>
        </div>
      </section>

      <Footer />

      <style>{`
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
