import express from 'express';
import { createBudgetCate, getBudgetCateAll } from '@/controllers/budgetCateController';

const Router = express.Router();

Router.post('/budgets-categories', createBudgetCate);
Router.get('/budgets-categories', getBudgetCateAll);

export default Router;
