import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Token biasanya dikirim di header Authorization sebagai "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Simpan data token di request untuk diakses di handler selanjutnya
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};