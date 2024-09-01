import IncomeModel from '@/models/incomeModel';
import { endOfMonth, startOfMonth, startOfYear, endOfYear, startOfDay, endOfDay } from 'date-fns';

const createIncome = async (incomeBody: any) => {
  try {
    const newIncome = new IncomeModel({ ...incomeBody });
    await newIncome.save();
    return newIncome;
  } catch (error) {
    console.log(error);
  }
};

const getIncomeFilterWithYear = async (id: any, year: any) => {
  try {
    const start = startOfYear(year);
    const end = endOfYear(year);
    const incomeData = await IncomeModel.find({
      user_id: id,
      date: {
        $gte: start,
        $lt: end
      }
    });
    return incomeData;
  } catch (error) {
    console.log(error);
  }
};

const getIncomeFilterWithMonth = async (id: any, duration: any) => {
  try {
    const firstDayOfMonth = startOfMonth(duration);
    const lastDayOfMonth = endOfMonth(duration);
    const incomeData = await IncomeModel.find({
      user_id: id,
      date: {
        $gte: firstDayOfMonth,
        $lt: lastDayOfMonth
      }
    });
    return incomeData;
  } catch (error) {
    console.log(error);
  }
};

const getIncomeFilterWithDate = async (id: any, duration: any) => {
  try {
    const start = startOfDay(duration);
    const end = endOfDay(duration);
    const incomeData = await IncomeModel.find({
      user_id: id,
      date: {
        $gte: start,
        $lt: end
      }
    });
    return incomeData;
  } catch (error) {
    console.log(error);
  }
};

const updateIncomeWithUserId = async (id: any) => {
  try {
    return '';
  } catch (error) {
    console.log(error);
  }
};

const deleteIncomeWithUserid = async (id: any) => {
  try {
    return '';
  } catch (error) {
    console.log(error);
  }
};

export {
  createIncome,
  getIncomeFilterWithYear,
  getIncomeFilterWithMonth,
  updateIncomeWithUserId,
  deleteIncomeWithUserid,
  getIncomeFilterWithDate
};
