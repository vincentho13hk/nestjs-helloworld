import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { Apiv1Module } from './apiv1/apiv1.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('nestjs swagger example')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer('http://localhost:8000', 'Develop Local')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [Apiv1Module]
  });
  SwaggerModule.setup('apidoc/v1', app, document);
  await app.listen(8000);
}
bootstrap();
