import mongoose, { Schema } from 'mongoose';
import Categories from './guard/categories';

const categoriesShema = new Schema<Categories>(
  {
    type: { type: String, required: true, enum: ['expense', 'expense recurring', 'both'], default: 'expense' },
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
  { timestamps: true }
);

const CategoriesModel = mongoose.model<Categories>('CategoriesExpenes', categoriesShema);
export default CategoriesModel;
