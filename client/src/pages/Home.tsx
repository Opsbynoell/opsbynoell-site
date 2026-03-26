import { useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, Calendar, Star, MessageSquare, Zap, Settings, ChevronRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

const GHL_BOOKING = 'https://api.leadconnectorhq.com/widget/booking/ko7eXb5zooItceadiV02';

function FadeSection({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      ...style,
    }}>
      {children}
    </div>
  );
}

function FadeItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useFadeIn(0.1);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ease-out ${delay}s, transform 0.65s ease-out ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const STATS = [
  { value: '2 weeks', label: 'Average time from audit to live systems' },
  { value: '30–50%', label: 'Typical no-show reduction with reminders' },
  { value: '< 10 sec', label: 'Missed call response time' },
  { value: '0 hrs/wk', label: 'Your time managing it after we build it' },
];

const SERVICES = [
  {
    icon: <Phone size={20} />,
    label: 'Lead Capture',
    title: 'Missed Call Text-Back',
    desc: 'Every missed call triggers an instant automated text in under 10 seconds. The lead stays engaged before they call your competitor.',
  },
  {
    icon: <Calendar size={20} />,
    label: 'Booking',
    title: 'Appointment Booking + Reminders',
    desc: '24/7 online booking with automated multi-channel reminders. No-shows drop 30–50%. You never touch a calendar.',
  },
  {
    icon: <Star size={20} />,
    label: 'Reputation',
    title: 'Review Generation',
    desc: 'After every appointment, your system sends a timed review request. Most clients see 4x more reviews within 60 days.',
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'AI',
    title: 'AI Receptionist',
    desc: 'Answers calls, qualifies leads, books appointments, and handles FAQs. No staff required. Running at 2am on a Sunday.',
  },
  {
    icon: <Zap size={20} />,
    label: 'Follow-Up',
    title: 'Lead Follow-Up Sequences',
    desc: 'Cold leads, lapsed clients, and no-shows get automated re-engagement sequences. Revenue you were leaving on the table.',
  },
  {
    icon: <Settings size={20} />,
    label: 'Operations',
    title: 'Custom Operations Buildout',
    desc: 'Internal process automation, team workflows, onboarding systems. When your back office runs itself, you scale without adding headcount.',
  },
];

