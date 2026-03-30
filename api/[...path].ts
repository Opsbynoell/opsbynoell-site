import type { VercelRequest, VercelResponse } from "@vercel/node";
import { nodeHTTPRequestHandler } from "@trpc/server/adapters/node-http";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";
import { registerOAuthRoutes } from "../server/_core/oauth";
import { registerTelegramWebhook } from "../server/telegramBot";
import express from "express";

// Build a minimal Express app for non-tRPC routes
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
registerOAuthRoutes(app);
registerTelegramWebhook(app);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.url ?? "/";

  // Handle tRPC routes directly
  if (url.startsWith("/api/trpc")) {
    return nodeHTTPRequestHandler({
      router: appRouter,
      createContext,
      req: req as any,
      res: res as any,
      path: url.replace(/^\/api\/trpc\/?/, ""),
    });
  }

  // Everything else goes through Express
  return new Promise<void>((resolve, reject) => {
    app(req as any, res as any, (err: any) => {
      if (err) reject(err);
      else {
        res.status(404).json({ error: "Not found" });
        resolve();
      }
    });
  });
}
