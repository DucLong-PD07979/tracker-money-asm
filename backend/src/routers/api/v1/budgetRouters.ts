import express from 'express';
import * as controllers from '@/controllers/budgetController';
import { verifyToKen } from '@/middlewares/authMiddleware';

const Router = express.Router();

Router.post('/budgets', [verifyToKen], controllers.createBudgets);
Router.get('/budgets', [verifyToKen], controllers.getBudgetWithUserId);
export default Router;
