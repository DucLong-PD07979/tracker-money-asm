import { forwardRef } from "react";
import classnames from "classnames";

interface InputTextProps {
    inputsize?: "xs" | "md" | "lg";
    rounder?: "xs" | "md" | "lg";
    placeholder?: string;
    classNames?: string;
    refinput: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    type?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    (
        {
            inputsize,
            placeholder,
            refinput,
            rounder,
            type,
            classNames: additionalClassNames,
        },
        ref
    ) => {
        const inputStyle = classnames(
            "input-form",
            {
                [`input-s-${inputsize}`]: inputsize,
                [`input-r-${rounder}`]: rounder,
            },
            additionalClassNames
        );

        return (
            <input
                ref={ref}
                type={type}
                className={inputStyle}
                placeholder={placeholder}
                {...refinput}
            />
        );
    }
);

export default InputText;
