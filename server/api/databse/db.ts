import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const uri = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
