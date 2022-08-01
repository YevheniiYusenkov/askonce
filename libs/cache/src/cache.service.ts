import { Inject, Injectable } from '@nestjs/common';

import { createClient, RedisClientType } from 'redis';

import { CACHE_OPTIONS } from './constants';
import { CacheOptions } from './interfaces';

@Injectable()
export class CacheService {
  private client: RedisClientType;

  constructor(@Inject(CACHE_OPTIONS) private options: CacheOptions) {
    this.client = createClient({
      url: `redis://${options.username}:${options.password}@${options.host}:${options.port}`,
    });
  }

  async connect(): Promise<any> {
    return await this.client.connect();
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string> {
    return await this.client.get(key);
  }
}
