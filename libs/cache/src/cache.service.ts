
import { RedisConfigService } from '@app/config';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class CacheService {
    private client: Redis

    constructor(private readonly configService: RedisConfigService) {
        const config = configService.getConfig()

        // Promise.resolve
        this.client = new Redis(config.REDIS_URL)
    }

    getClient() {
        return this.client
    }
}
