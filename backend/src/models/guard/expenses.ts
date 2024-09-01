import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

interface Expenses extends Document {
  _id: Types.ObjectId;
  amount: number;
  id_expense_cate: Types.ObjectId;
  is_paid: boolean;
  user_id: Types.ObjectId;
  description: string;
  duration: Date;
  currency_code: string;
  timestamps: SchemaTimestampsConfig;
}

export default Expenses;
