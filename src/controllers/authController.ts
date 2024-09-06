import { Request, Response } from 'express';
import { findOrCreateUser, findUserByGoogleId, updateUserDetails, updateUserRole } from '../services/authService';

export const getUserByGoogleId = async (req: Request, res: Response) => {
  const { googleId } = req.params;

  if (!googleId) {
    return res.status(400).json({ message: "Google ID is required" });
  }

  try {
    const user = await findUserByGoogleId(googleId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const googleAuthCallback = async (req: Request, res: Response) => {
  // Implementasi callback untuk Google Auth
  res.redirect('/');
};

export const changeUserRole = async (req: Request, res: Response) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ message: "User ID and role are required" });
  }

  if (!["Konsumen", "Admin", "Konsultan"].includes(role)) {
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

export const editUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updateData = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const updatedUser = await updateUserDetails(userId, updateData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
