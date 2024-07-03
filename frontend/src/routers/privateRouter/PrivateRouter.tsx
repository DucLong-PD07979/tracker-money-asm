import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouter {
    children: ReactNode;
}

const PrivateRouter: FC<PrivateRouter> = ({ children }) => {
    const userLogin = true;
    if (!userLogin) {
        return <Navigate to={"/login"} />;
    }
    return <>{children}</>;
};

export default PrivateRouter;
