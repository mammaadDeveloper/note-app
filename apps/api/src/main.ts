
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log(process.env.DATABASE_URL);

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  }))
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();
