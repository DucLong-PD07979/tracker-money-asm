import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    classNames?: string;
    size?: "sm" | "md" | "xl";
    rounder?: "sm" | "md" | "xl" | "none";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isLoading?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    ariaLabel?: string;
}
const Button: FC<ButtonProps> = ({
    children,
    classNames: additionalClassNames,
    rounder = "none",
    size = "sm",
    onClick,
    disabled = false,
    ariaLabel,
    isLoading = false,
    icon,
}) => {
    const btnStyle = classNames(
        `btn`,
        {
            [`btn-r-${rounder}`]: rounder,
            [`btn-${size}`]: size,
        },
        additionalClassNames
    );
    return (
        <button
            className={btnStyle}
            onClick={!disabled && !isLoading ? onClick : undefined}
            role="button"
            aria-label={ariaLabel}
            disabled={disabled}
        >
            {isLoading && <span className="spinner"></span>}
            {icon && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
        </button>
    );
};

export default Button;
