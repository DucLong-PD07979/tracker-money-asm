/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { FormBudgetsType } from "./models/budgetsGuard";

const BUDGETS_URL: string = "http://localhost:3000/api/v1/budgets";

const createBudgets = async (budget: FormBudgetsType): Promise<any> => {
    try {
        const result = await apiBase.post(BUDGETS_URL, budget);
        return result;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const getBudgetWithUserId = async (): Promise<any> => {
    try {
        const result = await apiBase.get(BUDGETS_URL);
        return result.data.budgetData;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

export { createBudgets, getBudgetWithUserId };
