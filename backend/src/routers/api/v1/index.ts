import express from 'express';
import authRouters from './authRouters';
import categoriesExpenseRouter from './categoriesExpenseRouter';
import budgetRouters from './budgetRouters';
import expenseRouters from './expenseRouters';
import budgetCateRouters from './budgetCateRouters';
import userRouters from './userRouters';

const Router = express.Router();
Router.use('/v1/auth', authRouters);
Router.use('/v1', expenseRouters);
Router.use('/v1', categoriesExpenseRouter);
Router.use('/v1', budgetRouters);
Router.use('/v1', budgetCateRouters);
Router.use('/v1', userRouters);

export default Router;
