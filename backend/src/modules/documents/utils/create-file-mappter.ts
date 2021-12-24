import { Request } from 'express';

interface FileMapper {
  file: Express.Multer.File;
  req: Request;
}

interface FilesMapper {
  files: Express.Multer.File[];
  req: Request;
}

export const fileMapper = ({ file, req }: FileMapper) => {
  const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
  return {
    originalname: file.originalname,
    filename: file.filename,
    image_url,
  };
};

export const filesMapper = ({ files, req }: FilesMapper) => {
  const keys = Object.keys(files);
  let data = [];
  keys.forEach(async (key) => {
    const file: Express.Multer.File = files[key];
    const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
    data.push(file);
  });
  return data;
};
