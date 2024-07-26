/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";

const CATEGORY_EXPENSE: string = "http://localhost:3000/api/v1/categories";

const getAllCategoriesExpense = async (): Promise<any> => {
    return await apiBase.get(CATEGORY_EXPENSE);
};

export { getAllCategoriesExpense };
