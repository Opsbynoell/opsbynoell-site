/*
 * RevenueCalculator — Interactive Cost of Inaction Calculator
 * Inputs: missed calls/week, avg service value, weekly appointments, no-show rate
 * Outputs: per-gap monthly cost estimates + running total
 * Design: dark charcoal (#1A1714) with gold accents, matching the homepage CoI section
 */

import { useState, useCallback } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  return '$' + Math.round(n).toLocaleString();
}

interface SliderProps {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}

function Slider({ label, sublabel, value, min, max, step, unit = '', onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
        <div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(253,250,247,0.75)',
            letterSpacing: '0.02em',
          }}>{label}</span>
          {sublabel && (
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              color: 'rgba(253,250,247,0.35)',
              marginLeft: '0.5rem',
            }}>{sublabel}</span>
          )}
        </div>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.25rem',
          color: '#B8956A',
          fontWeight: 400,
          minWidth: '4rem',
          textAlign: 'right',
        }}>
          {unit === '$' ? `$${value.toLocaleString()}` : `${value}${unit}`}
        </span>
      </div>
      <div style={{ position: 'relative', height: '4px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
        {/* Filled track */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: `${pct}%`,
          backgroundColor: '#B8956A',
          borderRadius: '2px',
          transition: 'width 0.1s ease',
        }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '20px',
            transform: 'translateY(-50%)',
            opacity: 0,
            cursor: 'pointer',
            margin: 0,
          }}
        />
        {/* Thumb */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: `${pct}%`,
          transform: 'translate(-50%, -50%)',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: '#B8956A',
          border: '2px solid #1A1714',
          boxShadow: '0 0 0 2px rgba(184,149,106,0.3)',
          pointerEvents: 'none',
          transition: 'left 0.1s ease',
        }} />
      </div>
    </div>
  );
}

// ─── Cost Pill ────────────────────────────────────────────────────────────────

interface CostPillProps {
  label: string;
  cost: number;
  assumption: string;
}

