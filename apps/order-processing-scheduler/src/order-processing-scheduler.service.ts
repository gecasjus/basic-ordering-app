import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderProcessingSchedulerService {
  getHello(): string {
    return 'Hello World!';
  }
}
