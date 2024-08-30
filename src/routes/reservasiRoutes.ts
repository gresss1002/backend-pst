// src/routes/reservasiRoutes.ts

import { Router } from 'express';
import * as reservasiController from '../controllers/reservasiController';

const router = Router();

router.post('/', reservasiController.createReservasi);
router.get('/', reservasiController.getAllReservasi);
router.get('/:id', reservasiController.getReservasiById);
router.put('/:id', reservasiController.updateReservasi);
router.delete('/:id', reservasiController.deleteReservasi);

export default router;
