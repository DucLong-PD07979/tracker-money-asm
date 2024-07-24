import mongoose, { Schema } from 'mongoose';
import { BudgetCategories } from './guard/budgetCategories';

const budgetCateSchema = new Schema<BudgetCategories>(
  {
    amount: { type: Number, required: true },
    description: { type: String },
    currency_code: { type: String, default: 'VND' },
    id_expense_cate: { type: String, required: true, ref: 'categoriesexpenes' }
  },
  { timestamps: true }
);

const BudgetCateModel = mongoose.model<BudgetCategories>('budgetCate', budgetCateSchema);
export default BudgetCateModel;
