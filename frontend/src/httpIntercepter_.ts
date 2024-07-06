import axios from "axios";
import Cookies from "js-cookie";

const apiBase = axios.create({
    timeout: 1000,
    withCredentials: true,
});

// Add a request interceptor
apiBase.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get("jwt");
        if (accessToken) {
            config.headers.Authorization = `${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
apiBase.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        // error.response.status === 401 && !originalRequest._retry;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const response = await apiBase.post("refreshToken");
                const { token } = response.data;
                Cookies.set("jwt", token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `${token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);

export { apiBase };
