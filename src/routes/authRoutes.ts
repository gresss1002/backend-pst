import { Router } from 'express';
import passport from 'passport';
import { changeUserRole, editUser, getUserByGoogleId } from '../controllers/authController';

const router = Router();

// Route untuk memulai proses login dengan Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const user = req.user as any;
  if (user) {
    // Redirect to the frontend with the user info
    res.redirect(`http://localhost:5173/welcome?googleId=${user.googleId}&email=${user.email}&name=${user.name}`);
  } else {
    res.redirect('/');
  }
});

// Route untuk mengubah role user
router.patch('/users/change-role', changeUserRole);

// Route untuk mengedit user
router.patch('/users/:userId', editUser);

router.get('/users/google/:googleId', getUserByGoogleId);

export default router;
