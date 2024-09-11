import { FC, ReactNode } from "react";
import classNames from "classnames";

interface GridProps {
    children: ReactNode;
    classNames?: string;
    gap?: string;
    rowNumber?: number;
    columnNumber?: number;
    ariaLabel?: string;
    width?: string;
}
const Grid: FC<GridProps> = ({
    children,
    classNames: additionalClassNames,
    ariaLabel,
}) => {
    const gridClassNames = classNames(`grid`, additionalClassNames);

    // const gridStyles = {
    //     gap: gap,
    //     gridTemplateRows: rowNumber ? `repeat(${rowNumber}, auto)` : undefined,
    //     gridTemplateColumns: columnNumber
    //         ? `repeat(${columnNumber}, 1fr)`
    //         : undefined,
    //     width,
    // };

    return (
        <div className={gridClassNames} role="grid" aria-label={ariaLabel}>
            {children}
        </div>
    );
};

export default Grid;
