import mongoose, { Schema } from 'mongoose';
import { MonthBudgetDocument } from './guard/monthBudgets';

const MonthBudgetSchema = new Schema<MonthBudgetDocument>(
  {
    amount: { type: Number, required: true },
    user_id: { type: Schema.ObjectId, required: true, ref: 'users' },
    year: { type: Number, required: true },
    month: { type: String, required: true },
    spentAmount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const MonthBudgetModel = mongoose.model<MonthBudgetDocument>('MonthBudget', MonthBudgetSchema);

export default MonthBudgetModel;
