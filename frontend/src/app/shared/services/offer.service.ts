import {Injectable} from '@angular/core';
import {OrderType, SortType} from '../models/sort.class';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UrlBuilder} from '../../utils/url.builder';
import {CountryService} from './country.service';
import {BankService} from './bank.service';
import {Offer} from '../models/api/offer.model';
import {Country} from '../models/api/country.model';
import {Bank} from '../models/api/bank.class';
import {FilterOption} from '../models/filter-options.class';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  filterOptions: FilterOption[] = [
    {
      value: '0',
      duration: { min: 0, max: 120 },
      title: 'Alle Angebote',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '1',
      duration: { min: 0, max: 11 },
      title: 'Weniger als ein Jahr ',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '2',
      duration: { min: 12, max: 12 },
      title: '1 Jahr',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '3',
      duration: { min: 13, max: 24 },
      title: '2 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '4',
      duration: { min: 25, max: 36 },
      title: '3 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '5',
      duration: { min: 37, max: 48 },
      title: '4 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '6',
      duration: { min: 49, max: 60 },
      title: '5 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '7',
      duration: { min: 61, max: 72 },
      title: '6 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '8',
      duration: { min: 73, max: 84 },
      title: '7 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '9',
      duration: { min: 85, max: 96 },
      title: '8 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '10',
      duration: { min: 97, max: 108 },
      title: '9 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
    {
      value: '11',
      duration: { min: 109, max: 120 },
      title: '10 Jahre',
      count: { festgeld: 0, tagsgeld: 0 },
    },
  ];
  public offerSubject = new BehaviorSubject(undefined);

  private duration$: FilterOption = this.filterOptions[2];
  private offers$: Offer[] = [];

  private sortType$: SortType = SortType.Percent;
  private order$: OrderType = OrderType.decs;
  private loadCount$: number = 10;

  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilder,
    private countryService: CountryService,
    private bankService: BankService,
  ) {
    this.fetchOffers().subscribe((res) => {
      this.filterOptions.forEach((option) => {
        option.count.festgeld = res.filter(
          (offer) =>
            offer.duration >= option.duration.min &&
            offer.duration <= option.duration.max &&
            offer.is_overnight
        ).length;
        option.count.tagsgeld = res.filter(
          (offer) =>
            offer.duration >= option.duration.min &&
            offer.duration <= option.duration.max &&
            !offer.is_overnight
        ).length;
      });
    });
  }

  get orderType() {
    return this.order$;
  }

  set order(type: SortType) {
    switch (this.orderType) {
      case OrderType.none:
        this.order$ = OrderType.ase;
        break;
      case OrderType.ase:
        this.order$ = OrderType.decs;
        break;
      case OrderType.decs:
        this.sortType = null;
        this.order$ = OrderType.none;
        break;
    }
  }

  get sortType() {
    return this.sortType$;
  }

  set sortType(type: SortType) {
    if (this.sortType !== type || !this.sortType) {
      this.sortType$ = type;
    }
    switch (this.orderType) {
      case OrderType.none:
        this.order$ = OrderType.ase;
        break;
      case OrderType.ase:
        this.order$ = OrderType.decs;
        break;
      case OrderType.decs:
        this.sortType$ = null;
        this.order$ = OrderType.none;
        break;
    }
  }

  get loadCount(): number {
    return this.loadCount$;
  }

  get offers(): Offer[] {
    return this.offers$;
  }

  set offers(offers: Offer[]) {
    this.offers$ = offers;
  }

  get duration() {
    return this.duration$;
  }

  set duration(duration: FilterOption) {
    this.duration$ = duration;
  }

  loadMoreOffers() {
    this.loadCount$ = this.loadCount + 10;
  }

  getOffers(isOvernight: boolean): Observable<Offer[]> {
    return of(this.offers).pipe(
      map((offers) =>
        offers.filter((offer) => offer.is_overnight === isOvernight)
      ),
      map((offers) => this.sortOffersBy(offers)),
      map(
        (offers) => {
          if (!isOvernight) {
            return offers.filter(
              (offer) =>
                offer.duration >= this.duration.duration.min &&
                offer.duration <= this.duration.duration.max
            );
          } else {
            return offers;
          }
        },
        map((offers: Offer[]) => {
          this.sortType$ = SortType.Percent;
          return this.sortOffersBy(offers);
        })
      )
    );
  }

  sortOffersBy(offers: Offer[]): Offer[] {
    const temp = offers;
    if (!this.sortType || this.order$ === OrderType.none) {
      return temp;
    }

    switch (this.sortType) {
      case SortType.Land:
        temp.sort((a, b) =>
          this.getOfferCountry(a).name > this.getOfferCountry(b).name
            ? 1
            : this.getOfferCountry(b).name > this.getOfferCountry(a).name
              ? -1
              : 0
        );
        break;
      case SortType.Duration:
        temp.sort((a, b) =>
          a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0
        );
        break;
      case SortType.Bank:
        temp.sort((a, b) =>
          this.getOfferBank(a).name > this.getOfferBank(b).name
            ? 1
            : this.getOfferBank(b).name > this.getOfferBank(a).name
              ? -1
              : 0
        );
        break;
      case SortType.Percent:
        temp.sort((a, b) =>
          a.interest_rate > b.interest_rate
            ? 1
            : b.interest_rate > a.interest_rate
              ? -1
              : 0
        );
        break;
      default:
        temp.sort((a, b) =>
          a.interest_rate > b.interest_rate
            ? 1
            : b.interest_rate > a.interest_rate
              ? -1
              : 0
        );
        break;
    }
    switch (this.order$) {
      case OrderType.ase:
        return temp;
      case OrderType.decs:
        return temp.reverse();
    }
  }

  getBankOffers(bankId: number): Offer[] {
    return this.offers.filter((offer) => offer.bank_id === bankId);
  }

  getOfferBank(offer: Offer): Bank {
    return this.bankService.getBankByUid(offer.oid.replace(/[0-9]/g, ''));
  }

  getOfferCountry(offer: Offer): Country {
    const bank = this.getOfferBank(offer);
    if (bank) {
      try {
        return this.countryService.getCountryByCode(bank.country_code);
      } catch (e) {
      }
    }
  }

  resetFilterOptions(): void {
    this.duration = this.filterOptions[2];
    this.order$ = OrderType.ase;
    this.sortType = SortType.Percent;
  }

  getOfferByOid(order: string): Offer {
    return this.offers.find((offer) => offer.oid === order);
  }

  private mapOffer(offer: Offer): Partial<Offer> {
    return {
      id: offer.id,
      oid: offer.oid,
      is_overnight: offer.is_overnight,
      min_deposit: offer.min_deposit,
      max_deposit: offer.max_deposit,
      duration: offer.duration,
      is_foreign_currency: offer.is_foreign_currency,
      interest_rate: offer.interest_rate,
      currency: offer.currency,
      bankId: offer.bankId,
    };
  }
  public create(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.urlBuilder.offer(''), this.mapOffer(offer));
  }

  public update(offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(this.urlBuilder.offer(`${offer.id}`), this.mapOffer(offer));
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.urlBuilder.offer(`${id}`));
  }

  private fetchOffers() {
    return this.http.get<Offer[]>(this.urlBuilder.offer('')).pipe(
      map((res) => res.filter((offer) => offer.interest_rate !== 0)),
      map((res) =>
        res.sort((a, b) =>
          a.interest_rate > b.interest_rate
            ? 1
            : b.interest_rate > a.interest_rate
              ? -1
              : 0
        )
      ),
      tap((res) => {
        this.offers = res;
        this.offerSubject.next(res);
      })
    );
  }
}
