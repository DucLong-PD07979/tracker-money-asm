import mongoose from 'mongoose';
import { URL_DATABASE } from './environment';

const connectDB = async () => {
  const mongoUri = URL_DATABASE;
  if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment variables.');
  }
  try {
    const conn = await mongoose.connect(mongoUri!, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
