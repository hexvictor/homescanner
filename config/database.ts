import {debug} from 'console';
import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (mongoose.connection.readyState === 1) {
    debug('Already connected to MongoDB');
    return;
  }
  if (mongoose.connection.readyState === 2) {
    debug('MongoDB connection is already in progress.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '');
    debug('Connected to MongoDB');
  } catch (error) {
    debug('MongoDB connection error: ', error);
  }
};

export default connectDB;
