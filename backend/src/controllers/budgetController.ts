import { createYearBudget } from '@/services/budgetServices';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const createBudgets = async (req: Request, res: Response) => {
  try {
    const budget = await createYearBudget(req.body);

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

export default createBudgets;
