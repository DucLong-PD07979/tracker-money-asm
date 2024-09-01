/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { FormBugetMonth, FormBugetYear } from "./models/budgetsGuard";

const BUDGETS_URL: string = "http://localhost:3000/api/v1/budgets";

const createBudgets = async (budget: any): Promise<any> => {
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
        const budgetData = result.data.budgetData;
        return budgetData;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const getBudgetYearWithUserId = async (year: number): Promise<any> => {
    try {
        const result = await apiBase.get(`${BUDGETS_URL}/year/${year}`);
        const budgetYear = result.data.budgetYear;
        return budgetYear;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const createBudgetYearWithUser = async (
    budgetYear: FormBugetYear
): Promise<any> => {
    try {
        const result = await apiBase.post(`${BUDGETS_URL}/year`, budgetYear);
        return result;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const createBudgetMonthWithUser = async (
    budgetMonth: FormBugetMonth
): Promise<any> => {
    try {
        const result = await apiBase.post(`${BUDGETS_URL}/month`, budgetMonth);
        return result;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

export {
    createBudgets,
    getBudgetWithUserId,
    createBudgetYearWithUser,
    createBudgetMonthWithUser,
    getBudgetYearWithUserId,
};
