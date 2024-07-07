import { apiBase } from "@/httpIntercepter_";
import { AuthGuard } from "./models/authGuard";

const AUTH_URL: string = "http://localhost:3005";

const reigster = async (userPayload: AuthGuard, optional: any) => {
    const mutation = apiBase.post(AUTH_URL, userPayload, optional);
    return mutation;
};

// export const postUser = <TData = AxiosResponse<UserLoginResponse>>(
//     param: UserLoginRequest,
//     options?: AxiosRequestConfig
// ): Promise<TData> => {
//     return axios.post(`/login`, param, options);
// };

export { reigster };
