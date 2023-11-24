import { Request, Response } from 'express';
import { UserServices } from './Userservice';
import { UserModel } from './Usermodel';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.users;
    const result = await UserServices.createUserDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.find({}, `username fullName age email address`);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const PutUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.find({}, `username fullName age email address`);
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};




export const UserController = {
  createUser,
  GetUser,
  PutUser
};
