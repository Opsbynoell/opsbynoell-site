/*
 * OPS BY NOELL — Services Page
 * Design: Quiet Editorial Luxury
 * Sections: Hero, 5 Service Deep-Dives, Packages, Closing CTA
 *
 * Color: bg #F5F0EB / alt #E8E2DA / headline #3D3530 / body #7A6F68 / CTA #B8956A
 * Typography: Cormorant Garamond headlines, DM Sans body
 */

import { Link } from 'wouter';
import { ArrowRight, Phone, Calendar, Star, MessageSquare, Megaphone, Settings, CheckCircle } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

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

const services = [
  {
    icon: Phone,
    number: '01',
    title: 'Missed Call Text-Back',
    tagline: 'Never lose a lead to voicemail again.',
    whatItDoes: 'The moment a call goes unanswered, your system fires an instant, personalized text message to the caller — within seconds. The message acknowledges their call, offers to help, and guides them toward booking. No manual action required.',
    whyItMatters: 'Studies show 85% of callers who don\'t reach a business on the first try will not call back. They call your competitor. Missed Call Text-Back eliminates that window entirely — keeping leads warm and in conversation before they disappear.',
    bestFor: 'Any appointment-based business that receives phone calls: massage therapists, med spas, chiropractors, salons, wellness providers, consultants.',
    bg: '#F5F0EB',
  },
  {
    icon: Calendar,
    number: '02',
    title: 'AI Booking + Reminder System',
    tagline: 'Fill your calendar without picking up the phone.',
    whatItDoes: 'A fully automated booking system that allows clients to schedule appointments 24/7 — from your website, text, or social media. Automated reminders go out via text and email at strategic intervals before each appointment.',
    whyItMatters: 'No-shows cost local service businesses an estimated 10–15% of annual revenue. Automated reminders reduce no-shows by 30–50%. Combined with 24/7 booking, you capture clients who decide to book at 10pm on a Sunday.',
    bestFor: 'Any business with a calendar: spas, clinics, salons, wellness studios, consultants, coaches.',
    bg: '#E8E2DA',
  },
  {
    icon: Star,
    number: '03',
    title: 'Automated Review Generation',
    tagline: 'Turn every satisfied client into a five-star review.',
    whatItDoes: 'After each appointment, your system automatically sends a review request via text — timed for peak response rates. Clients are guided to your preferred platform (Google, Yelp, etc.) with a frictionless one-tap experience.',
    whyItMatters: '93% of consumers read online reviews before choosing a local service provider. Businesses with consistent review generation outrank competitors and convert more website visitors. Most businesses never ask — and lose the compounding benefit of social proof.',
    bestFor: 'Every local service business. Reviews are the single highest-ROI reputation asset you can build.',
    bg: '#F5F0EB',
  },
  {
    icon: MessageSquare,
    number: '04',
    title: 'Lead Follow-Up Automation',
    tagline: 'Most businesses follow up once. We follow up until it converts.',
    whatItDoes: 'Multi-touch follow-up sequences that activate when a lead doesn\'t book, when a client hasn\'t returned, or when a prospect goes cold. Personalized messages go out at the right intervals — via text, email, or both.',
    whyItMatters: '80% of sales require 5+ follow-up touches. Most businesses follow up once, if at all. Automated follow-up sequences recover revenue that would otherwise be permanently lost — from leads who were interested but got busy.',
    bestFor: 'Businesses with longer sales cycles, high-value services, or clients who need multiple touchpoints before committing.',
    bg: '#E8E2DA',
  },
  {
    icon: Megaphone,
    number: '05',
    title: 'Marketing Automation',
    tagline: 'Stay top of mind without lifting a finger.',
    whatItDoes: 'Automated campaigns that re-engage past clients, promote seasonal offers, and keep your brand present between appointments. Includes birthday messages, win-back sequences, referral requests, and consistent outreach to your existing client base.',
    whyItMatters: 'Acquiring a new client costs 5–7x more than retaining an existing one. Your past clients are your most valuable asset — and most businesses never market to them systematically. Marketing automation turns your client list into a recurring revenue engine.',
    bestFor: 'Established businesses with an existing client base looking to increase lifetime value and referrals.',
    bg: '#F5F0EB',
  },
  {
    icon: Settings,
    number: '06',
    title: 'Custom Operations Buildout',
    tagline: 'If it\'s a repeatable process, it can be automated.',
    whatItDoes: 'Your business doesn\'t fit a template. We scope and build exactly what you need — internal process automation, team workflows, client onboarding systems, reporting, integrations, and beyond. Every custom buildout starts with a deep-dive into your current operations to identify every manual step that can be systematized.',
    whyItMatters: 'Most automation agencies stop at lead capture. We go further. The real leverage in a growing business is in the back office — the handoffs, the follow-through, the reporting, the onboarding. When those run automatically, you scale without adding headcount.',
    bestFor: 'Growing businesses with complex operations, multiple team members, or unique workflows that off-the-shelf tools can\'t handle.',
    bg: '#E8E2DA',
    highlight: true,
  },
];

