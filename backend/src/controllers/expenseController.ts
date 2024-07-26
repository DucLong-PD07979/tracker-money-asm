import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUserInforWithToken } from '@/services/userServices';
import * as services from '@/services/expenseServices';

const createExpense = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const is_paid = req.body.is_paid === 'true';
    const newExpense = await services.createExpenses({ ...req.body, is_paid, user_id: userInfor?._id });
    res.status(StatusCodes.OK).json({
      success: true,
      newExpense
    });
  } catch (error) {
    console.log(error);
  }
};

export { createExpense };
