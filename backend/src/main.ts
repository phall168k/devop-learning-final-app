import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${process.env.API_PREFIX}`);
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  setupSwagger(app);
  await app.listen(process.env.API_PORT ?? 8000);
}
bootstrap();
