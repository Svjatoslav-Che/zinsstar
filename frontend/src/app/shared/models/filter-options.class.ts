export interface DurationData {
  range: DurationRange;
  count: number;
  months: number;
}

export interface DurationRange {
  min: number;
  max: number;
}

export interface FilterOption {
  value: string;
  duration: DurationRange;
  title: string;
  count: { festgeld: number, tagsgeld: number };
}

export enum BankFilter {
  NAME_A_Z,
  NAME_Z_A,
  COUNTRY_A_Z,
  COUNTRY_Z_A,
}