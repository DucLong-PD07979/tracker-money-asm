import { getUserInforWithToken } from '@/services/userServices';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as budgetServices from '@/services/budgetServices';
import { getYear } from 'date-fns';

const createYearBudget = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const { amountYear } = req.body;
    if (!amountYear && Number(amountYear)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bạn cần nhập đúng dữ liệu ngân sách năm' });
    }
    const budgetYear = await budgetServices.createYearBudget({ amountYear, user_id: userInfor?._id });
    if (budgetYear) {
      return res.status(StatusCodes.CREATED).json({ message: 'Tạo ngân sách năm thành công' });
    }
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const createMonthBudget = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const { amountMonth } = req.body;
    const year = getYear(new Date()) + '';
    const budgetYear = await budgetServices.findBudgetYearWithUserId({ year, user_id: `${userInfor?._id}` });
    if (!budgetYear) {
      return res.status(StatusCodes.OK).json({ message: 'Bạn cần tạo ngân sách năm trước' });
    }
    const budgetUpdate = await budgetServices.createMonthBudget(budgetYear._id, year, amountMonth);
    return res.status(StatusCodes.CREATED).json({ message: 'Tạo ngân sách tháng thành công', budgetUpdate });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const updateYearBudget = async (req: Request, res: Response) => {
  try {
    res.json(200);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const updateMonthBudget = async (req: Request, res: Response) => {
  try {
    res.json(200);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const getBudgetYearWithUserId = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const year = req.params.year;
    const budgetYear = await budgetServices.findBudgetYearWithUserId({ year, user_id: `${userInfor?._id}` });
    if (!budgetYear) {
      return res.status(StatusCodes.OK).json({ message: 'Không tìm thấy ngân sách năm', budgetYear: null });
    }
    return res.status(StatusCodes.OK).json({ budgetYear });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const getBudgetMonthWithBudgetId = async (req: Request, res: Response) => {
  try {
    const budgetId = req.body.budget_id;
    const year = req.body.year;
    const budgetMonth = await budgetServices.findBudgetMonth(budgetId, year);
    if (!budgetMonth) {
      return res.status(StatusCodes.OK).json({ message: 'Ngân sách tháng chưa được tạo', budgetMonth: null });
    }
    return res.status(StatusCodes.OK).json({ budgetMonth });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const deleteBudgetWithUserId = async (req: Request, res: Response) => {
  try {
    res.json(200);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

const getBudgetWithUserId = async (req: Request, res: Response) => {
  try {
    res.json(200);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server : ${error.message}` });
  }
};

export {
  createYearBudget,
  createMonthBudget,
  updateMonthBudget,
  updateYearBudget,
  getBudgetYearWithUserId,
  getBudgetMonthWithBudgetId,
  deleteBudgetWithUserId,
  getBudgetWithUserId
};
