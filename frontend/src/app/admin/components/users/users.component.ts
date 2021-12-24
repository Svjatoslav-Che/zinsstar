import { tap } from 'rxjs/operators';
import { UserModelApi } from 'src/app/admin/models/user.model';
import { DocType } from './../../../dashboard/models/user-doc.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AdminService } from '../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserModel } from '../../models/user.model';
import { DocumentStatus } from 'src/app/dashboard/models/doc-status.enum';
import { Download } from '../../providers/download';
import {ToolsUtils} from "../../../utils/tools.utils";

export class CustomQuery {
  card: DocumentStatus;
  selfie: DocumentStatus;
  passport: DocumentStatus;
  verified: boolean;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UsersComponent implements OnInit, AfterViewInit {
  _download$: Observable<Download>
  public getImageUrl = ToolsUtils.getImageUrl;

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  queryParam: CustomQuery = {
    card: DocumentStatus.NA,
    selfie: DocumentStatus.NA,
    passport: DocumentStatus.NA,
    verified: false
  }

  pageEvent: PageEvent;
  displayedColumns = ["Name", "email", "phone", "created", "offers", "Documents", "Action"];
  dataSource: MatTableDataSource<UserModelApi>;
  userList: UserModelApi[] = [];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {
    this.adminService.loaded.subscribe(res => {
      this.adminService.getUsers().subscribe(res2 => this.updateTable(res2));
    })
  }
  get hasInvestments() {
    return this.adminService.hasInvestments;
  }

  set hasInvestments(value) {
    this.adminService.hasInvestments = value;
  }

  get docStatus() {
    return DocumentStatus;
  }

  ngAfterViewInit(): void {
  }

  updateTable(users: UserModelApi[]) {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.loaded.subscribe(res => {
      this.adminService.getUsers().subscribe(res2 => this.updateTable(res2))
    })
  }

  get users() {
    return this.adminService.getUsers();
  }

  image(user: UserModelApi, docType: DocType) {
    return `http://localhost:3040/api/admin/image?phone=${user.phone.replace('+', '')}&name=${this.getImageName(user, docType)}`;
  }

  getImageName(user: UserModelApi, name: DocType) {
    switch (name) {
      case DocType.ID: return user.docs.idCardName;
      case DocType.PASSPORT: return user.docs.passportName;
      case DocType.SELFIE: return user.docs.selfieName;
    }
  }

  mDownload(user: UserModelApi, docType: DocType) {
    if (this.availableToDownload(docType)) {
      this._download$ = this.adminService.download(this.image(user, docType), '').pipe(tap(res => {
      }));
      this._download$.subscribe();
    }

  }

  getUserDocs(user: UserModel) {
    return user.docs;
  }

  viewUser(user: UserModelApi): void {
    this.router.navigate(['/admin/user', { queryParam: { id: String(user.id), queryParamsHandling: 'preserve' } }])
  }

  getColor(status: DocumentStatus): string {
    switch (status) {
      case DocumentStatus.DECLINED: return 'text-danger btn text-decoration-none p-0 m-0';
      case DocumentStatus.NA: return 'btn text-decoration-none p-0 m-0';
      case DocumentStatus.PENDING: return 'btn text-decoration-none p-0 m-0';
      case DocumentStatus.VERIFIED: return 'text-success btn text-decoration-none p-0 m-0';
    }
  }
  displayDoc(status: DocumentStatus): boolean {
    return status ? (status === DocumentStatus.NA ? true : false) : false;
  }

  get doc() {
    return DocType;
  }

  getVerifiedColor(verified: boolean) {
    return '';
  }

  get idStatus() {
    return this.adminService.idStatus;
  }

  set idStatus(value) {
    this.adminService.idStatus = value;
  }

  get passportStatus() {
    return this.adminService.passportStatus;
  }

  set passportStatus(value) {
    this.adminService.passportStatus = value;
  }

  get selfieStatus() {
    return this.adminService.selfieStatus;
  }

  set selfieStatus(value) {
    this.adminService.selfieStatus = value;
  }

  availableToDownload(document: DocType) {
    switch (document) {
      case DocType.ID:
        return this.idStatus !== DocumentStatus.NA
      case DocType.PASSPORT:
        return this.passportStatus !== DocumentStatus.NA
      case DocType.SELFIE:
        return this.selfieStatus !== DocumentStatus.NA
    }
  }

  formatDate(createdAt: string): string {
    const date = new Date(createdAt);

    return date.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});
  }
}
