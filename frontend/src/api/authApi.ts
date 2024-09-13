import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string =
    import.meta.env.VITE_API_URL + "/api/v1/auth" ||
    "http://localhost:3000/api/v1/auth";

const URL_LOGIN_GOOGLE: string = AUTH_URL + "/google";

const reigster = async (userPayload: AuthGuard) => {
    try {
        return apiBase.post(`${AUTH_URL}/register`, userPayload);
    } catch (error) {
        console.log(error);
    }
};

const login = async (userPayload: AuthGuard) => {
    try {
        return apiBase.post(`${AUTH_URL}/login`, userPayload);
    } catch (error) {
        console.log(error);
    }
};

const logout = async () => {
    try {
        return apiBase
            .post(`${AUTH_URL}/logout`)
            .then((result) => result.status);
    } catch (error) {
        console.log(error);
    }
};

export { reigster, login, logout, URL_LOGIN_GOOGLE };