const packages = [
  {
    name: 'Starter',
    subtitle: 'Lead Capture + Booking Fix',
    description: 'The essential foundation for any appointment-based business. Stop losing leads from missed calls and start filling your calendar automatically.',
    includes: [
      'Missed Call Text-Back',
      'AI Booking + Reminder System',
      'Onboarding & setup included',
      'Ongoing management & maintenance',
    ],
    note: 'Pricing available on audit call.',
    highlight: false,
  },
  {
    name: 'Growth',
    subtitle: 'Full AI Back Office',
    description: 'The complete operational transformation. Every system working together to capture, convert, retain, and grow — on autopilot.',
    includes: [
      'Everything in Starter',
      'Automated Review Generation',
      'Lead Follow-Up Automation',
      'Marketing Automation',
      'Priority support & optimization',
    ],
    note: 'Pricing available on audit call.',
    highlight: true,
  },
  {
    name: 'Website Add-On',
    subtitle: 'Professional Web Presence',
    description: 'A clean, conversion-focused website designed to work with your automation systems — not just look good.',
    includes: [
      'Custom website design & build',
      'Booking integration included',
      'Mobile-optimized',
      'SEO foundation',
    ],
    note: 'Available as add-on to any package.',
    highlight: false,
    customCta: undefined as string | undefined,
  },
  {
    name: 'Custom',
    subtitle: 'Full Operations Buildout',
    description: 'For businesses with complex or unique operational needs. We scope, build, and manage a fully custom automation stack — internal workflows, integrations, team systems, and beyond. Pricing scoped after audit.',
    includes: [
      'Deep-dive operations scoping',
      'Custom workflow & process automation',
      'Team systems & internal integrations',
      'Client onboarding automation',
      'Reporting & data pipelines',
      'Ongoing management & iteration',
    ],
    note: 'Pricing scoped on audit call. No templates.',
    highlight: false,
    customCta: 'Book a Scoping Call' as string | undefined,
  },
];

