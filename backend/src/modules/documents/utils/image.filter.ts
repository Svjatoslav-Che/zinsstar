import { BadRequestException } from '@nestjs/common';
import * as path from 'path';
export const imageFileFilter = (req, file: Express.Multer.File, callback) => {
  const extension: string = path.parse(file.originalname).ext;
  if (!extension.toLocaleLowerCase().match(/\.(jpg|jpeg|bmp|png|gif|pdf)$/)) {
    return callback(new BadRequestException('Files not allowed!'), false);
  }
  return callback(null, true);
};

