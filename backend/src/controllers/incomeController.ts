import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUserInforWithToken } from '@/services/userServices';
import * as incomeServices from '@/services/incomeServices';

const createIncome = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const inComeBody = { ...req.body, user_id: userInfor?._id };
    const newIncome = await incomeServices.createIncome(inComeBody);
    res.status(StatusCodes.CREATED).json({ message: 'Bạn đã tạo thành công thu nhập', newIncome });
  } catch (error) {
    console.log(error);
  }
};

const getIncomeWithFilterOptions = async (req: Request, res: Response) => {
  try {
    const { filterType, duration } = req.query;
    if (!filterType && !duration) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Lỗi từ phía khách hàng' });
    }

    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);

    if (filterType === 'year') {
      const income = await incomeServices.getIncomeFilterWithYear(userInfor?._id, duration);
      if (!income) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Lỗi từ phía khách hàng' });
      }
      return res.status(StatusCodes.CREATED).json({ income });
    } else if (filterType === 'month') {
      const income = await incomeServices.getIncomeFilterWithMonth(userInfor?._id, duration);
      if (!income) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Lỗi từ phía khách hàng' });
      }
      return res.status(StatusCodes.CREATED).json({ income });
    } else {
      const income = await incomeServices.getIncomeFilterWithDate(userInfor?._id, duration);
      if (!income) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Lỗi từ phía khách hàng' });
      }
      return res.status(StatusCodes.CREATED).json({ income });
    }
  } catch (error) {
    console.log(error);
  }
};

export { createIncome, getIncomeWithFilterOptions };
