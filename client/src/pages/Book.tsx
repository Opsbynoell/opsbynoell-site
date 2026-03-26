/*
 * OPS BY NOELL — Book a Free Audit Page
 * Design: Quiet Editorial Luxury
 * Sections: Hero, What to Expect, Calendly Placeholder, FAQ-style reassurances
 */

import { useEffect, useRef } from 'react';
import { ArrowRight, Clock, FileSearch, TrendingDown, Calculator, MessageSquare, Shield } from 'lucide-react';
import RevenueCalculator from '@/components/RevenueCalculator';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';
import { trpc } from '@/lib/trpc';

const STONE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/hero-light-motion-m2RtUgSKb9cHxo2CrwfdUd.webp';

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

const expectations = [
  {
    icon: Clock,
    title: '30-minute call',
    detail: 'Video or phone — your choice. Relaxed, conversational, no slides or sales deck.',
  },
  {
    icon: FileSearch,
    title: 'Full Operational Audit',
    detail: 'Lead flow, internal processes, team workflows, and client experience — we review how your entire business runs.',
  },
  {
    icon: TrendingDown,
    title: 'Top revenue leaks identified',
    detail: 'We identify the specific operational gaps that are costing you the most right now.',
  },
  {
    icon: Calculator,
    title: 'Quantified monthly cost',
    detail: 'We calculate a plain-language estimate of what each gap is costing you per month.',
  },
  {
    icon: MessageSquare,
    title: 'Plain-language recommendation',
    detail: 'We tell you exactly what we\'d build for your business and why — no jargon.',
  },
  {
    icon: Shield,
    title: 'Zero pressure',
    detail: 'This is a diagnostic call, not a sales call. You leave with clarity regardless of what you decide.',
  },
];

