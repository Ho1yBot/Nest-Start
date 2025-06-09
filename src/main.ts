import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем валидацию
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Автоматически преобразует типы
      whitelist: true, // Удаляет лишние поля из запроса
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle("User API")
    .setDescription("API for managing users")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
