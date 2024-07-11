import express, { Application, Request, Response } from 'express';
import { connectDB } from './configs/database';

connectDB();
const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
