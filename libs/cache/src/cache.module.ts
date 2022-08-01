import { DynamicModule, Global, Module, Provider } from '@nestjs/common';

import {
  CacheOptions,
  CacheOptionsAsync,
  CacheOptionsFactory,
} from './interfaces';

import { CacheService } from './cache.service';
import { CACHE_OPTIONS, CACHE_CONNECTION } from './constants';

export const connectionFactory = {
  provide: CACHE_CONNECTION,
  useFactory: async (cacheService) => {
    return cacheService.connect();
  },
  inject: [CacheService],
};

@Global()
@Module({})
export class CacheModule {
  public static forRoot(options: CacheOptions): DynamicModule {
    return {
      module: CacheModule,
      providers: [
        {
          provide: CACHE_OPTIONS,
          useValue: options,
        },
        connectionFactory,
        CacheService,
      ],
      exports: [CacheService, connectionFactory],
    };
  }

  public static forRootAsync(options: CacheOptionsAsync): DynamicModule {
    return {
      module: CacheModule,
      imports: options.imports || [],
      providers: [
        this.createConnectAsyncProviders(options),
        connectionFactory,
        CacheService,
      ],
      exports: [CacheService, connectionFactory],
    };
  }

  private static createConnectAsyncProviders(
    options: CacheOptionsAsync,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: CACHE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    return {
      provide: CACHE_OPTIONS,
      useFactory: async (optionsFactory: CacheOptionsFactory) =>
        await optionsFactory.createCacheOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
