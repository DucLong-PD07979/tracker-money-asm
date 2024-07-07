import { apiBase } from "@/httpIntercepter_";

const AUTH_URL: string = "http://localhost:3005";

const reigster = async () => {
    const response = await apiBase.get(AUTH_URL);
    return response.data;
};

export { reigster };
