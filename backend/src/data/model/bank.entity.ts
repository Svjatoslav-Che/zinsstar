import { Exclude } from 'class-transformer';
import {
  BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { OffersEntity } from './offer.entity';
import { CountryEntity } from './country.entity';
import { CountryCode } from '../../modules/country/models/country.code.enum';

@Entity('banks')
export class BanksEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  uid: string;

  @Column()
  name: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ unique: true })
  permalink: string;

  @Column({ default: '' })
  logo: string;

  @Column({ type: 'longtext' })
  insurance_name: string;

  @Column({ type: 'longtext' })
  insurance_description: string;

  @Column({ type: 'enum', enum: CountryCode })
  country_code: CountryCode;

  @OneToMany(() => OffersEntity, (offer) => offer.bank, { eager: false })
  offers: OffersEntity[];

  @Exclude()
  @ManyToOne(() => CountryEntity, (country) => country.country_code, {
    eager: false,
  })
  country: CountryEntity;
}
