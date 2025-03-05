import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  if (mongoose.connection.readyState === 2) {
    console.log("MongoDB connection is already in progress.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
};

export default connectDB;
