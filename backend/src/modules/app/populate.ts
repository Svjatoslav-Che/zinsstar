export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  BGN = 'BGN',
  SEK = 'SEK',
  NOK = 'NOK',
}

export enum CountryCode {
  AUT = 'AUT',
  BEL = 'BEL',
  BGR = 'BGR',
  CYP = 'CYP',
  CZE = 'CZE',
  DEU = 'DEU',
  ESP = 'ESP',
  EST = 'EST',
  FRA = 'FRA',
  GRC = 'GRC',
  HRV = 'HRV',
  IRL = 'IRL',
  ITA = 'ITA',
  LTU = 'LTU',
  LUX = 'LUX',
  LVA = 'LVA',
  MLT = 'MLT',
  NLD = 'NLD',
  NOR = 'NOR',
  POL = 'POL',
  PRT = 'PRT',
  SWE = 'SWE',
  SPT = 'SPT',
}

export interface CountryModel {
  country_code: CountryCode;
  name: string;
  description: string;
  tax_description: string;
  credit_rating: string;
  guarantee_amount: number;
  guarantee_currency: Currency;
  rating_date: string;
  banks: BankModel[];
}

export interface BankModel {
  uid: string;
  name: string;
  description: string;
  permalink: string;
  insurance_name: string;
  insurance_description: string;
  logo: string;
  offers: OfferModel[];
}

export interface OfferModel {
  oid: string;
  is_in_foreign_currency: boolean;
  min_placement_amount: boolean;
  max_placement_amount: number;
  is_overnight: boolean;
  currency: Currency;
  interest_rate: number;
  duration: number;
}
