import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags,
} from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { Offer } from '../model/offer.class';

import { OffersService } from '../services/offers.service';
import { UserRole } from '../../user/models/user.class';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { OffersEntity } from '../../../data/model/offer.entity';

@ApiTags('Offers')
@Controller('offers')
@UseInterceptors(ClassSerializerInterceptor)
export class OffersController {
  private readonly logger = new Logger('OffersController');

  public constructor(private readonly service: OffersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Fetch Offer' })
  @ApiResponse({ status: 200, type: Offer })
  async findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create Offer' })
  @ApiResponse({ status: 200, type: Offer })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  public create(@Body() data: Partial<OffersEntity>): Promise<OffersEntity> {
    return this.service.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Offer' })
  @ApiResponse({ status: 200, type: Offer })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  public async update(@Param('id') id: string, @Body() data: OffersEntity): Promise<OffersEntity> {
    return this.service.update(data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Offer' })
  @ApiResponse({ status: 200 })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.service.delete(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Read multiple Offers' })
  @ApiResponse({ status: 200, type: [Offer] })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'bank', required: false })
  paginate(
  @Query('limit', new DefaultValuePipe(500), new ParseIntPipe()) limit: number,
    @Query('page', new DefaultValuePipe(1), new ParseIntPipe()) page: number,
    @Query('bank', new DefaultValuePipe('')) code: string,
  ) {
    return this.service.findAll();
  }
}
