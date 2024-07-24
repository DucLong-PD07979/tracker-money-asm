import { Document } from 'mongoose';

export interface SchemaTimestampsConfig extends Document {
  createdAt?: boolean | string;
  updatedAt?: boolean | string;
  currentTime?: () => Date | number;
}
