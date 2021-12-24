import { ApiProperty } from '@nestjs/swagger';

export class Bank {
  @ApiProperty()
  name: string;
  @ApiProperty()
  iso_code: string;
}

export class BankModel extends Bank {
  @ApiProperty()
  id: number;
}
