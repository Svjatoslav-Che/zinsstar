import {
  Body, Controller, Delete, Get, Param, Post, Put, UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth, ApiOperation, ApiResponse, ApiTags,
} from '@nestjs/swagger';
import { CountryService } from '../services/country.service';
import { Country, CountryModel } from '../models/country.class';
import { UserRole } from '../../user/models/user.class';
import { Roles } from '../../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';

@ApiTags('Country')
@Controller('country')
export class CountryController {
  public constructor(private readonly service: CountryService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Fetch country' })
  @ApiResponse({ status: 200, type: CountryModel })
  async findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Read multiple countries' })
  @ApiResponse({ status: 200, type: [CountryModel] })
  async findAll() {
    return this.service.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create Country' })
  @ApiResponse({ status: 200, type: CountryModel })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async create(@Body() data: Country) {
    return this.service.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Country' })
  @ApiResponse({ status: 200, type: CountryModel })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Body() data: Country) {

  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Country' })
  @ApiResponse({ status: 200 })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
