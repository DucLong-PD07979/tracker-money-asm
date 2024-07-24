import express from 'express';
import { createCategories, getAllCategories } from '@/controllers/categorieExpenseController';

const Router = express.Router();

Router.post('/categories', createCategories);
Router.get('/categories', getAllCategories);

export default Router;
