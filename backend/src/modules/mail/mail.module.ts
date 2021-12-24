import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'node-config-ts';
import { MailService } from './services/mail.service';
import { UserEntity } from '../../data/model/user.entity';
import { MailController } from './mail.controller';
import { UserDocsEntity } from '../../data/model/user-documents.entity';

@Module({
  controllers: [MailController],
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserDocsEntity]),
    MailerModule.forRoot({
      transport: {
        host: config.mail.host,
        secure: false,
        port: +config.mail.port,
        auth: {
          user: config.mail.user,
          pass: config.mail.password,
        },
        ignoreTLS: true,
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: true,
        },
      },
      defaults: {
        from: `ZinsUnion <${config.mail.from}>`,
      },
      template: {
        dir: path.resolve(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
