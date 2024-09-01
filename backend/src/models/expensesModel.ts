import mongoose, { Schema } from 'mongoose';
import Expense from './guard/expenses';

const expenseSchema = new Schema<Expense>(
  {
    amount: { type: Number, required: true },
    id_expense_cate: { type: Schema.ObjectId, ref: 'categoriesexpenes', required: false },
    is_paid: { type: Boolean, required: false },
    description: { type: String, required: false },
    user_id: { type: Schema.ObjectId, required: true },
    duration: { type: Date, required: false },
    currency_code: { type: String, required: false, default: 'VND' }
  },
  { timestamps: true }
);

const ExpenseModel = mongoose.model<Expense>('expense', expenseSchema);
export default ExpenseModel;
