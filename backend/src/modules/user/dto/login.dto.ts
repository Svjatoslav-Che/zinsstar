import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: 'string',
    description: 'email',
    example: 'examle@example.com',
  })
  public email: string;

  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'password', example: '123123' })
  public password: string;
}
