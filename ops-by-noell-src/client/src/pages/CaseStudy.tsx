/*
 * OPS BY NOELL — Case Study Page
 * Design: Quiet Editorial Luxury
 * Client: Santa, licensed massage therapist, Laguna Niguel
 * Sections: Hero, The Client, The Gaps, What We Built, The Result, Testimonial, CTA
 */

import { ArrowRight, X, Check } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

const STONE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/warm-bokeh-abstract-75quxs3Jprciw75FwvUqW6.webp';
const PLASTER = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/texture-light-abstract-apUFTSsXg9VbdHm7Viauvu.webp';

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

const gaps = [
  { label: 'No website', detail: 'Zero online presence. New clients had no way to find her or learn about her services.' },
  { label: 'No online booking', detail: 'Booking required a phone call during business hours — or a text that might go unanswered.' },
  { label: 'Calls going to voicemail', detail: 'Missed calls meant missed clients. No system existed to follow up with callers.' },
  { label: 'No appointment reminders', detail: 'No-shows happened regularly. Clients forgot. There was no automated reminder system.' },
  { label: 'No review system', detail: '25 years of exceptional work — with almost no online reviews to show for it.' },
  { label: 'No follow-up', detail: 'Once a client left, the relationship was over until they decided to call again — if they remembered.' },
];

const built = [
  { item: 'Professional website', detail: 'Clean, mobile-optimized website with service descriptions, booking integration, and SEO foundation.' },
  { item: 'Missed call text-back', detail: 'Every missed call triggers an instant text response — guiding the lead toward booking.' },
  { item: 'Online booking + reminders', detail: '24/7 online booking with automated text and email reminders reducing no-shows.' },
  { item: 'Review generation', detail: 'Post-appointment review requests sent automatically, building her Google presence consistently.' },
  { item: 'Repeat client follow-up', detail: 'Automated re-engagement sequences for clients who haven\'t returned in 30, 60, or 90 days.' },
];

