import {
  Body, Controller, Post, ValidationPipe,
} from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MailService } from './services/mail.service';

export class EmailDTO {
  @IsEmail()
  @ApiProperty({ name: 'email' })
  email: string;
}
@Controller('mail')
export class MailController {
  public constructor(private service: MailService) { }

  @Post()
  public sendMail(@Body(new ValidationPipe()) data: EmailDTO) {
    return this.service.sendWelcomeMessage(data.email);
  }
}
