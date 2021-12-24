
export enum UserRole {
  ADMIN,
  CUSTOMER,
}
export interface UserModel {
  id: string;
  email: string;
  role: UserRole;
  verified: boolean;
  first_name: string;
  last_name: string;
}

export interface JwtRawToken {
  user: UserModel;
  iat: number;
  exp: number;
}
