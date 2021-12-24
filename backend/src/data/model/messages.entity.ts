import {
  BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { MessageAttachmentEntity } from './attachments.entity';

@Entity('messages')
export class MessagesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Column({ type: 'longtext' })
  content: string;

  // @ManyToOne(() => UserEntity, user => user.messages)
  // user: UserEntity;

  @Column({ type: 'boolean', default: false })
  seen: boolean;

  @Column({ type: 'boolean', default: false })
  has_attachments: boolean;

  @ManyToOne(() => MessageAttachmentEntity, (attachments) => attachments.message)
  attachments: MessageAttachmentEntity[];
}
