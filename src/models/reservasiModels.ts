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
    status: "Disetujui" | "Disetujui Admin" | "Disetujui Konsultan" | "Menunggu Konfirmasi";
    link: string;
    descriptionReservasi: string;
    createdAt: Date;
}

const ReservasiSchema = new Schema<IReservasi>({
    reservasiDate: { type: Date, required: true },
    time: { type: String, required: true },
    idKonsultan: { type: String, required: true },
    idKonsumen: { type: String, required: true},
    topic: { type: [String], required: true },
    method: { type: String, required: true },
    queue: { type: Number},
    status: { type: String, enum: ["Disetujui", "Disetujui Admin", "Disetujui Konsultan", "Menunggu Konfirmasi"], default: 'Menunggu Konfirmasi' },
    link: { type: String },
    descriptionReservasi: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Reservasi = model<IReservasi>('Reservasi', ReservasiSchema);

export default Reservasi;
