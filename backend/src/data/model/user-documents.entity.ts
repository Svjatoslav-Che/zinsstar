import {
  BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { DocumentStatus } from '../../modules/documents/models/doc-status.enum';

@Entity('user_documents')
export class UserDocsEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', unique: true })
  public userId: string;

  @OneToOne(() => UserEntity, (user) => user.docs, { orphanedRowAction: 'delete' })
  owner: UserEntity;

  @Column({ type: 'boolean', default: false })
  passport: boolean;

  @Column({ default: '' })
  passportName: string;

  @Column({
    type: 'enum',
    enum: DocumentStatus,
    nullable: false,
    default: DocumentStatus.NA,
  })
  passportStatus: DocumentStatus;

  @Column({ default: '', nullable: true })
  passportReason: string;

  @Column({ type: 'boolean', default: false })
  idCard: boolean;

  @Column({ default: '' })
  idCardName: string;

  @Column({ default: '', nullable: true })
  idCardReason: string;

  @Column({
    type: 'enum',
    enum: DocumentStatus,
    nullable: false,
    default: DocumentStatus.NA,
  })
  idStatus: DocumentStatus;

  @Column({ type: 'boolean', default: false })
  selfie: boolean;

  @Column({ default: '' })
  selfieName: string;

  @Column({ default: '', nullable: true })
  selfieReason: string;

  @Column({
    type: 'enum',
    enum: DocumentStatus,
    nullable: false,
    default: DocumentStatus.NA,
  })
  selfieStatus: DocumentStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async userIdUpdate() {
    this.userId = this.owner.id;
  }
}
