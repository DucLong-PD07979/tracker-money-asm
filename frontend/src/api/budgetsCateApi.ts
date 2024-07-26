/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { FormBudgetsOptionType } from "./models/budgetsCateGuard";

const BUDGETS_CATE_URL: string =
    "http://localhost:3000/api/v1/budgets-categories";

const createBudgetsCate = async (
    payload: FormBudgetsOptionType
): Promise<any> => {
    return await apiBase.post(BUDGETS_CATE_URL, payload);
};

export { createBudgetsCate };
