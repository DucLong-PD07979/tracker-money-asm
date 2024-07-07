import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string = "http://localhost:3005/v1/api/auth";

const reigster = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/register`, userPayload);
};

const login = (userPayload: AuthGuard) => {
    return apiBase.post(`${AUTH_URL}/login`, userPayload);
};

const loginWithGoogle = () => {
    return apiBase.post(`${AUTH_URL}/google`);
}

export { reigster, login };
