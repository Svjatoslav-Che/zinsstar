import { UserModelApi } from './../../admin/models/user.model';
import { DocumentStatus } from "./doc-status.enum";

export enum DocType {
  ID = 'idCard',
  PASSPORT = 'passport',
  SELFIE = 'selfie',
  SELFIE_DOC = 'selfie_doc'
}

export class UserDocument {
  id: number;
  created_at: Date;
  updated_at: Date;
  userId: string;
  owner: UserModelApi;
  passport: boolean;
  passportName: string;
  passportStatus: DocumentStatus;
  idCard: boolean;
  idCardName: string;
  idStatus: DocumentStatus;
  selfie: boolean;
  selfieName: string;
  selfieStatus: DocumentStatus;
  passportReason: string = "";
  idCardReason: string = "";
  selfieReason: string = "";
}

