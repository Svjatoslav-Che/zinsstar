import { CountryCode } from '../../country/models/country.code.enum';

export class CreateBankDTO {
  uid: string;// WIS

  name: string;// Wise Bank

  description: string;//

  permalink: string;// wise-bank

  logo: string;// wise-bank.png

  insurance_name: string;//

  insurance_description: string;//

  country_code: CountryCode = CountryCode.BEL;
}
