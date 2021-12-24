import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import * as FS from 'fs';
import { CustomQuery } from './models/custom-search';
import { ApproveDocumentDTO, ApproveInvestmentDTO } from './dto/approve.dto';
import { UserBankDetailsDTO } from './dto/user-ban-details.dto';
import { UserService } from '../user/services/user.service';
import { DocumentsService } from '../documents/services/documents.service';
import { UserOffersService } from '../user/services/user-offers.service';
import { MailService } from '../mail/services/mail.service';
import { UserEntity } from '../../data/model/user.entity';
import { DocType } from '../documents/models/doc-type.enum';
import { DocumentStatus } from '../documents/models/doc-status.enum';
import { UserOfferStatus } from '../user/models/offer-status.enum';
import { Currency } from '../country/models/currency.enum';
import { UserDocsEntity } from '../../data/model/user-documents.entity';

@Injectable()
export class AdminService {
  private logger: Logger = new Logger(AdminService.name);

  public constructor(
    private userService: UserService,
    private docService: DocumentsService,
    private userOffers: UserOffersService,
    private mailService: MailService,
  ) {
  }

  async paginateUsers(customQuery: CustomQuery, options: IPaginationOptions): Promise<Pagination<UserEntity>> {
    const queryBuilder = this.userService.userRepository.createQueryBuilder('u')
      .where('u.verified = :verified', { verified: Boolean(customQuery.verified) })
      .innerJoinAndSelect('u.docs', 'docs')
      .orWhere(' docs.idStatus = :idStatus ', { idStatus: customQuery.card })
      .orWhere(' docs.passportStatus = :passportStatus ', { passportStatus: customQuery.passport })
      .orWhere(' docs.selfieStatus = :selfieStatus ', { selfieStatus: customQuery.selfie });
    return paginate<UserEntity>(queryBuilder, options);
  }

  async getUserOffers(userId: string) {
    const user = await this.userService.userRepository.findOne({ where: { id: userId } });
    return this.userOffers.repo.find({ where: { owner: user }, relations: ['offer', 'offer.bank'] });
  }

  async getUser(id: string) {
    return await this.userService.userRepository.findOne({ where: { id }, relations: ['offers'] });
  }

  public getUsers() {
    return this.userService.userRepository.find({ relations: ['docs', 'offers'] });
  }

  getUserDocuments(userId: string) {
    return this.docService.adminGetUserDocuments(userId);
  }

  getUserInvestments(userId: string) {
    return this.userOffers.adminGetUserOffers(userId);
  }

  public async approveInvestment(approveInvestmentDTO: ApproveInvestmentDTO): Promise<void> {
    const { investmentId, status } = approveInvestmentDTO;

    const investment = await this.userOffers.findOne(investmentId);
    if (!investment) {
      throw new NotFoundException('Investment not found');
    }

    const { owner, amount } = investment;
    const data: { status: UserOfferStatus; bankDetails?: string; investment_start?: Date } = { status };

    switch (status) {
      case UserOfferStatus.APPROVED: {
        data.bankDetails = `Account name: ${owner.acc_holder}, IBan: ${owner.iban}, BIC: ${owner.bic}, Reference Code: ${owner.referenceCode}`;
        await this.mailService.sendInvestmentApproved(owner, amount, Currency.EUR);

        break;
      }
      case UserOfferStatus.RECEIVED: {
        data.investment_start = new Date();

        await this.mailService.sendInvestmentReceived(investmentId, owner, amount, Currency.EUR, data.investment_start);

        break;
      }
      default:
        data.investment_start = null;
        break;
    }

    await this.userOffers.update(investmentId, data);
  }

  async getFiles(userId: string) {
    const user = await this.userService.userRepository.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException();
    }
    return await this.docService.GetFileListing(user);
  }

  public async updateDocStatus(data: ApproveDocumentDTO): Promise<UserDocsEntity> {
    const {
      status, documentId, documentKey, reason,
    } = data;
    const docs = await this.docService.findOne(documentId);

    switch (documentKey) {
      case DocType.idCard:
        docs.idStatus = status;
        if (status === DocumentStatus.DECLINED) {
          docs.idCardReason = reason;
        }
        break;
      case DocType.passport:
        docs.passportStatus = status;
        if (status === DocumentStatus.DECLINED) {
          docs.passportReason = reason;
        }
        break;
      case DocType.selfie:
        docs.selfieStatus = status;
        if (status === DocumentStatus.DECLINED) {
          docs.selfieReason = reason;
        }
        break;
      default:
        break;
    }
    const updated = await docs.save();
    if (status === DocumentStatus.DECLINED) {
      const key = documentKey === DocType.idCard ? 'id card' : documentKey;
      await this.mailService.sendDeclinedDoc(docs.owner, key, reason);
    }
    if (status === DocumentStatus.VERIFIED) {
      await this.mailService.sendDocVerified(docs.owner, documentKey);
    }

    return updated;
  }

  async updateUserBankDetails(userId: string, data: UserBankDetailsDTO) {
    const user = await this.userService.getUserById(userId);
    user.bic = data.bic;
    user.iban = data.iban;
    if (data.accHolder) user.acc_holder = data.accHolder;

    try {
      await user.save();
      return { message: 'Updated !' };
    } catch (e) { this.logger.error(e); }
  }

  async getImageOf(
    phone: string,
    name: string,
    res: Response,
  ): Promise<Observable<any>> {
    if (name === 'no-file.png') {
      return of(res.sendFile(join(process.cwd(), './uploads/no-file.png')));
    }
    // const checkFolderExist =
    // check if directory exists
    if (FS.existsSync(join(process.cwd(), `./uploads/docs/${phone}`))) {
      this.logger.log(`Directory exists. ${join(process.cwd(), `./uploads/docs/${phone}/${name}`)} `);
      return of(res.sendFile(join(process.cwd(), `./uploads/docs/${phone}/${name}`), () => of(res.sendFile(join(process.cwd(), './uploads/no-file.png')))));
    }
  }

  async sendVerifiedDocuments(userId: string) {
    const user = await this.userService.userRepository.findOne({ where: { id: userId } });
    return await this.mailService.sendVerifiedDocuments(user);
  }
}