export default function CaseStudy() {
  return (
    <div style={{ backgroundColor: '#F5F0EB', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─── */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '0',
        backgroundColor: '#3D3530',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${STONE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, #3D3530 30%, rgba(61,53,48,0.5) 100%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>Case Study · Laguna Niguel, CA</p>
          </FadeItem>
          <FadeItem delay={0.1}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: '#FDFAF7',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: '760px',
              marginBottom: '1.5rem',
            }}>
              25 years of expertise. Zero operational infrastructure.{' '}
              <em style={{ fontStyle: 'italic', color: '#B8956A' }}>Here's what we built.</em>
            </h1>
          </FadeItem>
          <FadeItem delay={0.2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              {[
                { label: 'Industry', value: 'Massage Therapy' },
                { label: 'Location', value: 'Laguna Niguel, CA' },
                { label: 'Experience', value: '25+ Years' },
                { label: 'Timeline', value: '2 Weeks to Live' },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,191,184,0.6)', marginBottom: '0.25rem' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 400, color: '#FDFAF7' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeItem>
        </div>
      </section>

      {/* ─── THE CLIENT ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <FadeItem delay={0}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Client</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#3D3530',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  A master of her craft. Invisible to the internet.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Santa is a licensed massage therapist based in Laguna Niguel with over 25 years of experience. Her clients are loyal. Her work is exceptional. Her reputation, built entirely through word of mouth, is impeccable.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  But Santa had zero digital infrastructure. No website. No online booking. No automated follow-up. No review system. Every new client had to find her through a personal referral — and even then, they had to navigate a booking process that relied entirely on phone calls and memory.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.8 }}>
                  She was excellent at her work. Her operations were silently costing her thousands every month.
                </p>
              </div>
            </FadeItem>

            <FadeItem delay={0.15}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  backgroundColor: '#E8E2DA',
                  padding: '3rem',
                  borderLeft: '3px solid #B8956A',
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.875rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#3D3530',
                    lineHeight: 1.4,
                    marginBottom: '1.5rem',
                  }}>
                    "She had built a loyal clientele through 25 years of exceptional work — and was losing new clients every day to operational gaps she didn't even know existed."
                  </p>
                  <p className="eyebrow">Ops by Noell Assessment</p>
                </div>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── THE GAPS ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ maxWidth: '520px', marginBottom: '3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Gaps</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: '#3D3530',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}>
                Six operational gaps. Each one costing revenue daily.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#7A6F68', lineHeight: 1.75 }}>
                Our Revenue Leak Audit identified every gap in Santa's operation — and quantified what each one was costing her monthly.
              </p>
            </div>
          </FadeItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5px', backgroundColor: '#C9BFB8' }} className="md:grid-cols-2 lg:grid-cols-3">
            {gaps.map((gap, i) => (
              <FadeItem key={i} delay={i * 0.08}>
                <div style={{ backgroundColor: '#FDFAF7', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#3D3530', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <X size={12} color="#C9BFB8" />
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 400, color: '#3D3530' }}>
                      {gap.label}
                    </h3>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: '#7A6F68', lineHeight: 1.7 }}>
                    {gap.detail}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILT ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ maxWidth: '520px', marginBottom: '3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>What We Built</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: '#3D3530',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}>
                A complete operational back office. Built in two weeks.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#7A6F68', lineHeight: 1.75 }}>
                We designed and installed every component of Santa's automation system. She didn't configure a single setting. She was live and capturing leads within 14 days of her audit.
              </p>
            </div>
          </FadeItem>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', backgroundColor: '#C9BFB8' }}>
            {built.map((item, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div style={{
                  backgroundColor: '#FDFAF7',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: '#B8956A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} color="#FDFAF7" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.375rem', fontWeight: 400, color: '#3D3530', marginBottom: '0.375rem' }}>
                      {item.item}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#7A6F68', lineHeight: 1.7 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE RESULT ─── */}
      <section className="section-pad" style={{ backgroundColor: '#3D3530' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>The Result</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 400,
                color: '#FDFAF7',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}>
                Before and after.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(253,250,247,0.65)', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto' }}>
                The operational transformation — from zero infrastructure to a fully automated business back office.
              </p>
            </div>
          </FadeItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5px', backgroundColor: 'rgba(201,191,184,0.2)' }} className="md:grid-cols-2">
            {/* Before */}
            <FadeItem delay={0}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '2.5rem' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,191,184,0.5)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(201,191,184,0.15)' }}>
                  Before Ops by Noell
                </p>
                {[
                  'No website or online presence',
                  'Booking by phone call only',
                  'Missed calls = lost clients',
                  'No appointment reminders',
                  'No-shows with no recovery',
                  'Zero online reviews',
                  'No follow-up with past clients',
                  'New clients only from word of mouth',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <X size={14} color="rgba(201,191,184,0.4)" style={{ flexShrink: 0 }} />
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(253,250,247,0.5)', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </FadeItem>

            {/* After */}
            <FadeItem delay={0.12}>
              <div style={{ backgroundColor: 'rgba(184,149,106,0.12)', padding: '2.5rem', borderLeft: '2px solid #B8956A' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8956A', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(184,149,106,0.3)' }}>
                  After Ops by Noell
                </p>
                {[
                  'Professional website live and ranking',
                  '24/7 online booking from any device',
                  'Every missed call gets instant text response',
                  'Automated reminders via text + email',
                  'No-shows down significantly',
                  'Consistent 5-star review generation',
                  'Automated re-engagement for past clients',
                  'New client pipeline running on autopilot',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <Check size={14} color="#B8956A" style={{ flexShrink: 0 }} />
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(253,250,247,0.85)', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <FadeItem delay={0}>
              <div style={{
                backgroundColor: '#FDFAF7',
                border: '1px solid #C9BFB8',
                padding: '3.5rem',
                position: 'relative',
              }}>
                {/* Quote mark */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '2rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '6rem',
                  fontWeight: 300,
                  color: '#E8E2DA',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  "
                </div>
                <div style={{ paddingTop: '2rem' }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#3D3530',
                    lineHeight: 1.5,
                    marginBottom: '2rem',
                  }}>
                    Testimonial coming soon. Santa's full review will be featured here after system launch and results documentation.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#E8E2DA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#7A6F68' }}>S</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: '#3D3530' }}>Santa</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#7A6F68' }}>Licensed Massage Therapist · Laguna Niguel, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Your Turn</p>
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
              Ready to close your revenue gaps?
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '460px',
              margin: '0 auto 2.5rem',
            }}>
              Book a free 30-minute audit. We'll map every revenue leak in your operation and show you exactly what each gap is costing you monthly.
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
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
}
