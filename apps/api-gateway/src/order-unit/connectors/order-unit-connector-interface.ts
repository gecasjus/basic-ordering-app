import { OrderUnitRepository } from "domains/order-unit/src/order-unit.repository";
import { OrderUnit } from "domains/order-unit/src/order-unit.interface";


export abstract class OrderUnitConnector implements OrderUnitRepository {
    abstract create(value: OrderUnit): Promise<void>
    abstract getAll(): Promise<void>
}