import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as budgetServices from '@/services/budgetServices';
import { getYear } from 'date-fns';
import { getUserInforWithToken } from '@/services/userServices';

const createYearBudget = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const { amountYear } = req.body;
    const year = new Date().getFullYear();

    if (!amountYear || isNaN(amountYear)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bạn cần nhập đúng dữ liệu ngân sách năm' });
    }

    const budgetYearExist = await budgetServices.findOneYearBudget({ year, user_id: `${userInfor?._id}` });
    if (budgetYearExist) {
      return res.status(StatusCodes.CREATED).json({ message: 'Ngân sách cho năm đã tồn tại' });
    }

    const budgetYear = await budgetServices.createYearBudget({ amountYear, user_id: `${userInfor?._id}` });
    return res.status(StatusCodes.CREATED).json({ message: 'Tạo ngân sách năm thành công', budgetYear });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const createMonthBudget = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const { amountMonth, month } = req.body;
    const year = getYear(new Date());

    const budgetYear = await budgetServices.findBudgetYearWithUserId({ year, user_id: `${userInfor?._id}` });
    if (!budgetYear) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bạn cần tạo ngân sách năm trước' });
    }

    const budgetMonth = await budgetServices.findBudgetMonth(`${userInfor?._id}`, year, month);
    if (budgetMonth) {
      return res.status(StatusCodes.CREATED).json({ message: 'Ngân sách tháng này đã được tạo' });
    }
    const budgetUpdate = await budgetServices.createMonthBudget(`${userInfor?._id}`, year, month, amountMonth);
    return res.status(StatusCodes.CREATED).json({ message: 'Tạo ngân sách tháng thành công', budgetUpdate });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const updateYearBudget = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amountYear } = req.body;
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);

    if (!amountYear || isNaN(amountYear)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Dữ liệu cập nhật ngân sách năm không hợp lệ' });
    }

    const updatedBudget = await budgetServices.updateYearBudget(`${userInfor?._id}`, id, { amount: amountYear });
    return res.status(StatusCodes.OK).json({ message: 'Cập nhật ngân sách năm thành công', updatedBudget });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const updateMonthBudget = async (req: Request, res: Response) => {
  try {
    const { budget_id } = req.params;
    const { month, amount } = req.body;

    if (!month || !amount || isNaN(amount)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Dữ liệu cập nhật ngân sách tháng không hợp lệ' });
    }

    const updatedBudget = await budgetServices.updateMonthBudget(budget_id, month, amount);
    if (!updatedBudget) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Không tìm thấy ngân sách tháng để cập nhật' });
    }

    return res.status(StatusCodes.OK).json({ message: 'Cập nhật ngân sách tháng thành công', updatedBudget });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const deleteBudgetWithUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBudget = await budgetServices.deleteBudget(id);

    if (!deletedBudget) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Không tìm thấy ngân sách để xóa' });
    }

    return res.status(StatusCodes.NO_CONTENT).json({ message: 'Xóa ngân sách thành công' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const getBudgetYearWithUserId = async (req: Request, res: Response) => {
  try {
    const { year } = req.params;
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);

    const budget = await budgetServices.findBudgetYearWithUserId({
      year: parseInt(year),
      user_id: `${userInfor?._id}`
    });

    if (!budget) {
      return res.status(StatusCodes.ACCEPTED).json({ message: 'Không tìm thấy ngân sách năm', budget: [] });
    }

    return res.status(StatusCodes.OK).json({ budget });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const getBudgetMonthWithBudgetId = async (req: Request, res: Response) => {
  try {
    const { budget_id } = req.params;
    const userDecodeFromToken = req.user;
    // const userInfor = await getUserInforWithToken(userDecodeFromToken);
    // const monthBudget = await budgetServices.findBudgetMonth(`${userInfor?._id}`, getYear(new Date()), );

    // if (!monthBudget) {
    //   return res.status(StatusCodes.NOT_FOUND).json({ message: 'Không tìm thấy ngân sách tháng' });
    // }

    // return res.status(StatusCodes.OK).json({ monthBudget });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const getAllYearBudgets = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const allYearBudgets = await budgetServices.findAllYearBudgets(`${userInfor?._id}`);

    return res.status(StatusCodes.OK).json({ allYearBudgets });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

const getBudgetYearDetails = async (req: Request, res: Response) => {
  try {
    const yearParam = req.params.year;
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const allYearBudgets = await budgetServices.findBudgetDetails(yearParam, `${userInfor?._id}`);

    return res.status(StatusCodes.OK).json({ allYearBudgets });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Có lỗi tại server: ${error.message}` });
  }
};

export {
  createYearBudget,
  createMonthBudget,
  updateYearBudget,
  updateMonthBudget,
  getBudgetYearWithUserId,
  getBudgetMonthWithBudgetId,
  deleteBudgetWithUserId,
  getAllYearBudgets,
  getBudgetYearDetails
};
