import { Module } from '@nestjs/common';
import { AskService } from './ask.service';
import { AskGateway } from './ask.gateway';

@Module({
  controllers: [],
  providers: [AskService, AskGateway],
})
export class AskModule {}
