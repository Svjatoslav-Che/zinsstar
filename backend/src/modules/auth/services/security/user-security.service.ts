import {
  BadGatewayException,
  BadRequestException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { config } from 'node-config-ts';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { UserDocsEntity } from '../../../../data/model/user-documents.entity';
import { UserService } from '../../../user/services/user.service';
import { MailService } from '../../../mail/services/mail.service';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';
import { UserEntity } from '../../../../data/model/user.entity';
import { UserPayload, UserRole } from '../../../user/models/user.class';
import { LoginDTO } from '../../../user/dto/login.dto';
import { RegisterDTO } from '../../../user/dto/register.dto';
import { EmailUtils } from '../../../../common/utils/email.utils';
import { VerificationCodeEntity } from '../../../../data/model/verification-code.entity';
import { ITokenPayload } from '../../models/token.model';

const DEFAULT_PASSWORD_LENGTH: number = 24;

@Injectable()
export class UserSecurityService {
  private readonly logger = new Logger('UserSecurityService');

  public constructor(
    private authService: AuthService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private mailService: MailService,
    @InjectRepository(VerificationCodeEntity) private readonly verificationCodeEntityRepository: Repository<VerificationCodeEntity>,
  ) { }

  async markEmailAsConfirmed(email: string) {
    return await this.userService.markEmailAsConfirmed(email);
  }

  async resendConfirmationLink(email: string) {
    const user = await this.getByEmail(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    // await this.emailV.sendVerificationLink(user.email);
  }

  async getByEmail(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  findOne(id: string): Observable<any> {
    return from(this.userService.getUserById(id)).pipe(
      map((user: UserEntity) => {
        const userPayload: UserPayload = {
          id: user.id,
          email: user.email,
          role: user.role,
          verified: user.verified,
          password: user.password,
          last_name: user.last_name,
          first_name: user.first_name,
        };
        return userPayload;
      }),
    );
  }

  async getById(userId: string) {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  validateUser(email: string, password: string): Observable<any> {
    return from(this.userService.findByEmail(email)).pipe(
      switchMap((user: UserEntity) => from(this.authService.comparePasswords2(password, user.password)).pipe(
        map((match: boolean) => {
          this.logger.debug(`password match ? ${match}`);
          if (match) {
            return user;
          }
          throw Error;
        }),
      )),
      catchError((error) => error),
    );
  }

  public async login(credentials: LoginDTO): Promise<ITokenPayload> {
    const user: UserEntity | undefined = await this.userService.findByEmail(credentials.email);
    if (!user) {
      throw new UserNotFoundException();
    }

    const passwordMatch = await this.authService.comparePasswords2(
      credentials.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const userPayload: UserPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
      verified: user.verified,
      phone: user.phone.replace('+', ''),
      first_name: user.first_name,
      last_name: user.last_name,
    };

    return this.authService.generateJWT2(userPayload);
  }

  public async changePassword(id: string, password: string, newPassword: string): Promise<UpdateResult> {
    const userEntity: UserEntity = await this.userService.getUserById(id);
    // eslint-disable-next-line no-underscore-dangle
    if (userEntity._password !== password) {
      throw new BadRequestException('Specified password is wrong');
    }

    return this.userService.updatePassword(userEntity.id, newPassword);
  }

  async create(user: RegisterDTO): Promise<any> {
    const {
      email,
      password,
      first_name,
      last_name,
      dob,
      profession,
      gender,
      social_status,
      academic_position,
      phone,
      street,
      house,
      zip,
      city,
      country,
      birth_country,
      birth_city,
      nationality,
      nationality_2,
      us_citizen,
    } = user;
    const checkEmail = await this.userService.findByEmail(email);
    if (checkEmail) {
      throw new BadRequestException('Email already in use ');
    }
    const newUser = new UserEntity();
    newUser.first_name = first_name;
    newUser._password = password;
    newUser.academic_position = academic_position;
    newUser.social_status = social_status;
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.dob = dob;
    newUser.profession = profession;
    newUser.gender = gender;
    newUser.password = password;
    newUser.email = email;
    newUser.us_citizen = us_citizen;
    if (nationality_2) newUser.nationality_2 = nationality_2;
    newUser.nationality = nationality;
    newUser.birth_city = birth_city;
    newUser.birth_country = birth_country;
    newUser.city = city;
    newUser.country = country;
    newUser.street = street;
    newUser.house = house;
    newUser.zip = zip;
    newUser.phone = phone;
    newUser.role = UserRole.CUSTOMER;
    const saved = await newUser.save();
    if (saved) {
      await this.generateDocumentsForUser(saved);
      try {
        Promise.all([
          this.mailService.sendWelcomeMessage(email),
          this.mailService.sendKYC(saved),
        ]);
      } catch (e) {
        this.logger.error(e);
      }

      return this.login({ email, password });
    }
  }

  async generateDocumentsForUser(user: UserEntity) {
    try {
      const docs: UserDocsEntity = new UserDocsEntity();
      docs.owner = user;
      const saved = await docs.save();
      user.docs = saved;
      await user.save();
    } catch (err) {
      this.logger.error(JSON.stringify(err));
    }
  }

  public async checkEmail(email: string): Promise<{ exist: boolean; blacklisted: boolean }> {
    const userEntity: UserEntity | undefined = await this.userService.findByEmail(email);
    const isEmailBlackListed = EmailUtils.isEmailBlackListed(email);

    return { exist: !!userEntity, blacklisted: isEmailBlackListed };
  }

  public async restorePasswordRequest(email: string): Promise<void> {
    const userEntity: UserEntity | null = await this.userService.findByEmail(email);

    const confirmationCode: string = EmailUtils.generateRandomHash();
    const confirmationLink: string = `${config.application.apiUrl}/auth/restore/verify?confirmationCode=${confirmationCode}&email=${email}`;

    await this.verificationCodeEntityRepository.insert(new VerificationCodeEntity({ userId: userEntity.id, code: confirmationCode }));

    this.mailService.sendResetPasswordEmail(userEntity.email, confirmationLink);

    this.logger.log(`User id: ${userEntity.id} requested password restoring`, `${this.constructor.name}:${this.restorePasswordRequest.name}`);
  }

  public async restorePasswordVerify(verificationCode: string, email: string): Promise<void> {
    const userEntity: UserEntity | null = await this.userService.findByEmail(email);
    if (!userEntity) throw new NotFoundException('User not found');

    const confirmationCodeEntity = await this.verificationCodeEntityRepository.find({ where: { userId: userEntity.id } });
    if (!confirmationCodeEntity) {
      throw new ForbiddenException('Verification token expired, try create a new one');
    }

    const verificationCodeEntity = confirmationCodeEntity.find((entity) => entity.code === verificationCode);
    if (!verificationCodeEntity) {
      throw new BadGatewayException('Invalid verificationToken');
    }
    await this.verificationCodeEntityRepository.delete(verificationCodeEntity.id);

    const password: string = EmailUtils.generateRandomHash(DEFAULT_PASSWORD_LENGTH);
    await this.userService.updatePassword(userEntity.id, password);

    await this.mailService.sendNewPasswordEmail(userEntity.email, password);

    this.logger.log(`User id: ${userEntity.id} restored password`);
  }
}
