/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
import { IncomeType } from "./models/incomeGuard";

const INCOME_URL: string = "http://localhost:3000/api/v1/income";

const createIncome = async (data: IncomeType): Promise<any> => {
    try {
        return await apiBase.post(INCOME_URL, data);
    } catch (error) {
        console.log(error);
    }
};

const getIncomeWithUserId = async (query: string = ""): Promise<any> => {
    try {
        const result = await apiBase.get(`${INCOME_URL}${query}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const deleteIncomeWithUserId = async (ids: string[]): Promise<any> => {
    try {
        const result = await apiBase.delete(INCOME_URL, {
            data: { ids },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const updateIncomeWithUserId = async (
    id: string,
    newData: Partial<IncomeType>
): Promise<any> => {
    try {
        const result = await apiBase.put(`${INCOME_URL}/${id}`, newData);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export {
    createIncome,
    getIncomeWithUserId,
    deleteIncomeWithUserId,
    updateIncomeWithUserId,
};
