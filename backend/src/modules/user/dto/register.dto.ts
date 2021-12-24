import {
  IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SocialStatus } from '../models/social-status.enum';
import { Gender } from '../models/gender.enum';
import { AcademicPosition, Jobs } from '../models/job.enum';

export class RegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'examle@example.com' })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  @ApiProperty({ required: true, example: '123123' })
  password: string;

  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  first_name: string;

  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'Date of birth',
    example: '01-01-1999',
  })
  dob: string;

  @IsEnum(Jobs)
  @IsNotEmpty()
  @ApiProperty({
    enum: Jobs,
    type: 'enum',
    description: 'Profession',
    example: Jobs.self_employed,
  })
  profession: Jobs;

  @IsNotEmpty()
  @IsEnum(Gender)
  @ApiProperty({ enum: Gender, type: 'enum', description: 'Gender' })
  gender: Gender;

  @IsEnum(SocialStatus)
  @IsNotEmpty()
  @ApiProperty({ enum: SocialStatus, type: 'enum' })
  social_status: SocialStatus;

  @IsNotEmpty()
  @IsEnum(AcademicPosition)
  @ApiProperty({
    enum: AcademicPosition,
    type: 'enum',
    example: AcademicPosition.None,
  })
  academic_position: AcademicPosition;

  @IsNotEmpty()
  @ApiProperty()
  @IsPhoneNumber()
  @ApiProperty({ type: 'string', example: '+49030123456' })
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  street: string;

  @IsNotEmpty()
  @ApiProperty()
  house: string;

  @IsNotEmpty()
  @ApiProperty()
  zip: string;

  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsNotEmpty()
  @ApiProperty()
  country: string;

  @IsNotEmpty()
  @ApiProperty()
  birth_country: string;

  @IsNotEmpty()
  @ApiProperty()
  birth_city: string;

  @IsNotEmpty()
  @ApiProperty()
  nationality: string;

  @ApiProperty({ default: false, required: false })
  nationality_2: string;

  @IsNotEmpty()
  @ApiProperty({ default: false })
  us_citizen: boolean;

  @IsNotEmpty()
  @ApiProperty({ default: 'DEU' })
  pay_tax_country: string;
}
