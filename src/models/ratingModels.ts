// src/models/ratingModels.ts

import { Schema, model, Document } from 'mongoose';

export interface IRating extends Document {
    idReservasi: string;
    score: number;
}

const RatingSchema = new Schema<IRating>({
    idReservasi: { type: String, required: true },
    score: { type: Number, required: true, min: 1, max: 5 }, // Assuming score is between 1 and 5
});

const Rating = model<IRating>('Rating', RatingSchema);

export default Rating;
