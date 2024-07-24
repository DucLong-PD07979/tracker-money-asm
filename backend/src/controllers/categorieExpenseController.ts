import CategoriesExpenes from '@/models/categoriesExpensModel';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const createCategories = async (req: Request, res: Response) => {
  try {
    const categories = new CategoriesExpenes(req.body);
    await categories.save();
    res.status(StatusCodes.OK).json({
      success: true,
      categories
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoriesExpenes.find({});
    res.status(StatusCodes.OK).json({
      success: true,
      categoriesExpenes: categories
    });
  } catch (error) {
    console.log(error);
  }
};

export { createCategories, getAllCategories };
