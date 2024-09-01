import { forwardRef, ComponentPropsWithRef } from "react";
import classnames from "classnames";

interface InputTextProps extends ComponentPropsWithRef<"input"> {
    inputsize?: "xs" | "md" | "lg";
    rounder?: "xs" | "md" | "lg";
    placeholder?: string;
    classNames?: string;
    refinput: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    (
        {
            inputsize,
            placeholder,
            refinput,
            rounder,
            classNames: additionalClassNames,
            ...rest
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
                className={inputStyle}
                placeholder={placeholder}
                {...rest}
                {...refinput}
            />
        );
    }
);

export default InputText;
