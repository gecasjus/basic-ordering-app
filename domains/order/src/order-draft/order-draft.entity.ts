// item.entity.ts
import { BaseEntity } from '@app/typeorm/typeorm.utils';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'order-draft' })
export class OrderDraftEntity extends BaseEntity {
    @Column({ type: 'varchar', length: 300 })
    name: string;

    @Column({ type: 'varchar', length: 300 })
    description: string;

    @Column('text', { array: true })
    itemIds: string[];
}