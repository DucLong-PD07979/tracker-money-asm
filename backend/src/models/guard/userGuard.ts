interface IUser extends Document {
  name: string;
  username: string;
  provider: string;
  emailVerify?: boolean;
  avatar?: string;
  password?: string;
  email: string;
  role: string;
  phone?: string;
  address?: string;
  country?: string;
  note?: string;
}

export default IUser;
