import { Test, TestingModule } from '@nestjs/testing';
import { OrderProcessingSchedulerController } from './order-processing-scheduler.controller';
import { OrderProcessingSchedulerService } from './order-processing-scheduler.service';

describe('OrderProcessingSchedulerController', () => {
  let orderProcessingSchedulerController: OrderProcessingSchedulerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderProcessingSchedulerController],
      providers: [OrderProcessingSchedulerService],
    }).compile();

    orderProcessingSchedulerController = app.get<OrderProcessingSchedulerController>(OrderProcessingSchedulerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderProcessingSchedulerController.getHello()).toBe('Hello World!');
    });
  });
});
