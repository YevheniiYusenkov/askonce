import { CacheOptions } from '@app/cache/interfaces/cache-options.interface';

export interface CacheOptionsFactory {
  createCacheOptions(): Promise<CacheOptions> | CacheOptions;
}
