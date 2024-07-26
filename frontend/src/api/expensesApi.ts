/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";

const EXPENSES_URL: string = "http://localhost:3000/api/v1/expenses";

const createExpenses = async (expensesPayload: any): Promise<any> => {
    return await apiBase.post(EXPENSES_URL, expensesPayload);
};

export { createExpenses };
