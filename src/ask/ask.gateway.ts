import { Socket, Server } from 'socket.io';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@WebSocketGateway({ namespace: 'ask' })
export class AskGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async handleConnection(client: Socket): Promise<void> {}

  async handleDisconnect(client: Socket): Promise<void> {}

  @SubscribeMessage('message')
  async handleMessage(client: Socket, message: string): Promise<void> {}
}
