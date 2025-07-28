import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Variavel ambiente, Horario.
  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  // variavel de porta mundando para 4000.
  await app.listen(process.env.PORT ?? 4000);
}
void bootstrap();
