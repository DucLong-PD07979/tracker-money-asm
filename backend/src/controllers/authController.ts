// import userDataBase from '~/config/mongodb';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  checkEmailIsAlreadyExists,
  checkIsNameAlreadExists,
  checkIsPasswordComfir,
  generateAccessToken,
  generateRrefreshToken,
  getVerifyToken,
  hashPassword,
  blackListTokens
} from '@/services/authServices';
import { CLIENT_URL, REFRESH_TOKEN_KEY } from '@/configs/environment';
import passport from 'passport';
import UserModel from '@/models/userModel';

const REFRESH_COOKIE_NAME = 'refresh-token';

const authRegister = async (req: Request, res: Response) => {
  //   try {
  //     const userData = await UserModel.find();
  //     const { name, email, pass, role } = req.body;
  //     const checkIsEmail = checkEmailIsAlreadyExists(email, userData);
  //     const checkIsName = checkIsNameAlreadExists(name, userData);
  //     if (checkIsEmail) {
  //       return res.status(StatusCodes.CONFLICT).json({
  //         messages: 'email đã tồn tại mời bạn đăng nhập lại hoặc tạo với email khác'
  //       });
  //     }
  //     if (checkIsName) {
  //       return res.status(StatusCodes.CONFLICT).json({
  //         messages: 'tên người dùng đã tồn tại mời bạn đăng nhập lại hoặc tạo với email khác'
  //       });
  //     }
  //     const passWordProtect = await hashPassword(pass).catch((err) => {
  //       console.error('Lỗi khi mã hóa mật khẩu:', err);
  //       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //         messages: 'Đã xảy ra lỗi khi xử lý mật khẩu.'
  //       });
  //     });
  //     if (!checkIsEmail && !checkIsName) {
  //       userDataBase.push({
  //         name,
  //         email,
  //         pass: passWordProtect,
  //         role
  //       });
  //       if (userDataBase.length > 0 && Array.isArray(userDataBase)) {
  //         return res.status(StatusCodes.OK).json(userDataBase);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Lỗi khi xử lý yêu cầu:', error);
  //     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //       messages: 'Đã xảy ra lỗi khi xử lý yêu cầu.'
  //     });
  //   }
};

const authLogin = async (req: Request, res: Response) => {
  //   try {
  //     const { name, email, pass, role, provider } = req.body;
  //     const checkIsEmail = checkEmailIsAlreadyExists(email, userDataBase);
  //     const checkIsName = checkIsNameAlreadExists(name, userDataBase);
  //     if (!checkIsEmail && !checkIsName) {
  //       return res.status(StatusCodes.NOT_FOUND).json({
  //         messages: 'tên đăng nhập hoặc email không khớp mời bạn nhập lại'
  //       });
  //     }
  //     if (!checkIsPasswordComfir(pass, email, userDataBase)) {
  //       return res.status(StatusCodes.NOT_FOUND).json({ messages: 'Mật khẩu của bạn chưa khớp' });
  //     }
  //     const userFilter = userDataBase.filter((user) => {
  //       return user.email === email;
  //     });
  //     if (userFilter) {
  //       const dataPayload = { name, email, role, provider };
  //       const accessToken = generateAccessToken(dataPayload);
  //       const refreshToken = generateRrefreshToken({
  //         name,
  //         email
  //       });
  //       res.cookie(REFRESH_COOKIE_NAME, refreshToken, {
  //         httpOnly: true,
  //         sameSite: 'None',
  //         secure: true,
  //         maxAge: 24 * 60 * 60 * 1000
  //       });
  //       return res.status(StatusCodes.OK).json({
  //         accessToken,
  //         usercurrent: { ...userFilter }
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
};

const authLoginSuccess = async (req: Request, res: Response) => {
  if (req.user) {
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'successful',
      token: req.user
    });
  } else {
    res.status(200).json({
      success: false,
      message: 'fail'
    });
  }
};

const authLoginFail = async (req: Request, res: Response) => {
  try {
    res.status(StatusCodes.OK).json({
      success: false,
      message: 'failure'
    });
  } catch (error) {
    console.log(error);
  }
};

const authLogout = async (req: Request, res: Response) => {
  //   const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME];
  //   const decoded = await getVerifyToken(refreshToken, REFRESH_TOKEN_KEY!);
  //   if (decoded) {
  //     blackListTokens.push(refreshToken);
  //   }
  //   res.clearCookie(REFRESH_COOKIE_NAME);
  //   res.send('user logout successfully');
  //   return res.redirect(CLIENT_URL);
};

const authRefreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME];
    if (!refreshToken) {
      res.status(StatusCodes.UNAUTHORIZED).json('Error cookie');
    }
    const decoded = await getVerifyToken(refreshToken, REFRESH_TOKEN_KEY!);
    if (decoded) {
      const accessToken = generateAccessToken(decoded.userData);
      return res.status(StatusCodes.OK).json({
        accessToken,
        usercurrent: decoded.userData
      });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json('Invalid token');
    }
  } catch (error) {
    console.log(error);
  }
};

const authWithGoogle = (req: Request, res: Response, next: NextFunction) => {
  return passport.authenticate('google', {
    scope: ['email', 'profile']
  })(req, res, next);
};

const authWithGoogleCallback = (req: Request, res: Response, next: NextFunction) => {
  return passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/auth/failed'
  })(req, res, next);
};

export {
  authRegister,
  authLogin,
  authLogout,
  authRefreshToken,
  authWithGoogle,
  authWithGoogleCallback,
  authLoginSuccess,
  authLoginFail
};
