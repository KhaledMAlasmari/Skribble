import { io, Socket } from 'socket.io-client';
class SocketConnection {
  private static connection: Socket;
  private static instance: SocketConnection;
  private constructor() {}
  public static getInstance(): SocketConnection {
    if (!SocketConnection.instance) {
      SocketConnection.instance = new SocketConnection();
      this.connection = io();
    }
    return SocketConnection.instance;
  }

  public static getConnection() {
    return this.connection;
  }
}

export default SocketConnection;
