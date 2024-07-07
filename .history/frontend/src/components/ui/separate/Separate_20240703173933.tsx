import React, { FC } from "react";

interface SeparateProps {
    classNames?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Separate: FC<SeparateProps> = ({
    classNames = "",
    style = {},
    children,
}) => {
    return (
        <div className="separate-wrapper" style={style}>
            <div className={`separate ${classNames}`}></div>
            {children}
        </div>
    );
};

export default Separate;
