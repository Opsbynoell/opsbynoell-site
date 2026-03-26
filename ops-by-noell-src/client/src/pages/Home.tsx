/*
 * OPS BY NOELL — Home Page
 * Design: Quiet Editorial Luxury
 * Sections: Hero, Proof Bar, Problem, Solution, Services Overview,
 *           How It Works, Case Study Preview, Closing CTA
 *
 * Color: bg #F5F0EB / alt #E8E2DA / headline #3D3530 / body #7A6F68 / CTA #B8956A
 * Typography: Cormorant Garamond headlines, DM Sans body
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, Calendar, Star, MessageSquare, Megaphone, Settings, ChevronRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

const HERO_TEXTURE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/hero-light-motion-m2RtUgSKb9cHxo2CrwfdUd.webp';
const INTERIOR_ARCH = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/dark-light-streams-52XeQV8Dryep9vHreBR7tQ.webp';
const STONE_TEXTURE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663120940829/n7rBKSsjtvarmxAHpVkZmb/warm-bokeh-abstract-75quxs3Jprciw75FwvUqW6.webp';

// Fade-in wrapper component
function FadeSection({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Staggered fade for child items
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

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5F0EB', minHeight: '100vh' }}>
      <Nav />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '72px',
        }}
      >
        {/* Background texture — right half */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            backgroundImage: `url(${HERO_TEXTURE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #F5F0EB 55%, rgba(245,240,235,0.2) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '6rem' }}>
          <div style={{ maxWidth: '660px' }}>
            <FadeItem delay={0}>
              <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
                Done-for-You Automation · Ops by Noell
              </p>
            </FadeItem>

            <FadeItem delay={0.1}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 400,
                color: '#3D3530',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: '1.75rem',
              }}>
                Your business is losing clients every day.{' '}
                <em style={{ fontStyle: 'italic', color: '#B8956A' }}>We fix that.</em>
              </h1>
            </FadeItem>

            <FadeItem delay={0.2}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.0625rem',
                color: '#7A6F68',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}>
                Your craft is excellent. The systems behind it should be too. We build done-for-you automation infrastructure — from the first call to the five-star review.
              </p>
            </FadeItem>

            <FadeItem delay={0.3}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href="/book" className="btn-primary">
                  Book Your Free Audit
                  <ArrowRight size={14} />
                </a>
                <a
                  href="https://t.me/opsbynoell_web_alerts_bot?start=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FDFAF7',
                    backgroundColor: '#229ED9',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.627l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.932z"/></svg>
                  Book a Call
                </a>
                <Link href="/services" className="btn-ghost">
                  See What We Build
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeItem>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}>
          <div style={{
            width: '1px',
            height: '48px',
            backgroundColor: '#B8956A',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ─── PROOF BAR ─── */}
      <section style={{ backgroundColor: '#3D3530', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0',
          }} className="lg:grid-cols-4">
            {[
              { stat: '< 10 sec', label: 'Missed call response time' },
              { stat: '30–50%', label: 'Average no-show reduction' },
              { stat: '100%', label: 'Done for you — we build and manage it all' },
              { stat: '24 / 7', label: 'Systems running without you' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem 2rem',
                  borderRight: i < 3 ? '1px solid rgba(201,191,184,0.2)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(201,191,184,0.2)' : 'none',
                  textAlign: 'center',
                }}
                className="lg:border-b-0"
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#B8956A',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}>
                  {item.stat}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  color: 'rgba(253,250,247,0.65)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <FadeSection>
            <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 400,
                color: '#3D3530',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}>
                You're losing revenue to broken processes. Not a bad business.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.75 }}>
                Every missed call is a potential client who went somewhere else. Every manual follow-up that never happened is a lead that went cold. Every client who visited once and never heard from you again is recurring revenue you left on the table. These aren't marketing problems — they're operational gaps. And they're fixable.
              </p>
            </div>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5px', backgroundColor: '#C9BFB8' }} className="md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Missed Calls & Leads',
                body: 'The first business to follow up wins the client. 38% of calls to local businesses go unanswered — and every one of those is a booking that went to a competitor.',
                icon: Phone,
              },
              {
                number: '02',
                title: 'Weak Follow-Up',
                body: 'Most businesses follow up once, if at all. 80% of bookings require five or more touchpoints. Without a system, warm leads go cold and revenue quietly disappears.',
                icon: MessageSquare,
              },
              {
                number: '03',
                title: 'Manual Booking',
                body: 'Back-and-forth scheduling by phone wastes hours and creates friction. Clients who can\'t book instantly often don\'t book at all — especially after hours.',
                icon: Calendar,
              },
              {
                number: '04',
                title: 'No-Shows',
                body: 'No-shows cost appointment-based businesses an estimated 10–15% of annual revenue. Without automated reminders, you\'re absorbing that loss every single week.',
                icon: Star,
              },
              {
                number: '05',
                title: 'Poor Review Generation',
                body: '93% of clients read reviews before choosing a local provider. Most businesses never ask — and lose the compounding benefit of social proof to competitors who do.',
                icon: ArrowRight,
              },
              {
                number: '06',
                title: 'Inconsistent Marketing',
                body: 'Acquiring a new client costs 5–7x more than retaining one. Without a system to re-engage past clients, promote offers, and stay top of mind, your best revenue source sits idle.',
                icon: Megaphone,
              },
            ].map((card, i) => (
              <FadeItem key={i} delay={i * 0.12}>
                <div style={{
                  backgroundColor: '#FDFAF7',
                  padding: '2.5rem',
                  height: '100%',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '3.5rem',
                      fontWeight: 300,
                      color: '#E8E2DA',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}>
                      {card.number}
                    </span>
                    <card.icon size={20} color="#B8956A" />
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.625rem',
                    fontWeight: 400,
                    color: '#3D3530',
                    marginBottom: '0.875rem',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: '#7A6F68', lineHeight: 1.75 }}>
                    {card.body}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            {/* Image */}
            <FadeItem delay={0}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={INTERIOR_ARCH}
                  alt="Refined interior space"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay card */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '-1.5rem',
                  backgroundColor: '#3D3530',
                  padding: '1.5rem 2rem',
                  maxWidth: '240px',
                  display: 'none',
                }} className="lg:block">
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#FDFAF7', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                    "Most clients are live within 2 weeks."
                  </p>
                  <p className="eyebrow" style={{ color: '#B8956A' }}>Ops by Noell</p>
                </div>
              </div>
            </FadeItem>

            {/* Copy */}
            <FadeItem delay={0.15}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>What We Do</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  color: '#3D3530',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  We install your AI-powered back office. It runs 24/7 without you.
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Ops by Noell builds and manages automation systems for local businesses. Lead capture. Follow-up. Booking. Reminders. Review generation. Marketing automation. All of it running automatically — so you stop losing revenue between clients.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                  Think of it as replacing a full-time front desk and marketing coordinator at a fraction of the cost — with faster response times and zero days off. No new software to learn. No team to manage. A system that works in the background while you focus on your business.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
                  {[
                    'We design the system around your specific business and workflow',
                    'We install and configure every component — you touch nothing',
                    'We manage and maintain it ongoing, month after month',
                    'You focus on delivery. The system handles the rest.',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <div style={{ width: '20px', height: '20px', backgroundColor: '#B8956A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <ChevronRight size={12} color="#FDFAF7" />
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#3D3530', lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>

                <a href="/services" className="btn-primary">
                  See the Full System
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <FadeSection>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '4rem' }} className="lg:flex-row lg:items-end lg:justify-between">
              <div style={{ maxWidth: '480px' }}>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>The System</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  color: '#3D3530',
                  lineHeight: 1.1,
                }}>
                  We automate the operations of your business. All of it.
                </h2>
              </div>
              <Link href="/services" className="btn-ghost" style={{ marginTop: '1.5rem', flexShrink: 0 }}>
                View All Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', backgroundColor: '#C9BFB8' }} className="md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Phone,
                title: 'Missed Call Text-Back',
                body: 'Client calls. You\'re busy. They get an instant text with your booking link. Lead captured. First to respond wins — now you always respond first.',
                tag: 'Lead Capture',
              },
              {
                icon: Calendar,
                title: 'AI Booking + Reminders',
                body: 'Clients book online 24/7. Automatic confirmations and reminders cut no-shows by up to 50%. No back-and-forth. No manual scheduling.',
                tag: 'Booking',
              },
              {
                icon: Star,
                title: 'Review Generation',
                body: 'Post-visit texts go out automatically asking for a Google review. Direct link. One tap. More reviews, better rankings, more inbound — on autopilot.',
                tag: 'Reputation',
              },
              {
                icon: MessageSquare,
                title: 'Lead Follow-Up',
                body: 'Leads that don\'t convert immediately get an automated follow-up sequence. Past clients get re-engagement messages at the right intervals. All automated. All personal.',
                tag: 'Follow-Up',
              },
              {
                icon: Megaphone,
                title: 'Marketing Automation',
                body: 'Email campaigns, promotional sequences, and outreach — built and managed by us. Consistent marketing output without you managing it or hiring a team.',
                tag: 'Marketing',
              },
              {
                icon: Settings,
                title: 'Custom Operations Buildout',
                body: 'Your business doesn\'t fit a template. We scope and build exactly what you need — internal workflows, team processes, client onboarding, reporting, integrations, and beyond.',
                tag: 'Custom',
              },
              {
                icon: ArrowRight,
                title: 'Free Revenue Leak Audit',
                body: 'We audit your current setup and identify exactly where you\'re losing revenue. Clear picture of your top gaps. Quantified cost of each one. No jargon.',
                tag: 'Free',
                highlight: true,
              },
            ].map((service, i) => (
              <FadeItem key={i} delay={i * 0.08}>
                <div style={{
                  backgroundColor: service.highlight ? '#3D3530' : '#FDFAF7',
                  padding: '2.25rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 0.2s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <service.icon size={20} color={service.highlight ? '#B8956A' : '#B8956A'} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: service.highlight ? 'rgba(253,250,247,0.5)' : '#B8956A',
                      border: `1px solid ${service.highlight ? 'rgba(184,149,106,0.4)' : '#C9BFB8'}`,
                      padding: '0.25rem 0.625rem',
                    }}>
                      {service.tag}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: service.highlight ? '#FDFAF7' : '#3D3530',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: service.highlight ? 'rgba(253,250,247,0.7)' : '#7A6F68',
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}>
                    {service.body}
                  </p>
                  {service.highlight && (
                    <a href="/book" style={{
                      marginTop: '1.5rem',
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
                      Book Free Audit <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — Dark Premium Section ─── */}
      <section className="section-pad" style={{
        backgroundColor: '#1A1714',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle texture overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${STONE_TEXTURE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
        }} />
        {/* Top gold rule */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
          opacity: 0.6,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeSection>
            <div style={{ maxWidth: '560px', marginBottom: '4.5rem' }}>
              <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>The Process</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 400,
                color: '#FDFAF7',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}>
                From audit to automation in as little as{' '}
                <em style={{ fontStyle: 'italic', color: '#B8956A' }}>two weeks.</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(253,250,247,0.6)', lineHeight: 1.75 }}>
                Most clients are fully live within 2 weeks of their audit. You don't change how you work — the system adapts to you.
              </p>
            </div>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', backgroundColor: 'rgba(184,149,106,0.15)' }} className="md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Free Automation Audit',
                body: 'We audit your current setup and identify exactly where you\'re losing revenue. Clear picture of your top gaps. No pitch. No obligation. Just clarity.',
              },
              {
                step: '02',
                title: 'System Design',
                body: 'We build your automation stack to fit your business and workflow. Configured specifically for you — not a generic template.',
              },
              {
                step: '03',
                title: 'Installation',
                body: 'We install and test everything. Most clients are fully live within two weeks. You don\'t change how you work. The system adapts to you.',
              },
              {
                step: '04',
                title: 'Automated Growth',
                body: 'Leads get captured. Follow-up runs. Reviews come in. Clients come back. You focus on delivery. The system handles the rest.',
              },
            ].map((step, i) => (
              <FadeItem key={i} delay={i * 0.12}>
                <div style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  position: 'relative',
                  height: '100%',
                  borderTop: i === 3 ? '2px solid #B8956A' : 'none',
                  transition: 'background-color 0.2s ease',
                }}>
                  {/* Gold step number */}
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '5rem',
                    fontWeight: 300,
                    color: 'rgba(184,149,106,0.12)',
                    lineHeight: 1,
                    marginBottom: '-1rem',
                    letterSpacing: '-0.03em',
                  }}>
                    {step.step}
                  </div>
                  {/* Gold accent line */}
                  <div style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#B8956A',
                    marginBottom: '1rem',
                    marginTop: '0.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }} />
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#FDFAF7',
                    marginBottom: '0.875rem',
                    lineHeight: 1.2,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(253,250,247,0.55)', lineHeight: 1.75 }}>
                    {step.body}
                  </p>
                </div>
              </FadeItem>
            ))}
          </div>

          <FadeSection style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <a href="/book" className="btn-primary">
              Start Your Free Audit
              <ArrowRight size={14} />
            </a>
          </FadeSection>
        </div>

        {/* Bottom gold rule */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
          opacity: 0.6,
        }} />
      </section>

      {/* ─── INCONSISTENT MARKETING SPOTLIGHT ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
          }} className="lg:grid-cols-2">

            {/* Left: Copy */}
            <FadeItem delay={0}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1rem' }}>Revenue Gap #6</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  color: '#3D3530',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                }}>
                  Your best clients are already in your database.{' '}
                  <em style={{ fontStyle: 'italic', color: '#B8956A' }}>You're just not marketing to them.</em>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Inconsistent marketing is the most expensive gap most local businesses have — and the least visible. It's not about running ads or posting on social media. It's about systematically staying in front of the people who already trust you.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#7A6F68', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                  Ops by Noell builds and manages your marketing automation — re-engagement campaigns, seasonal promotions, birthday messages, referral requests, and win-back sequences. Consistent outreach, zero manual effort.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
                  {[
                    'Automated re-engagement for past clients',
                    'Seasonal promotions sent at the right time',
                    'Birthday and milestone messages',
                    'Referral request sequences',
                    'Win-back campaigns for lapsed clients',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <div style={{ width: '20px', height: '20px', backgroundColor: '#B8956A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <ChevronRight size={12} color="#FDFAF7" />
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#3D3530', lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <a href="/services" className="btn-primary">
                  See Marketing Automation
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeItem>

            {/* Right: Stat callout */}
            <FadeItem delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', backgroundColor: '#C9BFB8' }}>
                {[
                  {
                    stat: '5–7×',
                    label: 'More expensive to acquire a new client than retain an existing one',
                  },
                  {
                    stat: '67%',
                    label: 'Of lost clients leave due to indifference — not price or quality',
                  },
                  {
                    stat: '$0',
                    label: 'Additional ad spend required — your client list is the asset',
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    backgroundColor: '#FDFAF7',
                    padding: '2.5rem',
                    borderLeft: '3px solid #B8956A',
                  }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '3rem',
                      fontWeight: 400,
                      color: '#B8956A',
                      lineHeight: 1,
                      marginBottom: '0.625rem',
                      letterSpacing: '-0.02em',
                    }}>
                      {item.stat}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: '#7A6F68', lineHeight: 1.65 }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeItem>

          </div>
        </div>
      </section>

      {/* ─── CASE STUDY PREVIEW ─── */}
      <section className="section-pad" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0',
            backgroundColor: '#3D3530',
            overflow: 'hidden',
          }} className="lg:grid-cols-2">
            {/* Image */}
            <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden' }}>
              <img
                src={STONE_TEXTURE}
                alt="Stone texture"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(61,53,48,0.7) 0%, rgba(61,53,48,0.2) 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '0.5rem' }}>Case Study</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#FDFAF7',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}>
                  25 years of expertise.<br />Zero infrastructure.
                </p>
              </div>
            </div>

            {/* Copy */}
            <FadeItem delay={0.15}>
              <div style={{ padding: '3rem 2.5rem' }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,191,184,0.7)',
                  marginBottom: '1.25rem',
                }}>
                  Laguna Niguel, CA · Massage Therapy
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.875rem',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}>
                  A 25-year massage therapist with zero digital infrastructure — transformed in two weeks.
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(253,250,247,0.7)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  No website. No online booking. Calls going to voicemail. No reminders, no reviews, no follow-up. Santa had built a loyal clientele through 25 years of exceptional work — and was losing new clients every day to operational gaps she didn't even know existed.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2.5rem' }}>
                  {[
                    'Website built and launched',
                    'Missed call text-back installed',
                    'Online booking + reminders live',
                    'Review generation automated',
                    'Repeat client follow-up running',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B8956A', flexShrink: 0 }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(253,250,247,0.75)' }}>{item}</p>
                    </div>
                  ))}
                </div>

                <Link href="/case-study" className="btn-primary" style={{ backgroundColor: '#B8956A' }}>
                  Read the Full Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeItem>
          </div>
        </div>
      </section>

      {/* ─── COST OF INACTION ─── */}
      <section className="section-pad" style={{ backgroundColor: '#1A1714', position: 'relative', overflow: 'hidden' }}>
        {/* Top gold rule */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
          opacity: 0.6,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <FadeSection>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '4rem', alignItems: 'flex-end' }} className="lg:grid-cols-2">
              <div>
                <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>The Cost of Inaction</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1.1,
                }}>
                  Every gap in your operation has a{' '}
                  <em style={{ fontStyle: 'italic', color: '#B8956A' }}>monthly price tag.</em>
                </h2>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: 'rgba(253,250,247,0.55)', lineHeight: 1.75 }}>
                These are conservative estimates based on typical appointment-based local service businesses. Your actual numbers may be higher. The audit tells you exactly.
              </p>
            </div>
          </FadeSection>

          {/* Cost rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', backgroundColor: 'rgba(184,149,106,0.12)', marginBottom: '1.5px' }}>
            {[
              {
                gap: 'Missed Calls & Leads',
                assumption: '5 missed calls/week · avg. $120 booking value · 40% conversion rate',
                monthly: '$960',
                icon: '01',
              },
              {
                gap: 'Weak Follow-Up',
                assumption: '10 warm leads/month that go cold · 30% could convert with follow-up',
                monthly: '$360',
                icon: '02',
              },
              {
                gap: 'Manual Booking Friction',
                assumption: '3 clients/month who don\'t book due to friction or after-hours unavailability',
                monthly: '$360',
                icon: '03',
              },
              {
                gap: 'No-Shows',
                assumption: '4 no-shows/month · avg. $120 appointment value · no rebooking system',
                monthly: '$480',
                icon: '04',
              },
              {
                gap: 'Poor Review Generation',
                assumption: 'Fewer reviews = lower ranking = 2 fewer inbound leads/month',
                monthly: '$240',
                icon: '05',
              },
              {
                gap: 'Inconsistent Marketing',
                assumption: '5 lapsed clients/month who could be reactivated · avg. $120 value',
                monthly: '$600',
                icon: '06',
              },
            ].map((row, i) => (
              <FadeItem key={i} delay={i * 0.08}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2rem 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  padding: '1.5rem 2rem',
                  borderLeft: '3px solid transparent',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease',
                }} className="cost-row">
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'rgba(184,149,106,0.4)',
                    lineHeight: 1,
                  }}>
                    {row.icon}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#FDFAF7',
                      marginBottom: '0.25rem',
                      lineHeight: 1.2,
                    }}>
                      {row.gap}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.75rem',
                      color: 'rgba(253,250,247,0.35)',
                      lineHeight: 1.5,
                    }}>
                      {row.assumption}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.75rem',
                      fontWeight: 400,
                      color: '#B8956A',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                    }}>
                      {row.monthly}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.5625rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(184,149,106,0.5)',
                      marginTop: '0.125rem',
                    }}>
                      / month
                    </p>
                  </div>
                </div>
              </FadeItem>
            ))}
          </div>

          {/* Total row */}
          <FadeItem delay={0.5}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2rem 1fr auto',
              gap: '1.5rem',
              alignItems: 'center',
              backgroundColor: 'rgba(184,149,106,0.08)',
              padding: '2rem',
              borderLeft: '3px solid #B8956A',
              borderTop: '1px solid rgba(184,149,106,0.3)',
              marginBottom: '3.5rem',
            }}>
              <span />
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(184,149,106,0.7)',
                  marginBottom: '0.375rem',
                }}>
                  Conservative Monthly Estimate
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  color: 'rgba(253,250,247,0.4)',
                  lineHeight: 1.5,
                }}>
                  Based on 5 missed calls/week, 10 cold leads, 4 no-shows, and 5 lapsed clients/month.
                  <br />Your actual number is likely higher.
                </p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3rem',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  $3,000
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.5625rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(253,250,247,0.35)',
                  marginTop: '0.25rem',
                }}>
                  / month in lost revenue
                </p>
              </div>
            </div>
          </FadeItem>

          {/* CTA bridge */}
          <FadeSection style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 400,
              color: '#FDFAF7',
              lineHeight: 1.2,
              marginBottom: '1rem',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              These are estimates. Your Revenue Leak Audit gives you{' '}
              <em style={{ fontStyle: 'italic', color: '#B8956A' }}>the real number.</em>
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9375rem',
              color: 'rgba(253,250,247,0.5)',
              lineHeight: 1.75,
              maxWidth: '440px',
              margin: '0 auto 2.5rem',
            }}>
              In 30 minutes, we map every gap in your operation and quantify exactly what each one is costing you monthly.
            </p>
            <a href="/book" className="btn-primary">
              Get Your Free Revenue Leak Audit
              <ArrowRight size={14} />
            </a>
          </FadeSection>
        </div>

        {/* Bottom gold rule */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
          opacity: 0.6,
        }} />
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section
        className="section-pad"
        style={{
          backgroundColor: '#F5F0EB',
          backgroundImage: `url(${HERO_TEXTURE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(245,240,235,0.92)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <FadeSection>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Ready to Stop Losing Revenue?</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Your business is losing revenue to broken processes.{' '}
              <em style={{ fontStyle: 'italic', color: '#B8956A' }}>Let's fix that.</em>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
            }}>
              The free automation audit takes 30 minutes. We identify your top revenue leaks — missed calls, weak follow-up, no-shows, missing reviews, inconsistent marketing — and show you exactly what to fix first. No pitch. No obligation.
            </p>
            <a href="/book" className="btn-primary" style={{ fontSize: '0.875rem', padding: '1rem 2.5rem' }}>
              Book Your Free Automation Audit
              <ArrowRight size={14} />
            </a>
          </FadeSection>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.6); opacity: 0.2; }
        }
        .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .lg\\:flex-row { flex-direction: row; }
        .lg\\:items-end { align-items: flex-end; }
        .lg\\:justify-between { justify-content: space-between; }
        .lg\\:block { display: block; }
        .md\\:block { display: block; }
        .sm\\:flex-row { flex-direction: row; }
        .sm\\:justify-between { justify-content: space-between; }
        .sm\\:items-center { align-items: center; }
        .hidden { display: none; }
        .md\\:flex { display: flex; }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
          .md\\:flex { display: flex; }
          .md\\:block { display: block; }
          .lg\\:border-b-0 { border-bottom: none; }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
          .lg\\:flex-row { flex-direction: row; }
          .lg\\:items-end { align-items: flex-end; }
          .lg\\:justify-between { justify-content: space-between; }
          .lg\\:block { display: block; }
        }
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row; }
          .sm\\:justify-between { justify-content: space-between; }
          .sm\\:items-center { align-items: center; }
        }
      `}</style>
    </div>
  );
}
