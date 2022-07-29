import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'net';

@WebSocketGateway({ namespace: 'ask' })
export class AskGateway {
  @SubscribeMessage('ask')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any,
  ): string {
    return 'Hello world!';
  }
}
