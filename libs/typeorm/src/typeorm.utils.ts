import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;
}