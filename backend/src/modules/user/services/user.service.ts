import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import bcrypt = require('bcrypt');
import { UserEntity } from '../../../data/model/user.entity';
import { UserPayload } from '../models/user.class';
import { UserNotFoundException } from '../../auth/exceptions/user-not-found.exception';
import { UserOffersEntity } from '../../../data/model/user-offer.entity';
import { UserOffersService } from './user-offers.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOfferStatus } from '../models/offer-status.enum';
import { ToolUtils } from '../../../common/utils/tool.utils';

@Injectable()
export class UserService {
  public constructor(
    @InjectRepository(UserEntity) public readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserOffersEntity) public readonly userOffersRepository: Repository<UserOffersEntity>,
    // public readonly userOffersService: UserOffersService,
    // @InjectRepository(UserOffersEntity) private readonly userOffersRepo: Repository<UserOffersEntity>,

  ) { }

  public async getUserById(id: string): Promise<UserEntity | undefined> {
    const user: UserEntity | undefined = await this.userRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  public async updateUser(data: Partial<UserEntity>): Promise<UpdateResult> {
    const { id } = data;
    const user = await this.userRepository.findOne({ id });
    if (!user) throw new UserNotFoundException();

    return this.userRepository.update(id, { ...data });
  }

  public findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ email });
  }

  public async getBankDetails(user: UserPayload): Promise<{ iban: string; bic: string; accHolder: string }> {
    const { iban, bic, acc_holder } = await this.getUserById(user.id);

    return {
      iban,
      bic,
      accHolder: acc_holder,
    };
  }

  public async getMyProfile(payload: UserPayload): Promise<any> {
    const userEntity: UserEntity | undefined = await this.userRepository.findOne({ where: { id: payload.id }, relations: ['docs'] });

    if (!userEntity) {
      throw new NotFoundException('user not found');
    }
    const {
      id, first_name, last_name, gender, docs, availableBalance, totalBalance,
    } = userEntity;

    return {
      id,
      name: `${first_name} ${last_name}`,
      gender,
      availableBalance,
      totalBalance,
      docs,
    };
  }

  public async calculateTotalBalance(userId: string): Promise<void> {
    const receivedOffers: UserOffersEntity[] = await this.getReceivedOffers(userId);

    for(const offer of receivedOffers) {
      const investmentStart: Date = new Date(offer.investment_start);
      const investmentStartDay = ToolUtils.getCurrentDayOfYear(investmentStart) - 1;

    }

  }

  private getReceivedOffers(userId: string): Promise<UserOffersEntity[]> {
    return this.userOffersRepository.find({
      where: {
        status: UserOfferStatus.RECEIVED,
        ownerId: userId,
      },
      relations: ['offer'],
    });
  }

  public async markEmailAsConfirmed(email: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('user not found');
    }

    user.isEmailConfirmed = true;
    await user.save();
  }

  public async updatePassword(id: string, password: string): Promise<UpdateResult> {
    const hash = await bcrypt.hash(password, 12);

    return this.userRepository.update(id, { password: hash, _password: password });
  }
}
