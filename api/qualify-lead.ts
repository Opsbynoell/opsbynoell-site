import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

interface QualifyRequest {
  sessionId: string;
}

interface QualifyResponse {
  intent: 'hot' | 'warm' | 'low';
  businessType: string | null;
  painPoint: string | null;
  contactCaptured: boolean;
}

interface ChatMessage {
  id: number;
  sessionId: string;
  role: 'visitor' | 'bot' | 'human';
  content: string;
  createdAt: string;
}

interface ChatSession {
  id: number;
  sessionId: string;
  visitorName: string | null;
  visitorEmail: string | null;
  businessType: string | null;
  visitorIp: string | null;
  visitorLocation: string | null;
  humanTakeover: number;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

interface ClaudeAnalysis {
  intent: 'hot' | 'warm' | 'low';
  businessType: string | null;
  painPoint: string | null;
  extractedEmail: string | null;
}

function extractEmailFromText(text: string): string | null {
  const emailRegex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
  const matches = text.match(emailRegex);
  return matches ? matches[0] : null;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId } = req.body as QualifyRequest;

  if (!sessionId || typeof sessionId !== 'string') {
    return res.status(400).json({ error: 'sessionId is required' });
  }

  try {
    // Fetch session data
    const { data: session, error: sessionError } = await supabase
      .from('chatSessions')
      .select('*')
      .eq('sessionId', sessionId)
      .single();

    if (sessionError || !session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    const chatSession = session as ChatSession;

    // Fetch last 15 messages for this session
    const { data: messages, error: messagesError } = await supabase
      .from('chatMessages')
      .select('*')
      .eq('sessionId', sessionId)
      .order('createdAt', { ascending: false })
      .limit(15);

    if (messagesError) {
      console.error('Error fetching messages:', messagesError);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }

    const chatMessages = ((messages as ChatMessage[]) || []).reverse();

    if (chatMessages.length === 0) {
      return res.status(200).json({
        intent: 'low',
        businessType: null,
        painPoint: null,
        contactCaptured: false,
      } as QualifyResponse);
    }

    // Build conversation transcript for Claude
    const transcript = chatMessages
      .map((m) => `[${m.role.toUpperCase()}]: ${m.content}`)
      .join('\n');

    // Call Claude to analyze the conversation
    const claudeResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      messages: [
        {
          role: 'user',
          content: `You are analyzing a chat conversation from a business website to qualify leads.

Classify the visitor's intent and extract key information.

INTENT DEFINITIONS:
- hot: Visitor asked about pricing AND mentioned a specific pain point AND showed intent to move forward (e.g., asked about next steps, scheduling, or getting started)
- warm: Visitor described their business or a specific problem they have, but has NOT asked about next steps or pricing
- low: General curiosity, no meaningful business context shared

CONVERSATION TRANSCRIPT:
${transcript}

Respond with ONLY a valid JSON object. No explanation, no markdown, no code blocks. Example format:
{"intent":"warm","businessType":"med spa","painPoint":"losing clients to no-shows","extractedEmail":null}

Fields:
- intent: one of "hot", "warm", "low"
- businessType: the type of business the visitor runs, or null if unknown
- painPoint: the primary pain point or problem they described, or null if none
- extractedEmail: any email address the visitor mentioned in the chat, or null`,
        },
      ],
    });

    const rawContent = claudeResponse.content[0];
    if (rawContent.type !== 'text') {
      throw new Error('Unexpected Claude response type');
    }

    let analysis: ClaudeAnalysis;
    try {
      analysis = JSON.parse(rawContent.text.trim()) as ClaudeAnalysis;
    } catch {
      console.error('Failed to parse Claude response:', rawContent.text);
      return res.status(500).json({ error: 'Failed to parse AI analysis' });
    }

    // Validate intent value
    if (!['hot', 'warm', 'low'].includes(analysis.intent)) {
      analysis.intent = 'low';
    }

    // Determine email: prefer session email, fall back to extracted from messages
    const allMessageText = chatMessages
      .filter((m) => m.role === 'visitor')
      .map((m) => m.content)
      .join(' ');

    const emailFromMessages =
      analysis.extractedEmail || extractEmailFromText(allMessageText);
    const resolvedEmail = chatSession.visitorEmail || emailFromMessages;
    const resolvedName = chatSession.visitorName || null;

    let contactCaptured = false;

    // Write to chatLeads if we have an email
    if (resolvedEmail) {
      const leadRecord = {
        name: resolvedName || '',
        email: resolvedEmail,
        sessionId,                                                     // added: needed for ghlContactId writeback
        businessType: analysis.businessType || chatSession.businessType || '',
        question: analysis.painPoint,
        page: null,
        notified: 'no' as const,
        intent: analysis.intent,
        ghlContactId: null,                                            // added: populated after ghl-sync succeeds
      };

      const { error: leadError } = await supabase
        .from('chatLeads')
        .insert(leadRecord);

      if (leadError) {
        // Log but don't fail — intent analysis is still useful
        console.error('Error writing to chatLeads:', leadError);
      } else {
        contactCaptured = true;

        // --- ADDED: Fire ghl-sync for hot/warm leads only ---
        // Low intent leads are not synced to GHL.
        // ghl-sync failure is non-fatal — qualify-lead response is always returned.
        if (analysis.intent === 'hot' || analysis.intent === 'warm') {
          try {
            const ghlPayload = {
              name: resolvedName || '',
              email: resolvedEmail,
              businessType: analysis.businessType || chatSession.businessType || '',
              intent: analysis.intent,
              painPoint: analysis.painPoint || '',
              sessionId,
            };

            // Call ghl-sync via internal fetch (same Vercel deployment)
            const ghlRes = await fetch(
              `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/api/ghl-sync`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ghlPayload),
              }
            );

            if (ghlRes.ok) {
              const ghlData = await ghlRes.json() as { ghlContactId?: string; success?: boolean };
              if (ghlData.ghlContactId) {
                // Write ghlContactId back to chatLeads for this lead
                const { error: ghlUpdateError } = await supabase
                  .from('chatLeads')
                  .update({ ghlContactId: ghlData.ghlContactId })
                  .eq('email', resolvedEmail)
                  .eq('sessionId', sessionId)
                  .is('ghlContactId', null);

                if (ghlUpdateError) {
                  console.error('Failed to write ghlContactId back to chatLeads:', ghlUpdateError);
                }
              }
            } else {
              const errText = await ghlRes.text();
              console.error(`ghl-sync returned ${ghlRes.status}:`, errText);
            }
          } catch (ghlErr) {
            // Non-fatal — log and continue
            console.error('ghl-sync internal call failed:', ghlErr);
          }
        }
        // --- END ADDED ---
      }
    }

    const response: QualifyResponse = {
      intent: analysis.intent,
      businessType: analysis.businessType || chatSession.businessType || null,
      painPoint: analysis.painPoint,
      contactCaptured,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('qualify-lead error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
