import mongoose, { Schema, Document } from 'mongoose';
import IUser from './guard/userGuard';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  provider: {
    type: String,
    enum: ['google', 'facebook', 'local'],
    required: true
  },
  emailVerify: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: ['ADMIN', 'CUSTOMER'],
    default: 'CUSTOMER'
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  country: {
    type: String
  },
  note: {
    type: String
  }
});

const UserModel = mongoose.model<IUser>('User', userSchema);
export default UserModel;
