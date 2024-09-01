import classNames from "classnames";
import React, { FC, ReactNode, ComponentPropsWithoutRef } from "react";
import DotSpinner from "../loading/DotSpinner";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
    classNames?: string;
    size?: "sm" | "md" | "xl";
    rounder?: "sm" | "md" | "xl" | "none";
    isLoading?: boolean;
    icon?: ReactNode;
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
    ...props
}) => {
    const btnStyle = classNames(
        `btn`,
        {
            [`btn-r-${rounder}`]: rounder,
            [`btn-${size}`]: size,
        },
        additionalClassNames
    );

    const spinnerStyle = {
        "--uib-size": "14px",
        "--uib-color": "currentColor",
        "--uib-speed": "1.5s",
    };

    return (
        <button
            className={btnStyle}
            onClick={!disabled && !isLoading ? onClick : undefined}
            role="button"
            aria-label={ariaLabel}
            disabled={disabled}
            {...props}
        >
            {isLoading && (
                <span className="btn-icon">
                    <DotSpinner style={spinnerStyle as React.CSSProperties} />
                </span>
            )}
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
