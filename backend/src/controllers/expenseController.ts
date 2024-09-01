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
      message: 'Tạo chi phí thành công',
      newExpense
    });
  } catch (error) {
    console.log(error);
  }
};

const getExpensesWithUserId = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const expenses = await services.getExpensesWithUserId(userInfor?._id);
    res.status(StatusCodes.OK).json({
      success: true,
      expenses
    });
  } catch (error) {
    console.log(error);
  }
};

const updateExpensesWithUserId = async (req: Request, res: Response) => {
  try {
    console.log('hello');
  } catch (error) {
    console.log(error);
  }
};

const deleteWithUserId = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
  } catch (error) {
    console.log(error);
  }
};

export { createExpense, getExpensesWithUserId, deleteWithUserId, updateExpensesWithUserId };
