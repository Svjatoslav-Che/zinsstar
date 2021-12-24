import { diskStorage } from 'multer';
import * as fs from 'fs';
import { UserPayload } from '../../user/models/user.class';
import { editFileName } from './edit-file-name';

export const storage = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const user: UserPayload = req.user as UserPayload;

      const baseDirectory = `./uploads/docs/${user.phone}`;

      if (!fs.existsSync(baseDirectory)) {
        fs.mkdirSync(baseDirectory, { recursive: true });
      }
      return cb(null, baseDirectory);
    },
    filename: editFileName,
  }),
};
