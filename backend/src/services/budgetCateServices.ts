import BudgetCateModel from '@/models/budgetCategoriesModel';
import BudgetsModel from '@/models/budgetsModel';
import { monthArr } from '@/utils/helper/dateHelper';
import { getMonth, getYear } from 'date-fns';

type budgetReq = {
  amountYear: 120000;
  amountMonth: 10000;
};

const createBudgetCate = async (budgetCateReq: budgetReq) => {
  try {
    const budgetCate = new BudgetCateModel(budgetCateReq);
    await budgetCate.save();

    await BudgetsModel.updateOne(
      { _id: '669f71c3dca0079c65382224' },
      { $push: { 'budgets.2024.month.July.budgetCategories': budgetCate._id } }
    );

    return budgetCate;
  } catch (error) {
    console.log(error);
  }
};

export { createBudgetCate };
