/*
 * OPS BY NOELL — Home Page (NeuraFlas Design System)
 * Structure: Hero → Brand Strip → Features → How It Works → Integrations → Testimonials → Pricing → FAQ → CTA
 */

import { useState } from 'react';
import {
  PhoneCall, CalendarCheck, Star, MessageSquare, BotMessageSquare,
  ChevronDown, Check, Zap, TrendingUp, ArrowRight
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: PhoneCall,
    title: 'Missed Call Text-Back',
    desc: 'Every missed call triggers an instant text response. The lead stays warm. You never lose another prospect to voicemail.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Booking',
    desc: 'Clients book themselves 24/7. No back-and-forth, no phone tag. Just filled calendars.',
  },
  {
    icon: MessageSquare,
    title: 'Lead Follow-Up Sequences',
    desc: 'Multi-step SMS + email nurture flows that convert cold leads on autopilot.',
  },
  {
    icon: Star,
    title: 'Review Generation',
    desc: 'Automated review requests after every job. More 5-star ratings without lifting a finger.',
  },
  {
    icon: BotMessageSquare,
    title: 'AI Receptionist',
    desc: 'An AI that answers questions, qualifies leads, and books appointments — around the clock.',
  },
  {
    icon: TrendingUp,
    title: 'No-Show Reduction',
    desc: 'Automated reminder sequences at 48hr and 2hr before every appointment. No-shows drop 30-50% in the first month.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Free Intro Call',
    desc: 'A free 15-minute conversation about your business. We learn what\'s working, what isn\'t, and tell you honestly whether automation is the right fit.',
  },
  {
    number: '02',
    title: 'Revenue Audit',
    desc: 'We map every revenue gap, quantify the monthly cost in dollars, and design your complete custom system on paper before you commit to building anything.',
  },
  {
    number: '03',
    title: 'We Build It. We Run It.',
    desc: 'We build your system, test everything before go-live, and manage it from there. You focus on your business. We handle the backend.',
  },
];

const INTEGRATIONS = [
  { name: 'GoHighLevel', emoji: '⚡' },
  { name: 'Calendly', emoji: '📅' },
  { name: 'Zapier', emoji: '🔗' },
  { name: 'Twilio', emoji: '📱' },
  { name: 'Stripe', emoji: '💳' },
  { name: 'Google', emoji: '🔍' },
  { name: 'Facebook Ads', emoji: '📢' },
  { name: 'Mailchimp', emoji: '📧' },
  { name: 'Slack', emoji: '💬' },
  { name: 'HubSpot', emoji: '🎯' },
  { name: 'QuickBooks', emoji: '📊' },
  { name: 'Yelp', emoji: '⭐' },
];

const TESTIMONIALS = [
  {
    name: 'Maria S.',
    role: 'Med Spa Owner, Irvine CA',
    text: "We were losing leads every weekend when the front desk wasn't available. Noell set up a missed-call text system and booking automation — we booked 11 new clients in the first 30 days without changing anything else.",
    stars: 5,
  },
  {
    name: 'James K.',
    role: 'HVAC Company, Orange County',
    text: "The follow-up sequences alone paid for the entire setup. Leads that went cold for 2 weeks started booking. We've recaptured thousands in revenue we would have just left on the table.",
    stars: 5,
  },
  {
    name: 'Rachel T.',
    role: 'Dental Practice, San Diego',
    text: "Our no-show rate dropped from 22% to under 10% in the first month. The reminder sequences are exactly what we needed. Setup was seamless and Noell handled everything.",
    stars: 5,
  },
];

const PRICING = [
  {
    name: 'Starter',
    price: '$797',
    period: '/mo',
    desc: 'The essentials. Stop losing leads to missed calls and reduce no-shows with automated reminders.',
    features: [
      'Missed Call Text-Back',
      'AI Booking + Appointment Reminders',
      'Review Generation (Google + Yelp)',
      'Monthly performance report',
      'Ongoing monitoring and optimization',
    ],
    note: 'One-time $997 setup fee. Credited if audit done.',
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$1,197',
    period: '/mo',
    desc: 'Everything in Starter, plus lead follow-up, client reactivation, and marketing automation. The complete system.',
    features: [
      'Everything in Starter',
      'AI Lead Follow-Up (SMS + email)',
      'Client Reactivation (30/60/90-day)',
      'Marketing Automation + seasonal campaigns',
      'Full CRM setup and management',
      'Bi-weekly performance check-ins',
    ],
    note: 'One-time $1,497 setup fee. Credited if audit done.',
    cta: 'Most Popular',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$1,497',
    period: '/mo',
    desc: 'Everything in Growth, plus AI Voice Agent, advanced analytics, and dedicated account management.',
    features: [
      'Everything in Growth',
      'AI Voice Agent (24/7 call answering)',
      'Revenue dashboard with weekly digests',
      'Advanced lead scoring and routing',
      'Custom workflow builds',
      'Weekly strategy calls',
    ],
    note: 'One-time $1,997 setup fee. Credited if audit done.',
    cta: 'Get Started',
    featured: false,
  },
];

