import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string = "http://localhost:3000/api/v1/auth";
const URL_LOGIN_GOOGLE: string = AUTH_URL + "/google";

const reigster = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/register`, userPayload);
};

const login = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/login`, userPayload);
};

export { reigster, login, URL_LOGIN_GOOGLE };
