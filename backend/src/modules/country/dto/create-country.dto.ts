import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Country } from '../models/country.class';
import { Currency } from '../models/currency.enum';
import { CreditRating } from '../models/rating.enum';

export class CreateCountry {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: Country })
  @IsNotEmpty()
  country_code: Country;

  @IsNotEmpty()
  description: string;

  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  source_tax: number;

  @ApiProperty()
  @IsNotEmpty()
  source_tax_description: string;

  @ApiProperty({ type: 'enum', enum: CreditRating, nullable: false })
  @IsNotEmpty()
  credit_rating: CreditRating;

  @ApiProperty()
  @IsNotEmpty()
  deposit_guarantee_amount: number;

  @ApiProperty({ type: 'enum', enum: Currency, nullable: false })
  @IsEnum({ Currency })
  @IsNotEmpty()
  deposit_guarantee_currency: Currency;

  @ApiProperty()
  @IsNotEmpty()
  rating_date: string;
}
