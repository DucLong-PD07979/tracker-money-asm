/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, Control } from "react-hook-form";

interface InputDateProps {
    name: string;
    control: Control<any>;
    defaultValue?: Date;
    classNames?: string;
    dateFormat?: string;
}
const InputDate: FC<InputDateProps> = ({
    name,
    control,
    defaultValue,
    dateFormat = "MM/dd/yyyy",
    classNames = "",
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ? defaultValue : new Date()}
            render={({ field: { onChange, value } }) => {
                return (
                    <DatePicker
                        dateFormat={dateFormat}
                        className={classNames}
                        onChange={onChange}
                        selected={value}
                    />
                );
            }}
        />
    );
};

export default InputDate;
