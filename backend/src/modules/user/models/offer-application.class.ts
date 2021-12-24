import { IsNumber } from 'class-validator';

export class OfferApplication {
  @IsNumber()
  amount: number;
}
