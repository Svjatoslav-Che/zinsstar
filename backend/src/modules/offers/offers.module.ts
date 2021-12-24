import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersController } from './controller/offers.controller';
import { OffersEntity } from '../../data/model/offer.entity';
import { OffersService } from './services/offers.service';
import { BanksModule } from '../banks/banks.module';

@Module({
  imports: [TypeOrmModule.forFeature([OffersEntity]), BanksModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService],
})
export class OffersModule {}
