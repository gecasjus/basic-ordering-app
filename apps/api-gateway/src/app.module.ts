import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrderUnitModule } from "./order-unit/order-unit.module";


@Module({
  imports: [
    OrderUnitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
