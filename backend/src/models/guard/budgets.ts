import { Document, Types } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

export interface MonthBudget {
  amount: number;
  budgetCategories: Types.ObjectId[];
}

export interface YearlyBudget {
  amount: number;
  amount_actually: number;
  balance: number;
  user_id: Types.ObjectId;
  year: number;
  timestamps: SchemaTimestampsConfig;
  month: {
    [month: string]: MonthBudget;
  };
}

export interface Budgets {
  [year: string]: YearlyBudget;
}

export interface BudgetsDocument extends Document {
  budgets: Budgets;
}

export default BudgetsDocument;
