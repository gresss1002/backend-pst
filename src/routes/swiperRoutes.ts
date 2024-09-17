// src/routes/swiperRoutes.ts

import express from 'express';
import { SwiperController } from '../controllers/swiperController';

const router = express.Router();

router.post('/swiper', SwiperController.createSwiper);
router.get('/swiper', SwiperController.getAllSwipers);
router.get('/swiper/:id', SwiperController.getSwiperById);
router.put('/swiper/:id', SwiperController.updateSwiper);
router.delete('/swiper/:id', SwiperController.deleteSwiper);

export default router;
