// src/models/reservasiModels.ts

import { Schema, model, Document } from 'mongoose';

export interface IReservasi extends Document {
    reservasiDate: Date;
    time: string;
    idKonsultan: string;
    idKonsumen: string;
    topic: string[];
    method: string;
    queue: number;
    status: string;
    link: string;
    descriptionReservasi: string;
}

const ReservasiSchema = new Schema<IReservasi>({
    reservasiDate: { type: Date, required: true },
    time: { type: String, required: true },
    idKonsultan: { type: String, required: true },
    idKonsumen: { type: String, required: true },
    topic: { type: [String], required: true },
    method: { type: String, required: true },
    queue: { type: Number, required: true },
    status: { type: String, required: true },
    link: { type: String, required: true },
    descriptionReservasi: { type: String, required: true },
});

const Reservasi = model<IReservasi>('Reservasi', ReservasiSchema);

export default Reservasi;
