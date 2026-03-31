import { integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);
export const notifiedEnum = pgEnum("notified", ["yes", "no"]);
export const stepEnum = pgEnum("step", [
  "start",
  "awaiting_name",
  "awaiting_interest",
  "awaiting_contact_method",
  "awaiting_phone",
  "awaiting_email",
  "complete",
]);
export const messageRoleEnum = pgEnum("message_role", ["visitor", "bot", "human"]);

/**
 * Core user table backing auth flow.
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Chat Leads ─────────────────────────────────────────────────────────────
export const chatLeads = pgTable("chatLeads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  businessType: varchar("businessType", { length: 256 }).notNull(),
  question: text("question"),
  page: varchar("page", { length: 256 }),
  notified: notifiedEnum("notified").default("no").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatLead = typeof chatLeads.$inferSelect;
export type InsertChatLead = typeof chatLeads.$inferInsert;

// ─── Telegram Bot Sessions ───────────────────────────────────────────────────
export const botSessions = pgTable("botSessions", {
  id: serial("id").primaryKey(),
  telegramUserId: varchar("telegramUserId", { length: 32 }).notNull().unique(),
  telegramUsername: varchar("telegramUsername", { length: 128 }),
  telegramFirstName: varchar("telegramFirstName", { length: 128 }),
  step: stepEnum("step").default("start").notNull(),
  leadName: varchar("leadName", { length: 128 }),
  interest: varchar("interest", { length: 64 }),
  contactMethod: varchar("contactMethod", { length: 16 }),
  contactValue: varchar("contactValue", { length: 320 }),
  source: varchar("source", { length: 64 }).default("direct"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type BotSession = typeof botSessions.$inferSelect;
export type InsertBotSession = typeof botSessions.$inferInsert;

// ─── Website Chat Sessions ───────────────────────────────────────────────────
export const chatSessions = pgTable("chatSessions", {
  id: serial("id").primaryKey(),
  sessionId: varchar("sessionId", { length: 64 }).notNull().unique(),
  visitorName: varchar("visitorName", { length: 128 }),
  visitorEmail: varchar("visitorEmail", { length: 320 }),
  businessType: varchar("businessType", { length: 256 }),
  visitorIp: varchar("visitorIp", { length: 64 }),
  visitorLocation: varchar("visitorLocation", { length: 256 }),
  humanTakeover: integer("humanTakeover").default(0).notNull(),
  unreadCount: integer("unreadCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = typeof chatSessions.$inferInsert;

// ─── Website Chat Messages ───────────────────────────────────────────────────
export const chatMessages = pgTable("chatMessages", {
  id: serial("id").primaryKey(),
  sessionId: varchar("sessionId", { length: 64 }).notNull(),
  role: messageRoleEnum("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

// ─── Newsletter Subscribers ──────────────────────────────────────────────────
export const newsletterSubscribers = pgTable("newsletterSubscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 128 }),
  source: varchar("source", { length: 256 }).default("/newsletter"),
  welcomed: integer("welcomed").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertNewsletterSubscriber = typeof newsletterSubscribers.$inferInsert;