function CostPill({ label, cost, assumption }: CostPillProps) {
  const [showTip, setShowTip] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowTip(s => !s)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(184,149,106,0.2)',
          padding: '0.5rem 0.875rem',
          cursor: 'pointer',
          textAlign: 'left',
          width: '100%',
          transition: 'border-color 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,149,106,0.5)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,149,106,0.2)')}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          color: 'rgba(253,250,247,0.5)',
          letterSpacing: '0.06em',
          flexGrow: 1,
        }}>{label}</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.125rem',
          color: '#B8956A',
          fontWeight: 400,
          transition: 'all 0.2s ease',
        }}>{fmt(cost)}</span>
        {showTip
          ? <ChevronUp size={10} color="rgba(184,149,106,0.5)" />
          : <ChevronDown size={10} color="rgba(184,149,106,0.3)" />}
      </button>
      {showTip && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: 0,
          right: 0,
          backgroundColor: '#2A2420',
          border: '1px solid rgba(184,149,106,0.25)',
          padding: '0.625rem 0.875rem',
          zIndex: 10,
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            color: 'rgba(253,250,247,0.55)',
            lineHeight: 1.6,
          }}>{assumption}</p>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RevenueCalculator() {
  // Inputs
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(6);
  const [avgServiceValue, setAvgServiceValue] = useState(120);
  const [weeklyAppointments, setWeeklyAppointments] = useState(20);
  const [noShowRate, setNoShowRate] = useState(15); // percent
  const [conversionRate, setConversionRate] = useState(30); // percent of follow-up leads that convert

  // ─── Calculations ──────────────────────────────────────────────────────────
  const calc = useCallback(() => {
    const weeksPerMonth = 4.33;

    // 1. Missed calls: each missed call = a potential new client lost
    //    Assume 40% of callers would have booked if answered
    const missedCallsMonthly = missedCallsPerWeek * weeksPerMonth;
    const missedCallLoss = missedCallsMonthly * 0.4 * avgServiceValue;

    // 2. No follow-up: existing leads that went cold
    //    Assume 2× weekly appts worth of leads in pipeline, conversionRate% would book with follow-up
    const coldLeadsMonthly = weeklyAppointments * weeksPerMonth * 0.5;
    const followUpLoss = coldLeadsMonthly * (conversionRate / 100) * avgServiceValue;

    // 3. No-shows: direct lost revenue from appointments that don't show
    const noShowsMonthly = weeklyAppointments * weeksPerMonth * (noShowRate / 100);
    const noShowLoss = noShowsMonthly * avgServiceValue;

    // 4. Weak reviews: lower star rating = fewer new clients
    //    Estimate: 1 missed review request per 3 appointments → 15% of those would have booked again
    const missedReviewsMonthly = (weeklyAppointments * weeksPerMonth) / 3;
    const reviewLoss = missedReviewsMonthly * 0.15 * avgServiceValue;

    // 5. Inconsistent marketing: no re-engagement = past clients don't return
    //    Estimate: 10% of monthly client base would rebook with a nudge
    const monthlyClients = weeklyAppointments * weeksPerMonth;
    const marketingLoss = monthlyClients * 0.1 * avgServiceValue;

    const total = missedCallLoss + followUpLoss + noShowLoss + reviewLoss + marketingLoss;

    return {
      missedCallLoss,
      followUpLoss,
      noShowLoss,
      reviewLoss,
      marketingLoss,
      total,
    };
  }, [missedCallsPerWeek, avgServiceValue, weeklyAppointments, noShowRate, conversionRate]);

  const costs = calc();

  return (
    <section style={{ backgroundColor: '#1A1714', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Top gold rule */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
        opacity: 0.5,
      }} />

      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '3rem', maxWidth: '560px' }}>
          <p className="eyebrow" style={{ color: '#B8956A', marginBottom: '0.75rem' }}>
            The Cost of Waiting
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: '#FDFAF7',
            lineHeight: 1.15,
            marginBottom: '0.875rem',
          }}>
            Enter your numbers. See exactly what inaction is costing you.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.875rem',
            color: 'rgba(253,250,247,0.45)',
            lineHeight: 1.7,
          }}>
            Adjust the sliders to match your business. The estimates update instantly. Click any cost pill to see the assumption behind the number.
          </p>
        </div>

        {/* Two-column layout: sliders left, results right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start',
        }} className="lg:grid-cols-2">

          {/* ─── LEFT: Sliders ─── */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(184,149,106,0.12)',
            padding: '2rem',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(184,149,106,0.5)',
              marginBottom: '1.75rem',
            }}>
              Your Business — Adjust to Match
            </p>

            <Slider
              label="Missed calls per week"
              sublabel="calls that go unanswered"
              value={missedCallsPerWeek}
              min={1}
              max={30}
              step={1}
              unit=" calls"
              onChange={setMissedCallsPerWeek}
            />
            <Slider
              label="Average service value"
              sublabel="per appointment"
              value={avgServiceValue}
              min={50}
              max={500}
              step={10}
              unit="$"
              onChange={setAvgServiceValue}
            />
            <Slider
              label="Weekly appointments"
              sublabel="total booked per week"
              value={weeklyAppointments}
              min={5}
              max={80}
              step={1}
              unit=" appts"
              onChange={setWeeklyAppointments}
            />
            <Slider
              label="No-show rate"
              sublabel="% of bookings that don't show"
              value={noShowRate}
              min={5}
              max={40}
              step={1}
              unit="%"
              onChange={setNoShowRate}
            />
            <Slider
              label="Lead conversion rate"
              sublabel="% of cold leads that would book with follow-up"
              value={conversionRate}
              min={10}
              max={60}
              step={5}
              unit="%"
              onChange={setConversionRate}
            />

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.625rem',
              color: 'rgba(253,250,247,0.2)',
              lineHeight: 1.6,
              marginTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '1rem',
            }}>
              These are conservative estimates based on industry averages. Your actual Revenue Leak Audit will give you the precise numbers for your specific business.
            </p>
          </div>

          {/* ─── RIGHT: Results ─── */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(184,149,106,0.5)',
              marginBottom: '1.75rem',
            }}>
              Estimated Monthly Revenue Loss
            </p>

            {/* Cost pills — clickable for assumption detail */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
              <CostPill
                label="Missed Calls"
                cost={costs.missedCallLoss}
                assumption={`Based on ${Math.round(missedCallsPerWeek * 4.33)} missed calls/month × 40% booking rate × $${avgServiceValue} avg service value.`}
              />
              <CostPill
                label="No Follow-Up"
                cost={costs.followUpLoss}
                assumption={`Based on 50% of monthly appointments generating a cold lead, with ${conversionRate}% converting with proper follow-up at $${avgServiceValue} per booking.`}
              />
              <CostPill
                label="No-Shows"
                cost={costs.noShowLoss}
                assumption={`Based on ${noShowRate}% no-show rate × ${Math.round(weeklyAppointments * 4.33)} monthly appointments × $${avgServiceValue} per appointment.`}
              />
              <CostPill
                label="Weak Reviews"
                cost={costs.reviewLoss}
                assumption={`Based on 1 missed review request per 3 appointments. 15% of those would have returned or referred a new client worth $${avgServiceValue}.`}
              />
              <CostPill
                label="Inconsistent Marketing"
                cost={costs.marketingLoss}
                assumption={`Based on 10% of your monthly client base rebooking with a single re-engagement message at $${avgServiceValue} per visit.`}
              />
            </div>

            {/* Total */}
            <div style={{
              backgroundColor: 'rgba(184,149,106,0.06)',
              border: '1px solid rgba(184,149,106,0.3)',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
            }}>
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(184,149,106,0.6)',
                  marginBottom: '0.25rem',
                }}>
                  Total estimated monthly loss
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  color: '#FDFAF7',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  transition: 'all 0.3s ease',
                }}>
                  {fmt(costs.total)}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  color: 'rgba(253,250,247,0.3)',
                  marginTop: '0.25rem',
                }}>
                  per month · conservative estimate
                </p>
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 300,
                color: 'rgba(184,149,106,0.15)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textAlign: 'right',
              }}>
                {fmt(costs.total * 12)}<br />
                <span style={{ fontSize: '0.5em', color: 'rgba(184,149,106,0.25)', letterSpacing: '0.05em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                  / year
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(253,250,247,0.5)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>
                Your free audit gives you the real numbers — specific to your business, your market, and your gaps.
              </p>
              <a
                href="#booking"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  backgroundColor: '#B8956A',
                  color: '#FDFAF7',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A07D58')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#B8956A')}
              >
                Get My Real Numbers — Free
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gold rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #B8956A 30%, #B8956A 70%, transparent)',
        opacity: 0.5,
      }} />
    </section>
  );
}
