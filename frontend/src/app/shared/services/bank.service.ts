import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrlBuilder} from "../../utils/url.builder";
import {tap} from "rxjs/operators";
import {Bank} from "../models/api/bank.class";
import {BankFilter} from '../models/filter-options.class';
import {CountryService} from './country.service';
import {Country} from "../models/api/country.model";

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private banks$: Bank[] = [];
  public banksSubject = new BehaviorSubject(undefined);

  constructor(
    private readonly http: HttpClient,
    private urlBuilder: UrlBuilder,
    private countryService: CountryService
  ) {
    this.fetchBanks().subscribe(res => {
      this.banks$ = res;
    })
  }

  get banks(): Bank[] {
    return this.banks$;
  }

  set banks(banks: Bank[]) {
    this.banks$ = banks;
  }

  getBankByUid(uid: string): Bank {
    return this.banks.find(bank => bank.uid === uid);
  }

  getBankById(bank_id: number): Bank {
    return this.banks.find(bank => bank.id === bank_id)
  }

  filterBanks(filter: BankFilter): void {
    this.filterB(this.banks, filter);
  }

  filterB(banks: Bank[], option: BankFilter): void {
    switch (option) {
      case BankFilter.NAME_A_Z:
        this.banks = banks.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case BankFilter.NAME_Z_A:
        this.banks = banks.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case BankFilter.COUNTRY_A_Z:
        this.banks = banks.sort((a, b) =>
          this.getCountry(a).name.localeCompare(this.getCountry(b).name)
        );
        break;
      case BankFilter.COUNTRY_Z_A:
        this.banks = banks.sort((a, b) =>
          this.getCountry(b).name.localeCompare(this.getCountry(a).name)
        );
        break;
    }
  }

  getCountry(bank: Bank): Country {
    return this.countryService.getCountryByCode(bank.country_code);
  }

  public fetchBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.urlBuilder.bank('')).pipe(tap(res => {
      this.banks = res;
      this.banksSubject.next(res);
    }));
  }

  public update(data): Observable<any> {
    const updateEntity = {
      id: data.id,
      uid: data.uid,
      name: data.name,
      description: data.description,
      permalink: data.permalink,
      logo: data.logo,
      insurance_name: data.insurance_name,
      insurance_description: data.insurance_description,
      country_code: data.country_code,
    };

    return this.http.put(this.urlBuilder.bank(''), updateEntity);
  }
}
