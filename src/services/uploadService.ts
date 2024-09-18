import cloudinary from "../config/cloudinaryConfig";
import { UploadApiResponse } from "cloudinary";
import fs from "fs";
import path from "path";
import { PassThrough } from "stream";

export const uploadImage = async (file: Express.Multer.File): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result as UploadApiResponse);
    }).end(file.buffer);  // Gunakan file.buffer untuk mengunggah dari memori
  });
};




// export const uploadDocument = async (filePath: string): Promise<UploadApiResponse> => {
//   return cloudinary.uploader.upload(filePath, {
//     resource_type: 'raw', // Untuk file PDF, Word, dan lainnya
//     format: 'pdf',
//   });
// };