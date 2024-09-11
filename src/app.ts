import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieSession from 'cookie-session'; // jika Anda menggunakan ini, Anda bisa menghapusnya
import session from 'express-session'; // tambahkan ini
import passport from 'passport';
import './services/passport'; // pastikan ini diimport setelah express-session
import { MONGODB_URI, SESSION_SECRET } from './config';
import authRoutes from './routes/authRoutes';
import reservasiRoutes from './routes/reservasiRoutes';
import ratingRoutes from './routes/ratingRoutes';
import complaintRoutes from './routes/complaintRoutes';

// const express = require('express');
// const cors = require('cors');
const app = express();


app.use(cors({
    origin: ['http://localhost:5173'], // Ganti dengan URL front-end Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
  }));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Tambahkan middleware session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true } // set secure: true untuk production
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

app.use('/reservasi', reservasiRoutes);

app.use('/rating', ratingRoutes);

app.use('/complaint', complaintRoutes);



mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 500000, 
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

export default app;
