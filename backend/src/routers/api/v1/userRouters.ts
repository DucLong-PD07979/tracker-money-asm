import { getUserInforWithToken } from '@/controllers/userController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';

const Router = express.Router();
Router.get('/user', [verifyToKen], getUserInforWithToken);

export default Router;
