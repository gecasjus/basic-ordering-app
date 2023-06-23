import { ArrayNotEmpty, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class OrderUnitDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    description?: string

    @IsNotEmpty()
    createdBy: string;

    @ArrayNotEmpty()
    itemIds: string[]
}