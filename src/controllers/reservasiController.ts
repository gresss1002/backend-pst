// src/controllers/reservasiController.ts

import { Request, Response } from 'express';
import * as reservasiService from '../services/reservasiService';
import Reservasi, { IReservasi } from '../models/reservasiModels';

export const createReservasi = async (data: IReservasi): Promise<IReservasi> => {
    try {
        const reservasi = new Reservasi(data);
        return await reservasi.save();
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }
};


export const getReservasiById = async (req: Request, res: Response) => {
    try {
        const reservasi = await reservasiService.getReservasiById(req.params.id);
        if (!reservasi) return res.status(404).json({ message: 'Reservasi not found' });
        res.status(200).json(reservasi);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAllReservasi = async (req: Request, res: Response) => {
    try {
        const reservasiList = await reservasiService.getAllReservasi();
        res.status(200).json(reservasiList);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateReservasi = async (req: Request, res: Response) => {
    try {
        const reservasi = await reservasiService.updateReservasi(req.params.id, req.body);
        if (!reservasi) return res.status(404).json({ message: 'Reservasi not found' });
        res.status(200).json(reservasi);
    } catch (error) {
        res.status(400).json({ error:  (error as Error).message });
    }
};

export const deleteReservasi = async (req: Request, res: Response) => {
    try {
        const reservasi = await reservasiService.deleteReservasi(req.params.id);
        if (!reservasi) return res.status(404).json({ message: 'Reservasi not found' });
        res.status(200).json({ message: 'Reservasi deleted' });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAllReservasiByKonsumenId = async (req: Request, res: Response) => {
    try {
        const reservasiList = await reservasiService.getAllReservasiByKonsumenId(req.params.userId);
        res.status(200).json(reservasiList);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAllReservasiByKonsultanId = async (req: Request, res: Response) => {
    try {
        const reservasiList = await reservasiService.getAllReservasiByKonsultanId(req.params.userId);
        res.status(200).json(reservasiList);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAllReservasiByStatus = async (req: Request, res: Response) => {
    try {
        const status = req.params.status;
        const reservasiList = await reservasiService.getAllReservasiByStatus(status);
        res.status(200).json(reservasiList);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};