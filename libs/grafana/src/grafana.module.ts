import { Module } from '@nestjs/common';
import { GrafanaService } from './grafana.service';

@Module({
  providers: [GrafanaService],
  exports: [GrafanaService],
})
export class GrafanaModule {}
