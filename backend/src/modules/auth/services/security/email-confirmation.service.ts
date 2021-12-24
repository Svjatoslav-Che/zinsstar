import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { config } from 'node-config-ts';
import { UserEntity } from '../../../../data/model/user.entity';
import { MailService } from '../../../mail/services/mail.service';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';
import { VerificationTokenPayload } from '../../models/token.model';

@Injectable()
export class EmailConfirmationService {
  public constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private mailService: MailService,
  ) { }

  async getById(userId: string) {
    const user = await this.userRepo.findOne({ id: userId });
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userRepo.findOne({ email });
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async confirmEmail(email: string) {
    const user = await this.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.markEmailAsConfirmed(email);
  }

  async markEmailAsConfirmed(email: string) {
    const mark = await this.userRepo.update(
      { email },
      {
        isEmailConfirmed: true,
      },
    );
    try {
      await this.mailService.sendEmailVerified(email);
    } catch (e) {
      throw new BadRequestException(e);
    }
    return mark;
  }

  async decodeConfirmationToken(token: string) {
    try {
      const payload = await this.jwtService.verify(token, {
        secret: config.application.jwt.verification,
      });

      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }

  async resendConfirmationLink(email: string) {
    const user = await this.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.sendVerificationLink(user.email);
  }

  async sendVerificationLink(email: string) {
    const payload: VerificationTokenPayload = { email };
    const token = this.jwtService.sign(payload, {
      secret: config.application.jwt.secret,
      expiresIn: `${config.application.jwt.emailExpiration}`,
    });

    const url = `${config.mail.confirmation}?token=${token}`;
    const data = { link: url };
    await this.mailService.sendVerifyEmailMessage(email, data);
  }
}
