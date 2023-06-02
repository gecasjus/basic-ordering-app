import { Test, TestingModule } from '@nestjs/testing';
import { OrderPublisherController } from './order-publisher.controller';
import { OrderPublisherService } from './order-publisher.service';

describe('OrderPublisherController', () => {
  let orderPublisherController: OrderPublisherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderPublisherController],
      providers: [OrderPublisherService],
    }).compile();

    orderPublisherController = app.get<OrderPublisherController>(OrderPublisherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderPublisherController.getHello()).toBe('Hello World!');
    });
  });
});
