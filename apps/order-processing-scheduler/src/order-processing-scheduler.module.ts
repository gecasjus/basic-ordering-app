import { Module } from '@nestjs/common';
import { OrderProcessingSchedulerController } from './order-processing-scheduler.controller';
import { OrderProcessingSchedulerService } from './order-processing-scheduler.service';

@Module({
  imports: [],
  controllers: [OrderProcessingSchedulerController],
  providers: [OrderProcessingSchedulerService],
})
export class OrderProcessingSchedulerModule {}
