import { FC, CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
    "--uib-size"?: string;
    "--uib-color"?: string;
    "--uib-speed"?: string;
}

interface DotSpinnerProps {
    classNames?: string;
    style?: CustomCSSProperties;
}

const DotSpinner: FC<DotSpinnerProps> = ({ style, classNames }) => {
    return (
        <div className={`dot-spinner ${classNames}`} style={style}>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div>
    );
};

export default DotSpinner;
