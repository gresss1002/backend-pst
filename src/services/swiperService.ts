// src/services/swiperService.ts

import Swiper, { ISwiper } from "../models/swiperModels";



export class SwiperService {
    async createSwiper(data: ISwiper): Promise<ISwiper> {
        const swiper = new Swiper(data);
        return await swiper.save();
    }

    async getAllSwipers(): Promise<ISwiper[]> {
        return await Swiper.find();
    }

    async getSwiperById(id: string): Promise<ISwiper | null> {
        return await Swiper.findById(id);
    }

    async updateSwiper(id: string, data: Partial<ISwiper>): Promise<ISwiper | null> {
        return await Swiper.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteSwiper(id: string): Promise<ISwiper | null> {
        return await Swiper.findByIdAndDelete(id);
    }
}
