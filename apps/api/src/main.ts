
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  }));

  const documentConfig = new DocumentBuilder()
    .setTitle('Note App - API Documentation')
    .setDescription('This is the API documentation for the Note App, which provides endpoints for managing notes.')
    .setLicense('Apache 2.0', 'http://www.apache.org/licenses/LICENSE-2.0')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api/docs', app, document, {
    jsonDocumentUrl: 'api/docs/json',
  });
  fs.writeFileSync('./swagger.json', JSON.stringify(document));

  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();
