import { Injectable } from "@nestjs/common";
import { z } from "zod";
import { ConfigService } from "./config.service";

const DatabaseSchema = z.object({
    TYPE: z.enum(['postgres']),
    URL: z.string(),
});

@Injectable()
export class DatabaseConfigService extends ConfigService<typeof DatabaseSchema> {
    constructor() {
        super(DatabaseSchema)
    }
}