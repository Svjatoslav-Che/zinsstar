import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import {
  ApiBearerAuth, ApiConsumes, ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { DocumentsService } from '../services/documents.service';
import { DocType } from '../models/doc-type.enum';
import { imageFileFilter } from '../utils/image.filter';
import { storage } from '../utils/docs-storage.gen';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';
import { GetUser } from '../../auth/decorators/get-user.decorator';
import { UserPayload } from '../../user/models/user.class';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('documents')
@Controller('documents')
@UseInterceptors(ClassSerializerInterceptor)
export class DocumentsController {
  private logger: Logger = new Logger(DocumentsController.name);

  public constructor(private readonly docService: DocumentsService) { }

  @Get('me')
  async getUserDocuments(@GetUser() user: UserPayload) {
    return this.docService.GetFileListing(user);
  }

  @Get('me/:file')
  @ApiConsumes('multipart/form-data')
  async getUserDocument(
  @GetUser() user: UserPayload,
    @Param('file') file: string,
    @Res() res,
  ) {
    const imageFile = await this.docService.getUserDocument(user, file);
    if (imageFile) return res.sendFile(imageFile);

    throw new NotFoundException();
  }

  @UseInterceptors(
    FileInterceptor('image', {
      ...storage,
      fileFilter: imageFileFilter,
    }),
  )
  @Post('upload')
  async uploadFile(
  @Req() req: Request,
    @GetUser() user: UserPayload,
    @UploadedFile() file: Express.Multer.File,
    @Query('type') type: DocType,
  ) {
    try {
      return await this.docService.saveImage(user, file, type);
    } catch (e) {
      this.logger.error(JSON.stringify(e));
      throw new Error(e);
    }
  }
}
