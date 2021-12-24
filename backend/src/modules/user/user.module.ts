import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOffersEntity } from '../../data/model/user-offer.entity';
import { UserEntity } from '../../data/model/user.entity';
import { UserService } from './services/user.service';
import { UserOfferController } from './controller/user-offer.controller';
import { UserOffersService } from './services/user-offers.service';
import { MailModule } from '../mail/mail.module';
import { OffersModule } from '../offers/offers.module';

@Module({
  imports: [
    MailModule,
    OffersModule,
    TypeOrmModule.forFeature([UserOffersEntity, UserEntity]),
  ],
  controllers: [UserOfferController],
  providers: [UserService, UserOffersService],
  exports: [UserService, UserOffersService],
})
export class UserModule { }
