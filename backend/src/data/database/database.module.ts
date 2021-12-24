import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { config } from 'node-config-ts';
import { CountryEntity } from '../model/country.entity';
import { OffersEntity } from '../model/offer.entity';
import { UserOffersEntity } from '../model/user-offer.entity';
import { BanksEntity } from '../model/bank.entity';
import { UserEntity } from '../model/user.entity';
import { UserDocsEntity } from '../model/user-documents.entity';
import { VerificationCodeEntity } from '../model/verification-code.entity';

const repositories = [
];

const entities = [
  CountryEntity,
  OffersEntity,
  UserOffersEntity,
  BanksEntity,
  UserEntity,
  UserDocsEntity,
  VerificationCodeEntity,
];

const {
  synchronize, database, port, host, username, password,
} = config.db.mysql;

const getOrmConfig = (): any => ({
  useFactory: (): TypeOrmModuleOptions => ({
    type: 'mysql',
    migrationsRun: true,
    database,
    port: +port,
    host,
    username,
    password,
    synchronize,
    retryAttempts: 100,
    retryDelay: 10000,
    autoLoadEntities: true,
  }),
});

@Module({
  imports: [
    TypeOrmModule.forRootAsync(getOrmConfig()),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [
    ...repositories,
  ],
  exports: [
    ...repositories,
  ],
})
export class DatabaseModule {
}
