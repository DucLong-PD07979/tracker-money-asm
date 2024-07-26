import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as services from '@/services/userServices';

const getUserInforWithToken = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await services.getUserInforWithToken(userDecodeFromToken);
    res.status(StatusCodes.OK).json({
      success: true,
      userInfor
    });
  } catch (error) {
    console.log(error);
  }
};

export { getUserInforWithToken };
