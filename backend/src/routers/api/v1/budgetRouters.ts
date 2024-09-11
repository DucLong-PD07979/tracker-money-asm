import express from 'express';
import * as controllers from '@/controllers/budgetController';
import { verifyToKen } from '@/middlewares/authMiddleware';

const Router = express.Router();

Router.post('/budgets/year', [verifyToKen], controllers.createYearBudget);
Router.post('/budgets/month', [verifyToKen], controllers.createMonthBudget);
Router.put('/budgets/year/:id', [verifyToKen], controllers.updateYearBudget);
Router.put('/budgets/month/:budget_id', [verifyToKen], controllers.updateMonthBudget);
Router.get('/budgets/year/:year', [verifyToKen], controllers.getBudgetYearWithUserId);
Router.get('/budgets/month/:budget_id', [verifyToKen], controllers.getBudgetMonthWithBudgetId);
Router.get('/budgets', [verifyToKen], controllers.getAllYearBudgets);
Router.delete('/budgets/:id', [verifyToKen], controllers.deleteBudgetWithUserId);
Router.get('/budgets/details/:year', [verifyToKen], controllers.getBudgetYearDetails);

export default Router;
