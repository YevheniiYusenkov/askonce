import { Injectable } from '@nestjs/common';

import { CacheService } from '@app/cache';

@Injectable()
export class AskService {
  constructor(private cacheManager: CacheService) {}

  public async hello() {
    await this.cacheManager.set('mylove', 'Polya!!!');
    const message = await this.cacheManager.get('mylove');
    console.log(message);
  }
}
