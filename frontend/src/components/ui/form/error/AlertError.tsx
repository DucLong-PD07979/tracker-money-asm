import { FC, ReactNode } from "react";

interface AlertError {
    children: ReactNode;
}
const AlertError: FC<AlertError> = ({ children }) => {
    return <div className="error-mess">{children}</div>;
};

export default AlertError;
