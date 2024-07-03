import { FC, ReactNode } from "react";
import "./main.scss";

interface GlobalStylesProps {
    children: ReactNode;
}

const GlobalStyles: FC<GlobalStylesProps> = ({ children }) => {
    return children;
};

export default GlobalStyles;
