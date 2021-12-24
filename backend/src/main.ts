import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'node-config-ts';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { EnvironmentEnum } from './common/enum/environment.enum';

const setupSwagger = (app): void => {
  app.setGlobalPrefix('api');
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Zinsunion API')
    .setDescription('')
    .setVersion('0.0.1')
    .addBearerAuth()
    .addTag('App')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
};

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  if (EnvironmentEnum.DEV === config.application.env) setupSwagger(app);
  const logger: Logger = new Logger(bootstrap.name);

  await app.listen(config.application.port, () => logger.log(`Server is listen ${config.application.port} port`));
};

bootstrap();
