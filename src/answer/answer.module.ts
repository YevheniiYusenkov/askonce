import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerGateway } from './answer.gateway';

@Module({
  controllers: [],
  providers: [AnswerService, AnswerGateway]
})
export class AnswerModule {}
