import { FC, ReactNode } from "react";

interface FormWrapperProps {
    children: ReactNode;
}
const FormWrapper: FC<FormWrapperProps> = ({ children }) => {
    return <div className="form-wrapper">{children}</div>;
};

export default FormWrapper;
