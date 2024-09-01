import mongoose, { Schema } from 'mongoose';
import IncomeType from './guard/income';

const IncomeSchema: Schema = new Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const IncomeModel = mongoose.model<IncomeType>('Income', IncomeSchema);

export default IncomeModel;
