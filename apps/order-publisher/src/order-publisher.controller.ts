import { Controller, Get } from '@nestjs/common';
import { OrderPublisherService } from './order-publisher.service';

@Controller()
export class OrderPublisherController {
  constructor(private readonly orderPublisherService: OrderPublisherService) {}

  @Get()
  getHello(): string {
    return this.orderPublisherService.getHello();
  }
}
