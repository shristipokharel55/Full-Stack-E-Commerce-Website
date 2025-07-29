import dotenv from 'dotenv';   
dotenv.config(); 

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const MONGO_URI = process.env.PORT || 4000;
const API_SECRET = process.env.API_SECRET;

export default(MONGO_URI, EMAIL_USER, EMAIL_PASS, API_SECRET)