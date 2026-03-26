import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { sendTelegram, formatTelegramMessage } from "./telegram";

// ─── formatTelegramMessage ────────────────────────────────────────────────────

describe("formatTelegramMessage", () => {
  it("includes the event name in the output", () => {
    const msg = formatTelegramMessage("Test Event", { Name: "Alice" });
    expect(msg).toContain("Test Event");
  });

  it("includes field key and value", () => {
    const msg = formatTelegramMessage("Lead", { Email: "test@example.com" });
    expect(msg).toContain("Email");
    expect(msg).toContain("test@example.com");
  });

  it("omits fields with undefined values", () => {
    const msg = formatTelegramMessage("Lead", { Name: "Alice", Missing: undefined });
    expect(msg).not.toContain("Missing");
  });

  it("includes a timestamp line", () => {
    const msg = formatTelegramMessage("Event", {});
    // Should contain a year (timestamp)
    expect(msg).toMatch(/202\d/);
  });
});

// ─── sendTelegram ─────────────────────────────────────────────────────────────

describe("sendTelegram", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    // Reset env vars
    delete process.env.TELEGRAM_BOT_TOKEN;
    delete process.env.TELEGRAM_CHAT_ID;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("returns false when TELEGRAM_BOT_TOKEN is missing", async () => {
    process.env.TELEGRAM_CHAT_ID = "12345";
    const result = await sendTelegram("hello");
    expect(result).toBe(false);
  });

  it("returns false when TELEGRAM_CHAT_ID is missing", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "fake-token";
    const result = await sendTelegram("hello");
    expect(result).toBe(false);
  });

  it("returns true when Telegram API responds 200", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "fake-token";
    process.env.TELEGRAM_CHAT_ID = "12345";

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => "{}",
    } as Response);

    const result = await sendTelegram("test message");
    expect(result).toBe(true);
    expect(global.fetch).toHaveBeenCalledOnce();
  });

  it("returns false when Telegram API responds with non-200", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "fake-token";
    process.env.TELEGRAM_CHAT_ID = "12345";

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      text: async () => "Unauthorized",
    } as Response);

    const result = await sendTelegram("test message");
    expect(result).toBe(false);
  });

  it("returns false when fetch throws a network error", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "fake-token";
    process.env.TELEGRAM_CHAT_ID = "12345";

    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const result = await sendTelegram("test message");
    expect(result).toBe(false);
  });

  it("sends to the correct Telegram API URL", async () => {
    process.env.TELEGRAM_BOT_TOKEN = "my-bot-token";
    process.env.TELEGRAM_CHAT_ID = "99999";

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => "{}",
    } as Response);
    global.fetch = mockFetch;

    await sendTelegram("hello");

    const calledUrl = mockFetch.mock.calls[0][0] as string;
    expect(calledUrl).toContain("my-bot-token");
    expect(calledUrl).toContain("sendMessage");
  });
});
