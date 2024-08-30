import { Request, Response } from 'express';
import * as complaintService from '../services/complaintService';

export const createComplaint = async (req: Request, res: Response) => {
    try {
        const complaint = await complaintService.createComplaint(req.body);
        res.status(201).json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error creating complaint', error: (error as Error).message });
    }
};

export const getComplaintById = async (req: Request, res: Response) => {
    try {
        const complaint = await complaintService.getComplaintById(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaint', error: (error as Error).message });
    }
};

export const getAllComplaints = async (req: Request, res: Response) => {
    try {
        const complaints = await complaintService.getAllComplaints();
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaints', error: (error as Error).message });
    }
};

export const updateComplaint = async (req: Request, res: Response) => {
    try {
        const complaint = await complaintService.updateComplaint(req.params.id, req.body);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error updating complaint', error: (error as Error).message });
    }
};

export const deleteComplaint = async (req: Request, res: Response) => {
    try {
        const complaint = await complaintService.deleteComplaint(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.json({ message: 'Complaint deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting complaint', error: (error as Error).message });
    }
};
