import UserModel from '@/models/userModel';

const getUserInforWithToken = async (userPayload: any) => {
  try {
    const userInfor = await UserModel.findById(userPayload._id).exec();
    return userInfor;
  } catch (error) {
    console.log(error);
  }
};

export { getUserInforWithToken };
