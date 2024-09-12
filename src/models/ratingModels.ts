// src/models/ratingModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IRating extends Document {
    idReservasi: string;
    score: number;
}

const ratingSchema = new Schema<IRating>({
    idReservasi: { type: String, required: true, unique: true },
    score: { type: Number, required: true },
});

const Rating = mongoose.model<IRating>('Rating', ratingSchema);

export default Rating;
