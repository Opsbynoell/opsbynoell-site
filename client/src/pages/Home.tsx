/*
 * OPS BY NOELL — Home Page
 * Design: Premium Framer AI Agency — glowing orbs, gradient text,
 *         glassmorphism cards, bento grid, animated marquee
 */

import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, Calendar, Star, MessageSquare, Megaphone, Settings, Check, Zap, ChevronRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

function FadeSection({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease-out, transform 0.65s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function FadeItem({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn(0.08);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const marqueeItems = [
  'Missed Call Text-Back', 'AI Booking Systems', 'Review Automation',
  'Lead Follow-Up', 'Client Reactivation', 'Marketing Automation',
  'AI Receptionist', 'No-Show Reduction', 'Revenue Recovery',
  'Missed Call Text-Back', 'AI Booking Systems', 'Review Automation',
  'Lead Follow-Up', 'Client Reactivation', 'Marketing Automation',
  'AI Receptionist', 'No-Show Reduction', 'Revenue Recovery',
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '80px', background: 'linear-gradient(160deg, #0D0A1E 0%, #0A0A0F 45%, #0A0A0A 100%)' }}>

        {/* Orb 1 — large violet left */}
        <div style={{ position: 'absolute', top: '-120px', left: '-160px', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        {/* Orb 2 — indigo right */}
        <div style={{ position: 'absolute', top: '0px', right: '-120px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        {/* Orb 3 — bottom center */}
        <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '350px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        {/* Dot grid */}
        <div className="dot-grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4.5rem', paddingBottom: '5.5rem' }}>
          <div className="hero-split">

            {/* ── LEFT: Text ── */}
            <div className="hero-text">
              <FadeItem delay={0}>
                <span className="pill-badge" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                  <span className="pill-badge-dot" />
                  AI Automation · Service Businesses · Orange County
                </span>
              </FadeItem>

              <FadeItem delay={0.08}>
                <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.75rem' }}>
                  <span style={{ color: '#F5F0EB', display: 'block' }}>We build the</span>
                  <span style={{ display: 'block' }}>
                    <span style={{
                      display: 'inline-block',
                      color: '#C4B5FD',
                      border: '1px solid rgba(167,139,250,0.55)',
                      borderRadius: '0.3em',
                      padding: '0 0.2em',
                      boxShadow: '0 0 40px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.15), inset 0 0 20px rgba(139,92,246,0.08)',
                      textShadow: '0 0 24px rgba(167,139,250,0.7)',
                    }}>systems.</span>
                  </span>
                  <span style={{ color: '#F5F0EB', display: 'block' }}>You get your</span>
                  <span style={{ color: '#F5F0EB', display: 'block' }}>time back.</span>
                </h1>
              </FadeItem>

              <FadeItem delay={0.16}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9375rem, 1.3vw, 1.125rem)', color: '#A09890', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '460px', fontWeight: 400 }}>
                  Follow-up. Bookings. Reminders. Reviews. AI receptionist. Done-for-you automation for service businesses — running 24/7.
                </p>
              </FadeItem>

              <FadeItem delay={0.24}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <a href="/book" className="btn-gradient" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '1rem', padding: '1rem 2.25rem' }}>
                    Book Free Intro Call <ArrowRight size={16} />
                  </a>
                  <Link href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 600, color: '#8A8480', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C4B5FD'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8A8480'; }}
                  >
                    See How It Works <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeItem>
            </div>

            {/* ── RIGHT: Live Dashboard Card (Helium-style) ── */}
            <FadeItem delay={0.32} style={{ position: 'relative' }}>
              <div style={{ position: 'relative', paddingTop: '1.5rem', paddingRight: '1.5rem' }}>

                {/* Floating chip — top right */}
                <div style={{
                  position: 'absolute', top: '-4px', right: '0',
                  background: 'rgba(139,92,246,0.15)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(167,139,250,0.35)', borderRadius: '0.75rem',
                  padding: '0.75rem 1rem', zIndex: 2,
                  boxShadow: '0 0 20px rgba(139,92,246,0.2)',
                }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.625rem', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Avg. Response</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.375rem', fontWeight: 800, color: '#F5F0EB', lineHeight: 1 }}>{'< 10s'}</p>
                </div>

                {/* Main dashboard card */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  boxShadow: '0 20px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset',
                }}>
                  {/* Card header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', color: '#8A8480', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Automation Dashboard</p>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.0625rem', fontWeight: 700, color: '#F5F0EB', marginTop: '0.2rem' }}>Ops by Noell</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '999px', padding: '0.3rem 0.875rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#22C55E' }}>All Systems Live</span>
                    </div>
                  </div>

                  {/* Metric rows */}
                  {[
                    { label: 'Missed calls recovered', value: '47', delta: '+12 today', Icon: Phone },
                    { label: 'Appointments booked', value: '23', delta: '+3 today', Icon: Calendar },
                    { label: 'Reviews generated', value: '8', delta: 'this week', Icon: Star },
                    { label: 'Follow-ups sent', value: '134', delta: 'this month', Icon: MessageSquare },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.8rem 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div style={{ width: '36px', height: '36px', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <row.Icon size={14} color="#A78BFA" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#8A8480' }}>{row.label}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#F5F0EB', lineHeight: 1 }}>{row.value}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', color: '#A78BFA', marginTop: '0.1rem' }}>{row.delta}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating chip — bottom left */}
                <div style={{
                  position: 'absolute', bottom: '-16px', left: '-16px',
                  background: 'rgba(139,92,246,0.15)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(167,139,250,0.35)', borderRadius: '0.75rem',
                  padding: '0.75rem 1rem', zIndex: 2,
                  boxShadow: '0 0 20px rgba(139,92,246,0.2)',
                }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.625rem', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>No-Show Reduction</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.375rem', fontWeight: 800, color: '#F5F0EB', lineHeight: 1 }}>−42%</p>
                </div>

              </div>
            </FadeItem>

          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────────── */}
      <FadeSection>
        <section style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          padding: '2.5rem 0',
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0',
            }}>
              {[
                { stat: '2 wks', label: 'Average time from audit to live systems' },
                { stat: '30–50%', label: 'Typical no-show reduction with AI reminders' },
                { stat: '< 10 sec', label: 'Missed call response time with text-back' },
                { stat: '0 hrs/wk', label: 'Your time managing it after we build it' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '2rem',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  textAlign: 'center',
                }}>
                  <p className="stat-number" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '0.5rem' }}>
                    {item.stat}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    color: '#5A5450',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeSection>

      {/* ─── MARQUEE ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '2rem',
                padding: '0 2rem', whiteSpace: 'nowrap',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#3D3830',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  {item}
                </span>
                <span style={{ color: '#A78BFA', fontSize: '0.5rem' }}>◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ───────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 0 6rem', backgroundColor: 'transparent' }}>
        <div className="container">
          <FadeSection>
            <div style={{ maxWidth: '600px', marginBottom: '4.5rem' }}>
              <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>The Problem</span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800, color: '#F5F0EB',
                lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem',
              }}>
                The work is great.{' '}
                <span className="gradient-text-purple">The follow-through is where things fall apart.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7A7068', lineHeight: 1.8 }}>
                Every missed call is a potential client who went somewhere else. Every manual follow-up that never happened is a lead that went cold. These aren't marketing problems — they're systems problems. And they're fixable.
              </p>
            </div>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              {
                number: '01', title: 'Missed Leads', icon: Phone,
                body: 'When someone calls and hits voicemail, they hang up and call the next person on the list. That next person gets the job. It happens every day.',
              },
              {
                number: '02', title: 'Manual Processes', icon: Calendar,
                body: "Scheduling by phone, reminders by hand, follow-up by memory. Every manual task is a bottleneck — and a liability when you're busy.",
              },
              {
                number: '03', title: 'No Follow-Up System', icon: MessageSquare,
                body: 'One-time clients who never return. No review requests. No re-engagement. The relationship ends when the appointment does.',
              },
            ].map((card, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div className="glass-card-violet" style={{ padding: '2.25rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '4rem', fontWeight: 800,
                      color: 'rgba(167,139,250,0.2)',
                      lineHeight: 1, letterSpacing: '-0.04em',
                    }}>
                      {card.number}
                    </span>
                    <div className="icon-box">
                      <card.icon size={18} color="#A78BFA" />
                    </div>
                  </div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '1.125rem',
                    fontWeight: 700, color: '#F5F0EB', lineHeight: 1.3,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#6A6460', lineHeight: 1.85 }}>
                    {card.body}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <FadeItem delay={0}>
              <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>The Solution</span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800, color: '#F5F0EB',
                lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem',
              }}>
                We build the behind-the-scenes systems that make your business run —{' '}
                <span className="gradient-text-purple">and then they run themselves.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7A7068', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                We don't sell software or hand you a login and wish you luck. We build your complete automation system from scratch: designed around your specific business, connected to your tools, and running from day one.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7A7068', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                From the moment a lead calls to the moment they leave a five-star review, every step is automated, optimized, and running — whether you're with a client or asleep.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.75rem' }}>
                {[
                  'We design the system around your specific business',
                  'We install and configure every component',
                  'We monitor it and adjust as your business grows',
                  'You see results, not dashboards.',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{
                      width: '22px', height: '22px',
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.15))',
                      border: '1px solid rgba(167,139,250,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '2px', borderRadius: '5px',
                    }}>
                      <Check size={12} color="#A78BFA" strokeWidth={2.5} />
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#9A9288', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>

              <a href="/book" className="btn-gradient">
                Book Free Intro Call
                <ArrowRight size={16} />
              </a>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BENTO GRID ──────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <FadeSection>
            <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
              <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>What We Build</span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, color: '#F5F0EB',
                lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem',
              }}>
                Six systems. Built once.{' '}
                <span className="gradient-text-purple">Running always.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7A7068', lineHeight: 1.8 }}>
                Each system is custom-built for your business and runs automatically. No lifting a finger required.
              </p>
            </div>
          </FadeSection>

          <div className="bento-grid">
            {/* Card 1 — Wide featured */}
            <FadeItem delay={0} style={{ gridColumn: 'span 2' } as React.CSSProperties}>
              <div className="glass-card" style={{
                padding: '2.5rem', height: '100%', minHeight: '200px',
                border: '1px solid rgba(167,139,250,0.2)',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.07) 0%, rgba(99,102,241,0.04) 100%)',
                borderRadius: '1rem',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', right: '-40px', top: '-40px',
                  width: '240px', height: '240px',
                  background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)', pointerEvents: 'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div className="icon-box"><Phone size={18} color="#A78BFA" /></div>
                    <span className="service-tag">Lead Capture</span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                    Missed Call Text-Back
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#7A7068', lineHeight: 1.8, maxWidth: '420px' }}>
                    Every missed call triggers an instant automated text in under 10 seconds. The lead stays warm. Your competitor doesn't get the chance.
                  </p>
                </div>
              </div>
            </FadeItem>

            {/* Card 2 */}
            <FadeItem delay={0.07}>
              <div className="glass-card-violet" style={{ padding: '2rem', height: '100%', minHeight: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="icon-box"><Calendar size={16} color="#A78BFA" /></div>
                  <span className="service-tag">Scheduling</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  AI Booking + Reminders
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#7A7068', lineHeight: 1.8 }}>
                  24/7 AI-driven booking without phone tag. Smart reminders that cut no-shows by 30–50%.
                </p>
              </div>
            </FadeItem>

            {/* Card 3 */}
            <FadeItem delay={0.12}>
              <div className="glass-card-violet" style={{ padding: '2rem', height: '100%', minHeight: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="icon-box"><Star size={16} color="#A78BFA" /></div>
                  <span className="service-tag">Reputation</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  Review Generation
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#7A7068', lineHeight: 1.8 }}>
                  Automated review requests after every interaction. More 5-star reviews, higher ranking, more inbound leads.
                </p>
              </div>
            </FadeItem>

            {/* Card 4 */}
            <FadeItem delay={0.17}>
              <div className="glass-card-violet" style={{ padding: '2rem', height: '100%', minHeight: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="icon-box"><MessageSquare size={16} color="#A78BFA" /></div>
                  <span className="service-tag">Conversion</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  Follow-Up That Actually Happens
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#7A7068', lineHeight: 1.8 }}>
                  Intelligent sequences that turn cold leads into booked clients — automatically.
                </p>
              </div>
            </FadeItem>

            {/* Card 5 */}
            <FadeItem delay={0.22}>
              <div className="glass-card-violet" style={{ padding: '2rem', height: '100%', minHeight: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="icon-box"><Settings size={16} color="#A78BFA" /></div>
                  <span className="service-tag">Retention</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  Bring Back Lost Clients
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#7A7068', lineHeight: 1.8 }}>
                  AI-powered campaigns that identify and re-activate lapsed clients before they're gone for good.
                </p>
              </div>
            </FadeItem>

            {/* Card 6 — Wide featured */}
            <FadeItem delay={0.27} style={{ gridColumn: 'span 2' } as React.CSSProperties}>
              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.08) 100%)',
                border: '1px solid rgba(167,139,250,0.3)',
                borderRadius: '1rem',
                display: 'flex', flexWrap: 'wrap',
                alignItems: 'center', justifyContent: 'space-between',
                gap: '1.5rem',
              }}>
                <div style={{ flex: '1', minWidth: '240px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div className="icon-box"><Megaphone size={18} color="#A78BFA" /></div>
                    <span className="service-tag">Growth</span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.375rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.625rem', lineHeight: 1.2 }}>
                    Stay in Touch Without Thinking About It
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#7A7068', lineHeight: 1.8 }}>
                    Seasonal promotions, personalized outreach, referral pipelines. Enterprise-level marketing automation, done for you.
                  </p>
                </div>
                <a href="/book" className="btn-gradient" style={{ flexShrink: 0 }}>
                  See All Systems <ArrowRight size={15} />
                </a>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <FadeSection>
            <div style={{ maxWidth: '560px', marginBottom: '4.5rem' }}>
              <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>The Process</span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, color: '#F5F0EB',
                lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1rem',
              }}>
                From audit to automation in as little as{' '}
                <span className="gradient-text-purple">two weeks.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#7A7068', lineHeight: 1.8 }}>
                Most clients are fully live within 2 weeks of their audit. You don't change how you work. The system adapts to you.
              </p>
            </div>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              {
                step: '01', title: 'Free 15-Min Intro Call',
                body: "We learn about your business, answer your questions, and see if we're a fit. No pitch. No pressure.",
              },
              {
                step: '02', title: 'System Design',
                body: 'We build your automation stack to fit your business and workflow. Configured specifically for you, not a generic template.',
              },
              {
                step: '03', title: 'Installation',
                body: 'We install and test everything. Most clients are fully live within two weeks.',
              },
              {
                step: '04', title: 'Automated Growth',
                body: 'Leads get captured. Follow-up runs. Reviews come in. Clients come back. You focus on delivery.',
                highlight: true,
              },
            ].map((step, i) => (
              <FadeItem key={i} delay={i * 0.1}>
                <div style={{
                  padding: '2rem',
                  background: step.highlight
                    ? 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(99,102,241,0.06) 100%)'
                    : 'rgba(255,255,255,0.02)',
                  border: step.highlight
                    ? '1px solid rgba(167,139,250,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '1rem',
                  height: '100%',
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '3.5rem', fontWeight: 800,
                    letterSpacing: '-0.04em', lineHeight: 1,
                    marginBottom: '0.25rem',
                    background: 'linear-gradient(135deg, rgba(167,139,250,0.5), rgba(99,102,241,0.3))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {step.step}
                  </div>
                  <div style={{ width: '28px', height: '2px', background: 'linear-gradient(to right, #8B5CF6, #6366F1)', marginBottom: '1rem', marginTop: '0.5rem', borderRadius: '2px' }} />
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#F5F0EB', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#6A6460', lineHeight: 1.85 }}>
                    {step.body}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>

          <FadeSection style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <a href="/book" className="btn-gradient">
              Start With a Free Intro Call <ArrowRight size={16} />
            </a>
          </FadeSection>
        </div>
      </section>

      {/* ─── CASE STUDY PREVIEW ───────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <FadeSection>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex', margin: '0 auto 1.5rem' }}>Real Results</span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 800, color: '#F5F0EB',
                lineHeight: 1.1, letterSpacing: '-0.03em',
              }}>
                We build the system.{' '}
                <span className="gradient-text-purple">You see the results.</span>
              </h2>
            </div>
          </FadeSection>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr',
            overflow: 'hidden',
            border: '1px solid rgba(167,139,250,0.2)',
            borderRadius: '1.25rem',
            background: 'rgba(255,255,255,0.02)',
          }} className="lg:grid-cols-2">

            {/* Left visual */}
            <div style={{
              position: 'relative', minHeight: '280px',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.06) 100%)',
              display: 'flex', alignItems: 'center', padding: '3rem',
              borderRight: '1px solid rgba(167,139,250,0.15)',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(167,139,250,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
              }} />
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem',
                  fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(196,181,253,0.6)', marginBottom: '1rem',
                }}>
                  Case Study
                </p>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800, lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }} className="gradient-text">
                  25 years of expertise.<br />Zero infrastructure.
                </h3>
              </div>
            </div>

            {/* Right content */}
            <FadeItem delay={0.15}>
              <div style={{ padding: '3rem' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem',
                  fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: '#5A5450', marginBottom: '1.25rem',
                }}>
                  Laguna Niguel, CA · Massage Therapy
                </p>
                <h4 style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '1.375rem',
                  fontWeight: 700, color: '#F5F0EB', lineHeight: 1.3,
                  letterSpacing: '-0.015em', marginBottom: '1.25rem',
                }}>
                  A 25-year massage therapist with zero digital infrastructure. Transformed in two weeks.
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#7A7068', lineHeight: 1.8, marginBottom: '2rem' }}>
                  As our founding client partner, Santa gave us the chance to prove what AI automation could do for a service business with zero digital infrastructure. The results speak for themselves.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                  {[
                    'Website built and launched',
                    'Missed call text-back installed',
                    'Online booking + reminders live',
                    'Review generation automated',
                    'Repeat client follow-up running',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#7A7068' }}>{item}</p>
                    </div>
                  ))}
                </div>

                <Link href="/case-study" className="btn-gradient">
                  Read the Full Case Study <ArrowRight size={15} />
                </Link>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', bottom: '-100px', left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="dot-grid-bg" style={{
          position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <FadeSection>
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <span className="pill-badge" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                <Zap size={11} color="#A78BFA" />
                Ready to Grow
              </span>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 800, lineHeight: 1.0,
                letterSpacing: '-0.04em', marginBottom: '1.5rem',
              }} className="gradient-text">
                Ready to stop doing it all manually? Let's talk.
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '1.125rem',
                color: '#7A7068', lineHeight: 1.75, marginBottom: '3rem',
              }}>
                15 minutes. Free. No obligation. We learn about your business, you learn about us, and we figure out if we're the right pair.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href="/book" className="btn-gradient" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                  Book Free Intro Call <ArrowRight size={16} />
                </a>
                <Link href="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem',
                  fontWeight: 600, color: '#6A6460', textDecoration: 'none',
                  padding: '1rem 2rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '0.625rem',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.3)';
                    (e.currentTarget as HTMLElement).style.color = '#C4B5FD';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#6A6460';
                  }}
                >
                  View Services <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

