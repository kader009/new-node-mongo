export interface TFullName {
  firstName: string;
  lastName: string;
}

export interface TAddressobj {
  street: string;
  city: string;
  country: string; 
}

export interface TUser {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: 'Gardening' | 'Fishing';
  address: TAddressobj;
}
