
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const uri = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    if(!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // terminate the process if the database connection fails
    // this is important to prevent the server from running without a database connection
    process.exit(1);
  }
};

module.exports = connectDB