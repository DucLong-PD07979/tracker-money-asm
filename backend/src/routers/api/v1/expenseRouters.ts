import { createExpense } from '@/controllers/expenseController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

const Router = express.Router();

Router.post('/expenses', [verifyToKen], createExpense);
Router.get('/expenses', (req, res) => {
  res.status(StatusCodes.OK).json('success!');
});

export default Router;
