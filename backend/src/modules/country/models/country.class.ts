import { ApiProperty } from '@nestjs/swagger';
import { CountryCode } from './country.code.enum';
import { Currency } from './currency.enum';
import { CreditRating } from './rating.enum';

export class Country {
  @ApiProperty({ enum: CountryCode })
  country_code: CountryCode;
  @ApiProperty()
  name: string;
  @ApiProperty({ type: 'longtext' })
  description: string;
  @ApiProperty() tax_description: string;
  @ApiProperty() guarantee_amount: number;
  @ApiProperty({ type: 'enum', enum: Currency })
  guarantee_currency: Currency;

  @ApiProperty({ type: 'enum', enum: CreditRating, nullable: false })
  credit_rating: CreditRating | string;
  @ApiProperty()
  rating_date: string;
}

export class CountryModel extends Country {
  @ApiProperty()
  id: string;
}
