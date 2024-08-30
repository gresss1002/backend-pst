// src/routes/ratingRoutes.ts

import { Router } from 'express';
import * as ratingController from '../controllers/ratingController';

const router = Router();

router.post('/', ratingController.createRating);
router.get('/', ratingController.getAllRatings);
router.get('/:id', ratingController.getRatingById);
router.put('/:id', ratingController.updateRating);
router.delete('/:id', ratingController.deleteRating);

export default router;
