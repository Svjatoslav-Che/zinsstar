import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString,
} from 'class-validator';
import { UserOfferStatus } from '../../user/models/offer-status.enum';
import { DocType } from '../../documents/models/doc-type.enum';
import { DocumentStatus } from '../../documents/models/doc-status.enum';

export class ApproveDocumentDTO {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  documentId: number;

  @ApiProperty({})
  @IsNotEmpty()
  @IsEnum(DocType)
  documentKey: DocType;

  @ApiProperty({})
  @IsNotEmpty()
  @IsEnum(DocumentStatus)
  status: DocumentStatus;

  @ApiProperty()
  @IsOptional()
  reason: string;
}

export class ApproveInvestmentDTO {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  investmentId: number;

  @ApiProperty({ type: 'enum', enum: UserOfferStatus })
  @IsNotEmpty()
  @IsEnum(UserOfferStatus)
  status: UserOfferStatus;
}
