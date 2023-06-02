import { Module } from '@nestjs/common';
import { OrderPublisherController } from './order-publisher.controller';
import { OrderPublisherService } from './order-publisher.service';

@Module({
  imports: [],
  controllers: [OrderPublisherController],
  providers: [OrderPublisherService],
})
export class OrderPublisherModule { }
