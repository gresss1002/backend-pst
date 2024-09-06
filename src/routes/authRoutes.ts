import { Router } from 'express';
import passport from 'passport';
import { changeUserRole, editUser } from '../controllers/authController';

const router = Router();

// Route untuk memulai proses login dengan Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route callback setelah Google authentication berhasil
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Jika login berhasil, ambil informasi user dari req.user
  const user = req.user as any;

  if (user) {
    // Response JSON dengan Google ID, email, dan nama user
    res.status(200).json({
      googleId: user.googleId,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(400).json({ message: 'Login failed' });
  }
});

// Route untuk mengubah role user
router.patch('/users/change-role', changeUserRole);

// Route untuk mengedit user
router.patch('/users/:userId', editUser);

export default router;
