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
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
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
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const updateExpensesWithUserId = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const expensesId = req.params.id;
    const expensesNew = { ...req.body, user_id: userInfor?._id };
    const updateIncome = await services.updateExpenses(expensesId, expensesNew);
    res.status(StatusCodes.CREATED).json({ message: 'Bạn đã cập nhật thành công', updateIncome });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

const deleteWithUserId = async (req: Request, res: Response) => {
  try {
    const idExpenses = req.body.ids;
    console.log(idExpenses);
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const result = await services.deleteExpenses(`${userInfor?._id}`, idExpenses);
    if (result) {
      return res.status(StatusCodes.OK).json({
        message: `xóa thành công ${result.deletedCount} chi phí`,
        result
      });
    }
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

export { createExpense, getExpensesWithUserId, deleteWithUserId, updateExpensesWithUserId };
