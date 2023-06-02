import { ConfigService } from "@app/config/services/config.service";
import { z } from "zod";

const NodeSchema = z.object({
    NODE_ENV: z.string(),
});

export class NodeConfigService extends ConfigService<typeof NodeSchema> {
    constructor() {
        super(NodeSchema)
    }
}