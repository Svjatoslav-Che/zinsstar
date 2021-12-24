import { Exclude } from 'class-transformer';
import {
  BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { UserOfferStatus } from '../../modules/user/models/offer-status.enum';
import { UserEntity } from './user.entity';
import { OffersEntity } from './offer.entity';

@Entity()
export class UserOffersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OffersEntity, (offer) => offer.id, { eager: false })
  offer: OffersEntity;

  @Exclude()
  @ManyToOne(() => UserEntity, (user) => user)
  owner: UserEntity;

  public ownerId: string;

  @Column({
    type: 'enum',
    enum: UserOfferStatus,
    default: UserOfferStatus.PENDING,
  })
  status: UserOfferStatus;

  @Column({ type: 'float', default: 0 })
  amount: number;

  @Column({ nullable: true })
  public investment_start: Date;

  @Column()
  public bankDetails: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}
