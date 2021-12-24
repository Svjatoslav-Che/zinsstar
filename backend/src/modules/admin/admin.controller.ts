import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UpdateResult } from 'typeorm';
import { CustomQuery } from './models/custom-search';
import { UserBankDetailsDTO } from './dto/user-ban-details.dto';

import { AdminService } from './admin.service';
import { ApproveDocumentDTO, ApproveInvestmentDTO } from './dto/approve.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../user/models/user.class';
import { UserEntity } from '../../data/model/user.entity';
import { UserService } from '../user/services/user.service';

@ApiBearerAuth()
@ApiTags('admin')
@Controller('admin')
@Roles(UserRole.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  private logger: Logger = new Logger(AdminController.name);

  public constructor(
    private admin: AdminService,
    private userService: UserService,
  ) {
  }

  @Get('user')
  async getUser(@Query('id') id: string) {
    return this.admin.getUser(id);
  }

  @Patch('user')
  public updateUser(@Body() data: Partial<UserEntity>): Promise<UpdateResult> {
    return this.userService.updateUser(data);
  }

  @Post('user')
  async updateBankDetails(@Query('userId') userId: string, @Body() data: UserBankDetailsDTO) {
    return this.admin.updateUserBankDetails(userId, data);
  }

  @Get('user/:userId')
  async getUserOffers(@Param('userId') userId: string) {
    return this.admin.getUserOffers(userId);
  }

  @Get('user/:userId/docs')
  public getUserDocuments(@Param('userId') userId) {
    return this.admin.getUserDocuments(userId);
  }

  @Get('users')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getUsersWithPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(25), ParseIntPipe) limit: number = 25,
    @Query() customQuery: CustomQuery,
  ) {
    return this.admin.paginateUsers(customQuery, {
      page,
      limit,
      // route: 'http://localhost:3040/admin/users',
    } as IPaginationOptions);
  }

  @Get('users2')
  async getUsers() {
    return this.admin.getUsers();
  }

  @Get('image')
  async image(
  @Query('phone') phone: string,
    @Query('name', new DefaultValuePipe('no-file.png')) name: string = 'no-file.png',
    @Res() res: Response,
  ) {
    return await this.admin.getImageOf(phone, name, res);
  }

  @Get('image-list')
  async userListImage(@Query('userId') userId: string) {
    return this.admin.getFiles(userId);
  }

  @Post('approve')
  async approveDocument(@Body() data: ApproveDocumentDTO) {
    return this.admin.updateDocStatus(data);
  }

  @Post('investment')
  async approveInvestment(@Body(new ValidationPipe()) data: ApproveInvestmentDTO) {
    return this.admin.approveInvestment(data);
  }

  @Post('verified')
  async verifiedUser(@Query('userId') userId: string) {
    return await this.admin.sendVerifiedDocuments(userId);
  }
}
