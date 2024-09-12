import { changeUserRole, editUser } from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";
import { Router } from 'express';

const router = Router();

router.patch('/users/change-role', verifyToken, changeUserRole);
router.patch('/users/:userId', verifyToken, editUser);