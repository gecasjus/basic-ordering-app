import { Injectable } from "@nestjs/common";
import { z } from "zod";

@Injectable()
export class ConfigService<T extends z.AnyZodObject> {
    private config: z.infer<T>;

    constructor(schema: T) {
        this.config = schema.parse(process.env)
    }

    public getConfig() {
        return this.config
    }
}