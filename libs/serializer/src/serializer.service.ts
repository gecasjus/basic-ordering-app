import { Injectable } from '@nestjs/common';

@Injectable()
export class SerializerService {
    serialize(iterable: Iterable<any>) {
        return JSON.stringify([...iterable]);
    }

    deserialize(str: string) {
        return new Map(JSON.parse(str));
    }
}
