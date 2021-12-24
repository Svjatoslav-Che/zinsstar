import { SocialStatus } from './social-status.enum';

export class User {
  id?: string;
  role?: UserRole;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  dob?: string;
  profession?: string;
  gender?: string;
  social_status?: SocialStatus;
  academic_position?: string;
  phone?: string;
  street?: string;
  house?: string;
  zip?: string;
  city?: string;
  country?: string;
  birth_country?: string;
  birth_city?: string;
  nationality?: string;
  nationality_2?: string;
  us_citizen?: boolean;
  pay_tax_country?: string;
  created?: Date;
  updated?: Date;
}

export enum UserRole {
  ADMIN,
  CUSTOMER,
}

export interface UserPayload {
  id: string;
  phone?: string;
  role: UserRole;
  verified: boolean;
  email?: string;
  password?: string;
  first_name: string;
  last_name: string;
}
