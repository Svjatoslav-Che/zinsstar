import {
  Injectable, Logger, NotFoundException, UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { OfferApplicationDTO } from '../dto/apply-offer.dto';
import { RevokeOfferDTO } from '../dto/revoke.dto';
import { UserOffersEntity } from '../../../data/model/user-offer.entity';
import { UserOfferStatus } from '../models/offer-status.enum';
import { UserPayload } from '../models/user.class';
import { UserService } from './user.service';
import { OffersService } from '../../offers/services/offers.service';
import { MailService } from '../../mail/services/mail.service';

@Injectable()
export class UserOffersService {
  private readonly logger: Logger = new Logger(UserOffersService.name);

  public constructor(
    private readonly userService: UserService,
    private readonly offerService: OffersService,
    @InjectRepository(UserOffersEntity) private readonly userOffersRepo: Repository<UserOffersEntity>,
    private mailService: MailService,
  ) { }

  get repo() {
    return this.userOffersRepo;
  }

  async applyForOffer(userPayload: UserPayload, data: OfferApplicationDTO) {
    const { oid, amount } = data;
    const user = await this.userService.getUserById(userPayload.id);
    const offer = await this.offerService.findOneOid(oid);
    const offerApplication: UserOffersEntity = new UserOffersEntity();
    offerApplication.owner = user;
    offerApplication.offer = offer;
    offerApplication.amount = amount;
    try {
      const offerInDB = await offerApplication.save();
      try {
        await this.mailService.sendInvestmentRequest(user, offer.bank, offer, offerInDB);
      } catch (e) {
        this.logger.error(e);
      }
      return offerInDB;
    } catch (e) {
      throw e;
    }
  }

  async getUserOffers(userPayload: UserPayload) {
    const user = await this.userService.getUserById(userPayload.id);
    return this.userOffersRepo.find({ where: { owner: user }, relations: ['offer'] });
  }

  async revokeOffer(user: UserPayload, data: RevokeOfferDTO) {
    const offer: UserOffersEntity = await this.findOne(data.id);
    if (offer.owner.id !== user.id) {
      throw new UnauthorizedException();
    }
    offer.status = UserOfferStatus.CANCELED;
    return await offer.save();
  }

  async findOne(id: number): Promise<UserOffersEntity> {
    const userOffer: UserOffersEntity | undefined = await this.userOffersRepo.findOne({
      where: { id },
      relations: ['owner'],
    });
    if (!userOffer) {
      throw new NotFoundException('user_offer_not_found', '');
    }
    return userOffer;
  }

  public async update(id, data: Partial<UserOffersEntity>): Promise<UpdateResult> {
    return this.userOffersRepo.update(id, data);
  }

  async adminGetUserOffers(userId: string) {
    const user = await this.userService.getUserById(userId);
    return await this.userOffersRepo.find({ where: { owner: user } });
  }

  public getReceivedOffers(userId: string): Promise<UserOffersEntity[]> {
    return this.userOffersRepo.find({
      where: {
        status: UserOfferStatus.RECEIVED,
        ownerId: userId,
      },
      relations: ['offer'],
    });
  }
}
