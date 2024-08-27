import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'; // jika Anda menggunakan ini, Anda bisa menghapusnya
import session from 'express-session'; // tambahkan ini
import passport from 'passport';
import './services/passport'; // pastikan ini diimport setelah express-session
import { MONGODB_URI, SESSION_SECRET } from './config';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

// Tambahkan middleware session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // set secure: true untuk production
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

export default app;
