import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para o frontend acessar
  app.enableCors({
    origin: process.env.FRONTEND_URL || "*", // em produção coloque a URL do frontend
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
