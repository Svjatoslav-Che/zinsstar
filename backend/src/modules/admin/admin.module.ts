import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from '../auth/auth.module';
import { MailModule } from '../mail/mail.module';
import { DocumentsModule } from '../documents/documents.module';
import { UserModule } from '../user/user.module';
import { UserOffersEntity } from '../../data/model/user-offer.entity';
import { UserEntity } from '../../data/model/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserOffersEntity, UserEntity]),
    AuthModule,
    UserModule,
    DocumentsModule,
    MailModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
