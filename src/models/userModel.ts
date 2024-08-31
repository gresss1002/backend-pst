import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  role: "Konsumen" | "Admin" | "Konsultan";
  createdAt: Date;
  gender: string;
  birthDate: string;
  telephone: string;
  district: string;
  subsdistrict: string;
  work: string;
  education: string;
  position: string;
  field: [string];
  available: [string];
  photoLink: string;
  rating: number;
}

const UserSchema: Schema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['Konsumen', 'Admin', 'Konsultan'], default: 'Konsumen' },
  createdAt: { type: Date, default: Date.now },
  gender: { type: String, default: '' },
  birthDate: { type: String, default: '' },
  telephone: { type: String, default: '' },
  district: { type: String, default: '' },
  subsdistrict: { type: String, default: '' },
  work: { type: String, default: '' },
  education: { type: String, default: '' },
  position: { type: String, default: '' },
  field: { type: [String], default: [] },
  available: { type: [String], default: [] },
  photoLink: { type: String, default: '' },
  rating: { type: Number, default: 0 },
});

export default mongoose.model<IUser>('User', UserSchema);