const PROCESS = [
  { num: '01', title: 'Free 15-Min Intro Call', desc: "We learn about your business, answer your questions, and see if we're a fit. No pitch. No pressure. Just a real conversation." },
  { num: '02', title: 'System Design', desc: "We build your automation stack to fit your business and workflow. Configured specifically for you, not a generic template." },
  { num: '03', title: 'Installation', desc: "We install and configure every component. You answer a few questions, we do the rest. Most clients are live within 2 weeks." },
  { num: '04', title: 'Ongoing Management', desc: "We monitor your systems, optimize what's working, and adjust as your business grows. It never stops running." },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '68px',
      }}>
        {/* Purple glow */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem' }}>
          <FadeSection>
            <span className="section-label">Done-for-you · AI Automation</span>
          </FadeSection>

          <FadeSection style={{ marginTop: '1.5rem' }}>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#FAFAFA',
              maxWidth: '820px',
            }}>
              We build the systems.{' '}
              <span className="gradient-text">Automation runs them.</span>{' '}
              You get your time back.
            </h1>
          </FadeSection>

          <FadeSection style={{ marginTop: '1.75rem', maxWidth: '560px' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#71717A',
              lineHeight: 1.65,
              fontWeight: 400,
            }}>
              Follow-up. Bookings. Reminders. Reviews. AI receptionist. We build done-for-you automation systems for service businesses, so you can get back to doing what you do best.
            </p>
          </FadeSection>

          <FadeSection style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={GHL_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Intro Call <ArrowRight size={16} />
            </a>
            <Link href="/services" className="btn-secondary">
              See How It Works
            </Link>
          </FadeSection>

          {/* Stats bar */}
          <FadeSection style={{ marginTop: '5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '720px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              {STATS.map((stat, i) => (
                <div key={i} style={{
                  padding: '1.5rem 1.75rem',
                  background: '#09090B',
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: '#FAFAFA',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    color: '#52525B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              color: '#3F3F46',
              marginTop: '1rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Trusted by service businesses across Orange County
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ─── PROBLEM ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Problem</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              maxWidth: '680px',
              marginTop: '0.5rem',
            }}>
              The work is great. The follow-through is where things fall apart.
            </h2>
          </FadeSection>
          <FadeSection style={{ marginTop: '1.5rem', maxWidth: '600px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7 }}>
              Every missed call is a potential client who went somewhere else. Every manual follow-up that never happened is a lead that went cold. These aren't marketing problems. They're system problems — and systems can be fixed.
            </p>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            marginTop: '3rem',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { label: 'Missed calls → lost clients' },
              { label: 'No follow-up → cold leads' },
              { label: 'No reminders → no-shows' },
              { label: 'No reviews → lost trust' },
            ].map((item, i) => (
              <FadeItem key={i} delay={i * 0.08}>
                <div style={{
                  padding: '1.75rem',
                  background: '#09090B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: '6px', height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#A1A1AA', fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: 'rgba(168,85,247,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Solution</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              maxWidth: '700px',
              marginTop: '0.5rem',
            }}>
              We build the behind-the-scenes systems. Then they run themselves.
            </h2>
          </FadeSection>
          <FadeSection style={{ marginTop: '1.5rem', maxWidth: '580px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7 }}>
              We don't sell software or hand you a login and wish you luck. We build your complete automation system from scratch — designed around your specific business, connected to your tools, and running from day one. You see results, not dashboards.
            </p>
          </FadeSection>
          <FadeSection style={{ marginTop: '2.5rem' }}>
            <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Intro Call <ArrowRight size={16} />
            </a>
          </FadeSection>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">What We Build</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              maxWidth: '600px',
              marginTop: '0.5rem',
            }}>
              Six systems. Built once. Running always.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.6 }}>
              Each system is custom-built for your business and runs automatically. No lifting a finger required.
            </p>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            marginTop: '3rem',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {SERVICES.map((svc, i) => (
              <FadeItem key={i} delay={i * 0.06}>
                <div style={{
                  padding: '2rem',
                  background: '#09090B',
                  height: '100%',
                  transition: 'background 0.2s ease',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(168,85,247,0.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#09090B'; }}
                >
                  <div style={{
                    width: '36px', height: '36px',
                    background: 'rgba(168,85,247,0.12)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A855F7',
                    marginBottom: '1.25rem',
                  }}>
                    {svc.icon}
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#52525B',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}>
                    {svc.label}
                  </span>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#FAFAFA',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.65 }}>
                    {svc.desc}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>

          <FadeSection style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/services" className="btn-secondary">
              View All Services & Pricing <ChevronRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Process</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              maxWidth: '600px',
              marginTop: '0.5rem',
            }}>
              From audit to automation in as little as two weeks.
            </h2>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {PROCESS.map((step, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div className="card">
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#A855F7',
                    display: 'block',
                    marginBottom: '1rem',
                  }}>
                    {step.num}
                  </span>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#FAFAFA',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY PREVIEW ───────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '400px', height: '400px',
                background: 'radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <span className="section-label">Case Study</span>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: '#FAFAFA',
                maxWidth: '600px',
                marginTop: '0.5rem',
                letterSpacing: '-0.02em',
              }}>
                25 years of expertise. Zero operational infrastructure. Here's what we built.
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#71717A',
                marginTop: '1.25rem',
                maxWidth: '520px',
                lineHeight: 1.65,
              }}>
                A master massage therapist in Laguna Niguel with no website, no online booking, no reviews, and no follow-up system. We built everything — in two weeks.
              </p>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                {[
                  { value: '2 weeks', label: 'From zero to fully live' },
                  { value: '25+ yrs', label: 'Experience, now visible online' },
                  { value: '4x', label: 'Review volume increase' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' }}>{stat.value}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#52525B', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.25rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/case-study" className="btn-secondary">
                  Read the Full Case Study <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeSection>
            <span className="section-label">Ready to start?</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#FAFAFA',
              letterSpacing: '-0.03em',
              marginTop: '0.75rem',
              maxWidth: '640px',
              margin: '0.75rem auto 0',
            }}>
              Ready to stop losing revenue to manual processes?
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#71717A',
              marginTop: '1.25rem',
              maxWidth: '460px',
              margin: '1.25rem auto 0',
              lineHeight: 1.65,
            }}>
              It starts with a free 15-minute call. No pitch. No pressure. Just clarity on what's possible.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Free Intro Call <ArrowRight size={16} />
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
