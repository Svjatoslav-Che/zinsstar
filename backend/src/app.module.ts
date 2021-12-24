import { Global, Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { ScheduleModule } from '@nestjs/schedule';
import { CountryModule } from './modules/country/country.module';
import { BanksModule } from './modules/banks/banks.module';
import { OffersModule } from './modules/offers/offers.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { AppService } from './modules/app/app.service';
import { AppController } from './modules/app/app.controller';
import { MailModule } from './modules/mail/mail.module';
import { AdminModule } from './modules/admin/admin.module';
import { DatabaseModule } from './data/database/database.module';

@Global()
@Module({
  imports: [
    ScheduleModule.forRoot(),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './', 'frontend'),
    }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: join(__dirname, './', 'uploads'),
      }),
    }),
    CountryModule,
    BanksModule,
    OffersModule,
    AuthModule,
    UserModule,
    DocumentsModule,
    MailModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule { }
