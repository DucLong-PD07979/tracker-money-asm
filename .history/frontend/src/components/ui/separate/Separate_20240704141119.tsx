// import React, { FC } from "react";

// interface SeparateProps {
//     classNames?: string;
//     style?: React.CSSProperties;
//     color?: string;
//     thickness?: string;
//     margin?: string;
//     orientation?: "horizontal" | "vertical";
//     children?: React.ReactNode;
// }

// const Separate: FC<SeparateProps> = ({
//     classNames = "",
//     style = {},
//     color = "#000",
//     thickness = "1px",
//     margin = "8px 0",
//     orientation = "horizontal",
// }) => {
//     const isHorizontal = orientation === "horizontal";

//     const separatorStyle: React.CSSProperties = {
//         backgroundColor: color,
//         height: isHorizontal ? thickness : "100%",
//         width: isHorizontal ? "100%" : thickness,
//         flexGrow: 1,
//     };

//     const containerStyle: React.CSSProperties = {
//         display: isHorizontal ? "flex" : "inline-flex",
//         alignItems: "center",
//         justifyContent: "center",
//         margin,
//         ...style,
//     };

//     return (
//         <div
//             className={`separate-container ${classNames}`}
//             style={containerStyle}
//         >
//             <div className="separate" style={separatorStyle}></div>
//             {/* {children && (
//                 <div
//                     className="separate-children"
//                     style={{ padding: isHorizontal ? "0 8px" : "8px 0" }}
//                 >
//                     {children}
//                 </div>
//             )} */}
//             <div className="separate" style={separatorStyle}></div>
//         </div>
//     );
// };

// export default Separate;

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
}) => {
    const isHorizontal = orientation === "horizontal";

    const separateStyle: React.CSSProperties = {
        backgroundColor: color,
        width: isHorizontal ? "100%" : thickness,
        height: isHorizontal ? thickness : "100%",
    };

    const separateContainerStyle: React.CSSProperties = {
        margin,
    };

    //   height: isHorizontal ? thickness : "100%",
    //   width: isHorizontal ? "100%" : thickness,
    return (
        <div
            className={`separate-container ${orientation}`}
            style={separateContainerStyle}
        >
            <div className="separate" style={separateStyle}></div>
            <div className="separate" style={separateStyle}></div>
        </div>
    );
};

export default Separate;
