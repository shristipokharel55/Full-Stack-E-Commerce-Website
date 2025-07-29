import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import constant from './constant.js';

// Configuration
cloudinary.config({
    cloud_name: 'drg6twplf',
    api_key: '382497347982674',
    api_secret: constant.API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'image',
  },
});
 
const uploads = multer({ storage: storage });

export  {uploads, cloudinary};