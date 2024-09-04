import ExpenseModel from '@/models/expensesModel';
import { endOfMonth, startOfMonth, startOfYear, endOfYear, startOfDay, endOfDay } from 'date-fns';

const createExpenses = async (expensesPayload: any) => {
  try {
    const expensesNew = new ExpenseModel(expensesPayload);
    expensesNew.save();
    return expensesNew;
  } catch (error) {
    console.log(error);
  }
};

const getExpensesWithUserId = async (id: any) => {
  try {
    const expenses = ExpenseModel.find({ user_id: id });
    if (expenses) return expenses;
  } catch (error) {
    console.log(error);
  }
};

const getExpensesFliterWithYear = async (id: any, year: string) => {
  try {
    const start = startOfYear(year);
    const end = endOfYear(year);

    const expensesYear = await ExpenseModel.find({
      user_id: id,
      duration: {
        $gte: start,
        $lt: end
      }
    });
    return expensesYear;
  } catch (error) {
    console.log(error);
  }
};

const deleteExpenses = async (user_id: string, ids: string[]) => {
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return false;
    }
    const result = await ExpenseModel.deleteMany({ _id: { $in: ids }, user_id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateExpenses = async (id: string, newData: any) => {
  try {
    const newExpenseUpdate = await ExpenseModel.findOneAndUpdate({ _id: id }, newData);
    if (newExpenseUpdate) {
      await newExpenseUpdate.save();
      return newExpenseUpdate;
    }
  } catch (error) {
    console.log(error);
  }
};

export { createExpenses, getExpensesWithUserId, getExpensesFliterWithYear, deleteExpenses, updateExpenses };
