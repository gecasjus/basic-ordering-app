import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './services/database-config.service';
import { NodeConfigService } from './services/node-config.service';
import { RedisConfigService } from './services/redis-config.service';

@Module({
  providers: [NodeConfigService, DatabaseConfigService, RedisConfigService],
  exports: [NodeConfigService, DatabaseConfigService, RedisConfigService],
})
export class ConfigModule { }
