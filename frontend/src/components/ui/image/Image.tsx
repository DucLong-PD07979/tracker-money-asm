import classNames from "classnames";
import React, { FC, ImgHTMLAttributes, useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
    defaultImg: string;
    additionalClassNames?: string;
}

const Image: FC<ImageProps> = ({
    alt,
    src,
    defaultImg,
    additionalClassNames,
    loading = "lazy",
    ...rest
}) => {
    const [imgError, setImgError] = useState<boolean>(false);

    const handleErrorImage = () => {
        setImgError(!imgError);
    };

    const imageClassnames = classNames(
        {
            "default-img": defaultImg,
        },
        additionalClassNames
    );

    return (
        <img
            className={imageClassnames}
            alt={alt}
            src={!imgError ? src : defaultImg}
            onError={handleErrorImage}
            loading={loading}
            {...rest}
        />
    );
};

export default Image;
