import { CountryEntity } from '../../data/model/country.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './controller/country.controller';
import { CountryService } from './services/country.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService, TypeOrmModule.forFeature([CountryEntity])],
})
export class CountryModule {}
