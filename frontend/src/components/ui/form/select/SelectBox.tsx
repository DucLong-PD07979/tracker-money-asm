/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { Controller, Control } from "react-hook-form";
import { FC } from "react";

interface Option {
    value: string;
    label: string;
}

interface SelectBoxProps {
    name: string;
    options: Option[];
    control: Control<any>;
    selectValue?: string;
    classNames?: string;
    errorMess?: string;
}
const SelectBox: FC<SelectBoxProps> = ({
    name,
    options,
    control,
    selectValue,
    classNames,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={selectValue}
            render={({ field: { onChange, value } }) => {
                return (
                    <>
                        <Select
                            className={classNames}
                            value={options.find(
                                (option) => option.value === value
                            )}
                            onChange={(val) => onChange(val?.value)}
                            options={options}
                        />
                    </>
                );
            }}
        />
    );
};

export default SelectBox;
