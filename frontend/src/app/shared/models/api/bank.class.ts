import {Country, CountryCode} from './country.model';
import {Offer} from "./offer.model";

export class Bank {
  id: number;
  uid: string;
  name: string;
  description: string;
  permalink: string;
  logo: string;
  insurance_name: string;
  insurance_description: string;
  country_code: CountryCode;
  countryId?: number;
  country: Country;
  offers: Offer[];
}
