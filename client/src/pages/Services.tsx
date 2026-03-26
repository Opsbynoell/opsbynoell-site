import { ArrowRight, Phone, Calendar, Star, MessageSquare, Zap, Settings } from 'lucide-react';
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

const SERVICES = [
  {
    num: '01',
    icon: <Phone size={22} />,
    tag: 'Never lose a lead to voicemail again',
    title: 'Missed Call Text-Back',
    what: 'The moment a call goes unanswered, your system fires an instant, personalized text message to the caller within seconds. The message acknowledges their call, offers to help, and guides them toward booking. No manual action required.',
    why: "Studies show 85% of callers who don't reach a business on the first try will not call back. With missed call text-back, you respond in under 10 seconds — before your competitor picks up.",
    best: 'Any service business that misses calls during appointments, after hours, or on weekends.',
    stat: '< 10 sec average response time',
  },
  {
    num: '02',
    icon: <Calendar size={22} />,
    tag: 'Fill your calendar without lifting a finger',
    title: 'Appointment Booking + Reminders',
    what: '24/7 online booking that syncs with your calendar and eliminates scheduling back-and-forth. Automated reminders go out via text and email at strategic intervals before each appointment.',
    why: 'No-shows cost local service businesses an estimated 10–15% of annual revenue. Automated reminders reduce no-shows by 30–50%. Combined with 24/7 booking, you capture clients who decide to book at 10pm on a Sunday.',
    best: 'Any service business with a calendar: wellness practices, salons, dental offices, home services, and consultants.',
    stat: '30–50% typical no-show reduction',
  },
  {
    num: '03',
    icon: <Star size={22} />,
    tag: 'Turn every satisfied client into a five-star review',
    title: 'Automated Review Generation',
    what: 'After each appointment, your system automatically sends a review request via text, timed for peak response rates. Clients are guided to your preferred platform with a frictionless one-tap experience.',
    why: '93% of consumers read online reviews before choosing a local service provider. Most businesses never ask consistently — we make it automatic.',
    best: 'Any service business that wants to build its online reputation without manually asking every client.',
    stat: '4x review volume in 60 days',
  },
  {
    num: '04',
    icon: <MessageSquare size={22} />,
    tag: 'Your front desk. Running 24/7.',
    title: 'AI Receptionist',
    what: 'A conversational AI that answers inbound calls and texts, handles FAQs, qualifies leads, and books appointments — all without human involvement.',
    why: 'Your clients expect an immediate response. This system delivers it at 2am on a Sunday, during your busiest appointment, or when your staff is unavailable.',
    best: 'High-volume businesses, solo operators, and any business losing revenue to after-hours inquiries.',
    stat: 'Avg. 3x increase in qualified bookings',
  },
  {
    num: '05',
    icon: <Zap size={22} />,
    tag: 'Re-engage leads automatically',
    title: 'Lead Follow-Up Sequences',
    what: 'Automated follow-up sequences for cold leads, no-shows, and lapsed clients. Multi-touch campaigns via SMS and email that run without any manual effort.',
    why: 'Most revenue that slips through the cracks does so quietly. This system catches it — automatically re-engaging leads who went cold and clients who stopped coming back.',
    best: 'Any business with a CRM or lead list that wants to stop leaving money on the table.',
    stat: 'Runs 24/7 without your involvement',
  },
  {
    num: '06',
    icon: <Settings size={22} />,
    tag: 'If it follows a repeatable process, it can be automated',
    title: 'Custom Operations Buildout',
    what: 'Deep-dive scoping and build of exactly what you need: internal process automation, team workflows, client onboarding systems, reporting, integrations, and beyond.',
    why: 'Most automation agencies stop at lead capture. The real leverage is in the back office — the handoffs, the follow-through, the reporting, the onboarding. When those run automatically, you scale without adding headcount.',
    best: 'Growing businesses with multiple team members, complex scheduling, or unique workflows.',
    stat: 'Pricing scoped on intro call',
  },
];

