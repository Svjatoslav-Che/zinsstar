import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Min, MinLength,
} from 'class-validator';
import { DocumentStatus } from '../../documents/models/doc-status.enum';

export interface IPagination {
  page: number;
  limit: number;
}

export class CustomQuery {
  @ApiProperty({ description: 'card', required: false, default: DocumentStatus.NA })
  @IsOptional()
  @IsEnum(DocumentStatus)
  card?: DocumentStatus;

  @ApiProperty({ description: 'passport', required: false, default: DocumentStatus.NA })
  @IsOptional()
  @IsEnum(DocumentStatus)
  passport?: DocumentStatus;

  @ApiProperty({ description: 'selfie', required: false, default: DocumentStatus.NA })
  @IsOptional()
  @IsEnum(DocumentStatus)
  selfie?: DocumentStatus;

  @ApiProperty({
    type: 'boolean', description: 'has Investments', required: false, default: false,
  })
  @IsOptional()
  @IsBoolean()
  investments?: boolean = false;

  @ApiProperty({
    type: 'boolean', description: 'verified', required: false, default: true,
  })
  @IsOptional()
  @IsBoolean()
  verified?: boolean = false;
}

export class SearchPostDto {
  @ApiProperty({ description: 'search_term', required: false })
  @IsOptional()
  @IsString()
  @MinLength(2)
  public search_term!: string;

  @ApiProperty({
    description: 'tags',
    required: false,
  })
  @IsString({ each: true })
  @IsOptional()
  public tags?: string[];

  @ApiProperty({
    description: 'page number for request',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  public page?: number;

  @ApiProperty({
    description: 'number of records in a request',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  public limit?: number;

  @ApiProperty({
    description: 'number of records in a request',
    required: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  startId?: number;
}
