// src/services/ratingService.ts

import Rating, { IRating } from '../models/ratingModels';

export const createRating = async (data: IRating): Promise<IRating> => {
    const rating = new Rating(data);
    return await rating.save();
};

export const getRatingById = async (id: string): Promise<IRating | null> => {
    return await Rating.findById(id).exec();
};

export const getAllRatings = async (): Promise<IRating[]> => {
    return await Rating.find().exec();
};

export const updateRating = async (id: string, data: Partial<IRating>): Promise<IRating | null> => {
    return await Rating.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteRating = async (id: string): Promise<IRating | null> => {
    return await Rating.findByIdAndDelete(id).exec();
};
