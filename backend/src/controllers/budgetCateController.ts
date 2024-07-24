import BudgetCateModel from '@/models/budgetCategoriesModel';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as services from '@/services/budgetCateServices';

const createBudgetCate = async (req: Request, res: Response) => {
  try {
    const budgetCate = await services.createBudgetCate(req.body);
    res.status(StatusCodes.OK).json({
      success: true,
      budgetCate
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      messages: error
    });
  }
};

const getBudgetCateAll = async (req: Request, res: Response) => {
  try {
    const budgetCate = await BudgetCateModel.findOne({ _id: '669f798fe0b2a779eceb7407' }).populate(
      '6699b561596bad1893a5adfd'
    );

    res.status(StatusCodes.OK).json({
      success: true,
      budgetCate
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      messages: error
    });
  }
};

export { createBudgetCate, getBudgetCateAll };
