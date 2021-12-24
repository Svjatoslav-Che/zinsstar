import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as FS from 'fs';
import * as path from 'path';
import { UserDocsEntity } from '../../../data/model/user-documents.entity';
import { UserService } from '../../user/services/user.service';
import { UserPayload } from '../../user/models/user.class';
import { DocType } from '../models/doc-type.enum';
import { DocumentStatus } from '../models/doc-status.enum';

const documentsDir = 'uploads/docs/';

@Injectable()
export class DocumentsService {
  private readonly logger = new Logger(DocumentsService.name);

  public constructor(
    @InjectRepository(UserDocsEntity)
    private readonly userDocsRepo: Repository<UserDocsEntity>,
    private userService: UserService,
  ) { }

  async getUserDocuments$(user: UserPayload) {
    const userInDB = await this.userService.getUserById(user.id);
    return await this.userDocsRepo.find({ where: { owner: userInDB } });
  }

  async getUserDocuments(user: UserPayload) {
    const docs = await this.userDocsRepo.find({ where: { userId: user.id } });
    if (!docs) {
      throw new NotFoundException();
    }
    return docs;
  }

  async findOne(id: number) {
    return await this.userDocsRepo.findOne({ id }, { relations: ['owner'] });
  }

  async getUserDocument(user: UserPayload, file: string) {
    try {
      const img = path.join(__dirname, `${documentsDir}${user.phone}/${file}`);
      if (FS.existsSync(img)) {
        return img;
      }
    } catch (err) {
      this.logger.error(err);
    }
  }

  async GetFileListing(user: UserPayload) {
    const owner = await this.userService.userRepository.findOne({ email: user.email }, { relations: ['docs'] });
    if (!owner) throw new NotFoundException();
    return owner.docs;
  }

  async saveImage(user: UserPayload, file: Express.Multer.File, type: DocType) {
    const userDocs: UserDocsEntity | undefined = await this.userDocsRepo.findOne({ where: { userId: user.id } });
    if (!userDocs) throw new NotFoundException();
    const x: Express.Multer.File = file;
    switch (type) {
      case 'idCard':
        userDocs.idCardName = x.filename;
        userDocs.idCard = true;
        userDocs.idStatus = DocumentStatus.PENDING;
        userDocs.idCardReason = '';
        break;
      case 'passport':
        userDocs.passportName = x.filename;
        userDocs.passport = true;
        userDocs.passportStatus = DocumentStatus.PENDING;
        userDocs.passportReason = '';
        break;
      case 'selfie':
        userDocs.selfieName = x.filename;
        userDocs.selfie = true;
        userDocs.selfieStatus = DocumentStatus.PENDING;
        userDocs.selfieReason = '';
        break;
    }
    return await userDocs.save();
  }

  async saveImages(user: UserPayload, files: Array<Express.Multer.File>) {
    const userDocs: UserDocsEntity | undefined = await this.userDocsRepo.findOne({ where: { userId: user.id } });
    if (!userDocs) throw new NotFoundException();
    try {
      this.logger.debug(JSON.stringify(files));
      for (const key of Object.keys(files)) {
        const x: Express.Multer.File = files[key][0];
        switch (key) {
          case 'idCard':
            userDocs.idCardName = x.filename;
            userDocs.idCard = true;
            userDocs.idStatus = DocumentStatus.PENDING;
            break;
          case 'passport':
            userDocs.passportName = x.filename;
            userDocs.passport = true;
            userDocs.passportStatus = DocumentStatus.PENDING;
            break;
          case 'selfie':
            userDocs.selfieName = x.filename;
            userDocs.selfie = true;
            userDocs.selfieStatus = DocumentStatus.PENDING;
            break;
        }
        await userDocs.save();
        // @ts-ignore
        delete userDocs.owner;
      }
      return userDocs;
    } catch (e) {
      this.logger.error(e);
      throw new Error(e);
    }
  }

  async adminGetUserDocuments(userId: string) {
    return this.userDocsRepo.find({ userId });
  }
}
