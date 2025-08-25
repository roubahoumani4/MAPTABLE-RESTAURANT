import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./localAuth";
import { registerRoutes } from "./routes";

export async function registerDevRoutes(app: Express): Promise<Server> {
  // Use local auth for development
  await setupAuth(app);

  // Setup all the regular routes
  const server = await registerRoutes(app);
  return server;
}
