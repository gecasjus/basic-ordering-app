import { ConfigModule } from "@app/config";
import { Module } from "@nestjs/common";
import { CacheService } from "./cache.service";

@Module({
  imports: [ConfigModule],
  providers: [CacheService]
})
export class CacheModule { }
