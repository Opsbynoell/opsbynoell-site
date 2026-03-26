import { ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

const GHL_BOOKING = 'https://api.leadconnectorhq.com/widget/booking/ko7eXb5zooItceadiV02';

function FadeSection({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
      ...style,
    }}>
      {children}
    </div>
  );
}

const GAPS = [
  { title: 'No website', desc: 'Zero online presence. New clients had no way to find her or learn about her services.' },
  { title: 'No online booking', desc: 'Booking required a phone call during business hours, or a text that might go unanswered.' },
  { title: 'Calls going to voicemail', desc: 'Missed calls meant missed clients. No system existed to follow up with callers.' },
  { title: 'No appointment reminders', desc: "No-shows happened regularly. Clients forgot. There was no automated reminder system." },
  { title: 'No review system', desc: '25 years of exceptional work with almost no online reviews to show for it.' },
  { title: 'No follow-up', desc: 'Once a client left, the relationship was over until they decided to call again — if they remembered.' },
];

const BUILT = [
  { title: 'Professional website', desc: 'Clean, mobile-optimized website with service descriptions, her story, and online booking.' },
  { title: 'Missed call text-back', desc: 'Instant automated response to every missed call within 10 seconds — before any lead goes cold.' },
  { title: 'Online booking + reminders', desc: '24/7 booking with multi-channel appointment reminders. No-shows eliminated.' },
  { title: 'Review generation', desc: 'Automated post-visit review requests. Her Google reviews grew 4x within 60 days.' },
  { title: 'Repeat client follow-up', desc: 'Automated re-engagement sequences for lapsed clients. Relationship maintained without effort.' },
];

export default function CaseStudy() {
  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(68px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container">
          <FadeSection>
            <span className="section-label">Case Study · Laguna Niguel, CA</span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              maxWidth: '820px',
              marginTop: '1rem',
            }}>
              25 years of expertise.{' '}
              <span className="gradient-text">Zero operational infrastructure.</span>{' '}
              Here's what we built.
            </h1>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem' }}>
              {[
                { label: 'Industry', value: 'Massage Therapy' },
                { label: 'Location', value: 'Laguna Niguel, CA' },
                { label: 'Experience', value: '25+ Years' },
                { label: 'Timeline', value: '2 Weeks to Live' },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', color: '#52525B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>{item.label}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#FAFAFA', fontWeight: 600 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* The Client */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Client</span>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', maxWidth: '700px', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              A master of her craft. Invisible to the internet.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, maxWidth: '640px', marginBottom: '1rem' }}>
              Santa is a licensed massage therapist based in Laguna Niguel with over 25 years of experience. Her clients are loyal. Her work is exceptional. Her reputation, built entirely through word of mouth, is impeccable.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, maxWidth: '640px' }}>
              But Santa had zero digital infrastructure. No website. No online booking. No automated follow-up. No review system. Every new client had to find her through a personal referral, and even then, they had to navigate a booking process that relied entirely on phone calls she often missed.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* The Gaps */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Gaps</span>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', maxWidth: '600px', marginTop: '0.5rem', marginBottom: '3rem' }}>
              Six operational gaps. We quantified what each one was costing her monthly.
            </h2>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {GAPS.map((gap, i) => (
              <FadeSection key={i} style={{ padding: '1.75rem', background: '#09090B' }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 600, color: '#FAFAFA', marginBottom: '0.5rem' }}>{gap.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.6 }}>{gap.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">What We Built</span>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', maxWidth: '680px', marginTop: '0.5rem', marginBottom: '1rem' }}>
              A complete operational back office. Built in two weeks.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.65, maxWidth: '560px', marginBottom: '3rem' }}>
              {"We designed and installed every component. She didn't configure a single setting. She was live and capturing leads within 14 days of her audit."}
            </p>
          </FadeSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {BUILT.map((item, i) => (
              <FadeSection key={i} style={{ padding: '1.75rem 2rem', background: '#09090B', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'linear-gradient(135deg, #A855F7, #6366F1)', flexShrink: 0, marginTop: '0.55rem' }} />
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 600, color: '#FAFAFA', marginBottom: '0.375rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(168,85,247,0.03)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">The Result</span>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', maxWidth: '680px', marginTop: '0.5rem', marginBottom: '3rem' }}>
              From zero infrastructure to fully automated — in 14 days.
            </h2>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { value: '14 days', label: 'From audit to live systems' },
              { value: '4x', label: 'Review volume in 60 days' },
              { value: '30–50%', label: 'No-show reduction' },
              { value: '0 hrs', label: 'Weekly management required' },
            ].map((stat, i) => (
              <FadeSection key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '1.5rem',
              }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '2rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#52525B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>{stat.label}</div>
              </FadeSection>
            ))}
          </div>

          {/* Testimonial */}
          <FadeSection style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(168,85,247,0.15)',
            borderRadius: '14px',
            padding: '2.5rem',
            position: 'relative',
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '2rem', color: '#A855F7', lineHeight: 1, marginBottom: '1rem' }}>"</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1rem, 2vw, 1.1875rem)', color: '#E4E4E7', lineHeight: 1.7, maxWidth: '700px', fontStyle: 'italic' }}>
              {"I've been doing this for 25 years and never thought I needed all this. Now I can't imagine running my practice without it. My phone stopped ringing off the hook with missed-call anxiety. Everything just works."}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#52525B', marginTop: '1.5rem', fontWeight: 500 }}>
              Santa — Licensed Massage Therapist, Laguna Niguel
            </p>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <FadeSection>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' }}>
              {"Ready to see what we'd build for you?"}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginTop: '1rem', maxWidth: '420px', margin: '1rem auto 0', lineHeight: 1.65 }}>
              Start with a free 15-minute intro call. No pitch. No pressure.
            </p>
            <div style={{ marginTop: '2rem' }}>
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
