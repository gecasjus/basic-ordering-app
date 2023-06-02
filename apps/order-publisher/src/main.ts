import { NestFactory } from '@nestjs/core';
import { OrderPublisherModule } from './order-publisher.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderPublisherModule);
  await app.listen(3000);
}
bootstrap();
