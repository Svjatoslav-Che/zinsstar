import { Injectable, Logger } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { ITokenPayload } from '../../models/token.model';
import { UserEntity } from '../../../../data/model/user.entity';
import { UserPayload, UserRole } from '../../../user/models/user.class';
import { config } from 'node-config-ts';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  public constructor(private readonly jwtService: JwtService) {}

  public async generateJWT2(user: UserPayload): Promise<ITokenPayload> {
    const options = { expiresIn: config.application.jwt.expiresIn };
    if (user.role === UserRole.ADMIN) {
      options.expiresIn = config.application.jwt.adminExpiresIn;
    }
    const jwt: string = await this.jwtService.signAsync({ user }, options);
    return {
      access: jwt,
      refresh: '',
      type: 'Bearer',
    };
  }

  public async hashPassword2(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  public async comparePasswords2(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
