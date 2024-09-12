// src/controllers/ratingController.ts

import { Request, Response } from 'express';
import * as ratingService from '../services/ratingService';
import Rating from '../models/ratingModels';

export const createRating = async (req: Request, res: Response) => {
    try {
        const { idReservasi, score } = req.body;

        // Check if a rating already exists for this idReservasi
        const existingRating = await Rating.findOne({ idReservasi });
        if (existingRating) {
            return res.status(400).json({ message: 'Rating already exists for this reservation' });
        }

        // Create new rating if it doesn't exist
        const newRating = new Rating({ idReservasi, score });
        await newRating.save();
        res.status(201).json(newRating);
    } catch (error) {
        console.error('Error creating rating:', error);
        res.status(400).json({ message: 'Error creating rating' });
    }
};

export const getRatingById = async (req: Request, res: Response) => {
    try {
        const rating = await ratingService.getRatingById(req.params.id);
        if (!rating) return res.status(404).json({ message: 'Rating not found' });
        res.status(200).json(rating);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAllRatings = async (req: Request, res: Response) => {
    try {
        const ratings = await ratingService.getAllRatings();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateRating = async (req: Request, res: Response) => {
    try {
        const rating = await ratingService.updateRating(req.params.id, req.body);
        if (!rating) return res.status(404).json({ message: 'Rating not found' });
        res.status(200).json(rating);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const deleteRating = async (req: Request, res: Response) => {
    try {
        const rating = await ratingService.deleteRating(req.params.id);
        if (!rating) return res.status(404).json({ message: 'Rating not found' });
        res.status(200).json({ message: 'Rating deleted' });
    } catch (error) {
        res.status(400).json({ error:  (error as Error).message });
    }
};
