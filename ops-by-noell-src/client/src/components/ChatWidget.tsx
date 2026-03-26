/*
 * OPS BY NOELL — Live Chat Widget
 * Design: Quiet Editorial Luxury
 * Purpose: Capture leads who have questions before booking
 *
 * Features:
 * - Floating chat button (bottom-right, brand gold)
 * - Animated open/close panel
 * - Pre-set quick questions for common objections
 * - Name + email capture before free-text chat
 * - Smart automated responses from Ops by Noell
 * - Lead summary stored in sessionStorage
 * - Smooth scroll-to-booking CTA after engagement
 */

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight, ChevronDown } from 'lucide-react';
import { trpc } from '@/lib/trpc';

// ─── Types ───────────────────────────────────────────────────────────────────

type MessageRole = 'bot' | 'user';

interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface LeadInfo {
  name: string;
  email: string;
  businessType: string;
}

// ─── Bot Response Logic ───────────────────────────────────────────────────────

const BOT_RESPONSES: Record<string, string> = {
  'how much does it cost': `Our pricing depends on which systems your business needs — there's no one-size-fits-all package.\n\nThe best way to get accurate numbers is through the free audit. We map your gaps, show you exactly what each solution would cost, and what revenue it would recover. Most clients see the system pay for itself within the first month.\n\nWant to book a time?`,

  'what do you actually build': `We build complete, done-for-you automation systems — not software you manage yourself.\n\nThat includes: missed call text-back, 24/7 online booking with reminders, automated review requests after each visit, lead follow-up sequences, re-engagement campaigns for past clients, and marketing automation.\n\nWe design it, install it, and keep it running. You don't touch a setting.`,

  'what systems do you offer': `We build five core systems that work together as one integrated operation:\n\n1. Missed Call Text-Back — instant response to every missed call\n2. AI Booking + Reminders — 24/7 online booking, no-show reduction\n3. Review Generation — automated post-visit review requests\n4. Lead Follow-Up — automated sequences for cold leads and past clients\n5. Marketing Automation — email campaigns and outreach, managed by us\n\nAll built and maintained for you.`,

  'how long does it take': `Most clients are fully live within 2 weeks of their audit. We handle the entire setup — you just answer a few questions about your business and we do the rest.\n\nYou don't change how you work. The system adapts to you.`,

  'do i need to be tech-savvy': `Not at all. That's the whole point.\n\nWe handle 100% of the technical side — setup, integration, testing, and ongoing management. You don't log into any dashboards or configure any tools. You just run your business.`,

  'what kinds of businesses do you work with': `We specialize in appointment-based local service businesses in Orange County — massage therapists, med spas, chiropractors, salons, wellness providers, coaches, consultants, and similar businesses.\n\nIf you take appointments and you're losing revenue to missed calls, no-shows, weak follow-up, or inconsistent marketing, we can almost certainly help.`,

  'is there a contract': `We keep things flexible. We don't lock clients into long-term contracts — we earn your business every month by delivering results.\n\nWe'll talk through all the details during your free audit.`,

  'what is the audit': `The Revenue Leak Audit is a free 30-minute call where we map every operational gap in your business.\n\nWe identify your top revenue leaks — missed calls, weak follow-up, no-shows, missing reviews, inconsistent marketing — and give you a plain-language estimate of what each gap is costing you monthly.\n\nNo pitch. No obligation. Just clarity.`,

  default: `Great question. The fastest way to get a real answer specific to your business is through the free 30-minute audit — we'll cover everything and give you a clear picture of what's possible.\n\nWould you like to book a time?`,
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (key === 'default') continue;
    if (lower.includes(key) || key.split(' ').filter(w => w.length > 4).some(w => lower.includes(w))) {
      return response;
    }
  }
  return BOT_RESPONSES.default;
}

// ─── Quick Question Chips ─────────────────────────────────────────────────────

