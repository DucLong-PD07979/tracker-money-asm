import { forwardRef } from "react";
import Image from "../image/Image";
import classNames from "classnames";

interface AvatarProps {
    img: string;
    defaultImg: string;
    alt: string;
    role: string;
    size: "full" | "sm" | "md" | "xl";
    rounder: "full" | "sm" | "md" | "xl";
    addClassnames?: string;
}

const Avatar = forwardRef<HTMLInputElement, AvatarProps>(
    ({ img, defaultImg, alt, role, size, rounder, addClassnames }, ref) => {
        const avatarStyle = classNames(
            "avatar-box",
            {
                [`avatar-s-${size}`]: { size },
                [`avatar-r-${rounder}`]: { rounder },
            },
            addClassnames
        );
        return (
            <div ref={ref} role={role} className={avatarStyle}>
                <Image src={img} defaultImg={defaultImg} alt={alt} />
            </div>
        );
    }
);

export default Avatar;
