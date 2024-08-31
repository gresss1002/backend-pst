import { Schema, model, Document } from 'mongoose';

export interface IComplaint extends Document {
    material: string;
    suggestion: string;
    idKonsumen: string;
    name: string;
    telephone: string;
    gender: string;
    province: string;
    regency: string;
}

const ComplaintSchema = new Schema<IComplaint>({
    material: { type: String, required: true },
    suggestion: { type: String, required: true },
    idKonsumen: { type: String, required: true },
    name: { type: String, required: true },
    telephone: { type: String, required: true },
    gender: { type: String, required: true },
    province: { type: String, required: true },
    regency: { type: String, required: true },
});

const Complaint = model<IComplaint>('Complaint', ComplaintSchema);

export default Complaint;
