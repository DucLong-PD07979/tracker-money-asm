/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { IncomeType } from "./models/incomeGuard";

const INCOME_URL: string = "http://localhost:3000/api/v1/income";

const createIncome = async (data: IncomeType): Promise<any> => {
    return await apiBase.post(INCOME_URL, data);
};

export { createIncome };
