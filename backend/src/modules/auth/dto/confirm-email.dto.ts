import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class ConfirmEmailDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}
export class ConfirmEmailDto2 {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
