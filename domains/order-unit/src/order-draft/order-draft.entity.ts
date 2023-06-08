import { BaseEntity } from '@app/typeorm/typeorm.utils';
import { Entity, Column } from 'typeorm';

export enum OrderDraftStatus {
    Locked = 'Locked',
    WaitingFinancialApproval = 'WaitingFinancialApproval',
    WarehousePickUp = 'WarehousePickUp',
    Delivered = 'Delivered',
}


@Entity({ name: 'order-draft' })
export class OrderDraftEntity extends BaseEntity {
    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar', length: 300 })
    description: string;

    @Column({
        type: "enum",
        enum: OrderDraftStatus,
        default: OrderDraftStatus.Locked
    })
    status: OrderDraftStatus[];

    @Column('text', { array: true })
    itemIds: string[];
}