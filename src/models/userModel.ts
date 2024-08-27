import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  role: "user" | "admin" | "konsultan";
  createdAt: Date;
  gender: "Perempuan" | "Laki-laki";
  birthdate: string;
  phoneNumber: string;
  addressProv: string;
  addressKab: string;
  work: "PNS" | "Swasta" | "Lainnya";
  education: "SLTA" | "D1/D2/D3" | "D4/S1" | "S2" | "S3";
  position: string;
  field: string;
  days: [string];
}

const UserSchema: Schema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'konsultan'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
  gender: { type: String, enum: ['Perempuan', 'Laki-laki'] },
  birthdate: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  addressProv: { type: String, default: '' },
  addressKab: { type: String, default: '' },
  work: { type: String, enum: ['PNS', 'Swasta', 'Lainnya'] },
  education: { type: String, enum: ['SLTA', 'D1/D2/D3', 'D4/S1', 'S2', 'S3'] },
  position: { type: String, default: '' },
  field: { type: String, default: '' },
  days: { type: [String], default: [] },
});

export default mongoose.model<IUser>('User', UserSchema);
