import { FC, ReactNode } from "react";
import classNames from "classnames";

interface GridProps {
    children: ReactNode;
    classNames?: string;
    gap?: string;
    rowNumber?: number;
    columnNumber?: number;
    ariaLabel?: string;
}
const Grid: FC<GridProps> = ({
    children,
    classNames: additionalClassNames,
    gap = "18px",
    rowNumber,
    columnNumber,
    ariaLabel,
}) => {
    const gridClassNames = classNames(`grid`, additionalClassNames);

    const gridStyles = {
        gap: gap,
        gridTemplateRows: rowNumber ? `repeat(${rowNumber}, auto)` : undefined,
        gridTemplateColumns: columnNumber
            ? `repeat(${columnNumber}, 1fr)`
            : undefined,
    };

    return (
        <div
            className={gridClassNames}
            style={gridStyles}
            role="grid"
            aria-label={ariaLabel}
        >
            {children}
        </div>
    );
};

export default Grid;
