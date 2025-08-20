import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGO_URI); // ✅ no need for options
}

export default connectDB;