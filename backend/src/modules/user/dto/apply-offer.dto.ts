import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OfferApplicationDTO {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  readonly amount: number;
  @IsNotEmpty()
  @ApiProperty({ required: true })
  readonly oid: string;
}
