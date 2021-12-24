import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'node-config-ts';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserSecurityService } from './services/security/user-security.service';
import { JwtStrategy } from './guards/jwt-strategy';
import { JwtAuthGuard } from './guards/jwt-guard';
import { UserDocsEntity } from '../../data/model/user-documents.entity';
import { EmailConfirmationService } from './services/security/email-confirmation.service';
import { UserEntity } from '../../data/model/user.entity';
import { MailModule } from '../mail/mail.module';
import { UserModule } from '../user/user.module';
import { VerificationCodeEntity } from '../../data/model/verification-code.entity';

@Module({
  imports: [
    UserModule,
    MailModule,
    TypeOrmModule.forFeature([UserEntity, UserDocsEntity, VerificationCodeEntity]),
    JwtModule.register({
      secret: config.application.jwt.secret,
      signOptions: { expiresIn: config.application.jwt.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserSecurityService,
    EmailConfirmationService,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [
    AuthService,
    UserSecurityService,
    EmailConfirmationService,
    JwtStrategy,
    JwtAuthGuard,
  ],
})
export class AuthModule { }
