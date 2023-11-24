import { TUser } from './User.interface';
import { UserModel } from './Usermodel';

const createUserDB = async (user: TUser) => {
  const getResult = await UserModel.create(user);
  return getResult;
};

const GetUserDB = async (user: TUser) => {
  const getResult = await UserModel.create(user);
  return getResult;
};

const PutUserDB = async (userId: string) => {
  const getResult = await UserModel.findById(userId);
  return getResult;
};


export const UserServices = {
  createUserDB,
  GetUserDB,
  PutUserDB
};
