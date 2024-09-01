import mongoose, { Document } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

interface InCome extends Document {
  user_id: mongoose.Types.ObjectId;
  amount: number;
  category: string;
  description?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  timestamps: SchemaTimestampsConfig;
}

export default InCome;
