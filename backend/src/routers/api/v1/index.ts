import express from 'express';
import authRouters from './authRouters';

const Router = express.Router();
Router.use('/v1/auth', authRouters);

export default Router;
