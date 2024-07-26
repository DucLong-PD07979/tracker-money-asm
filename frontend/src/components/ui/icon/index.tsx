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
                strokeWidth="1.5"
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

const ScaleIcon: FC<IconProps> = ({
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
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                />
            </svg>
        </div>
    );
};

const ArrowRightStartOnRectangle: FC<IconProps> = ({
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
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
            </svg>
        </div>
    );
};

const ArrowTrendUp: FC<IconProps> = ({
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
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
            </svg>
        </div>
    );
};

const PlusIcon: FC<IconProps> = ({
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
                    d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg>
        </div>
    );
};

const EyeIcon: FC<IconProps> = ({
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
            </svg>
        </div>
    );
};

const SettingIcon: FC<IconProps> = ({
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
                width={width}
                height={height}
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
            </svg>
        </div>
    );
};

const ArrowLeftCircleIcon: FC<IconProps> = ({
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
                className="size-6"
                width={width}
                height={height}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
    ScaleIcon,
    ArrowRightStartOnRectangle,
    ArrowTrendUp,
    PlusIcon,
    EyeIcon,
    SettingIcon,
    ArrowLeftCircleIcon,
};
