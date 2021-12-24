import { Exclude } from 'class-transformer';
import {
  BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Currency } from '../../modules/country/models/currency.enum';
import { BanksEntity } from './bank.entity';

@Entity('offers')
export class OffersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  oid: string;

  @Column()
  is_overnight: boolean;

  @Column({ default: -1 })
  min_deposit: number;

  @Column()
  max_deposit: number;

  @Column()
  duration: number;

  @Column()
  is_foreign_currency: boolean;

  @Column({ type: 'float' })
  interest_rate: number;

  @Column({ enum: Currency, type: 'enum' })
  currency: Currency;

  @Exclude()
  @ManyToOne(() => BanksEntity, (bank) => bank.offers, { eager: false })
  @JoinColumn({ name: 'bankId' })
  bank: BanksEntity;

  public bankId: number;

  public constructor(partial?: Partial<OffersEntity>) {
    super();
    if (partial) Object.assign(this, partial);
  }
}
