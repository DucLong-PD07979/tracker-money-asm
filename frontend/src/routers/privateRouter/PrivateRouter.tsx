import { FC, ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { authSelector, fetchUsers } from "@/store/authSlice/authSlice";
import Cookies from "js-cookie";

interface PrivateRouterProps {
    children: ReactNode;
}

const PrivateRouter: FC<PrivateRouterProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const { user, loading, error } = useAppSelector(authSelector);
    console.log(user);

    const accessToken = Cookies.get("jwt");

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchUsers());
        }
    }, [dispatch, accessToken]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error === "failed") {
        return <div>Error: {error}</div>;
    }

    if (!accessToken) {
        return <Navigate to={"/register"} />;
    }
    return <>{children}</>;
};

export default PrivateRouter;
