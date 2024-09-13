/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";

const CATEGORY_EXPENSE: string =
    process.env.REACT_APP_API_BASE_URL + "/api/v1/categories" ||
    "http://localhost:3000/api/v1/categories";

const getAllCategoriesExpense = async (): Promise<any> => {
    try {
        const result = await apiBase.get(CATEGORY_EXPENSE);
        return result.data.categories;
    } catch (error) {
        console.log(error);
    }
};

export { getAllCategoriesExpense };
