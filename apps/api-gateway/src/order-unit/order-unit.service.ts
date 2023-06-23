
import { OrderUnitStatus } from "@app/types";
import { Inject, Injectable } from "@nestjs/common";
import { OrderUnitDto } from "domains/order-unit/src/order-unit.dto";
import { OrderUnit } from "domains/order-unit/src/order-unit.interface";
import { OrderUnitConnector } from "./connectors/order-unit-connector-interface";

@Injectable()
export class OrderUnitService {
    constructor(@Inject(OrderUnitConnector)
    private readonly connectors: OrderUnitConnector[]) { }

    // how many time connects
    async handleCreate(orderUnitDto: OrderUnitDto) {
        const orderUnit: OrderUnit = {
            ...orderUnitDto,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            description: orderUnitDto.description ?? null,
            status: OrderUnitStatus.Locked
        }

        this.connectors.forEach(async (connector) => await connector.create(orderUnit))

        return 'all good bro'
    }
}