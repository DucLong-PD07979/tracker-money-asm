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
    const monthNow = getMonth(new Date());
    const yearNow = getYear(new Date());

    await BudgetsModel.updateOne(
      { [`budgets.${yearNow}.year`]: yearNow },
      { $push: { [`budgets.${yearNow}.month.${monthArr[monthNow].value}.budgetCategories`]: budgetCate._id } }
    );

    return budgetCate;
  } catch (error) {
    console.log(error);
  }
};

export { createBudgetCate };
