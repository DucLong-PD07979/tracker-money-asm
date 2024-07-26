import { createYearBudget } from '@/services/budgetServices';
import { getUserInforWithToken } from '@/services/userServices';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as budgetServices from '@/services/budgetServices';

const createBudgets = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const budget = await createYearBudget({ ...req.body, user_id: userInfor?._id });

    if (!budget?.isOk) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        messages: budget?.messages
      });
    }

    return res.status(StatusCodes.OK).json({
      messages: budget?.messages
    });
  } catch (error) {
    console.log(error);
  }
};

const getBudgetWithUserId = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const budgetData = await budgetServices.getBudgetWithUserId(userInfor?._id);

    if (budgetData.length > 0) {
      return res.status(StatusCodes.OK).json({
        messages: 'success!',
        budgetData
      });
    } else {
      return res.status(StatusCodes.OK).json({
        messages: 'user is not create budget',
        budgetData
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { createBudgets, getBudgetWithUserId };
