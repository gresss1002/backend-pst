// src/models/swiperModel.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface ISwiper extends Document {
    title: string;
    image: string;
    content: string;
    link: string;
}

const swiperSchema = new Schema<ISwiper>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: true },
});

const Swiper = mongoose.model<ISwiper>('Swiper', swiperSchema);

export default Swiper;
