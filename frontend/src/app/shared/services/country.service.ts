import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlBuilder } from '../../utils/url.builder';
import { Country } from '../models/api/country.model';
import { CountryCode } from 'ngx-intl-tel-input/lib/data/country-code';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countries$: Country[] = [];
  public countriesSubject = new BehaviorSubject(undefined);

  constructor(
    private readonly http: HttpClient,
    private readonly urlBuilder: UrlBuilder
  ) {
    this.fetchCountries().subscribe((res) => {
    });
  }

  get countries() {
    return this.countries$;
  }

  set countries(countries: Country[]) {
    this.countries$ = countries;
  }

  getCountryByCode(code: string | CountryCode): Country {
    return this.countries$.find((country) => country.country_code === code);
  }

  private fetchCountries() {
    return this.http
      .get<Country[]>(this.urlBuilder.country(''))
      .pipe(tap((res) => {
        this.countries = res;
        this.countriesSubject.next(res);
      }));
  }
}
