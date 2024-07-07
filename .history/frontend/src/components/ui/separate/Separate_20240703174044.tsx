import React, { FC } from "react";

interface SeparateProps {
    classNames?: string;
    children?: React.ReactNode;
    height?: string;
}

const Separate: FC<SeparateProps> = ({
    classNames = "",
    children,
    height = "20px",
}) => {
    return (
        <div className="separate-wrapper" style={{ height }}>
            <div className={`separate ${classNames}`}></div>
            {children}
        </div>
    );
};

export default Separate;
