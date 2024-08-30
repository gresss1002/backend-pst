import { Router } from 'express';
import passport from 'passport';
import { changeUserRole } from '../controllers/authController';

const router = Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.patch('/users/change-role', changeUserRole);

export default router;
