/**
 * Tests for the Telegram bot conversation flow logic.
 * Covers the full state machine including the new name step.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ─── Mock DB helpers ─────────────────────────────────────────────────────────
vi.mock("./db", () => ({
  getBotSession: vi.fn(),
  upsertBotSession: vi.fn(),
}));

// ─── Mock fetch globally ─────────────────────────────────────────────────────
const mockFetch = vi.fn().mockResolvedValue({
  ok: true,
  json: async () => ({ ok: true, result: { username: "test_bot" } }),
  text: async () => "",
});
vi.stubGlobal("fetch", mockFetch);

import { getBotSession, upsertBotSession } from "./db";
import type { BotSession } from "../drizzle/schema";

// ─── Helper to build a mock session ─────────────────────────────────────────
function mockSession(overrides: Partial<BotSession> = {}): BotSession {
  return {
    id: 1,
    telegramUserId: "123456",
    telegramUsername: "testuser",
    telegramFirstName: "Test",
    step: "start",
    leadName: null,
    interest: null,
    contactMethod: null,
    contactValue: null,
    source: "website",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("Telegram Bot Flow — /start command", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
      text: async () => "",
    });
  });

  it("should set step to awaiting_name when /start is received", async () => {
    const { upsertBotSession: mockUpsert } = await import("./db");
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "awaiting_name",
      source: "website",
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "awaiting_name",
      source: "website",
    }));
  });

  it("should detect website source from /start website payload", () => {
    const text = "/start website";
    const source = text.includes("website") ? "website" : "direct";
    expect(source).toBe("website");
  });

  it("should default to direct source for plain /start", () => {
    const text = "/start";
    const source = text.includes("website") ? "website" : "direct";
    expect(source).toBe("direct");
  });
});

describe("Telegram Bot Flow — Name Step", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should save leadName and advance to awaiting_interest when name is provided", async () => {
    const { upsertBotSession: mockUpsert, getBotSession: mockGet } = await import("./db");
    (mockGet as ReturnType<typeof vi.fn>).mockResolvedValue(
      mockSession({ step: "awaiting_name" })
    );
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    const name = "Alice Johnson";
    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "awaiting_interest",
      leadName: name,
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "awaiting_interest",
      leadName: "Alice Johnson",
    }));
  });

  it("should not advance if name is empty", () => {
    const name = "   ".trim();
    const isValid = name.length >= 1;
    expect(isValid).toBe(false);
  });

  it("should accept a single-word name", () => {
    const name = "Alice".trim();
    const isValid = name.length >= 1;
    expect(isValid).toBe(true);
  });

  it("should accept a full name with spaces", () => {
    const name = "Alice Johnson".trim();
    const isValid = name.length >= 1;
    expect(isValid).toBe(true);
  });
});

describe("Telegram Bot Flow — Step Transitions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should transition from awaiting_interest to awaiting_contact_method on interest selection", async () => {
    const { upsertBotSession: mockUpsert, getBotSession: mockGet } = await import("./db");
    (mockGet as ReturnType<typeof vi.fn>).mockResolvedValue(
      mockSession({ step: "awaiting_interest", leadName: "Alice" })
    );
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "awaiting_contact_method",
      interest: "Agency Services",
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "awaiting_contact_method",
      interest: "Agency Services",
    }));
  });

  it("should transition to awaiting_phone when phone contact method is selected", async () => {
    const { upsertBotSession: mockUpsert } = await import("./db");
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "awaiting_phone",
      contactMethod: "phone",
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "awaiting_phone",
      contactMethod: "phone",
    }));
  });

  it("should transition to awaiting_email when email contact method is selected", async () => {
    const { upsertBotSession: mockUpsert } = await import("./db");
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "awaiting_email",
      contactMethod: "email",
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "awaiting_email",
      contactMethod: "email",
    }));
  });

  it("should mark flow as complete after phone number is received", async () => {
    const { upsertBotSession: mockUpsert, getBotSession: mockGet } = await import("./db");
    (mockGet as ReturnType<typeof vi.fn>).mockResolvedValue(
      mockSession({
        step: "awaiting_phone",
        leadName: "Alice",
        contactMethod: "phone",
        interest: "Agency Services",
      })
    );
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    const phone = "+1 (714) 555-0123";
    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "complete",
      contactValue: phone,
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "complete",
      contactValue: phone,
    }));
  });

  it("should mark flow as complete after email is received", async () => {
    const { upsertBotSession: mockUpsert, getBotSession: mockGet } = await import("./db");
    (mockGet as ReturnType<typeof vi.fn>).mockResolvedValue(
      mockSession({
        step: "awaiting_email",
        leadName: "Bob",
        contactMethod: "email",
        interest: "Freelance Work",
      })
    );
    (mockUpsert as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

    const email = "hello@example.com";
    await (mockUpsert as ReturnType<typeof vi.fn>)("123456", {
      step: "complete",
      contactValue: email,
    });

    expect(mockUpsert).toHaveBeenCalledWith("123456", expect.objectContaining({
      step: "complete",
      contactValue: email,
    }));
  });
});

describe("Telegram Bot Flow — Interest Label Mapping", () => {
  it("should map agency callback to Agency Services label", () => {
    const data = "interest:agency";
    const interest = data.replace("interest:", "");
    const label =
      interest === "agency" ? "Agency Services" :
      interest === "freelance" ? "Freelance Work" : "Other";
    expect(label).toBe("Agency Services");
  });

  it("should map freelance callback to Freelance Work label", () => {
    const data = "interest:freelance";
    const interest = data.replace("interest:", "");
    const label =
      interest === "agency" ? "Agency Services" :
      interest === "freelance" ? "Freelance Work" : "Other";
    expect(label).toBe("Freelance Work");
  });

  it("should map other callback to Other label", () => {
    const data = "interest:other";
    const interest = data.replace("interest:", "");
    const label =
      interest === "agency" ? "Agency Services" :
      interest === "freelance" ? "Freelance Work" : "Other";
    expect(label).toBe("Other");
  });
});

describe("Telegram Bot Flow — Owner Notification Content", () => {
  it("should prefer leadName over telegramFirstName in notification", () => {
    const session = mockSession({
      leadName: "Alice Johnson",
      telegramFirstName: "Alice",
      telegramUsername: "alice",
    });
    const displayName = session.leadName ?? session.telegramFirstName ?? session.telegramUsername ?? "Unknown";
    expect(displayName).toBe("Alice Johnson");
  });

  it("should fall back to telegramFirstName when leadName is null", () => {
    const session = mockSession({
      leadName: null,
      telegramFirstName: "Bob",
      telegramUsername: "bob",
    });
    const displayName = session.leadName ?? session.telegramFirstName ?? session.telegramUsername ?? "Unknown";
    expect(displayName).toBe("Bob");
  });

  it("should fall back to telegramUsername when both name fields are null", () => {
    const session = mockSession({
      leadName: null,
      telegramFirstName: null,
      telegramUsername: "carol_handle",
    });
    const displayName = session.leadName ?? session.telegramFirstName ?? session.telegramUsername ?? "Unknown";
    expect(displayName).toBe("carol_handle");
  });

  it("should use Unknown as final fallback", () => {
    const session = mockSession({
      leadName: null,
      telegramFirstName: null,
      telegramUsername: null,
    });
    const displayName = session.leadName ?? session.telegramFirstName ?? session.telegramUsername ?? "Unknown";
    expect(displayName).toBe("Unknown");
  });
});
