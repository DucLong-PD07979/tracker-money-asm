import express from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  authRegister,
  authLogin,
  authLogout,
  authRefreshToken,
  authWithGoogle,
  authLoginSuccess,
  authLoginFail
} from '@/controllers/authController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import passport from 'passport';
import { IS_PRODUCTION } from '@/configs/environment';
const Routes = express.Router();

Routes.post('/register', authRegister);
Routes.post('/login', authLogin);
Routes.get('/login/success', authLoginSuccess);
Routes.get('/login/fail', authLoginFail);
Routes.post('/logout', verifyToKen, authLogout);
Routes.post('/refresh-token', authRefreshToken);
Routes.get('/google', authWithGoogle);
Routes.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
    session: false
  }),
  (req, res) => {
    const token = req.user;
    res.cookie('jwt', token, { httpOnly: false, secure: IS_PRODUCTION ? true : false });
    res.redirect('http://localhost:5173/profile');
  }
);

export default Routes;
