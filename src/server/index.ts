import app from './app';
import http from 'http';
import config from './utils/config';
import dotenv from 'dotenv';
import logger from './utils/logger';
import { Server } from 'socket.io';
import { exit } from 'process';
import Session from './services/Session';
import Participant from './services/Participant';
import Host from './services/Host';

const httpServer = http.createServer(app);

httpServer.listen(config.PORT, async () => {
  try {
    logger.info(`The server is listening on http://localhost:${config.PORT}`);
  } catch (error) {
    logger.error(error);
    exit(1);
  }
});

const MainSocket = new Server(httpServer, {});

MainSocket.on('connection', (socket : any) => {
  socket.on('join', (data : any) => {
    console.log(data);
    const sessionId = data;
    const newPlayer = new Participant(socket.id, sessionId);
    socket.join(newPlayer.getCurrentSession());
  });

  socket.on('createGame', (socket123: any) => {
    console.log('game created on the server');
    const roomHost = new Host(socket.id);
    const session = new Session(roomHost);
    socket.join(session.getToken());
    MainSocket.emit('gameCreated', { session: session.getToken() });
  });
});

export { MainSocket };
