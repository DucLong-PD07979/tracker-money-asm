/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";

const EXPENSES_URL: string =
    import.meta.env.VITE_API_URL + "/api/v1/expenses" ||
    "http://localhost:3000/api/v1/expenses";

const createExpenses = async (expensesPayload: any): Promise<any> => {
    try {
        const result = await apiBase.post(EXPENSES_URL, expensesPayload);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const getExpensesWithUserId = async (): Promise<any> => {
    const result = await apiBase.get(EXPENSES_URL);
    return result.data;
};

const deleteExpensesWithUserId = async (ids: string[]): Promise<any> => {
    const result = await apiBase.delete(EXPENSES_URL, {
        data: { ids },
    });
    return result.data;
};

const updateExpensesWithUserId = async (
    id: string,
    newData: any
): Promise<any> => {
    try {
        const result = await apiBase.put(`${EXPENSES_URL}/${id}`, newData);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export {
    createExpenses,
    getExpensesWithUserId,
    deleteExpensesWithUserId,
    updateExpensesWithUserId,
};
