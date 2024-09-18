import { Router } from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/uploadController';

const router = Router();



// Configure multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), uploadFile);

export default router;