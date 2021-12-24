import {Currency} from "./currency.enum";

export class Offer {
  id?: number;
  oid: string;
  is_overnight: boolean;
  min_deposit: number;
  max_deposit: number;
  duration: number;
  is_foreign_currency: boolean;
  interest_rate: number;
  currency: Currency;
  bank_id: number;
  bankId?: number;
  isUpdating?: boolean;
  isNew?: boolean;
}
