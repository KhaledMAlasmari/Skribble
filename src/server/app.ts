import express from 'express';
import cors from 'cors';
import path from 'path';
import startGame from './routes/start';

const app = express();
app.use(cors());
app.use(express.json());
app.use(startGame);
// stop caching the pages!
app.set('etag', false);
// routes
const publicPath = path.join(__dirname, '../../build');
app.use(express.static(publicPath));
app.use('*', express.static(publicPath));

export default app;
