import { CacheModule } from "@app/cache";
import { Module } from "@nestjs/common";
import { OrderUnitConnectorCacheService } from "./order-unit-connector-cache.service";

@Module({
    imports: [CacheModule],
    providers: [OrderUnitConnectorCacheService],
})
export class OrderUnitConnectorCacheModule { }
