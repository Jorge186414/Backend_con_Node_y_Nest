import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Aunque se manden mas datos que no estan en el DTO
      // los va a eliminar de forma automatica y solo mostrara los definidos en el DTO
      forbidNonWhitelisted: true // Aunque whitelist los elimina, este se encarga de 
      // decir que los datos extras que se estan mandando no deberian de ir
    })
  )

  await app.listen(3000);
}
bootstrap();
