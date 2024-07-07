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
        <div className={`separate ${classNames}`} style={style}>
            {children}
        </div>
    );
};

export default Separate;
