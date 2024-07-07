import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string = "http://localhost:3005/v1/auth";

const reigster = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/register`, userPayload);
};

const login = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/login`, userPayload);
};

const loginWithGoogle = async () => {
    return await apiBase.get(`${AUTH_URL}/google`);
};

const loginWithFacebook = () => {
    return apiBase.post(`${AUTH_URL}/facebook`);
};

export { reigster, login, loginWithGoogle, loginWithFacebook, AUTH_URL };
