import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

export interface MonthBudgetDocument extends Document {
  amount: number;
  user_id: Types.ObjectId;
  year: number;
  month: string;
  spentAmount: number;
  timestamps: SchemaTimestampsConfig;
}
