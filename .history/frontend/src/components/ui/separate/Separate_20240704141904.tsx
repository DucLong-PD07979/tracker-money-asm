import React, { FC } from "react";

interface SeparateProps {
    classNames?: string;
    style?: React.CSSProperties;
    color?: string;
    margin?: string;
    orientation?: "horizontal" | "vertical";
    children?: React.ReactNode;
    thickness?: string;
}

const Separate: FC<SeparateProps> = ({
    color = "#e5e7eb",
    orientation = "horizontal",
    thickness = "1px",
    margin = "0px",
    style = {},
    children,
}) => {
    const isHorizontal = orientation === "horizontal";

    const separateStyle: React.CSSProperties = {
        backgroundColor: color,
        width: isHorizontal ? "100%" : thickness,
        height: isHorizontal ? thickness : "100%",
    };

    const separateContainerStyle: React.CSSProperties = {
        margin,
        ...style,
    };

    return (
        <div
            className={`separate-container ${orientation}`}
            style={separateContainerStyle}
        >
            <div className="separate" style={separateStyle}></div>
            <div className="separate" style={separateStyle}></div>
            {children && <div className="separate-children">{children}</div>}
        </div>
    );
};

export default Separate;
