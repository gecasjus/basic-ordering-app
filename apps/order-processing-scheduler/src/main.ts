import { NestFactory } from '@nestjs/core';
import { OrderProcessingSchedulerModule } from './order-processing-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderProcessingSchedulerModule);
  await app.listen(3000);
}
bootstrap();
