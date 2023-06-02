import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    comment: string | null;
}



export { BaseEntity }