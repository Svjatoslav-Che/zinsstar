import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageAttachmentEntity } from '../../data/model/attachments.entity';
import { MessagesEntity } from '../../data/model/messages.entity';
import { MessagesController } from './controllers/messages.controller';
import { MessagesService } from './services/messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageAttachmentEntity, MessagesEntity]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
