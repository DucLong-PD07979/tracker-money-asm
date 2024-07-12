import express, { Application, Request, Response } from 'express';
import { connectDB } from './configs/database';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import api from './routers/api';
const app: Application = express();
connectDB();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);
app.use(api);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
