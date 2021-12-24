import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

const description = 'User confirmation code for password recovery';

export class ConfirmationCodeDto {
  @ApiProperty({ example: '3bfh289h23gh29hg924hg92hg9h2r9ghr9', description })
  @IsString()
  @IsNotEmpty()
  public confirmationCode: string;

  @ApiProperty({ example: 'tony.cherednikov@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  public email: string;
}
