import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './services/documents.service';
import { DocumentsController } from './controllers/documents.controller';
import { UserDocsEntity } from '../../data/model/user-documents.entity';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forFeature([UserDocsEntity])],
  providers: [DocumentsService],
  exports: [DocumentsService],
  controllers: [DocumentsController],
})
export class DocumentsModule { }
