import { Document } from 'mongoose';
import { SchemaTimestampsConfig } from './common';

interface Categories extends Document {
  label: string;
  value: string;
  type: 'expense' | 'expense recurrring' | 'both';
  timestamps: SchemaTimestampsConfig;
}

export default Categories;
