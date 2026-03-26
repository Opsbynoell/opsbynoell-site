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

const SOLUTIONS = [
  {
    tag: 'Conversational AI',
    title: 'AI Lead Qualification Bot',
    desc: 'A multi-step conversational AI that qualifies inbound leads via SMS or web chat, collects contact info, scores intent, and routes hot leads directly to your calendar — without any human involvement.',
    perfectFor: 'Med spas, salons, and service businesses with high inbound call and web traffic.',
    stat: 'Avg. 3x increase in qualified bookings',
  },
  {
    tag: 'Workflow Automation',
    title: 'Full Onboarding Pipeline',
    desc: 'End-to-end client onboarding automation: intake forms, confirmation sequences, document collection, welcome messaging, and first-appointment reminders — all triggered the moment someone books.',
    perfectFor: 'Any appointment-based business that wants to create a premium client experience from day one.',
    stat: 'Zero manual onboarding steps',
  },
  {
    tag: 'Reputation',
    title: 'Review Generation System',
    desc: 'Automated post-visit review requests timed for peak response rates. Clients are routed to your preferred platform with a frictionless one-tap experience. Consistent. Automatic.',
    perfectFor: 'Any appointment-based business that wants more 5-star reviews without asking manually.',
    stat: '4x review volume in 60 days',
  },
  {
    tag: 'Analytics & Reporting',
    title: 'Automated Revenue Dashboard',
    desc: 'Real-time revenue tracking pulled from your booking system, CRM, and payment processor. Consolidated into a single dashboard with weekly email digests and anomaly alerts.',
    perfectFor: 'Business owners who want to know their numbers without logging into five different tools.',
    stat: 'Full visibility in under 30 seconds',
  },
  {
    tag: 'Voice AI',
    title: 'Missed Call Recovery System',
    desc: "Every missed call triggers an instant AI-powered text response within 10 seconds. The AI engages the lead, answers FAQs, and books appointments — all before your competitor picks up.",
    perfectFor: 'Any service business that misses calls during appointments, after hours, or on weekends.',
    stat: '< 10 sec average response time',
  },
  {
    tag: 'Scheduling Automation',
    title: 'Smart Booking + Reminder Pipeline',
    desc: 'Intelligent scheduling that syncs across calendars, sends multi-channel reminders (SMS + email), handles reschedules and cancellations, and follows up after no-shows automatically.',
    perfectFor: 'Any business with a calendar that wants to eliminate no-shows and reduce admin overhead.',
    stat: '30–50% reduction in no-shows',
  },
  {
    tag: 'Re-engagement',
    title: 'Lapsed Client Win-Back',
    desc: "Automated sequences that identify clients who haven't returned in 30, 60, or 90 days and send personalized re-engagement campaigns via SMS and email. Revenue you were leaving on the table.",
    perfectFor: 'Any business with a contact list and repeat-service model.',
    stat: 'Runs without your involvement',
  },
  {
    tag: 'Marketing Automation',
    title: 'Lead Nurture Sequences',
    desc: 'Multi-touch automated campaigns that warm up cold leads, educate prospects, and move them toward booking. Triggered by behavior, timed for conversion.',
    perfectFor: 'Businesses with longer sales cycles or high-ticket services.',
    stat: 'Every lead followed up automatically',
  },
];

export default function Solutions() {
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
            <span className="section-label">AI Builds · Custom Automation Systems</span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              maxWidth: '800px',
              marginTop: '1rem',
            }}>
              The AI systems we build.{' '}
              <span className="gradient-text">See how they work.</span>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#71717A',
              marginTop: '1.5rem',
              maxWidth: '560px',
              lineHeight: 1.65,
            }}>
              Every system below is custom-built and deployed for your specific business. We don't hand you software. We install infrastructure that runs your business while you focus on the work.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get a Custom Build <ArrowRight size={16} />
              </a>
              <a href="/services" className="btn-secondary">
                View Packages
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '3rem 0 6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {SOLUTIONS.map((sol, i) => (
              <FadeSection key={i} style={{
                padding: '2.25rem',
                background: '#09090B',
                transition: 'background 0.2s ease',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#A855F7',
                  display: 'block',
                  marginBottom: '0.875rem',
                }}>
                  {sol.tag}
                </span>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#FAFAFA',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.875rem',
                }}>
                  {sol.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  color: '#71717A',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}>
                  {sol.desc}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#52525B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Perfect for:{' '}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#71717A' }}>
                    {sol.perfectFor}
                  </span>
                </div>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(168,85,247,0.08)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  borderRadius: '5px',
                  padding: '0.3rem 0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#A855F7',
                }}>
                  {sol.stat}
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Not sure which systems your business needs? Start with the free intro call — we'll map it out.
            </p>
            <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Intro Call <ArrowRight size={16} />
            </a>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
