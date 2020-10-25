import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();
const ENV = process.env['ENV'];
const APP = process.env['APP'];
const PORT = process.env['PORT'] || 3000;

logger.setContext(`App: ${APP} * Env: ${ENV}`);

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT);
    const url = await app.getUrl();
    logger.verbose(`Server run on: ${url}`);
  } catch (error) {
    logger.error(error.message);
  }
}
bootstrap();
