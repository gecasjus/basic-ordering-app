import { TypeOrmModule } from "@app/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule],
    providers: [],
    exports: [],
})
export class OrderUnitModule { }
