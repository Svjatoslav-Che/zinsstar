import { Exclude } from 'class-transformer';
import {
  BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { CountryCode } from '../../modules/country/models/country.code.enum';
import { Currency } from '../../modules/country/models/currency.enum';
import { BanksEntity } from './bank.entity';

@Entity('countries')
export class CountryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ type: 'enum', enum: CountryCode, unique: true })
  country_code: CountryCode;

  @Column()
  name: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ type: 'longtext' })
  tax_description: string;

  @Column({ default: '' })
  credit_rating: string;

  @Column({ default: 0 })
  guarantee_amount: number;

  @Column({ type: 'enum', enum: Currency, default: Currency.EUR })
  guarantee_currency: Currency;

  @Column({ default: '' })
  rating_date: string;

  @OneToMany(() => BanksEntity, (bank) => bank.country, {
    eager: false,
    cascade: false,
  })
  banks: BanksEntity;
}
