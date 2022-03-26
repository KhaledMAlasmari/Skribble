import { Router } from 'express';
import Player from '../services/Player';
import Session from '../services/Session';
import { MainSocket } from '../index';
const startGame = Router();
startGame.post('/start', async (request, response) => {
  try {
    const body: userRequest = request.body;
    response.send(body)
  } catch (error) {
    response.status(500).send(error);
  }
});
interface userRequest {
  name: string;
  socketId: string;
}
export default startGame;
