import {
  Body, ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors, ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OfferApplicationDTO } from '../dto/apply-offer.dto';
import { RevokeOfferDTO } from '../dto/revoke.dto';
import { UserPayload, UserRole } from '../models/user.class';
import { UserOffersService } from '../services/user-offers.service';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';
import { GetUser } from '../../auth/decorators/get-user.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';

@ApiTags('User')
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class UserOfferController {
  public constructor(
    private readonly userOfferService: UserOffersService,
    private userService: UserService,
  ) { }

  @Post('apply')
  async applyOffer(
  @GetUser() user: UserPayload,
    @Body(ValidationPipe) data: OfferApplicationDTO,
  ) {
    // TODO Send email if the documents are not verified
    return this.userOfferService.applyForOffer(user, data);
  }

  @Get('me')
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  public async getMe(@GetUser() user: UserPayload): Promise<any> {
    return this.userService.getMyProfile(user);
  }

  @Get('/me/offers')
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  async getUserOffers(@GetUser() user: UserPayload) {
    return this.userOfferService.getUserOffers(user);
  }

  @Get('bankDetails')
  @Roles(UserRole.ADMIN, UserRole.CUSTOMER)
  async getBankDetails(@GetUser() user: UserPayload) {
    return this.userService.getBankDetails(user);
  }

  @Post('revoke')
  async revokeOffer(
  @GetUser() user: UserPayload,
    @Body() data: RevokeOfferDTO,
  ) {
    return this.userOfferService.revokeOffer(user, data);
  }
}
