import { OrderUnitStatus } from "@app/types";

export interface OrderUnit {
    id: string;
    email: string;
    description: string | null;
    createdBy: string;
    status: OrderUnitStatus;
    createdAt: Date;
    itemIds: string[];
}