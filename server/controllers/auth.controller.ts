import { Request, Response } from 'express';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import { db } from '../db';
import { users, UserRole, UserTier } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import { authSchema, errorMessages } from '../../shared/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'your-development-secret-key';
const JWT_EXPIRES_IN = '7d';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const validatedData = authSchema.registration.parse(req.body);

      // Check if email already exists
      const existingUser = await db.query.users.findFirst({
        where: eq(users.email, validatedData.email),
      });

      if (existingUser) {
        return res.status(400).json({ message: errorMessages.auth.emailTaken });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(validatedData.password, salt);

      // Create user
      const [user] = await db.insert(users).values({
        id: nanoid(),
        email: validatedData.email,
        password: hashedPassword,
        name: validatedData.name,
        phone: validatedData.phone,
        role: 'USER',
        tier: 'BRONZE',
        points: 0,
      }).returning();

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: user.id,
          email: user.email,
          role: user.role
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      // Set cookie
      res.cookie('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      // Return user data (excluding sensitive information)
      return res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tier: user.tier,
        points: user.points
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Registration error:', error);
      return res.status(500).json({ message: 'Failed to register user' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const validatedData = authSchema.login.parse(req.body);

      // Find user by email
      const user = await db.query.users.findFirst({
        where: eq(users.email, validatedData.email),
      });

      if (!user || !user.password) {
        return res.status(401).json({ message: errorMessages.auth.invalidCredentials });
      }

      // Verify password
      const validPassword = await bcrypt.compare(validatedData.password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: errorMessages.auth.invalidCredentials });
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: user.id,
          email: user.email,
          role: user.role
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      // Set cookie
      res.cookie('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      return res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tier: user.tier,
        points: user.points
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Failed to login' });
    }
  }

  static async logout(_req: Request, res: Response) {
    res.clearCookie('auth-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    return res.json({ message: 'Successfully logged out' });
  }

  static async getCurrentUser(req: Request, res: Response) {
    try {
      const token = req.cookies['auth-token'] || req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: errorMessages.auth.invalidToken });
      }

      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      const user = await db.query.users.findFirst({
        where: eq(users.id, decoded.id),
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return user data directly, not wrapped in a user object
      return res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tier: user.tier,
        points: user.points
      });
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: errorMessages.auth.invalidToken });
      }
      console.error('Get current user error:', error);
      return res.status(500).json({ message: 'Failed to get user information' });
    }
  }

  static async changePassword(req: Request, res: Response) {
    try {
      const token = req.cookies['auth-token'] || req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: errorMessages.auth.invalidToken });
      }

      const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
      const validatedData = authSchema.changePassword.parse(req.body);

      const user = await db.query.users.findFirst({
        where: eq(users.id, decoded.id),
      });

      if (!user || !user.password) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Verify current password
      const validPassword = await bcrypt.compare(validatedData.currentPassword, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }

      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(validatedData.newPassword, salt);

      // Update password
      await db.update(users)
        .set({ password: hashedPassword })
        .where(eq(users.id, user.id));

      return res.json({ message: 'Password successfully updated' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: errorMessages.auth.invalidToken });
      }
      console.error('Change password error:', error);
      return res.status(500).json({ message: 'Failed to change password' });
    }
  }
}
