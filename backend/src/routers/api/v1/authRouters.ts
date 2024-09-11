import express from 'express';
import {
  authRegister,
  authLogin,
  authLogout,
  authRefreshToken,
  authWithGoogle,
  authLoginSuccess,
  authLoginFail,
  authWithGoogleCallback
} from '@/controllers/authController';
import { verifyToKen } from '@/middlewares/authMiddleware';
const Routes = express.Router();

Routes.post('/register', authRegister);
Routes.post('/login', authLogin);
Routes.get('/login/success', authLoginSuccess);
Routes.get('/login/fail', authLoginFail);
Routes.post('/logout', verifyToKen, authLogout);
Routes.post('/refresh-token', authRefreshToken);
Routes.get('/google', authWithGoogle);
Routes.get('/google/callback', authWithGoogleCallback);

export default Routes;
