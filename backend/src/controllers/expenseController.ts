import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ExpenseModel from '@/models/expensesModel';

const createExpense = async (req: Request, res: Response) => {
  try {
    const newExpense = new ExpenseModel(req.body);
    await newExpense.save();
    res.status(StatusCodes.OK).json({
      success: true
    });
  } catch (error) {
    console.log(error);
  }
};

export { createExpense };
