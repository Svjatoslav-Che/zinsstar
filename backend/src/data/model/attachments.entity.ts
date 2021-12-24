import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MessagesEntity } from './messages.entity';

@Entity('msg_attachments')
export class MessageAttachmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => MessagesEntity, (message) => message.attachments)
  message: MessagesEntity;
}
