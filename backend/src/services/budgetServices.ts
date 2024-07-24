import BudgetsModel from '@/models/budgetsModel';
import { monthArr } from '@/utils/helper/dateHelper';
import { getMonth, getYear } from 'date-fns';

type budgetReq = {
  amountYear: 120000;
  amountMonth: 10000;
};

const createYearBudget = async (budgetReq: budgetReq) => {
  try {
    const { amountYear, amountMonth } = budgetReq;
    const yearNow = getYear(new Date());
    const monthNow = getMonth(new Date());
    const budgetFliter = { [`budgets.${yearNow}`]: { $exists: true } };
    const budget = await BudgetsModel.find(budgetFliter);

    let messages = 'bạn đã tạo chi phí cho năm 2024!';
    let isOk = false;
    if (budget && budget.length > 0) {
      return { messages, isOk };
    }

    const newBudget = new BudgetsModel({
      budgets: {
        [yearNow]: {
          amount: amountYear,
          month: {
            [monthArr[monthNow].label]: {
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

export { createYearBudget };
