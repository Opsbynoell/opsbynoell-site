/**
 * NOVA Support — Embeddable Chat Widget
 * White-label delivery mechanism for Ops by Noell clients.
 *
 * Install:
 *   <script src="https://www.opsbynoell.com/widget.js?client_id=CLIENT_ID" defer></script>
 *
 * Runs entirely in Shadow DOM — zero CSS conflicts with host page.
 * All API calls route to opsbynoell.com backend.
 */

(function () {
  'use strict';

  const API_BASE = 'https://www.opsbynoell.com';

  // ─── Grab client_id from this script's own src URL ────────────────────────
  function getClientId() {
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      try {
        const url = new URL(s.src);
        const id = url.searchParams.get('client_id');
        if (id) return id;
      } catch (_) {}
    }
    // Fallback: currentScript (not available in some async load scenarios)
    if (document.currentScript) {
      try {
        const url = new URL(document.currentScript.src);
        const id = url.searchParams.get('client_id');
        if (id) return id;
      } catch (_) {}
    }
    return null;
  }

  // ─── Session ID ────────────────────────────────────────────────────────────
  function getSessionId() {
    const KEY = 'nova_widget_session';
    let id = sessionStorage.getItem(KEY);
    if (!id) {
      id = 'w_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
      sessionStorage.setItem(KEY, id);
    }
    return id;
  }

  // ─── Inject Shadow DOM ─────────────────────────────────────────────────────
  function createWidgetHost() {
    const host = document.createElement('div');
    host.id = 'nova-widget-host';
    host.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:2147483647;font-family:system-ui,sans-serif;';
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });
    return shadow;
  }

  // ─── CSS ───────────────────────────────────────────────────────────────────
  function buildStyles(primaryColor) {
    return `
      *{box-sizing:border-box;margin:0;padding:0;}

      .fab{
        width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;
        background:${primaryColor};color:#fff;
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 4px 20px rgba(0,0,0,0.35);
        transition:transform .2s,box-shadow .2s;
        position:relative;
      }
      .fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,0.45);}
      .fab svg{width:26px;height:26px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}

      .badge{
        position:absolute;top:-4px;right:-4px;
        background:#ef4444;color:#fff;font-size:11px;font-weight:700;
        width:18px;height:18px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        display:none;
      }

      .window{
        position:fixed;bottom:92px;right:24px;
        width:360px;max-width:calc(100vw - 48px);
        background:#111;border:1px solid #2a2a2a;border-radius:16px;
        overflow:hidden;display:flex;flex-direction:column;
        box-shadow:0 12px 48px rgba(0,0,0,0.6);
        opacity:0;transform:translateY(16px) scale(.97);
        transition:opacity .22s ease,transform .22s ease;
        pointer-events:none;
        max-height:calc(100vh - 120px);
      }
      .window.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}

      .header{
        padding:14px 16px;
        background:${primaryColor};
        display:flex;align-items:center;gap:10px;
        flex-shrink:0;
      }
      .header-avatar{
        width:36px;height:36px;border-radius:50%;
        background:rgba(255,255,255,0.2);
        display:flex;align-items:center;justify-content:center;
        font-weight:700;font-size:14px;color:#fff;flex-shrink:0;
      }
      .header-info{flex:1;min-width:0;}
      .header-name{font-weight:700;font-size:14px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
      .header-status{font-size:11px;color:rgba(255,255,255,0.75);display:flex;align-items:center;gap:4px;}
      .status-dot{width:6px;height:6px;border-radius:50%;background:#4ade80;}
      .close-btn{
        background:rgba(255,255,255,0.15);border:none;cursor:pointer;
        width:28px;height:28px;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        transition:background .15s;flex-shrink:0;
      }
      .close-btn:hover{background:rgba(255,255,255,0.25);}
      .close-btn svg{width:14px;height:14px;stroke:#fff;stroke-width:2.5;fill:none;stroke-linecap:round;}

      .messages{
        flex:1;overflow-y:auto;padding:16px;
        display:flex;flex-direction:column;gap:10px;
        min-height:200px;
        scrollbar-width:thin;scrollbar-color:#2a2a2a transparent;
      }
      .messages::-webkit-scrollbar{width:4px;}
      .messages::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:4px;}

      .msg{max-width:80%;display:flex;flex-direction:column;gap:3px;}
      .msg.bot{align-self:flex-start;}
      .msg.user{align-self:flex-end;}
      .bubble{
        padding:10px 13px;border-radius:16px;font-size:13.5px;line-height:1.5;
        word-break:break-word;
      }
      .msg.bot .bubble{background:#1e1e1e;color:#e8e8e8;border-bottom-left-radius:4px;}
      .msg.user .bubble{background:${primaryColor};color:#fff;border-bottom-right-radius:4px;}
      .msg-time{font-size:10px;color:#555;padding:0 4px;}
      .msg.user .msg-time{text-align:right;}

      .typing{align-self:flex-start;}
      .typing-dots{display:flex;gap:4px;align-items:center;padding:10px 13px;background:#1e1e1e;border-radius:16px;border-bottom-left-radius:4px;}
      .typing-dots span{
        width:6px;height:6px;border-radius:50%;background:#555;
        animation:bounce 1.2s ease infinite;
      }
      .typing-dots span:nth-child(2){animation-delay:.2s;}
      .typing-dots span:nth-child(3){animation-delay:.4s;}
      @keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}

      .footer{
        padding:10px 12px;border-top:1px solid #1e1e1e;
        display:flex;align-items:flex-end;gap:8px;
        background:#111;flex-shrink:0;
      }
      .input{
        flex:1;background:#1a1a1a;border:1px solid #2a2a2a;color:#e8e8e8;
        border-radius:10px;padding:9px 12px;font-size:13.5px;line-height:1.4;
        resize:none;min-height:38px;max-height:120px;overflow-y:auto;
        outline:none;font-family:inherit;
        transition:border-color .15s;
      }
      .input:focus{border-color:${primaryColor};}
      .input::placeholder{color:#444;}
      .send-btn{
        width:36px;height:36px;border-radius:9px;border:none;cursor:pointer;
        background:${primaryColor};color:#fff;
        display:flex;align-items:center;justify-content:center;
        flex-shrink:0;transition:opacity .15s;
      }
      .send-btn:disabled{opacity:.4;cursor:default;}
      .send-btn svg{width:17px;height:17px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}

      .powered{
        text-align:center;font-size:10px;color:#333;padding:6px;
        flex-shrink:0;border-top:1px solid #1a1a1a;
      }
      .powered a{color:#444;text-decoration:none;}
      .powered a:hover{color:#666;}

      .error-bar{
        background:#3a1515;color:#f87171;font-size:12px;
        padding:8px 14px;text-align:center;display:none;
        border-bottom:1px solid #5a2020;
      }
    `;
  }

  // ─── HTML skeleton ─────────────────────────────────────────────────────────
  function buildHTML(config) {
    const initials = config.business_name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return `
      <style>${buildStyles(config.primary_color)}</style>

      <div class="window" id="chat-window" role="dialog" aria-label="Chat with ${config.business_name}">
        <div class="header">
          <div class="header-avatar">${initials}</div>
          <div class="header-info">
            <div class="header-name">${config.business_name}</div>
            <div class="header-status"><span class="status-dot"></span>Online now</div>
          </div>
          <button class="close-btn" id="close-btn" aria-label="Close chat">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="error-bar" id="error-bar">Something went wrong. Please try again.</div>
        <div class="messages" id="messages" role="log" aria-live="polite"></div>
        <div class="footer">
          <textarea class="input" id="msg-input" placeholder="Type a message…" rows="1" aria-label="Message"></textarea>
          <button class="send-btn" id="send-btn" disabled aria-label="Send">
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <div class="powered">Powered by <a href="https://www.opsbynoell.com" target="_blank" rel="noopener">Ops by Noell</a></div>
      </div>

      <button class="fab" id="fab" aria-label="Chat with us" aria-expanded="false">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="badge" id="badge">1</span>
      </button>
    `;
  }

  // ─── Core widget logic ─────────────────────────────────────────────────────
  function initWidget(shadow, config, clientId) {
    shadow.innerHTML = buildHTML(config);

    const fab       = shadow.getElementById('fab');
    const window_   = shadow.getElementById('chat-window');
    const closeBtn  = shadow.getElementById('close-btn');
    const messages  = shadow.getElementById('messages');
    const input     = shadow.getElementById('msg-input');
    const sendBtn   = shadow.getElementById('send-btn');
    const badge     = shadow.getElementById('badge');
    const errorBar  = shadow.getElementById('error-bar');

    const sessionId = getSessionId();
    let isOpen = false;
    let isSending = false;
    let hasOpenedOnce = false;

    // ── Toggle open/close ────────────────────────────────────────────────────
    function openChat() {
      isOpen = true;
      window_.classList.add('open');
      fab.setAttribute('aria-expanded', 'true');
      badge.style.display = 'none';
      if (!hasOpenedOnce) {
        hasOpenedOnce = true;
        addBotMessage(getGreeting(config.business_name));
      }
      scrollBottom();
      input.focus();
    }

    function closeChat() {
      isOpen = false;
      window_.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
    }

    fab.addEventListener('click', () => { isOpen ? closeChat() : openChat(); });
    closeBtn.addEventListener('click', closeChat);

    // ── Keyboard shortcuts ───────────────────────────────────────────────────
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });

    // ── Input handling ───────────────────────────────────────────────────────
    input.addEventListener('input', () => {
      sendBtn.disabled = input.value.trim().length === 0;
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!sendBtn.disabled) sendMessage();
      }
    });

    sendBtn.addEventListener('click', sendMessage);

    // ── Send a message ───────────────────────────────────────────────────────
    async function sendMessage() {
      const text = input.value.trim();
      if (!text || isSending) return;

      isSending = true;
      sendBtn.disabled = true;
      input.value = '';
      input.style.height = 'auto';
      errorBar.style.display = 'none';

      addUserMessage(text);
      scrollBottom();

      const typingEl = addTypingIndicator();
      scrollBottom();

      try {
        const res = await fetch(`${API_BASE}/api/trpc/chat.sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            json: {
              sessionId,
              message: text,
              clientId: clientId,
            }
          }),
        });

        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        const reply = data?.result?.data?.json?.botReply;

        typingEl.remove();

        if (reply) {
          addBotMessage(reply);
        } else {
          addBotMessage("Thanks for your message. We'll follow up with you shortly.");
        }
      } catch (_err) {
        typingEl.remove();
        errorBar.style.display = 'block';
        addBotMessage("Sorry, I couldn't send that. Please try again.");
      } finally {
        isSending = false;
        sendBtn.disabled = input.value.trim().length === 0;
        scrollBottom();
      }
    }

    // ── Message rendering ────────────────────────────────────────────────────
    function addBotMessage(text) {
      const el = createMessageEl('bot', text);
      messages.appendChild(el);
      return el;
    }

    function addUserMessage(text) {
      const el = createMessageEl('user', text);
      messages.appendChild(el);
      return el;
    }

    function createMessageEl(role, text) {
      const wrap = document.createElement('div');
      wrap.className = `msg ${role}`;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = text;

      const time = document.createElement('div');
      time.className = 'msg-time';
      time.textContent = formatTime(new Date());

      wrap.appendChild(bubble);
      wrap.appendChild(time);
      return wrap;
    }

    function addTypingIndicator() {
      const wrap = document.createElement('div');
      wrap.className = 'msg bot typing';
      wrap.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
      messages.appendChild(wrap);
      return wrap;
    }

    function scrollBottom() {
      requestAnimationFrame(() => { messages.scrollTop = messages.scrollHeight; });
    }

    function formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  // ─── Greeting ──────────────────────────────────────────────────────────────
  function getGreeting(businessName) {
    const hour = new Date().getHours();
    const timeGreet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    return `${timeGreet}! I'm Nova, the AI assistant for ${businessName}. How can I help you today?`;
  }

  // ─── Bootstrap ─────────────────────────────────────────────────────────────
  async function bootstrap() {
    const clientId = getClientId();
    if (!clientId) {
      console.warn('[Nova Widget] No client_id found in script src. Widget not loaded.');
      return;
    }

    // Fetch client config
    let config;
    try {
      const res = await fetch(`${API_BASE}/api/widget-config?client_id=${encodeURIComponent(clientId)}`);
      if (!res.ok) {
        console.warn(`[Nova Widget] Config fetch failed (${res.status}). Widget not loaded.`);
        return;
      }
      config = await res.json();
    } catch (err) {
      console.warn('[Nova Widget] Could not reach config API:', err);
      return;
    }

    if (!config || !config.business_name) {
      console.warn('[Nova Widget] Invalid config response. Widget not loaded.');
      return;
    }

    const shadow = createWidgetHost();
    initWidget(shadow, config, clientId);
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
