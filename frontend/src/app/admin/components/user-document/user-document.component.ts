import {DocumentStatus} from './../../../dashboard/models/doc-status.enum';
import {DocType} from '../../../dashboard/models/user-doc.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {UserModelApi} from '../../models/user.model';
import {MatTableDataSource} from "@angular/material/table";
import {ToolsUtils} from "../../../utils/tools.utils";
import {saveAs as importedSaveAs} from "file-saver";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
// import FileSaver = require("file-saver");

@Component({
  selector: 'app-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.scss']
})
export class UserDocumentComponent implements OnInit {
  public formatDate = ToolsUtils.formatDate;
  public getImageUrl = ToolsUtils.getImageUrl;

  public dataSource: MatTableDataSource<UserModelApi>;

  public displayedColumns = ["type", "image", "status", "reason", "uploadDate"];

  reason: any = '';
  selectedDocument: DocType;
  user: UserModelApi;
  isCollapsed: boolean = true;
  constructor(
    private admin: AdminService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('here')
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({id}) => {
      this.selectedDocument = id;
      this.admin.getUserData(id).subscribe((user) => {
        this.updateDocs(user.docs);

        this.user = user;
      });
    })
  }

  get documents() {
    if (this.user) {
      return this.user.docs;
    } else {
      return null;
    }
  }

  getColor(status: DocumentStatus): string {
    switch (status) {
      case DocumentStatus.DECLINED: return 'text-danger text-decoration-none p-0 m-0';
      case DocumentStatus.NA: return 'text-warning text-decoration-none p-0 m-0';
      case DocumentStatus.PENDING: return 'text-decoration-none p-0 m-0';
      case DocumentStatus.VERIFIED: return 'text-success text-decoration-none p-0 m-0';
    }
  }

  public approve(type) {
    this.admin.approve(this.user.docs.id, this.getType(type), DocumentStatus.VERIFIED).subscribe(res => this.updateDocs(res));
  }

  public reject(type, reason) {
    this.admin.approve(this.user.docs.id, this.getType(type), DocumentStatus.DECLINED, reason).subscribe(res => this.updateDocs(res));
  }

  private getType(type) {
    switch (type) {
      case 'id':
        return DocType.ID;
      case 'selfie':
        return DocType.SELFIE;
      case 'passport':
        return DocType.PASSPORT;
    }
  }

  private updateDocs(docs) {
    const documents = [];
    if (docs.idCard) documents.push({ type: 'id', status: docs.idStatus, image: docs.idCardName, reason: docs.idCardReason, uploadDate: docs.created_at });
    if (docs.passport) documents.push({ type: 'passport', status: docs.passportStatus, image: docs.passportName, reason: docs.passportReason, uploadDate: docs.created_at });
    if (docs.selfie) documents.push({ type: 'selfie', status: docs.selfieStatus, image: docs.selfieName, reason: docs.selfieReason, uploadDate: docs.created_at });
    this.dataSource = new MatTableDataSource(documents);
  }

  public download(href, name) {
    fetch(href, {
      mode : 'no-cors',
    })
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.download = name;
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }

  public isPdf(name: string): boolean {
    return name.includes('.pdf');
  }
}
