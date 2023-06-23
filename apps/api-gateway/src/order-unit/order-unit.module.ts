import { Module } from "@nestjs/common";
import { OrderUnitConnectorCacheService } from "./connectors/cache/order-unit-connector-cache.service";
import { OrderUnitConnector } from "./connectors/order-unit-connector-interface";
import { OrderUnitController } from "./order-unit.controller";
import { OrderUnitService } from "./order-unit.service";


const connectors = [OrderUnitConnectorCacheService];
const connectorProviders = [
    ...connectors,
    {
        provide: OrderUnitConnector,
        useFactory: (...injectedConnectors) => injectedConnectors,
        inject: connectors,
    },
];

@Module({
    imports: [],
    controllers: [OrderUnitController],
    providers: [OrderUnitService, ...connectorProviders],
})
export class OrderUnitModule { }
