import { Injectable } from "@nestjs/common";
import { z } from "zod";
import { ConfigService } from "./config.service";

const NodeSchema = z.object({
    NODE_ENV: z.string(),
});

@Injectable()
export class NodeConfigService extends ConfigService<typeof NodeSchema> {
    constructor() {
        super(NodeSchema)
    }
}