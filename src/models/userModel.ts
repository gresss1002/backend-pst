import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  role: "konsumen" | "admin" | "konsultan";
  createdAt: Date;
  gender: string;
  birthDate: string;
  telepon: string;
  province: string;
  regency: string;
  work: string;
  education: string;
  position: string;
  field: [string];
  available: [string];
  photoLink: string;
}

const UserSchema: Schema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['konsumen', 'admin', 'konsultan'], default: 'konsumen' },
  createdAt: { type: Date, default: Date.now },
  gender: { type: String, default: '' },
  birthDate: { type: String, default: '' },
  telepon: { type: String, default: '' },
  province: { type: String, default: '' },
  regency: { type: String, default: '' },
  work: { type: String, default: '' },
  education: { type: String, default: '' },
  position: { type: String, default: '' },
  field: { type: [String], default: [] },
  available: { type: [String], default: [] },
  photoLink: { type: String, default: '' },
});

export default mongoose.model<IUser>('User', UserSchema);
