/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { FormBugetMonth, FormBugetYear } from "./models/budgetsGuard";

const BUDGETS_URL: string =
    import.meta.env.VITE_API_URL + "/api/v1/budgets" ||
    "http://localhost:3000/api/v1/budgets";

const getBudgetWithUserId = async (): Promise<any> => {
    try {
        const result = await apiBase.get(BUDGETS_URL);
        const allYearBudgets = result.data.allYearBudgets;
        return allYearBudgets;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const getBudgetYearWithUserId = async (year: number): Promise<any> => {
    try {
        const result = await apiBase.get(`${BUDGETS_URL}/year/${year}`);
        const budgetYear = result.data.budget;
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
        return result.data;
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
        return result.data;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const getBudgetDetailsWidthUser = async (year: number): Promise<any> => {
    try {
        const result = await apiBase.get(`${BUDGETS_URL}/details/${year}`);
        return result.data;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

const updateBudgetYear = async (id: string, newBudget: any): Promise<any> => {
    try {
        const result = await apiBase.put(
            `${BUDGETS_URL}/year/${id}`,
            newBudget
        );
        return result.data;
    } catch (error) {
        console.error("update error budgets:", error);
        throw error;
    }
};

export {
    getBudgetWithUserId,
    createBudgetYearWithUser,
    createBudgetMonthWithUser,
    getBudgetYearWithUserId,
    getBudgetDetailsWidthUser,
    updateBudgetYear,
};
