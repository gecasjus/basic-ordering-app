import { CacheConfigService } from '@app/config/services/cache-config.service';
import { DatabaseConfigService } from '@app/config/services/database-config.service';
import { NodeConfigService } from '@app/config/services/node-config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [NodeConfigService, DatabaseConfigService, CacheConfigService],
  exports: [NodeConfigService, DatabaseConfigService, CacheConfigService],
})
export class ConfigModule { }