const QUICK_QUESTIONS = [
  'What systems do you offer?',
  'What do you actually build?',
  'What is the audit?',
  'How long does it take?',
  'What kinds of businesses do you work with?',
  'Do I need to be tech-savvy?',
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '10px 14px', backgroundColor: '#F5F0EB', maxWidth: '60px' }}>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#B8956A',
            display: 'inline-block',
            animation: `chatBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Widget ──────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [stage, setStage] = useState<'intro' | 'capture' | 'chat'>('intro');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState<Partial<LeadInfo>>({});
  const [captureStep, setCaptureStep] = useState<'name' | 'email' | 'biz'>('name');
  const [captureInput, setCaptureInput] = useState('');
  const [showQuickQ, setShowQuickQ] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // tRPC mutation to persist lead to DB and notify owner
  const submitLead = trpc.leads.submit.useMutation();

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && stage === 'chat') {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, stage]);

  // Show greeting bubble after 3s
  useEffect(() => {
    const timer = setTimeout(() => setHasUnread(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function openChat() {
    setIsOpen(true);
    setHasUnread(false);
    if (stage === 'intro') {
      // Start with intro message
      setMessages([{
        id: '1',
        role: 'bot',
        text: `Hi there! I'm here to help.\n\nOps by Noell designs, installs, and manages complete done-for-you automation systems for local businesses — covering everything from lead capture and follow-up to bookings, reviews, and marketing.\n\nWhat would you like to know?`,
        timestamp: new Date(),
      }]);
    }
  }

  function addBotMessage(text: string) {
    const id = Date.now().toString();
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id, role: 'bot', text, timestamp: new Date() }]);
    }, 1200 + Math.random() * 600);
  }

  function handleQuickQuestion(q: string) {
    setShowQuickQ(false);
    setStage('capture');
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      text: q,
      timestamp: new Date(),
    }]);
    // Store question for after capture
    sessionStorage.setItem('ops_pending_question', q);
    setTimeout(() => {
      addBotMessage(`Great question! Before I answer, I'd love to know a little about you so I can give you the most relevant information.\n\nWhat's your first name?`);
      setCaptureStep('name');
    }, 400);
  }

  function handleCaptureSubmit() {
    if (!captureInput.trim()) return;

    const value = captureInput.trim();
    setCaptureInput('');

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      text: value,
      timestamp: new Date(),
    }]);

    if (captureStep === 'name') {
      setLeadInfo(prev => ({ ...prev, name: value }));
      setCaptureStep('email');
      setTimeout(() => {
        addBotMessage(`Nice to meet you, ${value}! What's the best email address to reach you?`);
      }, 400);
    } else if (captureStep === 'email') {
      setLeadInfo(prev => ({ ...prev, email: value }));
      setCaptureStep('biz');
      setTimeout(() => {
        addBotMessage(`Perfect. And what type of business do you run? (e.g. massage therapy, med spa, salon, chiropractic...)`);
      }, 400);
    } else if (captureStep === 'biz') {
      const updatedLead = { ...leadInfo, businessType: value };
      setLeadInfo(updatedLead);
      // Save lead to sessionStorage
      sessionStorage.setItem('ops_lead', JSON.stringify(updatedLead));
      setStage('chat');

      // Persist lead to database + notify owner via tRPC
      const pendingQ = sessionStorage.getItem('ops_pending_question') || '';
      submitLead.mutate({
        name: updatedLead.name ?? '',
        email: updatedLead.email ?? '',
        businessType: value,
        question: pendingQ || undefined,
        page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      });

      // Answer the pending question
      const response = getBotResponse(pendingQ);
      setTimeout(() => {
        addBotMessage(response);
      }, 400);
    }
  }

  function handleSendMessage() {
    if (!inputValue.trim()) return;
    const text = inputValue.trim();
    setInputValue('');

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date(),
    }]);

    const response = getBotResponse(text);
    addBotMessage(response);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (stage === 'capture') {
        handleCaptureSubmit();
      } else {
        handleSendMessage();
      }
    }
  }

  function scrollToBooking() {
    setIsOpen(false);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const isCapturing = stage === 'capture';

  return (
    <>
      {/* ─── Floating Button ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.75rem',
        }}
      >
        {/* Greeting bubble */}
        {hasUnread && !isOpen && (
          <div
            style={{
              backgroundColor: '#FDFAF7',
              border: '1px solid #C9BFB8',
              padding: '0.75rem 1rem',
              maxWidth: '220px',
              boxShadow: '0 4px 24px rgba(61,53,48,0.12)',
              animation: 'chatFadeIn 0.4s ease-out',
              cursor: 'pointer',
            }}
            onClick={openChat}
          >
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8125rem',
              color: '#3D3530',
              lineHeight: 1.5,
              marginBottom: '0.25rem',
            }}>
              Questions about our automation systems?
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              color: '#B8956A',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}>
              Chat with us <ArrowRight size={11} />
            </p>
          </div>
        )}

        {/* Chat toggle button */}
        <button
          onClick={() => isOpen ? setIsOpen(false) : openChat()}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#B8956A',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(184,149,106,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(184,149,106,0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(184,149,106,0.4)';
          }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen
            ? <ChevronDown size={22} color="#FDFAF7" />
            : <MessageCircle size={22} color="#FDFAF7" />
          }
          {/* Unread dot */}
          {hasUnread && !isOpen && (
            <span style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '10px',
              height: '10px',
              backgroundColor: '#3D3530',
              borderRadius: '50%',
              border: '2px solid #B8956A',
            }} />
          )}
        </button>
      </div>

      {/* ─── Chat Panel ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: '6.5rem',
          right: '2rem',
          zIndex: 9998,
          width: '360px',
          maxWidth: 'calc(100vw - 2rem)',
          backgroundColor: '#FDFAF7',
          border: '1px solid #C9BFB8',
          boxShadow: '0 8px 48px rgba(61,53,48,0.16)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
          maxHeight: '520px',
        }}
      >
        {/* Header */}
        <div style={{
          backgroundColor: '#3D3530',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#B8956A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#FDFAF7', fontWeight: 400 }}>N</span>
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 400, color: '#FDFAF7', lineHeight: 1.2 }}>
                Ops by Noell
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(201,191,184,0.7)' }}>
                Typically replies in minutes
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'rgba(201,191,184,0.7)', display: 'flex', alignItems: 'center' }}
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          minHeight: 0,
          maxHeight: '320px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#E8E2DA transparent',
        }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                animation: 'chatFadeIn 0.3s ease-out',
              }}
            >
              <div style={{
                maxWidth: '82%',
                padding: '0.625rem 0.875rem',
                backgroundColor: msg.role === 'user' ? '#B8956A' : '#F5F0EB',
                borderLeft: msg.role === 'bot' ? '2px solid #C9BFB8' : 'none',
              }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  color: msg.role === 'user' ? '#FDFAF7' : '#3D3530',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  margin: 0,
                }}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', animation: 'chatFadeIn 0.3s ease-out' }}>
              <TypingIndicator />
            </div>
          )}

          {/* Quick questions (shown only at start) */}
          {showQuickQ && stage === 'intro' && messages.length > 0 && !isTyping && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickQuestion(q)}
                  style={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: '1px solid #C9BFB8',
                    padding: '0.5rem 0.75rem',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: '#3D3530',
                    lineHeight: 1.4,
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5F0EB';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#B8956A';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#C9BFB8';
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Book CTA after chat */}
          {stage === 'chat' && messages.length >= 4 && !isTyping && (
            <div style={{
              backgroundColor: '#F5F0EB',
              border: '1px solid #C9BFB8',
              padding: '0.875rem',
              marginTop: '0.25rem',
              animation: 'chatFadeIn 0.4s ease-out',
            }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#7A6F68', marginBottom: '0.625rem', lineHeight: 1.5 }}>
                Ready to stop losing revenue to broken processes?
              </p>
              <button
                onClick={scrollToBooking}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  backgroundColor: '#B8956A',
                  border: 'none',
                  padding: '0.5rem 0.875rem',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FDFAF7',
                  transition: 'background-color 0.2s ease',
                  width: '100%',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#a07d5a'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#B8956A'}
              >
                Book Your Free Revenue Audit <ArrowRight size={12} />
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div style={{
          borderTop: '1px solid #E8E2DA',
          padding: '0.75rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          flexShrink: 0,
          backgroundColor: '#FDFAF7',
        }}>
          <input
            ref={inputRef}
            type={isCapturing && captureStep === 'email' ? 'email' : 'text'}
            value={isCapturing ? captureInput : inputValue}
            onChange={e => isCapturing ? setCaptureInput(e.target.value) : setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isCapturing
                ? captureStep === 'name' ? 'Your first name...'
                  : captureStep === 'email' ? 'Your email address...'
                  : 'Type of business...'
                : 'Ask a question...'
            }
            style={{
              flex: 1,
              border: '1px solid #E8E2DA',
              padding: '0.5rem 0.75rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8125rem',
              color: '#3D3530',
              backgroundColor: '#F5F0EB',
              outline: 'none',
              transition: 'border-color 0.2s ease',
            }}
            onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#B8956A'}
            onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#E8E2DA'}
          />
          <button
            onClick={isCapturing ? handleCaptureSubmit : handleSendMessage}
            disabled={isCapturing ? !captureInput.trim() : !inputValue.trim()}
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#B8956A',
              border: 'none',
              cursor: (isCapturing ? !captureInput.trim() : !inputValue.trim()) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              opacity: (isCapturing ? !captureInput.trim() : !inputValue.trim()) ? 0.5 : 1,
              transition: 'opacity 0.2s ease',
            }}
            aria-label="Send message"
          >
            <Send size={14} color="#FDFAF7" />
          </button>
        </div>

        {/* Footer */}
        <div style={{
          padding: '0.5rem 0.75rem',
          backgroundColor: '#F5F0EB',
          borderTop: '1px solid #E8E2DA',
          textAlign: 'center',
          flexShrink: 0,
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.5625rem', color: '#C9BFB8', letterSpacing: '0.08em' }}>
            Ops by Noell · Lake Forest, CA · hello@opsbynoell.com
          </p>
        </div>
      </div>

      {/* ─── Keyframe styles ─── */}
      <style>{`
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
