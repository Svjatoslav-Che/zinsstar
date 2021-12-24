import {
  Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags,
} from '@nestjs/swagger';
import { CreateBankDTO } from '../dto/create-bank.dto';
import { UpdateBankDTO } from '../dto/update-bank.dto';
import { BankModel } from '../models/bank.class';
import { BanksService } from '../services/banks.service';
import { UserRole } from '../../user/models/user.class';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';
import { Roles } from '../../auth/decorators/roles.decorator';

@ApiTags('Banks')
@Controller('banks')
export class BanksController {
  public constructor(private readonly service: BanksService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Fetch Bank ' })
  @ApiResponse({ status: 200, type: BankModel })
  async findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put('')
  public async update(@Body() data: any) {
    return this.service.update(data);
  }

  @Get()
  @ApiOperation({ summary: 'Fetch All Banks' })
  @ApiResponse({ status: 200, type: [BankModel] })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'bank', required: false })
  async findAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('bank', new DefaultValuePipe('')) bank: string = '',
  ) {
    return this.service.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create Banks' })
  @ApiResponse({ status: 200, type: BankModel })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async create(@Body() data: CreateBankDTO) {
    return this.service.create(data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Banks' })
  @ApiResponse({ status: 200 })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
