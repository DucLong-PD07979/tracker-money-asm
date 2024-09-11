import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '@/controllers/categoryExpensesController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';

const router = express.Router();

router.post('/categories', [verifyToKen], createCategory);
router.get('/categories', [verifyToKen], getAllCategories);
router.get('/categories/:id', [verifyToKen], getCategoryById);
router.put('/categories/:id', [verifyToKen], updateCategory);
router.delete('/categories/:id', [verifyToKen], deleteCategory);

export default router;