const PACKAGES = [
  {
    name: 'Starter',
    tag: 'Most Popular',
    desc: 'Core systems to stop losing leads and start capturing more revenue.',
    features: [
      'Missed call text-back (< 10 sec response)',
      '24/7 online booking + calendar sync',
      'Automated appointment reminders (SMS + email)',
      'Review generation after every appointment',
      'Standard integrations (Google Calendar, GHL)',
    ],
    cta: 'Book Free Intro Call',
    price: null,
  },
  {
    name: 'Growth',
    tag: 'Full Stack',
    desc: 'Everything in Starter, plus AI receptionist and full follow-up automation.',
    features: [
      'Everything in Starter',
      'AI receptionist (booking, FAQ handling, call transfers)',
      'Lead follow-up sequences (cold leads + lapsed clients)',
      'Advanced integrations with your existing software',
      'Priority support with same-day response',
      'Dedicated monthly optimization and reporting',
    ],
    cta: 'Book Free Intro Call',
    price: 'One-time $2,500 setup fee',
  },
  {
    name: 'Custom',
    tag: 'Full Operations',
    desc: 'No templates. Full operations scoping and custom buildout.',
    features: [
      'Deep-dive operations scoping',
      'Custom workflow & process automation',
      'Team systems & internal integrations',
      'Client onboarding automation',
      'Reporting & data pipelines',
      'Ongoing management & iteration',
    ],
    cta: 'Book a Scoping Call',
    price: 'Pricing scoped on intro call',
  },
];

export default function Services() {
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
            <span className="section-label">Done-for-you · Built for your business</span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FAFAFA',
              maxWidth: '780px',
              marginTop: '1rem',
            }}>
              Missed calls answered. Leads followed up. Appointments booked. Reviews collected.
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#71717A',
              marginTop: '1.5rem',
              maxWidth: '560px',
              lineHeight: 1.65,
            }}>
              Every system on this page is built for you, installed by us, and running before you know it. No software to learn. No setup on your end.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href={GHL_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Free Intro Call <ArrowRight size={16} />
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Services */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {SERVICES.map((svc, i) => (
          <div key={i} style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '4rem 0',
            background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent',
          }}>
            <div className="container">
              <FadeSection>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '44px', height: '44px',
                      background: 'rgba(168,85,247,0.1)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#A855F7',
                      flexShrink: 0,
                      marginTop: '0.25rem',
                    }}>
                      {svc.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          color: '#A855F7',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}>
                          {svc.num}
                        </span>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem',
                          color: '#52525B',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                        }}>
                          {svc.tag}
                        </span>
                      </div>
                      <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        fontWeight: 700,
                        color: '#FAFAFA',
                        letterSpacing: '-0.02em',
                        marginBottom: '2rem',
                      }}>
                        {svc.title}
                      </h2>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        <div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#52525B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>What it does</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#A1A1AA', lineHeight: 1.65 }}>{svc.what}</p>
                        </div>
                        <div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#52525B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Why it matters</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#A1A1AA', lineHeight: 1.65 }}>{svc.why}</p>
                        </div>
                        <div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#52525B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Best for</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', color: '#A1A1AA', lineHeight: 1.65 }}>{svc.best}</p>
                          <div style={{
                            marginTop: '1rem',
                            display: 'inline-block',
                            background: 'rgba(168,85,247,0.1)',
                            border: '1px solid rgba(168,85,247,0.2)',
                            borderRadius: '6px',
                            padding: '0.375rem 0.75rem',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: '#A855F7',
                          }}>
                            {svc.stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        ))}
      </section>

      {/* Packages */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <FadeSection>
            <span className="section-label">How We Work Together</span>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              maxWidth: '600px',
              marginTop: '0.5rem',
              letterSpacing: '-0.02em',
            }}>
              Start with what matters most. Scale from there.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.6 }}>
              Every package is 100% done-for-you. We build it, connect it, and once it's live, it runs.
            </p>
          </FadeSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {PACKAGES.map((pkg, i) => (
              <FadeSection key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: i === 1 ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}>
                {i === 1 && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                    color: '#FAFAFA',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.875rem',
                    borderRadius: '0 0 6px 6px',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {pkg.tag}
                  </div>
                )}
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#FAFAFA',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}>
                  {pkg.name}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717A', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                  {pkg.desc}
                </p>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A855F7', flexShrink: 0, marginTop: '0.45rem' }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#A1A1AA', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                {pkg.price && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#52525B', marginBottom: '1rem' }}>{pkg.price}</p>
                )}
                <a
                  href={GHL_BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 1 ? 'btn-primary' : 'btn-secondary'}
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  {pkg.cta}
                </a>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <FadeSection>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' }}>
              The first step is free.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#71717A', marginTop: '1rem', maxWidth: '420px', margin: '1rem auto 0', lineHeight: 1.65 }}>
              A free intro call is the lowest-risk way to find out if automation is right for your business.
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
