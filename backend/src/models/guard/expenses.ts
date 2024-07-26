import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

interface Expenses extends Document {
  _id: Types.ObjectId;
  amount: number;
  id_cate_expenses: Types.ObjectId;
  is_paid: boolean;
  user_id: Types.ObjectId;
  description: string;
  duration: string;
  currency_code: string;
  timestamps: SchemaTimestampsConfig;
}

export default Expenses;
