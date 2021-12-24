import { IsNotEmpty, IsNumber } from 'class-validator';

export class RevokeOfferDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
}
