import { Currency } from '../../country/models/currency.enum';

export enum OpeningDocumentTypes {
  NONE = 'NONE',
  PAPER = 'PAPER',
  DIGIT = 'DIGIT',
}

export enum CmsContentExtra {
  ATTACHMENT = 'ATTACHMENT',
  STRING_HTML = 'STRING_HTML',
  STRING_PLAIN = 'STRING_PLAIN',
}

export class Extra {
  id: string;

  type?: CmsContentExtra | string;

  media_type?: string;

  url_path?: string;

  value?: string;
}

export class CmsContent {
  logo?: Extra;

  deposit_insurance_description?: Extra;

  description_document?: Extra;

  interest_payment_terms?: Extra;

  deposit_insurance_name?: Extra;

  deposit_terms?: Extra;

  finanz_test_label?: Extra;

  termination_notice?: Extra;

  interest_rate_changes_notice?: Extra;
}

export class Offer {
  id: string;

  has_fixed_investment_amount: boolean;

  is_in_foreign_currency: boolean;

  min_placement_amount: number;

  max_placement_amount: number;

  is_overnight: boolean;

  currency: Currency;

  availability_notice?: string;

  payout_period_after_termination?: number;

  nominal_interest_rate: number;

  effective_interest_rate: number;

  prolongation_interest_rate: number;

  is_flexgeld: boolean;

  is_top_offer: boolean;

  number_of_terms: number;

  early_termination_interest_rate?: number;

  early_termination_effective_interest_rate?: number;

  rate_change: boolean;

  rate_change_date?: string;

  rate_change_value?: number;

  interest_paid_on_booking: boolean;

  termination_notice_period: number;

  cms_content: CmsContent;

  partner_bank: string;

  important_information?: string;

  special_offer_chip_text?: string;
}
