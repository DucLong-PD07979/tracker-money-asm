import { forwardRef } from "react";
import classnames from "classnames";

interface InputRadioProps {
    inputsize?: "xs" | "md" | "lg";
    rounder?: "xs" | "md" | "lg";
    placeholder?: string;
    classNames?: string;
    refinput: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
}

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
    (
        {
            inputsize,
            placeholder,
            refinput,
            rounder,
            classNames: additionalClassNames,
        },
        ref
    ) => {
        const inputStyle = classnames(
            {
                [`input-s-${inputsize}`]: inputsize,
                [`input-r-${rounder}`]: rounder,
            },
            additionalClassNames
        );

        return (
            <input
                ref={ref}
                type="radio"
                className={inputStyle}
                placeholder={placeholder}
                {...refinput}
            />
        );
    }
);

export default InputRadio;
