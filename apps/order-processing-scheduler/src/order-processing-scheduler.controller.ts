import { Controller, Get } from '@nestjs/common';
import { OrderProcessingSchedulerService } from './order-processing-scheduler.service';

@Controller()
export class OrderProcessingSchedulerController {
  constructor(private readonly orderProcessingSchedulerService: OrderProcessingSchedulerService) {}

  @Get()
  getHello(): string {
    return this.orderProcessingSchedulerService.getHello();
  }
}
