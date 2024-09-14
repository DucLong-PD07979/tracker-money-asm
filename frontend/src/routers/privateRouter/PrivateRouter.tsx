import { FC, ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { getUserInfor } from "@/store/authSlice/authSlice";
import Cookies from "js-cookie";
import { getUserWithToken } from "@/api/userApi";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DotSpinner from "@/components/ui/loading/DotSpinner";

interface PrivateRouterProps {
    children: ReactNode;
}

const usePrivateRoute = (accessToken: string | undefined) => {
    const dispatch = useAppDispatch();

    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserWithToken,
        enabled: !!accessToken,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (isError) {
            toast.error(`Error fetching user info: ${error.message}`);
        }
        if (isSuccess) {
            dispatch(getUserInfor(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isSuccess, dispatch, error]);

    return { isLoading, isError, error };
};

const PrivateRouter: FC<PrivateRouterProps> = ({ children }) => {
    const location = useLocation();
    const [accessToken, setAccessToken] = useState<string | undefined>(
        Cookies.get("jwt")
    );
    const { isLoading, isError, error } = usePrivateRoute(accessToken);
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tokenFromUrl = params.get("accessToken");

        if (tokenFromUrl) {
            Cookies.set("jwt", tokenFromUrl, { expires: 1 });
            setAccessToken(tokenFromUrl);
        }
    }, [location]);

    if (isLoading) {
        return <DotSpinner />;
    }

    if (!accessToken) {
        return <Navigate to={"/register"} />;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }
    return <>{children}</>;
};

export default PrivateRouter;
