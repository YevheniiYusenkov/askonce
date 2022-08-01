import { ModuleMetadata, Type } from '@nestjs/common';

import { CacheOptions } from './cache-options.interface';
import { CacheOptionsFactory } from './cache-options-factory.interface';

export interface CacheOptionsAsync extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<CacheOptionsFactory>;
  useClass?: Type<CacheOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<CacheOptions> | CacheOptions;
}
