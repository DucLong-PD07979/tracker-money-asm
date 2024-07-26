import BudgetsModel from '@/models/budgetsModel';
import { monthArr } from '@/utils/helper/dateHelper';
import { getMonth, getYear } from 'date-fns';

type budgetPayload = {
  amountYear: number;
  amountMonth: number;
  user_id: string;
};

const createYearBudget = async (budgetPayload: budgetPayload) => {
  try {
    const { amountYear, amountMonth, user_id } = budgetPayload;
    const yearNow = getYear(new Date()) - 1;
    const monthNow = getMonth(new Date());
    const budgetFliterWithUser_id = { [`budgets.${yearNow}.user_id`]: user_id };
    const budget = await BudgetsModel.find(budgetFliterWithUser_id);

    let messages = 'bạn đã tạo chi phí cho năm 2024!';
    let isOk = false;
    if (budget && budget.length > 0) {
      return { messages, isOk };
    }

    const newBudget = new BudgetsModel({
      budgets: {
        [yearNow]: {
          amount: amountYear,
          year: yearNow,
          user_id,
          month: {
            [monthArr[monthNow].value]: {
              amount: amountMonth
            }
          }
        }
      }
    });
    await newBudget.save();
    if (newBudget) {
      (isOk = true), (messages = 'tạo chi phí cho năm và tháng thành công!');
      return { isOk, messages };
    }
  } catch (error) {
    console.log(error);
  }
};

const getBudgetWithUserId = async (user_id: any) => {
  const yearNow = getYear(new Date());
  const filter = { [`budgets.${yearNow}.user_id`]: user_id };
  const budget = await BudgetsModel.find(filter).lean(true);
  console.log(budget);
  if (Array.isArray(budget) && budget.length > 0) {
    return budget;
  }
  return [];
};

export { createYearBudget, getBudgetWithUserId };
