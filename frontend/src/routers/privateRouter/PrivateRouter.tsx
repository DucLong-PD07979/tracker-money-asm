import { FC, ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { getUserInfor } from "@/store/authSlice/authSlice";
import Cookies from "js-cookie";
import { getUserWithToken } from "@/api/userApi";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface PrivateRouterProps {
    children: ReactNode;
}

const PrivateRouter: FC<PrivateRouterProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const accessToken = Cookies.get("jwt");

    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["userInfo"],
        queryFn: getUserWithToken,
        enabled: !!accessToken,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (isError) {
            toast.error(`login error ${error.message}`);
        }
        if (isSuccess) {
            dispatch(getUserInfor(data));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, data, isSuccess, isError]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (!accessToken) {
        return <Navigate to={"/register"} />;
    }
    return <>{children}</>;
};

export default PrivateRouter;
