import {
  BadRequestException, Body, Controller, Get, HttpStatus, Logger, Post, Query, Res, UseGuards, ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { from, Observable } from 'rxjs';
import { config } from 'node-config-ts';
import { UpdateResult } from 'typeorm';
import { UserSecurityService } from '../services/security/user-security.service';

import { ConfirmEmailDto } from '../dto/confirm-email.dto';
import { EmailConfirmationService } from '../services/security/email-confirmation.service';
import { LoginDTO } from '../../user/dto/login.dto';
import { RegisterDTO } from '../../user/dto/register.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { ConfirmationCodeDto } from '../dto/confirmation-code.dto';
import { ITokenPayload } from '../models/token.model';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { GetUser } from '../decorators/get-user.decorator';
import { UserPayload } from '../../user/models/user.class';
import { JwtAuthGuard } from '../guards/jwt-guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  private logger: Logger = new Logger(AuthController.name);

  public constructor(
    private readonly userSecurityService: UserSecurityService,
    private emailConfirmationService: EmailConfirmationService,
  ) { }

  @Get('check') // @ts-ignore
  public checkEmail(@Query('email') email: string): Promise<{ exist: boolean; blacklisted: boolean }> {
    if (!email) throw new BadRequestException();

    return this.userSecurityService.checkEmail(email);
  }

  @Post('register')
  public async create(@Body() user: RegisterDTO): Promise<any> {
    const data = await this.userSecurityService.create(user);
    // await this.emailConfirmationService.resendConfirmationLink(user.email);
    return data;
  }

  @Post('password/change')
  @UseGuards(JwtAuthGuard)
  public async change(@GetUser() user: UserPayload, @Body() data: ChangePasswordDto): Promise<UpdateResult> {
    return this.userSecurityService.changePassword(user.id, data.password, data.newPassword);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login endpoint' })
  public async login(@Body(ValidationPipe) data: LoginDTO): Promise<Observable<ITokenPayload>> {
    return from(this.userSecurityService.login(data));
  }

  @Post('confirm')
  public async confirm(@Body(new ValidationPipe()) data: ConfirmEmailDto): Promise<void> {
    const email = await this.emailConfirmationService.decodeConfirmationToken(
      data.token,
    );
    await this.emailConfirmationService.confirmEmail(email);
  }

  @Post('restore')
  public async resetPassword(@Body() data: ResetPasswordDto): Promise<void> {
    return this.userSecurityService.restorePasswordRequest(data.email);
  }

  @Get('/restore/verify')
  @ApiResponse({ status: HttpStatus.TEMPORARY_REDIRECT, description: 'Verify user password restore request' })
  public async verifyPassword(@Res() response, @Query() query: ConfirmationCodeDto): Promise<void> {
    try {
      await this.userSecurityService.restorePasswordVerify(query.confirmationCode, query.email);

      return response.redirect(`${config.application.domain}/account/recovery/verify?success=true`);
    } catch (e) {
      this.logger.error(e);

      return response.redirect(`${config.application.domain}/account/recovery/verify?success=false&error=${e.message}`);
    }
  }

  // @Post('resend-confirmation-link')
  // @UseGuards(JwtAuthGuard)
  // async resendConfirmationLink(@GetUser() user: UserPayload) {
  //   await this.userSecurityService.resendConfirmationLink(user.email);
  // }

  // @Post('resend-confirmation-link')
  // async test(@Body(new ValidationPipe()) user: ConfirmEmailDto2) {
  //   await this.emailConfirmationService.resendConfirmationLink(user.email);
  // }
}
