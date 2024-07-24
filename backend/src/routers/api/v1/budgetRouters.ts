import express from 'express';
import createBudgets from '@/controllers/budgetController';

const Router = express.Router();

Router.post('/budgets', createBudgets);
export default Router;
