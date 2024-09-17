// src/routes/swiperRoutes.ts

import express from 'express';
import { SwiperController } from '../controllers/swiperController';

const router = express.Router();

// In swiperRoutes.ts
router.post('/', SwiperController.createSwiper);
router.get('/', SwiperController.getAllSwipers);
router.get('/:id', SwiperController.getSwiperById);
router.put('/:id', SwiperController.updateSwiper);
router.delete('/:id', SwiperController.deleteSwiper);


export default router;
