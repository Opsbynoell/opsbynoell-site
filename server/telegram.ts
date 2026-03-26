/**
 * Telegram Bot notification helper for Ops by Noell.
 *
 * Requires two environment variables:
 *   TELEGRAM_BOT_TOKEN  — from @BotFather on Telegram
 *   TELEGRAM_CHAT_ID    — your personal chat ID or a private channel ID
 *
 * If either variable is missing the function silently returns false so it
 * never breaks the main request flow.
 */

const TELEGRAM_API = "https://api.telegram.org";

/**
 * Send a plain-text or HTML-formatted message to the configured Telegram chat.
 * Returns true on success, false on any failure (missing config, network error, etc.)
 */
export async function sendTelegram(message: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("[Telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping.");
    return false;
  }

  const url = `${TELEGRAM_API}/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(`[Telegram] Failed to send message (${response.status}): ${detail}`);
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Telegram] Network error:", error);
    return false;
  }
}

/**
 * Format a notification event as a Telegram HTML message.
 */
export function formatTelegramMessage(
  event: string,
  fields: Record<string, string | undefined>
): string {
  const lines: string[] = [
    `<b>🔔 Ops by Noell — ${event}</b>`,
    "",
  ];

  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      lines.push(`<b>${key}:</b> ${value}`);
    }
  }

  lines.push("", `<i>${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT</i>`);

  return lines.join("\n");
}
