import { Module } from '@nestjs/common';
import { MemcachedService } from './memcached.service';

@Module({
  providers: [MemcachedService],
  exports: [MemcachedService],
})
export class MemcachedModule {}
