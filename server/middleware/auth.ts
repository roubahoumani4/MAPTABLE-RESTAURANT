import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db';
import { users, UserRole } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import { errorMessages } from '../../shared/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'your-development-secret-key';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: UserRole;
  };
}

export const authenticateRequest = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies['auth-token'] || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: errorMessages.auth.invalidToken });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string; role: 'USER' | 'RESTAURANT_MANAGER' | 'ADMIN' };
    
    // Verify user still exists
    const user = await db.query.users.findFirst({
      where: eq(users.id, decoded.id),
    });

    if (!user) {
      return res.status(401).json({ message: errorMessages.auth.invalidToken });
    }

    // Attach user to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    };

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: errorMessages.auth.invalidToken });
    }
    console.error('Authentication error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const requireRole = (roles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: errorMessages.auth.invalidToken });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: errorMessages.auth.insufficientPermissions });
    }

    next();
  };
};
