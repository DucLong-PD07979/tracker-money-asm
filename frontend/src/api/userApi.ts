/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiBase } from "@/httpIntercepter_";
const USER_URL: string =
    process.env.REACT_APP_API_BASE_URL + "/api/v1/user" ||
    "http://localhost:3000/api/v1/user";

const getUserWithToken = async (): Promise<any> => {
    try {
        const result = await apiBase.get(USER_URL);
        return result.data.userInfor;
    } catch (error) {
        console.error("Error creating budgets:", error);
        throw error;
    }
};

export { getUserWithToken };
