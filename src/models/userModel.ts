import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  role: "konsumen" | "admin" | "konsultan";
  createdAt: Date;
  gender: "Perempuan" | "Laki-laki";
  birthDate: string;
  telepon: string;
  province: string;
  regency: string;
  work: "PNS" | "Swasta" | "Lainnya";
  education: "SLTA" | "D1/D2/D3" | "D4/S1" | "S2" | "S3";
  position: string;
  field: [string];
  available: [string];
}

const UserSchema: Schema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['konsumen', 'admin', 'konsultan'], default: 'konsumen' },
  createdAt: { type: Date, default: Date.now },
  gender: { type: String, enum: ['Perempuan', 'Laki-laki'] },
  birthDate: { type: String, default: '' },
  telepon: { type: String, default: '' },
  province: { type: String, default: '' },
  regency: { type: String, default: '' },
  work: { type: String, enum: ['PNS', 'Swasta', 'Lainnya'] },
  education: { type: String, enum: ['SLTA', 'D1/D2/D3', 'D4/S1', 'S2', 'S3'] },
  position: { type: String, default: '' },
  field: { type: [String], default: [] },
  available: { type: [String], default: [] },
});

export default mongoose.model<IUser>('User', UserSchema);
