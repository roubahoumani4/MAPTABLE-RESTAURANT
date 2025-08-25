import passport from "passport";
import session from "express-session";
import type { Express, RequestHandler } from "express";
import { Strategy as LocalStrategy } from "passport-local";
import { storage } from "./storage";
import { UserRole, UserTier } from "../shared/schema";

export function getSession() {
  return session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
    },
  });
}

async function upsertUser(username: string) {
  const user = await storage.upsertUser({
    id: username,
    email: `${username}@local.dev`,
    name: "Local User",
    phone: "",
    profileImageUrl: "",
    role: "USER" as UserRole,
    points: 0,
    tier: "BRONZE" as UserTier,
    password: "localdev", // This is only for local development
  });

  // Return a user object that matches Replit's structure
  return {
    id: user.id,
    claims: {
      sub: user.id,
      name: user.name,
      email: user.email,
    }
  };
}

export async function setupAuth(app: Express) {
  app.use(getSession());
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    async function(username, password, done) {
      try {
        // For local development, accept any credentials
        const user = await upsertUser(username);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));

  passport.serializeUser((user: Express.User, cb) => cb(null, user));
  passport.deserializeUser((user: Express.User, cb) => cb(null, user));

  app.post("/api/login", passport.authenticate('local'), (req, res) => {
    res.json({ success: true });
  });

  app.get("/api/login", (req, res) => {
    res.redirect("/");
  });

  app.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  });
}

export const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};
