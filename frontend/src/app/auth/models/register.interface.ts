import {Jobs} from './profession.interface';
import {SocialStatus} from './user.enum';
import {AcademicPositionEnum} from './academic-title.class';
import {Gender} from '../services/auth.service';

export interface Register {
  email?: string;
  offer_id?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  dob?: string;
  profession?: Jobs;
  gender?: Gender;
  social_status?: SocialStatus;
  academic_position?: AcademicPositionEnum;
  phone?: string;
  street?: string;
  pay_tax_country?: string;
  house?: string;
  zip?: number;
  city?: string;
  country?: string;
  birth_country?: string;
  birth_city?: string;
  nationality?: string;
  nationality_2?: string;
  us_citizen?: boolean;
}
