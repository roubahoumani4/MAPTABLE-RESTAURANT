import { Router } from 'express';
import { z } from 'zod';
import { db } from '../db';
import { users } from '../../shared/schema';
import { authSchema, errorMessages } from '../../shared/auth';
import { generateToken, hashPassword, verifyPassword } from './utils';
import { authenticateUser, AuthRequest } from './middleware';
import { eq } from 'drizzle-orm';

const router = Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const data = authSchema.registration.parse(req.body);
    
    // Check if email exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, data.email),
    });

    if (existingUser) {
      return res.status(400).json({ message: errorMessages.auth.emailTaken });
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(data.password);
    const [user] = await db.insert(users).values({
      email: data.email,
      password: hashedPassword,
      name: data.name,
      phone: data.phone,
      role: 'USER',
    }).returning();

    // Generate token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // Set cookie
    res.cookie('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const data = authSchema.login.parse(req.body);
    
    const user = await db.query.users.findFirst({
      where: eq(users.email, data.email),
    });

    if (!user || !user.password) {
      return res.status(401).json({ message: errorMessages.auth.invalidCredentials });
    }

    const validPassword = await verifyPassword(data.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: errorMessages.auth.invalidCredentials });
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    res.cookie('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: 'Login failed' });
  }
});

// Logout endpoint
router.post('/logout', (req, res) => {
  res.clearCookie('auth-token');
  res.json({ message: 'Logged out successfully' });
});

// Get current user
router.get('/me', authenticateUser, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

// Change password
router.post('/change-password', authenticateUser, async (req: AuthRequest, res) => {
  try {
    const data = authSchema.changePassword.parse(req.body);
    
    const user = await db.query.users.findFirst({
      where: eq(users.id, req.user!.id),
    });

    if (!user || !user.password) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await verifyPassword(data.currentPassword, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const hashedPassword = await hashPassword(data.newPassword);
    await db.update(users)
      .set({ password: hashedPassword })
      .where(eq(users.id, user.id));

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: 'Failed to update password' });
  }
});

export default router;
