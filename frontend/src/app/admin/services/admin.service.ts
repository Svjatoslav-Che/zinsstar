import { BankDetails } from './../../dashboard/models/bank-details.model';
import { download, Download } from './../providers/download';
import { Saver, SAVER } from './../providers/saver';
import { UserModelApi, UserOfferModel } from './../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UrlBuilder } from 'src/app/utils/url.builder';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { DocumentStatus } from 'src/app/dashboard/models/doc-status.enum';
import { saveAs } from 'file-saver';
import { filter, map, tap } from 'rxjs/operators';
import { DocType, UserDocument } from './../../dashboard/models/user-doc.model';
import {FilterStatus} from "../../dashboard/components/user-investments/model/filter-status.enum";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private idStatus$: DocumentStatus = DocumentStatus.NA;
  private selfieStatus$: DocumentStatus = DocumentStatus.NA;
  private passportStatus$: DocumentStatus = DocumentStatus.NA;

  private hasInvestments$: boolean = false;

  private rowUsers$: UserModelApi[] = [];

  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilder,
    private auth: AuthService,
    @Inject(SAVER) private save: Saver
  ) {
    this.loadUsers().subscribe();
  }

  get hasInvestments() {
    return this.hasInvestments$;
  }

  set hasInvestments(value) {
    this.hasInvestments$ = value;
    this.loaded.next(true)
  }

  get idStatus() {
    return this.idStatus$;
  }

  set idStatus(value) {
    this.idStatus$ = value;
    this.loaded.next(true);
  }

  get selfieStatus() {
    return this.selfieStatus$;
  }

  set selfieStatus(value) {
    this.selfieStatus$ = value;
    this.loaded.next(true);
  }
  get passportStatus() {
    return this.passportStatus$;
  }

  set passportStatus(value) {
    this.passportStatus$ = value;
    this.loaded.next(true);
  }

  get userList() {
    return this.rowUsers$;
  }

  set userList(users: UserModelApi[]) {
    this.rowUsers$ = users;
  }

  private loadUsers() {
    return this.http.get<UserModelApi[]>(this.urlBuilder.admin('users2'))
      .pipe(
        map(res => res as UserModelApi[]),
        tap(res => { this.rowUsers$ = res; this.loaded.next(true); })
      );
  }

  public getBanks() {
    return this.http.get<UserOfferModel[]>(this.urlBuilder.bank());
  }

  getUsers(): Observable<UserModelApi[]> {
    let temp = this.userList;
    if (this.hasInvestments) { temp = temp.filter(user => user.offers && user.offers.length !== 0); }
    if (!this.hasInvestments) { temp = temp.filter(user => user.offers.length === 0); }
    if (this.idStatus !== DocumentStatus.NA) {
      switch (this.idStatus) {
        case DocumentStatus.VERIFIED: {
          temp = temp.filter(user => user.docs.idStatus === DocumentStatus.VERIFIED && user.docs.passportStatus === DocumentStatus.VERIFIED && user.docs.selfieStatus === DocumentStatus.VERIFIED);
          break;
        }
        default:
          temp = temp.filter(user => user.docs.idStatus === this.idStatus);
          break;
      }
    }
    return of(temp);
  }



  approve(documentId: number, documentKey: DocType, status: DocumentStatus, reason: string = '') {
    const body = { documentId, documentKey: documentKey, status, reason };
    return this.http.post<UserDocument>(this.urlBuilder.admin('approve'), body);
  }

  updateOfferStatus(investmentId: number, status: FilterStatus, bankDetails?: string) {
    const body = { investmentId, status, bankDetails };
    return this.http.post(this.urlBuilder.admin('investment'), body);
  }

  public updateUser(data: Partial<UserModelApi>) {
    return this.http.patch(this.urlBuilder.admin('user'), data);
  }

  getUserData(id: any) {
    return this.http.get<UserModelApi>(this.urlBuilder.admin(`user?id=${id}`));
  }

  getUserOffers(id: string): Observable<UserOfferModel[]> {
    return this.http.get<UserOfferModel[]>(this.urlBuilder.admin(`user/${id}`));
  }

  getFileListing(userId: string) {
    return this.http.get<String[]>(this.urlBuilder.admin('image-list'), { headers: this.auth.accessHeader, params: { id: userId } })
  }

  getUserDocuments(userId: string) {
    return this.http.get<UserDocument>(this.urlBuilder.admin(`user/${userId}/docs`), {
      headers: this.auth.accessHeader,
    });
  }

  getUserInvestments(userId: string) {
    return this.http.get(this.urlBuilder.admin('offers'), {
      params: { id: userId }
    })
  }

  getImage(phone: string, imageFile: string) {
    return this.http.get(this.urlBuilder.admin(`user/${phone}/${imageFile}`),
    );
  }


  downloadImage(imageFile: string, phone: string): Observable<any> {
    return this.http.get(this.urlBuilder.admin(`image/${phone}/${imageFile}`),
      { responseType: 'blob' });

  }

  downloadImageLink(link: string) {
    return this.http.get(link,
      {
        responseType: 'arraybuffer',
        headers: this.auth.accessHeader
      }).subscribe(response => this.downLoadFile(response, "application/image"));
  }

  /**
   * Method is use to download file.
   * @param data - Array Buffer data
   * @param type - type of the document.
   */
  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }


  download(url: string, filename?: string): Observable<Download> {
    return this.http.get(url, {
      headers: this.auth.accessHeader,
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    }).pipe(download(blob => this.save(blob, filename)))
  }


  blob(url: string, filename?: string): Observable<Blob> {
    return this.http.get(url, {
      headers: this.auth.accessHeader,
      responseType: 'blob'
    })
  }
  updateUserBankDetails(data: BankDetails) {
    const body = { iban: data.iban, bic: data.bic, acc_holder: data.accHolder };
    return this.http.post(this.urlBuilder.admin('user'), body, { params: { userId: data.userId }, headers: this.auth.accessHeader });
  }

  verifyUser(userId: string) {
    return this.http.post(this.urlBuilder.admin('verified'), null, { headers: this.auth.accessHeader, params: { userId: userId } });
  }
}
