import { CacheConfigService } from '@app/config/services/cache-config.service';
import { Injectable } from '@nestjs/common';
import Memcached from 'memcached'

type MemcachedOpts = Memcached.options & { ttl: number }

@Injectable()
export class MemcachedService {
    private client: Memcached
    private opts: MemcachedOpts

    constructor(readonly configService: CacheConfigService) {
        const config = configService.getConfig()

        this.client = new Memcached(config.url);

        this.opts = {
            ttl: Number(config.ttl)
        }
    }

    get ttl() {
        return this.opts.ttl
    }

    getClient(): Memcached {
        return this.client
    }
}
