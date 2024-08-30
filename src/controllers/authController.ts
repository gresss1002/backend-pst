import { Request, Response } from 'express';
import { findOrCreateUser, updateUserRole } from '../services/authService';

export const googleAuthCallback = async (req: Request, res: Response) => {
  // Implementasi callback untuk Google Auth
  res.redirect('/');
};

export const changeUserRole = async (req: Request, res: Response) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ message: "User ID and role are required" });
  }

  if (!["konsumen", "admin", "konsultan"].includes(role)) {
    return res.status(400).json({ message: "Invalid role specified" });
  }

  try {
    const updatedUser = await updateUserRole(userId, role);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User role updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
