import BudgetsModel from '@/models/budgetsModel';
import { monthArr } from '@/utils/helper/dateHelper';
import { getMonth, getYear } from 'date-fns';
import mongoose, { Mongoose } from 'mongoose';
import * as expensesServices from '@/services/expenseServices';
import * as incomeServices from '@/services/incomeServices';

type BudgetYearType = {
  amountYear: number;
  user_id: string | unknown;
};

const createYearBudget = async ({ amountYear, user_id }: BudgetYearType) => {
  try {
    const yearNow = getYear(new Date());

    const newBudget = new BudgetsModel({
      budgets: {
        [yearNow]: {
          amount: amountYear,
          year: yearNow,
          user_id
        }
      }
    });
    await newBudget.save();
    return newBudget;
  } catch (error) {
    console.log(error);
  }
};

type BudgetType = {
  year: string;
  user_id: string;
};

const findBudgetYearWithUserId = async ({ year, user_id }: BudgetType) => {
  try {
    const userIdConvert = new mongoose.Types.ObjectId(user_id);
    const filterOptions = {
      [`budgets.${year}`]: { $exists: true },
      [`budgets.${year}.user_id`]: userIdConvert
    };
    const incomeYear = await incomeServices.getIncomeFilterWithYear(userIdConvert, `${year}`);
    const expensesYear = await expensesServices.getExpensesFliterWithYear(userIdConvert, `${year}`);
    const amount_actually = 0;

    const totalIncome = incomeYear!.reduce((initialValue, currentValue) => {
      return (initialValue += currentValue.amount);
    }, amount_actually);

    const totalExpenses = expensesYear!.reduce((initialValue, currentValue) => {
      return (initialValue += currentValue.amount);
    }, amount_actually);

    const update = {
      $set: {
        [`budgets.${year}.amount_actually`]: totalIncome - totalExpenses
      }
    };
    const result = await BudgetsModel.findOneAndUpdate(filterOptions, update, {
      new: true,
      runValidators: true
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

const createMonthBudget = async (budgetId: any, year: string, amountMonth: number) => {
  try {
    const monthNow = getMonth(new Date());
    const monthLabel = monthArr[monthNow].label;
    const budgetIdConvert = new mongoose.Types.ObjectId(budgetId);
    const budgetUpdate = BudgetsModel.findOneAndUpdate(
      { _id: budgetIdConvert },
      {
        $set: {
          [`budgets.${year}.month.${monthLabel}`]: { amount: amountMonth }
        }
      },
      { new: true }
    );

    return budgetUpdate;
  } catch (error) {
    console.log(error);
  }
};

const findBudgetMonth = async (budgetId: any, year: number) => {
  try {
    const budgetIdConvert = new mongoose.Types.ObjectId(budgetId);

    const filterOptions = {
      [`budgets.${year}._id`]: budgetIdConvert
    };
    const budgetMonth = await BudgetsModel.findOne(filterOptions);
    return budgetMonth?.budgets.year.month;
  } catch (error) {
    console.log(error);
  }
};

export { createYearBudget, createMonthBudget, findBudgetYearWithUserId, findBudgetMonth };
