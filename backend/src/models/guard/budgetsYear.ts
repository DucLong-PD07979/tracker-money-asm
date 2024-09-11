import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

export interface YearlyBudgetDocument extends Document {
  amount: number;
  amount_actually: number;
  user_id: Types.ObjectId;
  year: number;
  balance: number;
  timestamps: SchemaTimestampsConfig;
}

export default YearlyBudgetDocument;
