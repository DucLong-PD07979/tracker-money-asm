import BudgetsModel from '@/models/YearBudgetsModel';
import MonthBudgetModel from '@/models/monthBudgetsModel';
import mongoose from 'mongoose';
import * as expensesServices from '@/services/expenseServices';
import * as incomeServices from '@/services/incomeServices';
import { endOfYear, getMonth, getYear, startOfYear } from 'date-fns';
import { monthArr } from '@/utils/helper/dateHelper';
import IncomeModel from '@/models/incomeModel';
import ExpenseModel from '@/models/expensesModel';

type BudgetYearType = {
  amountYear: number;
  user_id: string;
};

const createYearBudget = async ({ amountYear, user_id }: BudgetYearType) => {
  try {
    const yearNow = getYear(new Date());

    const newBudget = new BudgetsModel({
      amount: amountYear,
      amount_actually: 0,
      balance: amountYear,
      year: yearNow,
      user_id: new mongoose.Types.ObjectId(user_id)
    });

    await newBudget.save();
    return newBudget;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create year budget');
  }
};

type BudgetType = {
  year: number;
  user_id: string;
};

const findOneYearBudget = async ({ year, user_id }: BudgetType) => {
  try {
    const userIdConvert = new mongoose.Types.ObjectId(user_id);
    const budgetYear = await BudgetsModel.findOne({
      year: year,
      user_id: userIdConvert
    });
    return budgetYear;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve all year budgets');
  }
};

const findBudgetYearWithUserId = async ({ year, user_id }: BudgetType) => {
  try {
    const userIdConvert = new mongoose.Types.ObjectId(user_id);
    const budgetYear = await BudgetsModel.findOne({
      year: year,
      user_id: userIdConvert
    });

    if (!budgetYear) return null;

    const incomeYear = await incomeServices.getIncomeFilterWithYear(userIdConvert, `${year}`);
    const expensesYear = await expensesServices.getExpensesFliterWithYear(userIdConvert, `${year}`);

    const totalIncome = incomeYear?.reduce((acc, curr) => acc + curr.amount, 0) || 0;
    const totalExpenses = expensesYear?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

    const update = {
      amount_actually: totalIncome - totalExpenses,
      balance: budgetYear.amount - totalExpenses
    };

    return await BudgetsModel.findOneAndUpdate(
      { year: year, user_id: userIdConvert },
      { $set: update },
      { new: true, runValidators: true }
    );
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find or update year budget');
  }
};

const createMonthBudget = async (userId: string, year: number, month: string, amount: number) => {
  try {
    const newMonthBudget = new MonthBudgetModel({
      user_id: new mongoose.Types.ObjectId(userId),
      year,
      month,
      amount,
      spentAmount: 0
    });

    await newMonthBudget.save();
    return newMonthBudget;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create month budget');
  }
};

const findBudgetMonth = async (userId: string, year: number, month: string) => {
  try {
    const userIdConvert = new mongoose.Types.ObjectId(userId);
    const budget = await MonthBudgetModel.findOne({
      user_id: userIdConvert
    });

    return budget;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find month budget');
  }
};

const findAllYearBudgets = async (userId: string) => {
  try {
    return await BudgetsModel.find({ user_id: new mongoose.Types.ObjectId(userId) }).sort({ year: -1 });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve all year budgets');
  }
};

const updateYearBudget = async (userId: string, budget_id: string, dataNew: any) => {
  try {
    const newUpdateBudget = await BudgetsModel.findOneAndUpdate(
      {
        user_id: new mongoose.Types.ObjectId(userId),
        _id: new mongoose.Types.ObjectId(budget_id)
      },
      dataNew
    );
    return await newUpdateBudget!.save();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update year budget');
  }
};

const updateMonthBudget = async (budgetId: string, month: number, amount: number) => {
  try {
    return await MonthBudgetModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(budgetId) },
      { $set: { amount } },
      { new: true, runValidators: true }
    );
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update month budget');
  }
};

const deleteBudget = async (budgetId: string) => {
  try {
    return await MonthBudgetModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(budgetId) });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete budget');
  }
};

const findBudgetDetails = async (year: string, user_id: string) => {
  try {
    const startYear = startOfYear(year);
    const endYear = endOfYear(year);

    const budgetYear = await BudgetsModel.findOne({ year, user_id: new mongoose.Types.ObjectId(user_id) }).lean({});

    const incomes = await IncomeModel.aggregate([
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(user_id),
          date: {
            $gte: startYear,
            $lt: endYear
          }
        }
      },
      {
        $group: {
          _id: '$category',
          totalAmount: { $sum: '$amount' }
        }
      },
      { $sort: { totalAmount: -1 } }
    ]);

    const expenses = await ExpenseModel.aggregate([
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(user_id),
          duration: {
            $gte: startYear,
            $lt: endYear
          },
          is_paid: true
        }
      },
      {
        $group: {
          _id: '$id_expense_cate',
          totalAmount: { $sum: '$amount' }
        }
      },
      { $sort: { totalAmount: -1 } }
    ]);

    const totalIncome = incomes.reduce((acc, curr) => acc + curr.totalAmount, 0);
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.totalAmount, 0);
    const balance = budgetYear!.amount - totalExpense;

    return { incomes, expenses, totalIncome, totalExpense, balance, amount: budgetYear?.amount };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete budget');
  }
};

export {
  createYearBudget,
  createMonthBudget,
  findBudgetYearWithUserId,
  findBudgetMonth,
  findAllYearBudgets,
  updateYearBudget,
  updateMonthBudget,
  deleteBudget,
  findBudgetDetails,
  findOneYearBudget
};
