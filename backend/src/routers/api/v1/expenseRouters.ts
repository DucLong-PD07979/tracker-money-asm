import {
  createExpense,
  getExpensesWithUserId,
  updateExpensesWithUserId,
  deleteWithUserId
} from '@/controllers/expenseController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';

const Router = express.Router();

Router.post('/expenses', [verifyToKen], createExpense);
Router.get('/expenses', [verifyToKen], getExpensesWithUserId);
Router.put('/expenses/:id', [verifyToKen], updateExpensesWithUserId);
Router.delete('/expenses', [verifyToKen], deleteWithUserId);

export default Router;
