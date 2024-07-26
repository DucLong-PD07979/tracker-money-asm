import mongoose, { Schema, Types } from 'mongoose';
import { BudgetsDocument, YearlyBudget } from './guard/budgets';

const MonthBudgetSchema = new Schema({
  amount: { type: Number, required: true },
  budgetCategories: [{ type: [Types.ObjectId], ref: 'budgetCategories' }]
});

const YearlyBudgetSchema = new Schema<YearlyBudget>(
  {
    amount: { type: Number, required: true },
    amount_actually: { type: Number, required: true, default: 0 },
    balance: { type: Number, required: false },
    year: { type: Number, required: true },
    user_id: { type: Schema.ObjectId, required: true },
    month: {
      type: Map,
      of: MonthBudgetSchema,
      required: true
    }
  },
  { timestamps: true }
);

const BudgetsSchema = new Schema<BudgetsDocument>({
  budgets: {
    type: Map,
    of: YearlyBudgetSchema,
    required: true
  }
});

const BudgetsModel = mongoose.model<BudgetsDocument>('budgets', BudgetsSchema);
export default BudgetsModel;
