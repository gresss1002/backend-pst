import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  role: "konsumen" | "admin" | "konsultan";
  createdAt: Date;
  gender: string;
  birthDate: string;
  telephone: string;
  province: string;
  regency: string;
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
  role: { type: String, enum: ['konsumen', 'admin', 'konsultan'], default: 'konsumen' },
  createdAt: { type: Date, default: Date.now },
  gender: { type: String, default: '' },
  birthDate: { type: String, default: '' },
  telephone: { type: String, default: '' },
  province: { type: String, default: '' },
  regency: { type: String, default: '' },
  work: { type: String, default: '' },
  education: { type: String, default: '' },
  position: { type: String, default: '' },
  field: { type: [String], default: [] },
  available: { type: [String], default: [] },
  photoLink: { type: String, default: '' },
  rating: { type: Number, default: 0 },
});

export default mongoose.model<IUser>('User', UserSchema);
