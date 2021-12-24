import { Exclude } from 'class-transformer';
import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('verification_code')
export class VerificationCodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  userId: string;

  public constructor(partial?: Partial<VerificationCodeEntity>) {
    super();
    if (partial) Object.assign(this, partial);
  }
}
