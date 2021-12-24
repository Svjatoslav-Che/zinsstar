import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksController } from './controller/banks.controller';
import { BanksEntity } from '../../data/model/bank.entity';
import { BanksService } from './services/banks.service';
import { CountryModule } from '../country/country.module';

@Module({
  imports: [TypeOrmModule.forFeature([BanksEntity]), CountryModule],
  controllers: [BanksController],
  providers: [BanksService],
  exports: [BanksService],
})
export class BanksModule {}
