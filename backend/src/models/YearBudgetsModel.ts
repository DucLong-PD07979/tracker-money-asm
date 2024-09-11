import mongoose, { Schema } from 'mongoose';
import YearlyBudgetDocument from './guard/budgetsYear';

const YearlyBudgetSchema = new Schema<YearlyBudgetDocument>(
  {
    amount: { type: Number, required: true },
    amount_actually: { type: Number, required: true, default: 0 },
    user_id: { type: Schema.ObjectId, required: true, ref: 'user' },
    year: { type: Number, required: true },
    balance: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const YearlyBudgetModel = mongoose.model<YearlyBudgetDocument>('YearlyBudget', YearlyBudgetSchema);

export default YearlyBudgetModel;
