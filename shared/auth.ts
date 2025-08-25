import { z } from 'zod';

export type UserRole = 'USER' | 'RESTAURANT_MANAGER' | 'ADMIN';
export type UserTier = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';

export const authSchema = {
  registration: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
    phone: z.string().optional(),
  }),
  
  login: z.object({
    email: z.string().email(),
    password: z.string(),
  }),

  changePassword: z.object({
    currentPassword: z.string(),
    newPassword: z.string().min(8),
  }),

  phoneVerification: z.object({
    phone: z.string(),
    code: z.string().length(6),
  }),
};

export const errorMessages = {
  auth: {
    invalidCredentials: 'Invalid email or password',
    emailTaken: 'Email already registered',
    phoneTaken: 'Phone number already registered',
    invalidVerificationCode: 'Invalid verification code',
    verificationExpired: 'Verification code has expired',
    invalidToken: 'Invalid or expired token',
    insufficientPermissions: 'Insufficient permissions',
  },
  validation: {
    invalidEmail: 'Invalid email address',
    passwordTooShort: 'Password must be at least 8 characters',
    nameTooShort: 'Name must be at least 2 characters',
    invalidPhone: 'Invalid phone number',
  },
};
