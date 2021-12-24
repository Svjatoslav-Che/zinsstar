import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faCloudUploadAlt,
  faStopwatch,
  faInfoCircle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { VerificationService } from '../../services/verification.service';
import { DocType, UserDocument } from '../../models/user-doc.model';
import { DocumentStatus } from '../../models/doc-status.enum';

import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { environment as env } from 'src/environments/environment';
import { Gender } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent {
  faCloudUploadAlt = faCloudUploadAlt;
  faChevronLeft = faChevronLeft;
  faExclamationCircle = faExclamationCircle;
  faHourglass = faHourglass;
  faStopwatch = faStopwatch;
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;

  constructor(private service: VerificationService) {}

  get emails(){
    return env.emails.support;
  }
  get myDocuments(): UserDocument {
    return this.service.myDocuments;
  }

  get idStatus() {
    if (this.service.myDocuments) return this.service.myDocuments.idStatus;
    return DocumentStatus.NA;
  }

  get passportStatus() {
    if (this.service.myDocuments)
      return this.service.myDocuments.passportStatus;
    return DocumentStatus.NA;
  }
  get me() {
    return this.service.me;
  }

  get selfieDocImage() {
    if (this.me)
      return this.me.gender === Gender.male
        ? 'assets/icon/kyc_m.png'
        : 'assets/icon/kyc_f.png';
    return 'assets/icon/kyc_m.png';
  }

  get selfieStatus() {
    if (this.service.myDocuments) return this.service.myDocuments.selfieStatus;
    return DocumentStatus.NA;
  }

  get passportReason() {
    if (this.myDocuments) return this.myDocuments.passportReason;
    return '';
  }

  get idCardReason() {
    if (this.myDocuments) return this.myDocuments.idCardReason;
    return '';
  }

  get selfieReason() {
    if (this.myDocuments) return this.myDocuments.passportReason;
    return '';
  }
  get docType() {
    return DocType;
  }

  get docStatus() {
    return DocumentStatus;
  }
}
