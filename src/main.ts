import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const logger = new Logger();
const ENV = process.env['ENV'];
const APP = process.env['APP'];
const PORT = process.env['PORT'] || 3000;
const VERSION = process.env['VERSION'];

logger.setContext(`App: ${APP} * Env: ${ENV}`);

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
      .setTitle(APP)
      .setDescription(`${APP} API description`)
      .setVersion(VERSION)
      .addTag(APP)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(PORT);
    const url = await app.getUrl();
    logger.verbose(`Server run on: ${url}`);
    logger.verbose(`Api documentation run on: ${url}/api`);
  } catch (error) {
    logger.error(error.message);
  }
}
bootstrap();
