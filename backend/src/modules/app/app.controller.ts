import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller('')
// @Roles(UserRole.ADMIN)
// @UseGuards(JwtAuthGuard, RolesGuard)
export class AppController {
  public constructor(private readonly appService: AppService) { }

  @Post('populate-data')
  async populateData() {
    return this.appService.populateData();
  }

  // @Post('fix-bank-logos')
  // async fixBanks() {
  //   return this.appService.fixBanks();
  // }

  // @Post('fix-offer-currency')
  // fixCurrency() {
  //   return this.appService.fixCurrency();
  // }
}
