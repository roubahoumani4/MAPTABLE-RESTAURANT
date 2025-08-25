import jwt from 'jsonwebtoken';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(['USER', 'RESTAURANT_MANAGER', 'ADMIN']),
});

export type User = z.infer<typeof userSchema>;

export const generateToken = (user: User): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const result = userSchema.safeParse(decoded);
    
    if (!result.success) {
      return null;
    }
    
    return result.data;
  } catch (error) {
    return null;
  }
};

export const hashPassword = async (password: string): Promise<string> => {
  const bcrypt = await import('bcrypt');
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const bcrypt = await import('bcrypt');
  return bcrypt.compare(password, hashedPassword);
};
