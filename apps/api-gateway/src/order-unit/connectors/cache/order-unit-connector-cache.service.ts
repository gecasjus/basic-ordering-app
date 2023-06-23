import { CacheService } from "@app/cache";
import { Injectable } from "@nestjs/common";
import { OrderUnit } from "domains/order-unit/src/order-unit.interface";
import { OrderUnitConnector } from "../order-unit-connector-interface";


@Injectable()
export class OrderUnitConnectorCacheService implements OrderUnitConnector {
    constructor(private readonly cacheService: CacheService) { }

    async create(orderUnit: OrderUnit) {
        const cacheClient = this.cacheService.getClient()

        const cacheKey = orderUnit.createdAt.toString()

        // serializer
        await cacheClient.set(cacheKey, 'orderUnit')
    }

    getAll() {
        return Promise.resolve()
    }
}