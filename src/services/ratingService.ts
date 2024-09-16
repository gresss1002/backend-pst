// src/services/ratingService.ts

import mongoose from 'mongoose';
import Rating, { IRating } from '../models/ratingModels';
import Reservasi from '../models/reservasiModels';
import User from '../models/userModel';

/**
 * Recalculate the average rating for a consultant and update their user profile.
 * @param {string} idKonsultan - The consultant's user ID.
 */
// const recalculateConsultantRating = async (idKonsultan: string) => {
//     // Find all reservations for this consultant
//     const reservasiList = await Reservasi.find({ idKonsultan }).exec();
    
//     // Extract all reservation IDs
//     const reservasiIds = reservasiList.map((reservasi) => (reservasi._id as mongoose.Types.ObjectId).toString());

//     // Find all ratings related to these reservations
//     const ratings = await Rating.find({ idReservasi: { $in: reservasiIds } }).exec();

//     if (ratings.length > 0) {
//         // Calculate the average score
//         const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
//         const averageScore = totalScore / ratings.length;

//         // Update the consultant's rating
//         await User.findByIdAndUpdate(idKonsultan, { rating: averageScore }).exec();
//     } else {
//         // If no ratings are found, set the rating to 0
//         await User.findByIdAndUpdate(idKonsultan, { rating: 0 }).exec();
//     }
// };

const recalculateConsultantRating = async (idKonsultan: string) => {
    // Find all reservations for this consultant
    const reservasiList = await Reservasi.find({ idKonsultan }).exec();
    
    // Extract all reservation IDs
    const reservasiIds = reservasiList.map((reservasi) => (reservasi._id as mongoose.Types.ObjectId).toString());

    // Find all ratings related to these reservations
    const ratings = await Rating.find({ idReservasi: { $in: reservasiIds } }).exec();

    if (ratings.length > 0) {
        // Calculate the average score
        const totalScore = ratings.reduce((acc, rating) => acc + rating.score, 0);
        const averageScore = totalScore / ratings.length;

        // Update the consultant's rating
        await User.findByIdAndUpdate(idKonsultan, { rating: averageScore }).exec();
    } else {
        // If no ratings are found, set the rating to 0
        await User.findByIdAndUpdate(idKonsultan, { rating: 0 }).exec();
    }
};


export const createRating = async (data: IRating): Promise<IRating> => {
    const rating = new Rating(data);
    const savedRating = await rating.save();

    // Find the reservation to get the consultant ID
    const reservasi = await Reservasi.findById(data.idReservasi).exec();
    if (reservasi) {
        await recalculateConsultantRating(reservasi.idKonsultan);
    }

    return savedRating;
};

export const getRatingById = async (id: string): Promise<IRating | null> => {
    return await Rating.findById(id).exec();
};

export const getAllRatings = async (): Promise<IRating[]> => {
    return await Rating.find().exec();
};

export const updateRating = async (id: string, data: Partial<IRating>): Promise<IRating | null> => {
    const updatedRating = await Rating.findByIdAndUpdate(id, data, { new: true }).exec();

    if (updatedRating) {
        // Find the reservation to get the consultant ID
        const reservasi = await Reservasi.findById(updatedRating.idReservasi).exec();
        if (reservasi) {
            await recalculateConsultantRating(reservasi.idKonsultan);
        }
    }

    return updatedRating;
};

export const deleteRating = async (id: string): Promise<IRating | null> => {
    const rating = await Rating.findByIdAndDelete(id).exec();

    if (rating) {
        // Store idReservasi before deletion
        const idReservasi = rating.idReservasi;

        // Find the reservation to get the consultant ID
        const reservasi = await Reservasi.findById(idReservasi).exec();
        if (reservasi) {
            await recalculateConsultantRating(reservasi.idKonsultan);
        }
    }

    return rating;
};

