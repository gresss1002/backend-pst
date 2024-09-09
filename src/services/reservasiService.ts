// src/services/reservasiService.ts

import Reservasi, { IReservasi } from '../models/reservasiModels';

export const createReservasi = async (data: IReservasi): Promise<IReservasi> => {
    const reservasi = new Reservasi(data);
    return await reservasi.save();
};

export const getReservasiById = async (id: string): Promise<IReservasi | null> => {
    return await Reservasi.findById(id).exec();
};

export const getAllReservasi = async (): Promise<IReservasi[]> => {
    return await Reservasi.find().exec();
};

export const updateReservasi = async (id: string, data: Partial<IReservasi>): Promise<IReservasi | null> => {
    return await Reservasi.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteReservasi = async (id: string): Promise<IReservasi | null> => {
    return await Reservasi.findByIdAndDelete(id).exec();
};

// New service methods
export const getAllReservasiByKonsumenId = async (userId: string): Promise<IReservasi[]> => {
    return await Reservasi.find({ idKonsumen: userId }).exec();
};

export const getAllReservasiByKonsultanId = async (userId: string): Promise<IReservasi[]> => {
    return await Reservasi.find({ idKonsultan: userId }).exec();
};
