import { Component, OnInit } from '@angular/core';
import { DocumentStatus } from '../../models/doc-status.enum';
import { UserDocument } from './../../models/user-doc.model';
import { VerificationService } from './../../services/verification.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public user;
  constructor(
    private verificationService: VerificationService,

    ) {
  }

  public ngOnInit(): void {
    this.verificationService.userSubject.subscribe((user) => {
      if (!user) return;

      this.user = user;
    })
  }

  get myDocuments() {
    if (this.verificationService.myDocuments)
      return this.verificationService.myDocuments;
    return null;
  }

  get verified(): boolean {
    return this.idStatus === DocumentStatus.VERIFIED &&
      this.selfieStatus === DocumentStatus.VERIFIED &&
      this.passportStatus === DocumentStatus.VERIFIED;
  }

  get idStatus() {
    if (this.myDocuments)
      return this.myDocuments.idStatus;
    return DocumentStatus.NA;
  }

  get passportStatus() {
    if (this.myDocuments)
      return this.verificationService.myDocuments.passportStatus;
    return DocumentStatus.NA
  }

  get selfieStatus() {
    if (this.myDocuments)
      return this.myDocuments.selfieStatus;
    return DocumentStatus.NA;
  }

  color() {
    if (
      (this.idStatus === DocumentStatus.NA || this.idStatus === DocumentStatus.DECLINED) &&
      (this.selfieStatus === DocumentStatus.NA || this.selfieStatus === DocumentStatus.DECLINED) &&
      (this.passportStatus === DocumentStatus.NA || this.passportStatus === DocumentStatus.DECLINED)
    ) {
      return 'text-danger'
    }
    if (this.verified) {
      return 'text-success'
    } else { return 'text-warning'; }
  }
}
