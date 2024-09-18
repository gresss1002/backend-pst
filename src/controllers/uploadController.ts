import { Request, Response } from 'express';
import { uploadImage} from '../services/uploadService';

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = req.file;
    let result;

    console.log(file);

    if (file.mimetype.startsWith('image/')) {
      result = await uploadImage(file);

      res.status(200).json({ message: 'File uploaded successfully', url: result.secure_url });
    } else {
      return res.status(400).json({ message: 'Invalid file type' });
    }
   
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: 'File upload failed', error });
  }
};



// import { Request, Response } from 'express';
// import { uploadImage, uploadDocument } from '../services/uploadService';
// import multer from 'multer';

// const upload = multer({ dest: 'uploads/' });

// export const uploadFile = async (req: Request, res: Response) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const file = req.file;
//     let result;

//     if (file.mimetype.startsWith('image/')) {
//       result = await uploadImage(file.path);
//     } else if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//       result = await uploadDocument(file.path);
//     } else {
//       return res.status(400).json({ message: 'Invalid file type' });
//     }

//     res.status(200).json({ message: 'File uploaded successfully', url: result.secure_url });
//   } catch (error : any) {
//     res.status(500).json({ message: 'File upload failed', error });
//   }
// };