import { FC } from "react";

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
}) => {
    return (
        <div className={`start-icon ${classNames}`}>
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

export { GoogleIcon };
