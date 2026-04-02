/*
 * OPS BY NOELL — Services Page (NeuraFlas Design System)
 * Merged: Solutions + Services + Industries
 * Sections: Hero → What We Build (7 builds) → Service Deep-Dives (7) → Who We Serve (6 industries) → Packages → FAQ → CTA
 */

import { useState } from 'react';
import { ArrowRight, Zap, MessageSquare, Phone, Calendar, Star, Megaphone, Settings, ChevronDown, Check, Scissors, Heart, Smile, Home as HomeIcon, Dumbbell, Stethoscope } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const FAQS = [
  { q: 'How long does it take to get set up?', a: "Most clients are fully live within 7–14 days of signing. We handle all the technical setup, integrations, and testing. You just need to show up for a 60-minute onboarding call." },
  { q: 'Do I need any technical knowledge?', a: "None at all. We build, manage, and maintain everything. You'll see the results, not the dashboards. If you ever want visibility into performance, we provide clear weekly or monthly reports." },
  { q: 'What if I already use a CRM or booking software?', a: "We integrate with the tools you already use: HubSpot, Calendly, Acuity, Jane App, Mindbody, and more. If you already have a CRM, we'll build around it rather than replace it. We'll scope the integration during your free intro call." },
  { q: 'How does the process start?', a: "It starts with a free 30-minute intro call. We learn about your business, you learn about us, and we figure out if we're a fit. If it makes sense to move forward, we schedule a Revenue Audit to map your exact gaps and design your system." },
  { q: 'Can I upgrade or add more systems later?', a: "Absolutely. Most clients start with one system and add more as they see results. We'll proactively recommend additions when we spot new opportunities in your operation." },
  { q: 'What do you do with my business data?', a: "We don't sell your data. Ever. We build systems for your business, not a database for ours. Anything you share with us is used solely to build and manage your automation stack. No third-party sharing, no marketing lists." },
];

