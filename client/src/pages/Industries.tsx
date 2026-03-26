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

const INDUSTRIES = [
  {
    title: 'Salons & Spas',
    sub: 'Fill your chair. Keep it full.',
    desc: 'Missed calls, last-minute cancellations, and clients who never come back are the three biggest revenue leaks in salon and spa businesses. We automate the entire client lifecycle — from the first call to the fifth visit.',
    gaps: ['Missed calls going to voicemail', "No-shows with no recovery system", 'No automated re-booking for lapsed clients', 'Zero review generation after appointments'],
    outcome: 'Salons using our systems typically see a 30–50% reduction in no-shows and a 4x increase in online reviews within 60 days.',
  },
  {
    title: 'Dental & Med Spa',
    sub: 'Every missed call is a missed patient.',
    desc: 'Dental offices and med spas run on high-value appointments. A single missed call can cost $500–$2,000 in lost revenue. We install systems that respond instantly, confirm appointments automatically, and keep your schedule full.',
    gaps: ['High-value appointments lost to voicemail', 'Manual confirmation calls consuming staff time', 'No automated recall for overdue patients', 'Inconsistent review generation'],
    outcome: 'Automated appointment confirmation and recall systems reduce no-shows and recover patients who would otherwise churn silently.',
  },
  {
    title: 'Home Services',
    sub: 'Never miss a job request again.',
    desc: "Plumbers, HVAC technicians, electricians, and contractors lose jobs every day to missed calls and slow response times. The first company to respond wins the job. We make sure that company is yours.",
    gaps: ['Calls missed during active jobs', 'No systematic follow-up on estimates', 'Slow response killing conversion rates', 'No review generation after completed jobs'],
    outcome: 'Home service businesses with instant response systems win more jobs, generate more reviews, and retain more repeat customers.',
  },
  {
    title: 'Wellness & Coaching',
    sub: 'Spend more time with clients. Less time chasing them.',
    desc: 'Coaches, therapists, chiropractors, and wellness practitioners lose revenue to admin overhead — scheduling, reminders, follow-up. We automate all of it so you focus on your clients.',
    gaps: ['Manual scheduling eating into session time', 'No-shows without automated reminders', 'Leads that go cold after initial inquiry', 'No systematic review or referral requests'],
    outcome: 'Wellness practitioners using our systems reclaim hours of admin time weekly while seeing measurable growth in bookings and reviews.',
  },
  {
    title: 'Fitness & Personal Training',
    sub: 'Keep your clients coming back.',
    desc: "Gyms, personal trainers, and fitness studios rely on retention. We build the systems that keep clients engaged, reduce cancellations, and automatically re-engage members who've gone quiet.",
    gaps: ['Members canceling with no recovery system', 'No automated re-engagement for lapsed members', 'Missed calls from potential new members', 'Inconsistent review and referral generation'],
    outcome: 'Fitness businesses see measurable improvements in client retention and new member conversion when follow-up systems run automatically.',
  },
  {
    title: "Don't see your industry?",
    sub: "If you run on appointments, we can help.",
    desc: "We work with any appointment-based service business. If your business runs on bookings, phone calls, and repeat clients — we build the AI systems that make sure nothing falls through the cracks.",
    gaps: [],
    outcome: '',
    isCtaCard: true,
  },
];

export default function Industries() {
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
            <span className="section-label">Industries We Serve</span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              maxWidth: '800px',
              marginTop: '1rem',
            }}>
              Built for appointment-based businesses.{' '}
              <span className="gradient-text">Across every vertical.</span>
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#71717A',
              marginTop: '1.5rem',
              maxWidth: '560px',
              lineHeight: 1.65,
            }}>
              If your business runs on bookings, phone calls, and repeat clients — we build the AI systems that make sure nothing falls through the cracks.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Industries */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {INDUSTRIES.map((ind, i) => {
          if ((ind as any).isCtaCard) {
            return (
              <div key={i} style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(168,85,247,0.03)' }}>
                <div className="container">
                  <FadeSection style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                      {ind.title}
                    </h2>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', lineHeight: 1.65, marginBottom: '2rem' }}>{ind.desc}</p>
                    <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Book Free Intro Call <ArrowRight size={16} />
                    </a>
                  </FadeSection>
                </div>
              </div>
            );
          }
          return (
            <div key={i} style={{
              padding: '4.5rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent',
            }}>
              <div className="container">
                <FadeSection>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    <div>
                      <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', marginBottom: '0.375rem' }}>
                        {ind.title}
                      </h2>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#A855F7', fontWeight: 500, marginBottom: '1.25rem' }}>{ind.sub}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#71717A', lineHeight: 1.7 }}>{ind.desc}</p>
                    </div>

                    <div>
                      {ind.gaps.length > 0 && (
                        <>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#52525B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                            Common Gaps
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                            {ind.gaps.map((gap, j) => (
                              <div key={j} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A855F7', flexShrink: 0, marginTop: '0.45rem' }} />
                                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#A1A1AA' }}>{gap}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {ind.outcome && (
                        <div style={{
                          background: 'rgba(168,85,247,0.06)',
                          border: '1px solid rgba(168,85,247,0.15)',
                          borderRadius: '8px',
                          padding: '1rem 1.25rem',
                        }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#A855F7', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                            Typical Outcome
                          </p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#A1A1AA', lineHeight: 1.6 }}>{ind.outcome}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeSection>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
