import { Socket, Server } from 'socket.io';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { AskService } from './ask.service';

@WebSocketGateway({ namespace: 'ask' })
export class AskGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private service: AskService) {}

  async handleConnection(client: Socket): Promise<void> {
    await this.service.hello();
  }

  async handleDisconnect(client: Socket): Promise<void> {}

  @SubscribeMessage('message')
  async handleMessage(client: Socket, message: string): Promise<void> {}
}
