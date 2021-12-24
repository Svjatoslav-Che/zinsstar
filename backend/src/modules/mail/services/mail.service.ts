import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserOffersEntity } from '../../../data/model/user-offer.entity';
import { UserEntity } from '../../../data/model/user.entity';
import { UserDocsEntity } from '../../../data/model/user-documents.entity';
import { UserNotFoundException } from '../../auth/exceptions/user-not-found.exception';
import { DocumentStatus } from '../../documents/models/doc-status.enum';
import { BanksEntity } from '../../../data/model/bank.entity';
import { OffersEntity } from '../../../data/model/offer.entity';
import { EmailUtils } from '../../../common/utils/email.utils';
import { DocType } from '../../documents/models/doc-type.enum';

@Injectable()
export class MailService {
  private logger: Logger = new Logger(MailService.name);

  public constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    @InjectRepository(UserDocsEntity)
    private userDocsRepo: Repository<UserDocsEntity>,
    private mailerService: MailerService,
  ) {
  }

  public async sendVerifiedDocuments(user: UserEntity): Promise<void> {
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);
    const emailSend = await this.mailerService.sendMail({
      to: email,
      subject: 'Ihr Account ist verifiziert!',
      template: path.join(__dirname, '..', 'templates/account_verified'),
      context,
    });

    this.logger.debug(JSON.stringify(emailSend));
  }

  public async sendVerifyEmailMessage(email_: string, data: any): Promise<void> {
    const userInDB = await this.userRepo.findOne({ email: email_ });
    if (!userInDB) {
      throw new NotFoundException();
    }
    const {
      first_name, last_name, email, gender,
    } = userInDB;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);

    const emailSend = await this.mailerService.sendMail({
      to: email,
      subject: 'Email Verifizierung',
      template: path.join(__dirname, '..', 'templates/verify_email'),
      context: {
        ...context,
        verifyLink: data.link,
      },
    });

    this.logger.debug(JSON.stringify(emailSend));
  }

  public async sendEmailVerified(email_: string): Promise<void> {
    const user = await this.findByEmail(email_);
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);

    const title = 'Email Verifizierung Erfolgreich';
    const context = EmailUtils.getContext(name);

    const emailSend = await this.mailerService.sendMail({
      to: email,
      subject: title,
      template: path.join(__dirname, '..', 'templates/account_verified'),
      context,
    });

    this.logger.debug(JSON.stringify(emailSend));
  }

  public async sendWelcomeMessage(email_: string): Promise<void> {
    const user = await this.findByEmail(email_);
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);

    const emailSend = await this.mailerService.sendMail({
      to: email,
      subject: 'Herzlich Willkommen bei ZinsUnion!',
      template: path.join(__dirname, '..', 'templates/welcome'),
      context,
    });

    this.logger.debug(JSON.stringify(emailSend));
  }

  public async sendKYC(user: UserEntity): Promise<void> {
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const subject = 'Verifizierungsinformation';
    const context = EmailUtils.getContext(name);

    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/kyc_instructions'),
      context,
    });
    this.logger.log(emailSent);
  }

  public async sendDeclinedDoc(user: UserEntity, type: DocType | string, reason: string): Promise<void> {
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);

    const subject = 'Verifizierung Fehlgeschlagen';
    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/document_declined'),
      context: {
        ...context,
        subject,
        reason,
        type,
      },
    });

    this.logger.log(JSON.stringify(emailSent));
  }

  public async sendDocVerified(user: UserEntity, type: DocType): Promise<void> {
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);

    const subject = 'Bestätigung erfolgreich';
    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/document_approved'),
      context: {
        ...context,
        subject,
        type,
      },
    });

    this.logger.log(JSON.stringify(emailSent));
  }

  public async sendInvestmentRequest(user: UserEntity, bank: BanksEntity, offer: OffersEntity, userOffer: UserOffersEntity): Promise<void> {
    const {
      first_name, last_name, email, gender,
    } = user;
    const name = EmailUtils.nameFormatter(first_name, last_name, gender);
    const context = EmailUtils.getContext(name);

    const overnight = `${offer.is_overnight ? 'Tagesgeldauswahl' : 'Festgeldauswahl'}`;
    const subject = `Ihre ${overnight} bei der ${bank.name}`;
    const { amount } = userOffer;
    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/inv_application'),
      context: {
        ...context,
        subject,
        isOvernight: overnight,
        bank_name: bank.name,
        amount,
        currency: 'EUR',
        date: EmailUtils.monthYear(offer.duration),
        interest_rate: offer.interest_rate,
      },
    });
    this.logger.log(JSON.stringify(emailSent));

    try {
      const userDocs = await this.userRepo.findOne({ where: { email }, relations: ['docs'] });
      if (!userDocs) {
        throw new NotFoundException();
      }
      const { docs } = userDocs;

      if ([docs.idStatus, docs.passportStatus, docs.selfieStatus].includes(DocumentStatus.NA)) {
        await this.sendKYC(user);
      }
    } catch (e) {
      this.logger.error(e);
    }
  }

  public async sendInvestmentReceived(investmentId: number, user: UserEntity, amount: number, currency: string, date: Date): Promise<void> {
    const name = EmailUtils.nameFormatter(user.first_name, user.last_name, user.gender);
    const context = EmailUtils.getContext(name);

    const subject = 'Investment Received';
    const emailSent = await this.mailerService.sendMail({
      to: user.email,
      subject,
      template: path.join(__dirname, '..', 'templates/successfull_deposit'),
      context: {
        ...context,
        subject,
        amount,
        currency,
        date,
        ref_number: investmentId,
      },
    });
    this.logger.log(JSON.stringify(emailSent));
  }

  public async sendInvestmentApproved(user: UserEntity, amount: number, currency: string): Promise<void> {
    const name = EmailUtils.nameFormatter(user.first_name, user.last_name, user.gender);
    const context = EmailUtils.getContext(name);

    const {
      acc_holder, iban, bic, referenceCode,
    } = user;

    const subject = 'Investment Approved';
    const emailSent = await this.mailerService.sendMail({
      to: user.email,
      subject,
      template: path.join(__dirname, '..', 'templates/first_deposit'),
      context: {
        ...context,
        subject,
        amount: EmailUtils.numberThousandSeparator(amount),
        currency,
        accountName: acc_holder,
        iban,
        bic,
        referenceCode,
      },
    });
    this.logger.log(JSON.stringify(emailSent));
  }

  public async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ email });
    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }

  public async sendResetPasswordEmail(email: string, confirmationLink: string): Promise<void> {
    const subject = 'Reset password';
    const context = EmailUtils.getContext();

    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/reset_password'),
      context: {
        ...context,
        confirmationLink,
        subject,
      },
    });
    this.logger.log(JSON.stringify(emailSent));
  }

  public async sendNewPasswordEmail(email: string, password: string): Promise<void> {
    const context = EmailUtils.getContext();
    const subject = 'New password';
    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject,
      template: path.join(__dirname, '..', 'templates/new_password'),
      context: {
        ...context,
        password,
        subject,
      },
    });

    this.logger.log(JSON.stringify(emailSent));
  }
}
