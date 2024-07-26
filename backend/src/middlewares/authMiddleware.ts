import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getVerifyToken } from '@/services/authServices';
import { TOKEN_KEY } from '@/configs/environment';

const verifyToKen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).send('Access denied: No token provided');
    }

    const decoded: any = await getVerifyToken(token, TOKEN_KEY!);
    req.user = decoded.userData;
    if (!decoded) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Token no verify');
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export { verifyToKen };
