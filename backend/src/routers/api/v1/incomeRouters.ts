import { createIncome, getIncomeWithFilterOptions } from '@/controllers/incomeController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';

const Router = express.Router();

Router.post('/income', [verifyToKen], createIncome);
Router.get('/income', [verifyToKen], getIncomeWithFilterOptions);

export default Router;
