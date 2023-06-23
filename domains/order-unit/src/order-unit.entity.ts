import { BaseEntity } from '@app/typeorm';
import { OrderUnitStatus } from '@app/types';
import { Entity, Column } from 'typeorm';
import { OrderUnit } from './order-unit.interface';


@Entity({ name: 'order-unit' })
export class OrderUnitEntity extends BaseEntity implements OrderUnit {
    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    description: string | null;

    @Column({
        type: "enum",
        enum: OrderUnitStatus,
        default: OrderUnitStatus.Locked
    })
    status: OrderUnitStatus;

    // TODO: impl Foreign key
    @Column('text', { array: true })
    itemIds: string[];
}