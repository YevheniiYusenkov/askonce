import { Module } from '@nestjs/common';
import { AskService } from './ask.service';
import { AskGateway } from './ask.gateway';
import { CacheModule } from '@app/cache';

@Module({
  controllers: [],
  providers: [AskService, AskGateway],
  imports: [
    CacheModule.forRoot({
      username: '',
      password: '',
      host: 'localhost',
      port: '6379',
    }),
  ],
})
export class AskModule {}
