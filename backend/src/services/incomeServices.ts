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

const getIncomeWithUserId = async (id: any) => {
  try {
    const incomeData = await IncomeModel.find({
      user_id: id
    }).sort({ date: -1 });
    return incomeData;
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

const updateIncomeWithUserId = async (id: string, incomeData: any) => {
  try {
    const updateIncome = await IncomeModel.findOneAndUpdate({ _id: id }, incomeData);
    if (updateIncome) {
      await updateIncome.save();
      return updateIncome;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteIncomeWithUserid = async (user_id: string, ids: string[]) => {
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return false;
    }
    const result = await IncomeModel.deleteMany({ _id: { $in: ids }, user_id });
    return result;
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
  getIncomeFilterWithDate,
  getIncomeWithUserId
};
