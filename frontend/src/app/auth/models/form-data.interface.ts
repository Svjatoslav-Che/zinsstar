import {AcademicPositionEnum} from './academic-title.class';
import {Jobs} from './profession.interface';
import {SocialStatus} from './user.enum';
import {Gender} from '../services/auth.service';

export const t = {
  academic_position: AcademicPositionEnum.empty,
  birth_city: '',
  dob: '00-00-0000',
  birth_country: '',
  email: '',
  nationality: '',
  nationality_2: '',
  offer_id: '',
  password: '',
  pay_tax_country: '',
  phone: '',
  profession: Jobs.worker,
  social_status: SocialStatus.divorced,
  us_citizen: false,
  zip: 0
};

export interface FirstForm {
  gender: Gender;
  academic_position: AcademicPositionEnum;
  first_name: string;
  last_name: string;
  dob: string;
}

export interface SecondForm {
  phone: string;
  street: string;
  house: string;
  zip: string;
  city: string;
  country: string;
}

export interface ThirdForm {
  social_status: SocialStatus;
  profession: Jobs;
  birth_country: string;
  birth_city: string;
  nationality: string;
  nationality_2: string;

}

export interface ForthForm {
}
