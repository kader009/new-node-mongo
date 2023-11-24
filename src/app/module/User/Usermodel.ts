import { Schema, model } from 'mongoose';
import { TAddressobj, TFullName, TUser } from './User.interface';

const FullnameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
});

const AdreesSchema = new Schema<TAddressobj>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const UserSChema = new Schema<TUser>({
  userId: { type: Number, required: [true, 'ID is required'], unique: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false
  },
  fullName: FullnameSchema,
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
    values: [true, false],
    default: false,
  },
  hobbies: {
    type: String,
    values: ['Gardening', 'Fishing'],
    default: 'Fishing',
  },
  address: AdreesSchema,
});

export const UserModel = model<TUser>('UserModel', UserSChema);
