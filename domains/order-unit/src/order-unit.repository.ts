import { OrderUnit } from "./order-unit.type";

export interface OrderUnitRepository {
    create(value: OrderUnit): void
    getAll(): void
}