const FAQS = [
  {
    q: "What's included in the monthly fee?",
    a: "The monthly fee includes everything: ongoing system management, monitoring, optimization, updates, and our support. You're not paying for software. You're paying for us to run it. We watch your systems, adjust based on performance, and make sure everything keeps working as your business evolves.",
  },
  {
    q: "Are there setup fees separate from the monthly?",
    a: "Yes. There's a one-time setup fee to build your systems. The amount depends on which package you choose. If you've completed the Revenue Audit, the $497 audit fee is credited toward your setup cost. Setup fees are disclosed clearly before you commit to anything.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Most clients are fully live within 7 to 14 days. We handle everything: setup, testing, and launch. You don't configure a single setting.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month, always. We keep your business because we deliver results, not because you're contractually stuck. Cancel with 30 days' notice, no penalty.",
  },
  {
    q: "What if I want to start with just one system?",
    a: "The Missed Call Text-Back system is available as a standalone entry offer: $497 setup + $197/month. Many clients start here, see immediate results, and expand to a full package. It's a low-risk way to prove the concept before committing to a full build.",
  },
];

/* ─── SHARED BADGE COMPONENT ────────────────────────────────────── */
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
      <span style={{
        display: 'inline-block',
        padding: '0.3rem 0.875rem',
        background: 'rgba(167,139,250,0.1)',
        border: '1px solid rgba(167,139,250,0.25)',
        borderRadius: '100px',
        fontFamily: "'Sora', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#C4B5FD',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
      }}>
        {children}
      </span>
    </div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background: 'linear-gradient(90deg, #A78BFA 0%, #C4B5FD 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {children}
    </span>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const marqueeItems = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <div style={{ backgroundColor: '#010509', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '120px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Vertical gradient backdrop */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(36,64,180,0.28) 0%, rgba(100,50,220,0.18) 35%, #010509 72%)',
        }} />
        {/* Purple orb */}
        <div style={{
          position: 'absolute', top: '5%', left: '50%',
          transform: 'translateX(-50%)',
          width: '700px', height: '700px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.16) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.375rem 1rem',
              background: 'rgba(167,139,250,0.12)',
              border: '1px solid rgba(167,139,250,0.3)',
              borderRadius: '100px',
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.8125rem', fontWeight: 500, color: '#C4B5FD', letterSpacing: '0.02em',
            }}>
              <Zap size={13} style={{ color: '#A78BFA' }} />
              Done-For-You AI Automation
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '1.5rem',
          }}>
            Your Business Runs{' '}
            <GradientText>24/7.</GradientText>
            <br />Even When You Don't.
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.175rem)',
            color: '#a0a8b8', lineHeight: 1.75,
            maxWidth: '600px', margin: '0 auto 2.5rem',
          }}>
            We design, install, and manage AI automation systems for local service businesses. Lead capture, booking, follow-up, reviews. All running automatically so you never miss revenue again.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="/book" className="btn-gradient" style={{ padding: '1rem 2rem', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Book Free Intro Call <ArrowRight size={16} />
            </a>
            <a href="/services" className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              See How It Works
            </a>
          </div>

          {/* Trust stats */}
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '< 10s', label: 'Avg. lead response time' },
              { value: '−42%', label: 'No-show rate reduction' },
              { value: '24/7', label: 'Automation uptime' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '1.625rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>{value}</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#6b7280', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BRAND STRIP ═══════════════════════════════════════════ */}
      <section style={{
        borderTop: '1px solid rgba(167,139,250,0.1)',
        borderBottom: '1px solid rgba(167,139,250,0.1)',
        padding: '2.5rem 0',
        overflow: 'hidden',
      }}>
        <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem',
            color: '#6b7280', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500,
          }}>
            Automation powered by the tools you already use
          </p>
        </div>
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <div key={i} className="integration-logo">
                <span>{item.emoji}</span><span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <SectionBadge>Features</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Built to run your business,{' '}<GradientText>not your inbox</GradientText>
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.0625rem', color: '#a0a8b8', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Six systems that work together to capture, convert, and retain customers — automatically.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="feature-card" style={{ padding: '2rem' }}>
                <div className="icon-box" style={{ marginBottom: '1.25rem' }}>
                  <Icon size={22} style={{ color: '#A78BFA' }} />
                </div>
                <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#a0a8b8', lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ══════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0', background: 'rgba(167,139,250,0.015)', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <SectionBadge>How It Works</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              From audit to autopilot{' '}<GradientText>in 14 days</GradientText>
            </h2>
          </div>

          <div>
            {STEPS.map(({ number, title, desc }, i) => (
              <div key={number} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                padding: '3rem 0',
                borderBottom: i < STEPS.length - 1 ? '1px solid rgba(167,139,250,0.08)' : 'none',
              }}>
                {/* Big step number */}
                <div style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', order: i % 2 === 0 ? 0 : 1 }}>
                  <span className="step-number">{number}</span>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    marginBottom: '1rem', padding: '0.25rem 0.875rem',
                    background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)',
                    borderRadius: '100px', fontFamily: "'Sora', sans-serif",
                    fontSize: '0.75rem', color: '#C4B5FD', fontWeight: 600,
                  }}>
                    Step {number}
                  </div>
                  <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.015em' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1rem', color: '#a0a8b8', lineHeight: 1.75, maxWidth: '440px' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS ══════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionBadge>Integrations</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Plugs into the tools{' '}<GradientText>you already use</GradientText>
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.0625rem', color: '#a0a8b8', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              No ripping and replacing. We build on top of your existing stack and make it work smarter.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', maxWidth: '860px', margin: '0 auto' }}>
            {INTEGRATIONS.map(({ name, emoji }) => (
              <div key={name}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(167,139,250,0.1)',
                  borderRadius: '14px', fontFamily: "'Sora', sans-serif",
                  fontSize: '0.9375rem', fontWeight: 500, color: '#a0a8b8',
                  transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(167,139,250,0.3)';
                  el.style.background = 'rgba(167,139,250,0.06)';
                  el.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(167,139,250,0.1)';
                  el.style.background = 'rgba(255,255,255,0.03)';
                  el.style.color = '#a0a8b8';
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{emoji}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0', background: 'rgba(167,139,250,0.015)', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionBadge>Client Results</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Real businesses.{' '}<GradientText>Measurable results.</GradientText>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map(({ name, role, text, stars }) => (
              <div key={name} className="testimonial-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={15} style={{ color: '#A78BFA', fill: '#A78BFA' }} />
                  ))}
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#a0a8b8', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{text}"
                </p>
                <div>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: '#ffffff', fontSize: '0.9375rem' }}>{name}</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#6b7280', marginTop: '0.125rem' }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionBadge>Pricing</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Simple, transparent{' '}<GradientText>pricing</GradientText>
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.0625rem', color: '#a0a8b8', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
              Transparent pricing. No contracts. No lock-in. Cancel anytime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
            {PRICING.map(({ name, price, period, desc, features, cta, featured, note }) => (
              <div key={name} className={featured ? 'pricing-card featured' : 'pricing-card'}
                style={{ padding: '2rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {featured && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                    padding: '0.25rem 1rem',
                    background: 'linear-gradient(90deg, #A78BFA, #C4B5FD)',
                    borderRadius: '0 0 12px 12px',
                    fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '0.04em', whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginTop: featured ? '1rem' : 0, flex: 1 }}>
                  <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>{name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '2.25rem', fontWeight: 800, color: '#ffffff' }}>{price}</span>
                    {period && <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#6b7280' }}>{period}</span>}
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.875rem', color: '#a0a8b8', lineHeight: 1.6, marginBottom: '1rem' }}>{desc}</p>
                  {note && (
                    <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem' }}>{note}</p>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                    {features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                        <Check size={15} style={{ color: '#A78BFA', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9rem', color: '#a0a8b8' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/book" className={featured ? 'btn-gradient' : 'btn-outline'} style={{ textAlign: 'center', display: 'block', fontWeight: 700 }}>
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 0', background: 'rgba(167,139,250,0.015)', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Common{' '}<GradientText>questions</GradientText>
            </h2>
          </div>

          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '1rem',
                }}
              >
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '1.0625rem', fontWeight: 600, color: openFaq === i ? '#ffffff' : '#e2e8f0', lineHeight: 1.4 }}>
                  {q}
                </span>
                <ChevronDown size={18} style={{ color: '#A78BFA', flexShrink: 0, transition: 'transform 0.25s ease', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: '1.5rem' }}>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.9375rem', color: '#a0a8b8', lineHeight: 1.75 }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════════════════════ */}
      <section style={{ padding: '8rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.14) 0%, transparent 65%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
          <SectionBadge>Get Started Today</SectionBadge>
          <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Stop losing leads to{' '}<GradientText>slow follow-up.</GradientText>
          </h2>
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.125rem', color: '#a0a8b8', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            15 minutes. Free. No obligation. We map your gaps, show you what we'd build, and tell you what it costs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/book" className="btn-gradient" style={{ padding: '1.125rem 2.25rem', fontSize: '1.0625rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Book Free Intro Call <ArrowRight size={17} />
            </a>
            <a href="/case-study" className="btn-outline" style={{ padding: '1.125rem 2.25rem', fontSize: '1.0625rem' }}>
              See Our Results
            </a>
          </div>
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.8125rem', color: '#6b7280', marginTop: '1.5rem' }}>
            No commitment. No credit card. Just a conversation.
          </p>
        </div>
      </section>

    </div>
  );
}
