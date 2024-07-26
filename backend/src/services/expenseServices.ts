import ExpenseModel from '@/models/expensesModel';

const createExpenses = async (expensesPayload: any) => {
  try {
    const expensesNew = new ExpenseModel(expensesPayload);
    expensesNew.save();
    return expensesNew;
  } catch (error) {
    console.log(error);
  }
};

export { createExpenses };
