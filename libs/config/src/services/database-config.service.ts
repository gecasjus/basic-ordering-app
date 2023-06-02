import { ConfigService } from "@app/config/services/config.service";
import { z } from "zod";

const DatabaseSchema = z.object({
    TYPE: z.enum(['postgres']),
    URL: z.string(),
});

export class DatabaseConfigService extends ConfigService<typeof DatabaseSchema> {
    constructor() {
        super(DatabaseSchema)
    }
}