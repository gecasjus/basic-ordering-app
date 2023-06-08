import { ConfigService } from "@app/config/services/config.service";
import { z } from "zod";

const CacheSchema = z.object({
    url: z.union([z.string(), z.array(z.string())]),
    ttl: z.string()
});

export class CacheConfigService extends ConfigService<typeof CacheSchema> {
    constructor() {
        super(CacheSchema)
    }
}