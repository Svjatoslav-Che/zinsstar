import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import {
  IsEmail, IsInt, IsNotEmpty, IsOptional, IsString,
} from 'class-validator';
import { AcademicPosition } from '../../modules/user/models/job.enum';

import { Gender } from '../../modules/user/models/gender.enum';
import { UserRole } from '../../modules/user/models/user.class';
import { UserOffersEntity } from './user-offer.entity';
import { UserDocsEntity } from './user-documents.entity';

const bcrypt = require('bcrypt');

@Entity('users')
export class UserEntity extends BaseEntity {
  @IsNotEmpty()
  @IsString()
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'enum',
    default: UserRole.CUSTOMER,
    enum: UserRole,
    nullable: false,
  })
  public role: UserRole;

  @IsOptional()
  @IsEmail()
  @Column({ unique: true })
  public email: string;

  @Column({ default: '' })
  @Exclude()
  public password: string;

  @Column()
  @Exclude()
  public _password: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public first_name: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public last_name: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public dob: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public profession: string;

  @IsOptional()
  @IsString()
  @Column({
    type: 'enum', default: Gender.male, enum: Gender, nullable: false,
  })
  public gender: Gender;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public social_status: string;

  @IsOptional()
  @IsString()
  @Column({ default: AcademicPosition.empty })
  public academic_position: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public phone: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public street: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public house: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public zip: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public city: string;

  @IsOptional()
  @IsString()
  @Column({ default: 0 })
  public country: string;

  @IsOptional()
  @IsString()
  @Column()
  public birth_country: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public birth_city: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public nationality: string;

  @IsOptional()
  @IsString()
  @Column({ default: '', nullable: true })
  public nationality_2: string;

  @IsOptional()
  @IsString()
  @Column({ default: false })
  public us_citizen: boolean;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public iban: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public acc_holder: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public bic: string;

  @IsOptional()
  @IsString()
  @Column({ default: '' })
  public referenceCode: string;

  @IsOptional()
  @IsString()
  @Column({ type: 'boolean', default: true })
  public isEmailConfirmed: boolean;

  @IsOptional()
  @IsString()
  @Column({ default: false })
  public verified: boolean;

  @IsOptional()
  @IsInt()
  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  public availableBalance: number;

  @IsOptional()
  @IsInt()
  @Column('decimal', { precision: 8, scale: 2, default: 0 })
  public totalBalance: number;

  @OneToMany(() => UserOffersEntity, (userOffer) => userOffer.owner, { eager: true })
  public offers: UserOffersEntity;

  @OneToOne(() => UserDocsEntity, (userDocs) => userDocs.owner, { eager: true, cascade: true })
  @JoinColumn()
  public docs: UserDocsEntity;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @BeforeInsert()
  public async emailToLowerCase(): Promise<void> {
    this.email = this.email.toLowerCase().trim();
    this.first_name = this.first_name.trim();
    this.last_name = this.last_name.trim();
    this._password = this.password;
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    const f_name = this.first_name.toLocaleLowerCase();
    const l_name = this.last_name.toLocaleLowerCase();
    this.acc_holder = `${f_name} ${l_name}`;
  }
}
