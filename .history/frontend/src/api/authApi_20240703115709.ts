import { apiBase } from "@/httpIntercepter_";

const AUTH_URL: string = "https://jsonplaceholder.typicode.com/posts";

const reigster = async () => {
    const response = await apiBase.get(AUTH_URL);
    return response.data;
};

export { reigster };