export default function Services() {
  return (
    <div style={{ backgroundColor: '#F5F0EB', minHeight: '100vh' }}>
      <Nav />

      {/* ─── PAGE HERO ─── */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '5rem',
        backgroundColor: '#F5F0EB',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          backgroundImage: `url(${PLASTER})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, #F5F0EB 60%, transparent 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Done-for-You · Built for Your Business</p>
          </FadeItem>
          <FadeItem delay={0.1}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: '700px',
              marginBottom: '1.5rem',
            }}>
We build the back office your business has been running without.
            </h1>
          </FadeItem>
          <FadeItem delay={0.2}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginBottom: '1.25rem',
            }}>
We don't hand you software and wish you luck. We design, install, manage, and maintain complete automation systems — built specifically for your business, covering every part of your operation from the first missed call to the five-star review.
            </p>
          </FadeItem>
          <FadeItem delay={0.25}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.0625rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginBottom: '2.5rem',
            }}>
You focus on the work. The infrastructure runs itself.
            </p>
          </FadeItem>
          <FadeItem delay={0.3}>
            <a href="/book" className="btn-primary">
              Book Your Free Audit
              <ArrowRight size={14} />
            </a>
          </FadeItem>
        </div>
      </section>

      {/* ─── SERVICE SECTIONS ─── */}
      {services.map((service, i) => (
        <section
          key={i}
          className="section-pad"
          style={{ backgroundColor: service.bg }}
        >
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'start',
            }} className="lg:grid-cols-12">
              {/* Left: Number + Icon */}
              <FadeItem delay={0} style={{ gridColumn: 'span 1' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }} className="lg:col-span-2">
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '5rem',
                    fontWeight: 300,
                    color: 'rgba(61,53,48,0.08)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    {service.number}
                  </span>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#B8956A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <service.icon size={18} color="#FDFAF7" />
                  </div>
                </div>
              </FadeItem>

              {/* Right: Content */}
              <FadeItem delay={0.1} style={{ gridColumn: 'span 1' }}>
                <div className="lg:col-span-10">
                  <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>{service.tagline}</p>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(2rem, 3.5vw, 2.875rem)',
                    fontWeight: 400,
                    color: '#3D3530',
                    lineHeight: 1.1,
                    marginBottom: '2.5rem',
                  }}>
                    {service.title}
                  </h2>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem',
                  }} className="md:grid-cols-3">
                    {[
                      { label: 'What It Does', content: service.whatItDoes },
                      { label: 'Why It Matters', content: service.whyItMatters },
                      { label: 'Best For', content: service.bestFor },
                    ].map((col, j) => (
                      <div key={j}>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.6875rem',
                          fontWeight: 500,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: '#B8956A',
                          marginBottom: '0.875rem',
                          paddingBottom: '0.875rem',
                          borderBottom: '1px solid #C9BFB8',
                        }}>
                          {col.label}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9375rem', color: '#7A6F68', lineHeight: 1.75 }}>
                          {col.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeItem>
            </div>
          </div>
          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#C9BFB8', marginTop: '5rem', maxWidth: '1320px', margin: '5rem auto 0', padding: '0 3rem' }}>
            <div style={{ height: '1px', backgroundColor: '#C9BFB8' }} />
          </div>
        </section>
      ))}

      {/* ─── PACKAGES ─── */}
      <section className="section-pad" style={{ backgroundColor: '#3D3530' }}>
        <div className="container">
          <FadeItem delay={0}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '1rem' }}>How We Work Together</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 400,
                color: '#FDFAF7',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}>
                Start with what matters most. Scale from there.
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: 'rgba(253,250,247,0.65)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
                Every package is 100% done-for-you. We design it, install it, and manage it ongoing. You don’t touch a setting.
              </p>
            </div>
          </FadeItem>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5px',
            backgroundColor: 'rgba(201,191,184,0.2)',
          }} className="md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <FadeItem key={i} delay={i * 0.12}>
                <div style={{
                  backgroundColor: pkg.highlight ? '#B8956A' : 'rgba(253,250,247,0.05)',
                  padding: '2.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}>
                  {pkg.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '-1px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#FDFAF7',
                      padding: '0.25rem 1rem',
                    }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8956A' }}>
                        Most Popular
                      </p>
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: pkg.highlight ? '#FDFAF7' : '#FDFAF7',
                      lineHeight: 1,
                      marginBottom: '0.375rem',
                    }}>
                      {pkg.name}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: pkg.highlight ? 'rgba(253,250,247,0.8)' : '#B8956A',
                    }}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9375rem',
                    color: pkg.highlight ? 'rgba(253,250,247,0.85)' : 'rgba(253,250,247,0.65)',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                  }}>
                    {pkg.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flexGrow: 1 }}>
                    {pkg.includes.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle size={15} color={pkg.highlight ? 'rgba(253,250,247,0.9)' : '#B8956A'} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: pkg.highlight ? 'rgba(253,250,247,0.85)' : 'rgba(253,250,247,0.7)', lineHeight: 1.5 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: `1px solid ${pkg.highlight ? 'rgba(253,250,247,0.2)' : 'rgba(201,191,184,0.2)'}`, paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8125rem', color: pkg.highlight ? 'rgba(253,250,247,0.6)' : 'rgba(201,191,184,0.6)', fontStyle: 'italic' }}>
                      {pkg.note}
                    </p>
                  </div>

                  <a
                    href="/book"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: pkg.highlight ? '#FDFAF7' : pkg.customCta ? '#B8956A' : 'transparent',
                      color: pkg.highlight ? '#B8956A' : '#FDFAF7',
                      border: pkg.highlight ? 'none' : pkg.customCta ? 'none' : '1px solid rgba(201,191,184,0.4)',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.875rem 1.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {pkg.customCta ?? 'Book Your Free Audit'} <ArrowRight size={12} />
                  </a>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="section-pad" style={{ backgroundColor: '#E8E2DA' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeItem delay={0}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>The First Step Is Free.</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#3D3530',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              maxWidth: '640px',
              margin: '0 auto 1.25rem',
            }}>
              The free audit shows you exactly where your business is losing revenue — and what to fix first.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              color: '#7A6F68',
              lineHeight: 1.75,
              maxWidth: '500px',
              margin: '0 auto 2.5rem',
            }}>
              In 30 minutes, we map every operational gap — missed calls, weak follow-up, no-shows, missing reviews, inconsistent marketing — and give you a plain-language estimate of what each one is costing you monthly. No pitch. No obligation.
            </p>
            <a href="/book" className="btn-primary">
              Book Your Free Audit
              <ArrowRight size={14} />
            </a>
          </FadeItem>
        </div>
      </section>

      <Footer />

      <style>{`
        .lg\\:grid-cols-12 { display: grid; grid-template-columns: repeat(12, 1fr); }
        .lg\\:col-span-2 { grid-column: span 2; }
        .lg\\:col-span-10 { grid-column: span 10; }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) {
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-12 { grid-template-columns: 120px 1fr; }
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
