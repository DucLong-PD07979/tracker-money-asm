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
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);

    const { filterType, duration } = req.query;

    if (filterType === 'all') {
      const income = await incomeServices.getIncomeWithUserId(userInfor?._id);
      return res.status(StatusCodes.CREATED).json({ income });
    }

    if (!filterType || !duration) {
      const income = await incomeServices.getIncomeWithUserId(userInfor?._id);
      return res.status(StatusCodes.CREATED).json({ income });
    }

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

const deleteIncome = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const result = await incomeServices.deleteIncomeWithUserid(`${userInfor?._id}`, req.body.ids);
    if (result) {
      return res.status(StatusCodes.OK).json({
        message: `xóa thành công ${result.deletedCount} thu nhập`,
        result
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateIncome = async (req: Request, res: Response) => {
  try {
    const userDecodeFromToken = req.user;
    const userInfor = await getUserInforWithToken(userDecodeFromToken);
    const income_id = req.params.id;
    const inComeBody = { ...req.body, user_id: userInfor?._id };
    const updateIncome = await incomeServices.updateIncomeWithUserId(income_id, inComeBody);
    res.status(StatusCodes.CREATED).json({ message: 'Bạn đã cập nhật thành công', updateIncome });
  } catch (error) {
    console.log(error);
  }
};

export { createIncome, getIncomeWithFilterOptions, deleteIncome, updateIncome };
