import { DatabaseConfigService } from '@app/config/services/database-config.service';
import { NodeConfigService } from '@app/config/services/node-config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [NodeConfigService, DatabaseConfigService],
  exports: [NodeConfigService, DatabaseConfigService],
})
export class ConfigModule { }
