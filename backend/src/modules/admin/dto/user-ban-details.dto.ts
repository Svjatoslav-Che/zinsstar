import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserBankDetailsDTO {
  @IsNotEmpty()
  @IsOptional()
  iban: string;

  @IsOptional()
  @IsNotEmpty()
  bic: string;

  @IsOptional()
  @IsNotEmpty()
  accHolder: string;
}
