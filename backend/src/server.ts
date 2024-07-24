import express, { Application, Request, Response } from 'express';
import { connectDB } from './configs/database';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import api from './routers/api';
connectDB();

const app: Application = express();
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(api);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
