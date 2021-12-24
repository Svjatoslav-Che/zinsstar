import {Currency} from "./currency.enum";

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
  SPT = "SPT"
}

export interface Country {
  id: number;
  country_code: CountryCode;
  name: string;
  description: string;
  tax_description: string;
  credit_rating: string;
  guarantee_amount: number;
  guarantee_currency: Currency;
  rating_date: string;
}

