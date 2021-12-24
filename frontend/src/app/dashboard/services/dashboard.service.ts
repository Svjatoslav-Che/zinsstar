import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Offer} from 'src/app/shared/models/api/offer.model';
import {OfferApplication} from 'src/app/shared/models/offer-application.class';
import {UrlBuilder} from 'src/app/utils/url.builder';
import {FilterStatus} from '../components/user-investments/model/filter-status.enum';
import {BankDetails} from '../models/bank-details.model';

export interface UserOffer {
  id: number;
  amount: number;
  status: FilterStatus;
  offer: Offer;
  investment_start: Date;
  created_at: Date;
}

@Injectable()
export class DashboardService {
  refresh: Subject<boolean> = new Subject();
  private userOffers$: UserOffer[] = [];
  private bankDetails$: BankDetails = null;
  public userOffersSubject = new BehaviorSubject(undefined);

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private urlBuilder: UrlBuilder
  ) {
    this.myOffers().subscribe();
    this.fetchBankDetails().subscribe();
  }

  get bankDetails() {
    return this.bankDetails$;
  }

  get userVerified(): boolean {
    return this.auth.userVerified;
  }

  get hasActiveOffers() {
    return this.userOffers$.length > 0;
  }

  get userOffers(): UserOffer[] {
    return this.userOffers$;
  }

  set userOffers(value: UserOffer[]) {
    this.userOffers$ = value;
  }

  get verified() {
    return this.auth.decodedJwt.user.verified;
  }

  getToken() {
    return this.auth.jwt;
  }

  myOffers() {
    return this.http
      .get<UserOffer[]>(this.urlBuilder.user('me/offers'), {
        headers: this.auth.accessHeader,
      })
      .pipe(
        tap((res) => {
          this.userOffers = res;
          this.userOffersSubject.next(res);
          this.refresh.next(true);
        })
      );
  }

  applyForOffer(application: OfferApplication) {
    const body = {
      amount: Number(application.amount),
      oid: String(application.oid),
    };
    return this.http
      .post<UserOffer>(this.urlBuilder.user('apply'), body, {
        headers: this.auth.accessHeader,
      })
      .pipe(tap((res) => this.userOffers$.push(res)));
  }

  revokeOffer(offer: UserOffer) {
    const body = { id: offer.id };
    return this.http
      .post<UserOffer>(this.urlBuilder.user('revoke'), body, {
        headers: this.auth.accessHeader,
      })
      .pipe(
        tap((res) => {
          this.refresh.next(true);
          this.userOffers$ = this.userOffers$.filter(
            (offer) => offer.id === res.id
          );
          this.userOffers$.push(res);
        })
      );
  }

  private fetchBankDetails(): Observable<BankDetails> {
    return this.http
      .get<BankDetails>(this.urlBuilder.user('bankDetails'), {
        headers: this.auth.accessHeader,
      })
      .pipe(tap((res) => (res ? (this.bankDetails$ = res) : null)));
  }

  public changePassword(password: string, newPassword: string) {
    return this.http.post(this.urlBuilder.auth('password/change'), { password, newPassword }, { headers: this.auth.accessHeader,});
  }
}
