import { Injectable } from "@nestjs/common";
import { z } from "zod";
import { ConfigService } from "./config.service";

const RedisSchema = z.object({
    REDIS_URL: z.string(),
});

@Injectable()
export class RedisConfigService extends ConfigService<typeof RedisSchema> {
    constructor() {
        super(RedisSchema)
    }
}