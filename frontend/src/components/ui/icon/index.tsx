import React, { FC } from "react";

interface IconProps {
    color?: string;
    width?: string;
    height?: string;
    classNames?: string;
    style?: React.CSSProperties;
}

const GoogleIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height={height}
                width={width}
            >
                <path
                    fill="#4285F4"
                    d="M20.8 12.208q-.002-.975-.167-1.875H12v3.546h4.933a4.22 4.22 0 0 1-1.829 2.767v2.3h2.963C19.8 17.35 20.8 15 20.8 12.208"
                ></path>
                <path
                    fill="#34A853"
                    d="M12 21.167c2.475 0 4.55-.821 6.067-2.221l-2.963-2.3c-.82.55-1.87.875-3.104.875-2.387 0-4.408-1.613-5.13-3.78H3.809v2.376A9.16 9.16 0 0 0 12 21.167"
                ></path>
                <path
                    fill="#FBBC05"
                    d="M6.87 13.742A5.5 5.5 0 0 1 6.584 12c0-.604.105-1.192.288-1.742V7.883H3.808A9.16 9.16 0 0 0 2.833 12c0 1.48.355 2.88.975 4.117l3.063-2.375Z"
                ></path>
                <path
                    fill="#EA4335"
                    d="M12 6.48c1.346 0 2.554.462 3.504 1.37l2.63-2.63C16.545 3.743 14.47 2.834 12 2.834a9.16 9.16 0 0 0-8.192 5.05l3.063 2.375C7.59 8.092 9.613 6.48 12 6.48"
                ></path>
            </svg>
        </div>
    );
};

const AppleIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    color = "currentColor",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={color}
                viewBox="0 0 24 24"
                height={height}
                width={width}
            >
                <path
                    fill="#000"
                    d="M19.499 8.324a4.48 4.48 0 0 0-2.12 3.803c0 1.765 1.04 3.373 2.621 4.04a10.6 10.6 0 0 1-1.35 2.823c-.848 1.216-1.734 2.47-3.045 2.47s-1.697-.784-3.239-.784c-1.503 0-2.043.824-3.277.824s-2.082-1.137-3.046-2.549A12.53 12.53 0 0 1 4 12.323c0-3.882 2.467-5.96 4.935-5.96 1.31 0 2.39.862 3.2.862.771 0 2.005-.901 3.47-.901a4.58 4.58 0 0 1 3.894 2M14.91 4.676c.655-.784 1.002-1.764 1.04-2.784 0-.117 0-.274-.038-.392a4.4 4.4 0 0 0-2.891 1.53 4.32 4.32 0 0 0-1.08 2.705c0 .118 0 .236.039.353.077 0 .193.04.27.04 1.04-.079 2.004-.628 2.66-1.452"
                ></path>
            </svg>
        </div>
    );
};

const FaceBookIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    color = "currentColor",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={color}
                viewBox="0 0 24 24"
                height={height}
                width={width}
            >
                <path
                    fill="#1977F3"
                    fillRule="evenodd"
                    d="M22 12.06C22 6.506 17.522 2 12 2S2 6.505 2 12.06c0 5.022 3.656 9.184 8.438 9.94v-7.03h-2.54v-2.91h2.54V9.845c0-2.521 1.493-3.915 3.777-3.915 1.094 0 2.239.197 2.239.197v2.476h-1.262c-1.242 0-1.63.775-1.63 1.571v1.888h2.774l-.443 2.909h-2.33V22c4.78-.754 8.437-4.917 8.437-9.94"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    );
};

const CreditCardIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
            </svg>
        </div>
    );
};

const UserCircleIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
            </svg>
        </div>
    );
};

const ArrowsRightLeftIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
            </svg>
        </div>
    );
};

const FlagIcon: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
            </svg>
        </div>
    );
};

const CursorArrowRipple: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
            </svg>
        </div>
    );
};

const QuestionMarkCircle: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width={width}
                height={height}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
            </svg>
        </div>
    );
};

const ChevronLef: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                height={height}
                width={width}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                />
            </svg>
        </div>
    );
};

const ChevronRight: FC<IconProps> = ({
    width = "24px",
    height = "24px",
    classNames = "",
    style = {},
}) => {
    return (
        <div className={`start-icon ${classNames}`} style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width={width}
                height={height}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
            </svg>
        </div>
    );
};

export {
    GoogleIcon,
    AppleIcon,
    FaceBookIcon,
    CreditCardIcon,
    UserCircleIcon,
    ArrowsRightLeftIcon,
    FlagIcon,
    CursorArrowRipple,
    QuestionMarkCircle,
    ChevronLef,
    ChevronRight,
};
