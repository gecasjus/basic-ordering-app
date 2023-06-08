import { ConfigModule } from "@app/config";
import { MemcachedService } from "@app/memcached/memcached.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [ConfigModule],
  providers: [MemcachedService]
})
export class MemcachedModule { }
