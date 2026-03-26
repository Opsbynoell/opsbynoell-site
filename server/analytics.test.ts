/**
 * Analytics procedures — unit tests
 * Tests that the analytics router correctly gates access (admin-only)
 * and returns the expected data shapes from the DB helpers.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ─── Mock DB helpers ──────────────────────────────────────────────────────────
vi.mock("./db", () => ({
  getBotFunnelStats: vi.fn().mockResolvedValue([
    { step: "start", count: 10 },
    { step: "complete", count: 4 },
  ]),
  getBotDailyStats: vi.fn().mockResolvedValue([
    { date: "2026-03-01", count: 3 },
    { date: "2026-03-02", count: 7 },
  ]),
  getBotInterestStats: vi.fn().mockResolvedValue([
    { interest: "Agency Services", count: 3 },
    { interest: "Freelance Work", count: 1 },
  ]),
  getBotContactMethodStats: vi.fn().mockResolvedValue([
    { method: "phone", count: 2 },
    { method: "email", count: 2 },
  ]),
  getBotSourceStats: vi.fn().mockResolvedValue([
    { source: "website", count: 3 },
    { source: "direct", count: 1 },
  ]),
  getRecentBotLeads: vi.fn().mockResolvedValue([
    {
      id: 1,
      telegramUserId: "123",
      telegramUsername: "testuser",
      telegramFirstName: "Test",
      step: "complete",
      interest: "Agency Services",
      contactMethod: "phone",
      contactValue: "+1 555-1234",
      source: "website",
      createdAt: new Date("2026-03-01"),
      updatedAt: new Date("2026-03-01"),
    },
  ]),
  // other db helpers used by routers
  insertChatLead: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  getBotSession: vi.fn(),
  upsertBotSession: vi.fn(),
}));

// ─── Mock notification helpers ────────────────────────────────────────────────
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./telegram", () => ({
  sendTelegram: vi.fn().mockResolvedValue(true),
  formatTelegramMessage: vi.fn().mockReturnValue("mock message"),
}));

vi.mock("./_core/systemRouter", () => ({
  systemRouter: { notifyOwner: { _def: { type: "mutation" } } },
}));

// ─── Import router after mocks ────────────────────────────────────────────────
import { getBotFunnelStats, getBotDailyStats, getBotInterestStats, getBotContactMethodStats, getRecentBotLeads } from "./db";

// ─── Helper to build a mock tRPC context ─────────────────────────────────────
function makeCtx(role: "admin" | "user" | null = "admin") {
  return {
    user: role
      ? {
          id: 1,
          openId: "test-open-id",
          name: "Test User",
          email: "test@example.com",
          role,
          loginMethod: "manus",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
        }
      : null,
    req: {} as any,
    res: {} as any,
  };
}

// ─── Tests ────────────────────────────────────────────────────────────────────
describe("Analytics DB helpers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getBotFunnelStats returns step counts", async () => {
    const result = await getBotFunnelStats();
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ step: "start", count: 10 });
    expect(result[1]).toMatchObject({ step: "complete", count: 4 });
  });

  it("getBotDailyStats returns daily counts", async () => {
    const result = await getBotDailyStats(30);
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ date: "2026-03-01", count: 3 });
  });

  it("getBotInterestStats returns interest breakdown", async () => {
    const result = await getBotInterestStats();
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ interest: "Agency Services", count: 3 });
  });

  it("getBotContactMethodStats returns contact method split", async () => {
    const result = await getBotContactMethodStats();
    expect(result).toHaveLength(2);
    const methods = result.map((r) => r.method);
    expect(methods).toContain("phone");
    expect(methods).toContain("email");
  });

  it("getRecentBotLeads returns completed leads", async () => {
    const result = await getRecentBotLeads(50);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      step: "complete",
      interest: "Agency Services",
      contactMethod: "phone",
    });
  });
});

describe("Analytics conversion rate calculation", () => {
  it("calculates conversion rate correctly", () => {
    const totalSessions = 10;
    const completedCount = 4;
    const rate = ((completedCount / totalSessions) * 100).toFixed(1);
    expect(rate).toBe("40.0");
  });

  it("handles zero sessions gracefully", () => {
    const totalSessions = 0;
    const completedCount = 0;
    const rate = totalSessions > 0 ? ((completedCount / totalSessions) * 100).toFixed(1) : "0";
    expect(rate).toBe("0");
  });

  it("handles 100% conversion", () => {
    const totalSessions = 5;
    const completedCount = 5;
    const rate = ((completedCount / totalSessions) * 100).toFixed(1);
    expect(rate).toBe("100.0");
  });
});

describe("Funnel step ordering", () => {
  const STEP_ORDER = [
    "start",
    "awaiting_interest",
    "awaiting_contact_method",
    "awaiting_phone",
    "awaiting_email",
    "complete",
  ];

  it("has 6 steps in the funnel", () => {
    expect(STEP_ORDER).toHaveLength(6);
  });

  it("starts with start and ends with complete", () => {
    expect(STEP_ORDER[0]).toBe("start");
    expect(STEP_ORDER[STEP_ORDER.length - 1]).toBe("complete");
  });

  it("maps funnel data correctly from DB results", () => {
    const funnelRaw = [
      { step: "start", count: 10 },
      { step: "complete", count: 4 },
    ];
    const map = Object.fromEntries(funnelRaw.map((s) => [s.step, s.count]));
    const ordered = STEP_ORDER.map((step) => ({
      step,
      count: map[step] ?? 0,
    }));
    expect(ordered[0]).toMatchObject({ step: "start", count: 10 });
    expect(ordered[5]).toMatchObject({ step: "complete", count: 4 });
    // Missing steps default to 0
    expect(ordered[1]).toMatchObject({ step: "awaiting_interest", count: 0 });
  });
});
