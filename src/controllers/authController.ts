import { Request, Response } from 'express';
import { findOrCreateUser } from '../services/authService';

export const googleAuthCallback = async (req: Request, res: Response) => {
  // Implementasi callback untuk Google Auth
  res.redirect('/');
};
