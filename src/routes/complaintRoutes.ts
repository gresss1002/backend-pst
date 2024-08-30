import { Router } from 'express';
import * as complaintController from '../controllers/complaintController';

const router = Router();

router.post('/', complaintController.createComplaint);
router.get('/', complaintController.getAllComplaints);
router.get('/:id', complaintController.getComplaintById);
router.put('/:id', complaintController.updateComplaint);
router.delete('/:id', complaintController.deleteComplaint);

export default router;
