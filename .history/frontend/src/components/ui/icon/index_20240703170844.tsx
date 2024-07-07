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
            ;
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
                    fill-rule="evenodd"
                    d="M22 12.06C22 6.506 17.522 2 12 2S2 6.505 2 12.06c0 5.022 3.656 9.184 8.438 9.94v-7.03h-2.54v-2.91h2.54V9.845c0-2.521 1.493-3.915 3.777-3.915 1.094 0 2.239.197 2.239.197v2.476h-1.262c-1.242 0-1.63.775-1.63 1.571v1.888h2.774l-.443 2.909h-2.33V22c4.78-.754 8.437-4.917 8.437-9.94"
                    clip-rule="evenodd"
                ></path>
            </svg>
            ;
        </div>
    );
};

export { GoogleIcon, AppleIcon, FaceBookIcon };
