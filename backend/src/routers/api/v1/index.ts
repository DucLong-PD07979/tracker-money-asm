import express from 'express';
import authRouters from './authRouters';
import categoriesExpenseRouter from './categoryExpenseRouters';
import budgetRouters from './budgetRouters';
import expenseRouters from './expenseRouters';
import userRouters from './userRouters';
import incomeRouters from './incomeRouters';

const Router = express.Router();
Router.use('/v1/auth', authRouters);
Router.use('/v1', expenseRouters);
Router.use('/v1', categoriesExpenseRouter);
Router.use('/v1', budgetRouters);
Router.use('/v1', userRouters);
Router.use('/v1', incomeRouters);

export default Router;
