import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderPublisherService {
  getHello(): string {
    return 'Hello World!';
  }
}
