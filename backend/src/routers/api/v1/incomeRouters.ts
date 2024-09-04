import { createIncome, deleteIncome, getIncomeWithFilterOptions, updateIncome } from '@/controllers/incomeController';
import { verifyToKen } from '@/middlewares/authMiddleware';
import express from 'express';

const Router = express.Router();

Router.post('/income', [verifyToKen], createIncome);
Router.get('/income', [verifyToKen], getIncomeWithFilterOptions);
Router.put('/income/:id', [verifyToKen], updateIncome);
Router.delete('/income', [verifyToKen], deleteIncome);
export default Router;
