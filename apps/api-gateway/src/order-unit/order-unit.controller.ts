import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
} from "@nestjs/common";
import { OrderUnitDto } from "domains/order-unit/src/order-unit.dto";
import { OrderUnitService } from "./order-unit.service";


@Controller("order-unit")
export class OrderUnitController {
    constructor(
        private readonly orderUnitService: OrderUnitService,
    ) { }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Post("create")
    async create(@Body() orderUnit: OrderUnitDto) {
        try {
            await this.orderUnitService.handleCreate(orderUnit);
        } catch (error) {
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
