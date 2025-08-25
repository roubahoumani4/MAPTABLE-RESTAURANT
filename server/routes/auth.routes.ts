import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticateRequest } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

// Protected routes
router.get('/me', authenticateRequest, AuthController.getCurrentUser);
router.post('/change-password', authenticateRequest, AuthController.changePassword);

export default router;
