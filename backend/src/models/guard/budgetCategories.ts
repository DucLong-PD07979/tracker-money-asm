import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

export interface BudgetCategories extends Document {
  _id: Types.ObjectId;
  id_expense_cate: string;
  amount: number;
  description: string;
  currency_code: string;
  timestamps: SchemaTimestampsConfig;
}

export default BudgetCategories;
