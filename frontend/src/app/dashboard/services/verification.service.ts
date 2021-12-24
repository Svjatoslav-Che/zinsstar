import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlBuilder } from 'src/app/utils/url.builder';
import { RequestState } from '../../shared/models/request-state.enum';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { DocType, UserDocument } from '../models/user-doc.model';
import { tap } from 'rxjs/operators';
import {DocumentStatus} from "../models/doc-status.enum";

@Injectable()
export class VerificationService {
  public documentsSubject = new BehaviorSubject(undefined);
  public userSubject = new BehaviorSubject(undefined);

  private myDocs$: UserDocument;
  private requestState$: { fetch: RequestState; create: RequestState } = {
    fetch: RequestState.idle,
    create: RequestState.idle,
  };

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private url: UrlBuilder
  ) {
    this.fetchMe().subscribe(res => {
      this.auth.me = res;

      this.userSubject.next(res);
    });
    this.fetchUserDocuments().subscribe({
      complete: () => {
        this.requestState$.fetch = RequestState.done;
        if (this.myDocs$) {
          this.requestState$.fetch = RequestState.ongoing;
        }
      },
      error: (err) => {
        this.requestState$.fetch = RequestState.failed;
      },
    });
  }

  get fetchState(): RequestState {
    return this.requestState$.fetch;
  }

  get createState(): RequestState {
    return this.requestState$.create;
  }
  get me() {
    return this.auth.me;
  }
  get myDocuments(): UserDocument {
    return this.myDocs$;
  }
  set myDocuments(value) {
    this.myDocs$ = value;
  }

  uploadDocuments(formData: FormData, docType: DocType): Observable<any> {
    return this.http
      .post(this.url.documents('upload'), formData, {
        headers: this.auth.accessHeader,
        reportProgress: true,
        observe: 'events',
        params: { type: docType }
      })
      .pipe(
        // catchError(err => of(err.error)),
        tap((res) => this.fetchUserDocuments().subscribe())
      );
  }

  private fetchUserDocuments(): Observable<any> {
    return this.http
      .get<UserDocument>(
        this.url.documents('me'),
        { headers: this.auth.accessHeader })
      .pipe(
        tap((res) => {
          this.myDocs$ = res;
          this.documentsSubject.next(res);
        })
      );
  }

  private fetchMe(): Observable<any> {
    return this.http
      .get<any>(
        this.url.user('me'),
        { headers: this.auth.accessHeader })
      .pipe(
        tap((res) => this.auth.me = res)
      );
  }

  public get verified(): boolean {
    return this.myDocuments && this.myDocuments.idStatus === DocumentStatus.VERIFIED &&
      this.myDocuments.selfieStatus === DocumentStatus.VERIFIED &&
      this.myDocuments.passportStatus === DocumentStatus.VERIFIED;
  }
}