export default function Book() {
  const bookingPageVisit = trpc.notifications.bookingPageVisit.useMutation();
  const bookingIntent = trpc.notifications.bookingIntent.useMutation();
  const visitFired = useRef(false);

  // Fire page-visit notification once on mount
  useEffect(() => {
    if (visitFired.current) return;
    visitFired.current = true;
    bookingPageVisit.mutate({
      referrer: document.referrer || undefined,
      userAgent: navigator.userAgent,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBookingCTA = (source: string) => {
    bookingIntent.mutate({ source, page: '/book' });
  };

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
          width: '40%',
          height: '100%',
          backgroundImage: `url(${STONE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, #F5F0EB 60%, transparent 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Free Automation Audit</p>
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
              Find out exactly where your business is losing revenue.
            </h1>
          </FadeItem>
          <FadeItem delay={0.2}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '520px',
            }}>
              The free audit is 30 minutes. We review your full operational setup — not just how you capture leads, but how your entire business runs. Where is time being lost? Where are manual processes slowing you down? Where are clients falling through the cracks? We identify your top gaps and show you exactly what to fix first. No pitch. No obligation. Just clarity.
            </p>
          </FadeItem>
        </div>
      </section>

      {/* ─── INTERACTIVE REVENUE CALCULATOR ─── */}
      <RevenueCalculator />

      {/* ─── MAIN CONTENT: WHAT TO EXPECT + CALENDLY ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB', paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'start' }} className="lg:grid-cols-2">

            {/* Left: What to Expect */}
            <FadeItem delay={0}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>What to Expect</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {expectations.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1.25rem',
                        padding: '1.5rem 0',
                        borderBottom: i < expectations.length - 1 ? '1px solid #E8E2DA' : 'none',
                      }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#E8E2DA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <item.icon size={16} color="#B8956A" />
                      </div>
                      <div>
                        <h3 style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.25rem',
                          fontWeight: 400,
                          color: '#3D3530',
                          marginBottom: '0.375rem',
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: '#7A6F68', lineHeight: 1.7 }}>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeItem>

            {/* Right: Calendly Embed Placeholder */}
            <FadeItem delay={0.15}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Choose a Time</p>

                {/*
                 * ════════════════════════════════════════════════════════════════
                 * CALENDLY EMBED — HOW TO ACTIVATE
                 * 1. Go to https://calendly.com → Event Types → your event → “Add to Website”
                 * 2. Choose “Inline Embed” and copy your Calendly URL (e.g. https://calendly.com/yourname/30min)
                 * 3. Replace the <div id="booking"> block below with:
                 *
                 *    <div
                 *      className="calendly-inline-widget"
                 *      data-url="https://calendly.com/yourname/30min"
                 *      style={{ minWidth: '320px', height: '700px' }}
                 *    />
                 *
                 * 4. Add this script to client/index.html <head>:
                 *    <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
                 * ════════════════════════════════════════════════════════════════
                 */}

                {/* ─── CALENDLY PLACEHOLDER — Replace this entire div with your Calendly inline widget ─── */}
                <div
                  id="booking"
                  style={{
                    backgroundColor: '#FDFAF7',
                    border: '2px dashed #C9BFB8',
                    borderRadius: '2px',
                    minHeight: '560px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3.5rem 2.5rem',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Top label badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#B8956A',
                    padding: '0.3rem 1rem',
                  }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.5625rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#FDFAF7',
                    }}>Calendly Embed Goes Here</span>
                  </div>

                  <div style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: '#E8E2DA',
                    border: '1px solid #C9BFB8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    marginTop: '1rem',
                  }}>
                    <Clock size={30} color="#B8956A" />
                  </div>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.875rem',
                    fontWeight: 400,
                    color: '#3D3530',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}>
                    Book Your Free 30-Minute Audit
                  </h3>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: '#7A6F68',
                    lineHeight: 1.75,
                    maxWidth: '360px',
                    marginBottom: '2rem',
                  }}>
                    Paste your Calendly booking link here to let clients schedule directly on this page. No back-and-forth, no friction.
                  </p>

                  {/* Step-by-step instructions */}
                  <div style={{
                    backgroundColor: '#F5F0EB',
                    border: '1px solid #E8E2DA',
                    padding: '1.25rem 1.5rem',
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: '2rem',
                  }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8956A', marginBottom: '0.75rem' }}>
                      To activate:
                    </p>
                    {[
                      'Go to calendly.com → your event → “Add to Website”',
                      'Select “Inline Embed” and copy your booking URL',
                      'Replace this placeholder block with the Calendly widget code',
                      'Add the Calendly script tag to client/index.html',
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#B8956A', flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: '#7A6F68', lineHeight: 1.6 }}>{step}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ justifyContent: 'center' }}
                    onClick={() => handleBookingCTA('calendly-placeholder-button')}
                  >
                    Set Up Calendly
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── REASSURANCE STRIP ─── */}
      <section style={{ backgroundColor: '#E8E2DA', padding: '3rem 0' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
              {[
                { label: '30 minutes', sub: 'That\'s all it takes' },
                { label: 'No obligation', sub: 'Zero pressure, ever' },
                { label: 'Free forever', sub: 'The audit costs nothing' },
                { label: 'Anywhere', sub: 'Based in OC, built for all' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#3D3530',
                    marginBottom: '0.25rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#7A6F68', letterSpacing: '0.06em' }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </FadeItem>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="section-pad" style={{ backgroundColor: '#3D3530' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="lg:grid-cols-2">
            <FadeItem delay={0}>
              <div>
                <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>Who This Is For</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  Appointment-based local service businesses — anywhere.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(253,250,247,0.7)', lineHeight: 1.8 }}>
                  If you run a business where clients book appointments — and you're losing revenue to missed calls, manual processes, no-shows, or inconsistent follow-up — this audit is for you.
                </p>
              </div>
            </FadeItem>

            <FadeItem delay={0.15}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,191,184,0.5)', marginBottom: '1.25rem' }}>
                  We work with
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    'Massage Therapists',
                    'Med Spas',
                    'Chiropractors',
                    'Hair & Beauty Salons',
                    'Wellness Providers',
                    'Coaches & Consultants',
                    'Acupuncturists',
                    'Personal Trainers',
                    'Estheticians',
                    'Physical Therapists',
                  ].map((biz, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8956A', flexShrink: 0 }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(253,250,247,0.7)' }}>{biz}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Still Have Questions?</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              maxWidth: '560px',
              margin: '0 auto 1.25rem',
            }}>
              The audit answers everything. It costs nothing.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '420px',
              margin: '0 auto 2.5rem',
            }}>
              Reach out directly at{' '}
              <a href="mailto:hello@opsbynoell.com" style={{ color: '#B8956A', textDecoration: 'none' }}>
                hello@opsbynoell.com
              </a>
              {' '}or book your free audit above.
            </p>
            <a href="#booking" className="btn-primary" onClick={() => handleBookingCTA('final-cta-choose-a-time')}>
              Choose a Time
              <ArrowRight size={14} />
            </a>
          </FadeItem>
        </div>
      </section>

      <Footer />


      <style>{`
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
