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

const PROCESS = [
  { num: '01', title: 'Intro Call', desc: 'A free 15-minute conversation. We learn about your business, you learn about us, and we figure out if automation is the right move. No pitch. No pressure.' },
  { num: '02', title: 'Revenue Audit', desc: "A paid deep-dive into your operation. We map every gap, quantify the monthly revenue impact, and design your custom system. You see the full picture before committing to a build." },
  { num: '03', title: 'Build', desc: "We install and configure your complete automation stack. You answer a few questions, we do the rest. Most clients are fully live within 2 weeks of their audit." },
  { num: '04', title: 'Manage', desc: "We monitor your systems, optimize what's working, and adjust as your business grows. And when you have questions, Nova is available 24/7." },
];

export default function About() {
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
            <span className="section-label">About Ops by Noell</span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              maxWidth: '800px',
              marginTop: '1rem',
            }}>
              Built by The Noells.{' '}
              <span className="gradient-text">Powered by automation.</span>{' '}
              Backed by people who care.
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#71717A',
              marginTop: '1.5rem',
              maxWidth: '540px',
              lineHeight: 1.65,
            }}>
              {"We're Nikki and James Noell, and we put our last name on this for a reason."}
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Who we are */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <FadeSection>
              <span className="section-label">Who We Are</span>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: '#FAFAFA',
                letterSpacing: '-0.02em',
                marginTop: '0.5rem',
                marginBottom: '1.5rem',
              }}>
                We come from operations. We build what actually works.
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, marginBottom: '1rem' }}>
                {"We're Nikki and James Noell, a husband-and-wife team from Lake Forest, California. We've spent years inside fast-growing companies building systems, managing operations, and fixing what was broken. That's just how we're wired."}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, marginBottom: '1rem' }}>
                We kept seeing the same thing: talented people running great businesses, losing clients not because of bad service, but because nothing happened after the call. No follow-up. No reminder. No review request. The work was excellent. The systems behind it were nonexistent.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7 }}>
                So we built the fix. And then we built it for everyone else.
              </p>
            </FadeSection>

            <FadeSection>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {[
                  { value: '2 weeks', label: 'From audit to launch' },
                  { value: '30–50%', label: 'No-show reduction' },
                  { value: '< 10 sec', label: 'Missed call response' },
                  { value: '24/7', label: 'Systems running' },
                ].map((stat, i) => (
                  <div key={i} style={{ padding: '1.5rem', background: '#09090B' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', color: '#52525B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Why we built this */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(168,85,247,0.02)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">Why We Built This</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '-0.02em',
              maxWidth: '680px',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
            }}>
              Most automation stops at the surface. We go deeper.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, maxWidth: '620px', marginBottom: '1rem' }}>
              The automation industry is full of tools, platforms, and consultants who hand you a login and call it done. We built Ops by Noell because we believed businesses deserved something different: a partner who builds the system, manages it ongoing, and is accountable for the results.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.7, maxWidth: '620px' }}>
              {"We don't sell software. We build infrastructure. There's a difference — and you feel it from day one."}
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">How It Works</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '-0.02em',
              marginTop: '0.5rem',
              marginBottom: '3rem',
            }}>
              Four steps from conversation to running system.
            </h2>
          </FadeSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {PROCESS.map((step, i) => (
              <FadeSection key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '2rem',
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, color: '#A855F7', letterSpacing: '0.12em', display: 'block', marginBottom: '1rem' }}>
                  {step.num}
                </span>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#FAFAFA', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeSection>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' }}>
              {"Ready to see what we'd build for you?"}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginTop: '1rem', maxWidth: '420px', margin: '1rem auto 0', lineHeight: 1.65 }}>
              Start with a free 15-minute intro call. No pitch. Just a real conversation about your business.
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
