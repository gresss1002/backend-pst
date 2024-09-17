// src/controllers/swiperController.ts

import { Request, Response } from 'express';
import { SwiperService } from '../services/swiperService';
import { ISwiper } from '../models/swiperModels';

const swiperService = new SwiperService();

export class SwiperController {
    static async createSwiper(req: Request, res: Response): Promise<void> {
        try {
            const { title, image, content, link } = req.body;
            const newSwiper = await swiperService.createSwiper({ title, image, content, link } as ISwiper);
            res.status(201).json(newSwiper);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create swiper', error });
        }
    }

    static async getAllSwipers(req: Request, res: Response): Promise<void> {
        try {
            const swipers = await swiperService.getAllSwipers();
            res.status(200).json(swipers);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch swipers', error });
        }
    }

    static async getSwiperById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const swiper = await swiperService.getSwiperById(id);
            if (swiper) {
                res.status(200).json(swiper);
            } else {
                res.status(404).json({ message: 'Swiper not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch swiper', error });
        }
    }

    static async updateSwiper(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { title, image, content, link } = req.body;
            const updatedSwiper = await swiperService.updateSwiper(id, { title, image, content, link });
            if (updatedSwiper) {
                res.status(200).json(updatedSwiper);
            } else {
                res.status(404).json({ message: 'Swiper not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update swiper', error });
        }
    }

    static async deleteSwiper(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deletedSwiper = await swiperService.deleteSwiper(id);
            if (deletedSwiper) {
                res.status(200).json({ message: 'Swiper deleted' });
            } else {
                res.status(404).json({ message: 'Swiper not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete swiper', error });
        }
    }
}
