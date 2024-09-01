import express from 'express';
import * as controllers from '@/controllers/budgetController';
import { verifyToKen } from '@/middlewares/authMiddleware';

const Router = express.Router();

Router.post('/budgets/year', [verifyToKen], controllers.createYearBudget);
Router.get('/budgets/year/:year', [verifyToKen], controllers.getBudgetYearWithUserId);
Router.post('/budgets/month', [verifyToKen], controllers.createMonthBudget);
Router.get('/budgets/month', controllers.getBudgetMonthWithBudgetId);
Router.put('/budgets/year/:id', [verifyToKen], controllers.updateYearBudget);
Router.put('/budgets/month/:id', [verifyToKen], controllers.updateMonthBudget);
Router.delete('/budgets/:id', [verifyToKen], controllers.deleteBudgetWithUserId);

export default Router;
