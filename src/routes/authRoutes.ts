import { Router } from 'express';
import passport from 'passport';
import { changeUserRole, editUser } from '../controllers/authController';

const router = Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.patch('/users/change-role', changeUserRole);

router.patch('/users/:userId', editUser);

export default router;
