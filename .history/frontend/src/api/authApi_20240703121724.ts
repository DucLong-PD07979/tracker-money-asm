import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string = "http://localhost:3005";

const reigster = (userPayload: AuthGuard) => {
    return apiBase.post(AUTH_URL, userPayload);
};

// export const postUser = <TData = AxiosResponse<UserLoginResponse>>(
//     param: UserLoginRequest,
//     options?: AxiosRequestConfig
// ): Promise<TData> => {
//     return axios.post(`/login`, param, options);
// };

export { reigster };
