import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CategoriesModel from '@/models/categoriesExpensModel';

const createCategory = async (req: Request, res: Response) => {
  try {
    const { type, label, value } = req.body;

    if (!type || !label || !value) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields are required' });
    }

    const newCategory = new CategoriesModel({ type, label, value });
    await newCategory.save();

    return res.status(StatusCodes.CREATED).json({ message: 'Category created successfully', newCategory });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Server error: ${error.message}` });
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoriesModel.find();
    return res.status(StatusCodes.OK).json({ categories });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Server error: ${error.message}` });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await CategoriesModel.findById(id);

    if (!category) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Category not found' });
    }

    return res.status(StatusCodes.OK).json({ category });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Server error: ${error.message}` });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, label, value } = req.body;

    const updatedCategory = await CategoriesModel.findByIdAndUpdate(id, { type, label, value }, { new: true });

    if (!updatedCategory) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Category not found' });
    }

    return res.status(StatusCodes.OK).json({ message: 'Category updated successfully', updatedCategory });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Server error: ${error.message}` });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedCategory = await CategoriesModel.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Category not found' });
    }

    return res.status(StatusCodes.NO_CONTENT).json({ message: 'Category deleted successfully' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `Server error: ${error.message}` });
  }
};

export { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };
