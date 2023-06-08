import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDraftEntity } from "domains/order-unit/src/order-draft/order-draft.entity";

@Module({
    imports: [TypeOrmModule.forFeature([OrderDraftEntity])],
    providers: [],
    exports: [],
})
export class OrderDraftModule { }