/* ─── MAIN ──────────────────────────────────────────────────────── */
export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#010509', minHeight: '100vh' }}>
      <Nav />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '100px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(120,58,237,0.22) 0%, rgba(139,92,246,0.14) 35%, #010509 70%)' }} />
        <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', pointerEvents: 'none', background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.14) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto' }}>
          
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '100px', fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 500, color: '#C4B5FD' }}>
                Done-For-You · Built For Your Business
              </span>
            </div>
          
          
            <h1 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              Missed calls answered.{' '}
              <GradientText>Leads followed up.</GradientText>
            </h1>
          
          
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1rem, 2vw, 1.175rem)', color: '#b8b6b3', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
              Clients booked, retained, and reviewed — every system on this page is built for you, installed by us, and running before you know it. No software to learn. No setup on your end.
            </p>
          
          
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/book" className="btn-gradient" style={{ padding: '1rem 2rem', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Book a Free 30-Minute Audit <ArrowRight size={16} />
              </a>
              <a href="#pricing" className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                View Pricing
              </a>
            </div>
          
          
            <div style={{ marginTop: '2.5rem', display: 'inline-block', background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: '12px', padding: '1.5rem 2rem', maxWidth: '460px', textAlign: 'left' }}>
              <p style={{ fontFamily: "'Nicholas', serif", fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>Start with one system.</p>
              <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.9375rem', color: '#b8b6b3', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Missed Call Text-Back — $297 setup + $197/month. No sales call needed.
              </p>
              <a href="/book" className="btn-gradient" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Get Started for $297 <ArrowRight size={14} />
              </a>
            </div>
          
        </div>
      </section>


      {/* ─── Santa Testimonial ─── */}
      <div className="reveal">
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(167,139,250,0.04)',
            border: '1px solid rgba(167,139,250,0.25)',
            borderLeft: '4px solid #A78BFA',
            borderRadius: '12px',
            padding: '2.5rem 3rem',
            textAlign: 'center',
          }}>
            <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#A78BFA" style={{ display: 'inline-block' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.65, marginBottom: '1.25rem', fontStyle: 'italic' }}>
              "I used to dread Mondays because there would always be gaps I did not expect. Now I open my calendar and it is just full. The reminders go out and people show up. I do not think about it anymore."
            </p>
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#A78BFA' }}>
              Santa M. — Licensed Massage Therapist, Laguna Niguel CA
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* ═══ SERVICE CARDS — compact 7-service overview ══════════════ */}
      <div className="reveal">
      <section style={{ borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)', background: 'rgba(167,139,250,0.015)' }}>
        <div className="container" style={{ paddingTop: 'clamp(2.5rem, 6vw, 6rem)', paddingBottom: 'clamp(2.5rem, 6vw, 6rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 4rem)' }}>
            <SectionBadge>The Full Service Stack</SectionBadge>
            <h2 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.375rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Seven systems. <GradientText>One integrated operation.</GradientText>
            </h2>
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', color: '#b8b6b3', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Each service is done-for-you from day one — designed, built, and managed by us. You don't touch a single setting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {SERVICES.map(({ icon: Icon, number, title, desc, stat, href }, i) => (
              <div className="reveal">
                <div className="feature-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: "'Nicholas', serif", fontSize: '1.625rem', fontWeight: 800, color: 'rgba(167,139,250,0.25)', lineHeight: 1, flexShrink: 0 }}>{number}</span>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: '#A78BFA' }} />
                    </div>
                    <h3 style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.7, margin: 0 }}>{title}</h3>
                  </div>
                  <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.9rem', color: '#b8b6b3', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 600, color: '#A78BFA', margin: 0 }}>{stat}</p>
                  <a href={href} style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 600, color: '#C4B5FD', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: 'auto' }}>
                    See how it works <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ═══ WHO WE SERVE — 6 industries ═══════════════════════════ */}
      <div className="reveal">
      <section style={{ padding: 'clamp(2.5rem, 6vw, 6rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 4rem)' }}>
            <SectionBadge>Who We Serve</SectionBadge>
            <h2 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.375rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Built for <GradientText>local service businesses.</GradientText>
            </h2>
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', color: '#b8b6b3', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              If your business runs on bookings and phone calls, we build the AI systems that make sure nothing falls through the cracks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {INDUSTRIES.map(({ icon: Icon, name, tagline, desc, outcome, href }, i) => (
              <div className="reveal">
                <a href={href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="feature-card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', transition: 'border-color 0.2s ease', boxSizing: 'border-box' }}>
                    <div className="icon-box"><Icon size={20} style={{ color: '#A78BFA' }} /></div>
                    <div>
                      <h3 style={{ fontFamily: "'Nicholas', serif", fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>{name}</h3>
                      <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 600, color: '#A78BFA' }}>{tagline}</p>
                    </div>
                    <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.9rem', color: '#b8b6b3', lineHeight: 1.7, flex: 1 }}>{desc}</p>
                    <div style={{ borderTop: '1px solid rgba(167,139,250,0.12)', paddingTop: '1rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
                      <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#C4B5FD', lineHeight: 1.65, fontStyle: 'italic', flex: 1 }}>{outcome}</p>
                      <span style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', fontWeight: 600, color: '#A78BFA', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
                        See how it works <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ═══ PACKAGES / PRICING ═════════════════════════════════════ */}
      <div className="reveal">
      <section id="pricing" style={{ padding: 'clamp(2.5rem, 6vw, 6rem) 0', background: 'rgba(167,139,250,0.015)', borderTop: '1px solid rgba(167,139,250,0.08)', borderBottom: '1px solid rgba(167,139,250,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 4rem)' }}>
            <SectionBadge>How We Work Together</SectionBadge>
            <h2 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.375rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Start with what matters most. <GradientText>Scale from there.</GradientText>
            </h2>
            <p style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', color: '#b8b6b3', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Every package is 100% done-for-you. We build it, connect it to your business, and once it's live, it runs. You don't touch a setting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            {PACKAGES.map(({ name, subtitle, price, period, desc, includes, cta, featured }, i) => (
              <div className="reveal">
                <div className={featured ? 'pricing-card featured' : 'pricing-card'} style={{ padding: '2rem', position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {featured && (
                    <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', padding: '0.25rem 1rem', background: 'linear-gradient(90deg, #A78BFA, #C4B5FD)', borderRadius: '0 0 12px 12px', fontFamily: "'Nicholas', serif", fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ marginTop: featured ? '1rem' : 0, flex: 1 }}>
                    <h3 style={{ fontFamily: "'Nicholas', serif", fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>{name}</h3>
                    <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.75rem', fontWeight: 600, color: '#C4B5FD', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>{subtitle}</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem', marginBottom: '0.375rem' }}>
                      <span style={{ fontFamily: "'Nicholas', serif", fontSize: '2.25rem', fontWeight: 800, color: '#ffffff' }}>{price}</span>
                      <span style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#b8b6b3' }}>{period}</span>
                    </div>
                    <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#b8b6b3', lineHeight: 1.6, marginBottom: '1.5rem' }}>{desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem' }}>
                      {includes.map((item) => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                          <Check size={14} style={{ color: '#A78BFA', flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#b8b6b3' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="/book" className={featured ? 'btn-gradient' : 'btn-outline'} style={{ textAlign: 'center', display: 'block', fontWeight: 700 }}>
                    {cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ═══ FAQ ════════════════════════════════════════════════════ */}
      <div className="reveal">
      <section style={{ padding: 'clamp(2.5rem, 6vw, 6rem) 0' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(1.375rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.02em' }}>
              Common questions, <GradientText>honest answers.</GradientText>
            </h2>
          </div>

          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                <span style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', fontWeight: 600, color: openFaq === i ? '#ffffff' : '#e2e8f0', lineHeight: 1.7 }}>{q}</span>
                <ChevronDown size={18} style={{ color: '#A78BFA', flexShrink: 0, transition: 'transform 0.25s ease', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: '1.5rem' }}>
                  <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.9375rem', color: '#b8b6b3', lineHeight: 1.75 }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* ═══ CTA ════════════════════════════════════════════════════ */}
      <div className="reveal">
      <section style={{ padding: 'clamp(2.5rem, 6vw, 7rem) 0', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(167,139,250,0.08)' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.12) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '660px', margin: '0 auto' }}>
          <SectionBadge>The First Step Is Free</SectionBadge>
          <h2 style={{ fontFamily: "'Nicholas', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Not sure where to start?<br /><GradientText>Let's talk for 30 minutes.</GradientText>
          </h2>
          <p style={{ fontFamily: "'Nicholas', serif", fontSize: '1.0625rem', color: '#b8b6b3', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A free intro call is the lowest-risk way to find out if automation is right for your business. No pitch. No pressure. Just a real conversation.
          </p>
          <a href="/book" className="btn-gradient" style={{ padding: '1.125rem 2.25rem', fontSize: '1.0625rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Book a Free 30-Minute Audit <ArrowRight size={17} />
          </a>
          <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#b8b6b3', marginTop: '1.25rem' }}>No commitment. No credit card. Just a conversation.</p>
          <p style={{ fontFamily: "'Nicholas', serif", fontSize: '0.875rem', color: '#4B5563', marginTop: '0.625rem' }}>We don't sell your data. Ever. We build systems for your business, not a database for ours.</p>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}
