import Complaint, { IComplaint } from '../models/complaintModels';
import User, { IUser } from '../models/userModel'; // Import the User model

export const createComplaint = async (data: Partial<IComplaint>): Promise<IComplaint> => {
    // Fetch user details based on idKonsumen
    const user: IUser | null = await User.findById(data.idKonsumen).exec();

    if (!user) {
        throw new Error('User not found');
    }

    // Create a complaint with user details
    const complaintData: IComplaint = new Complaint({
        material: data.material,
        suggestion: data.suggestion,
        idKonsumen: user._id,
        name: user.name,
        telepon: user.telepon,
        gender: user.gender,
        province: user.province,
        regency: user.regency,
    });

    return await complaintData.save();
};

export const getComplaintById = async (id: string): Promise<IComplaint | null> => {
    return await Complaint.findById(id).exec();
};

export const getAllComplaints = async (): Promise<IComplaint[]> => {
    return await Complaint.find().exec();
};

export const updateComplaint = async (id: string, data: Partial<IComplaint>): Promise<IComplaint | null> => {
    return await Complaint.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteComplaint = async (id: string): Promise<IComplaint | null> => {
    return await Complaint.findByIdAndDelete(id).exec();
};
