import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date } from "yup";

import { Button, Grid } from "@/components/ui";
import { SelectBox, InputText } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";

interface BudgetsOptionType {
    value: string;
    label: string;
}

const _budgetsTypeOption: BudgetsOptionType[] = [
    { value: "groceries", label: "Groceries" },
    { value: "electricity", label: "Electricity" },
    { value: "rent", label: "Rent" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "internet", label: "Internet" },
    { value: "healthcare", label: "Healthcare" },
    { value: "income", label: "Income" },
    { value: "another", label: "Another" },
];

interface CurrencyOptionType {
    value: string;
    label: string;
}
const _currencyOption: CurrencyOptionType[] = [
    { value: "VND", label: "VND" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
];

interface FormBudgetsType {
    budgetsOption: string;
    amount: number;
    dateStart: Date;
    dateEnd: Date;
    description: string;
    currency: string;
}
// currency: mixed().oneOf(["VND", "USD", "EUR"]).required(),

const budgetsSchema = object({
    budgetsOption: string().required(),
    amount: number().required(),
    dateStart: date().default(() => new Date()),
    dateEnd: date().default(() => new Date()),
    description: string().default(""),
    currency: string().default("VND").required(),
});

const FormBudgets = () => {
    const {
        control,
        handleSubmit,
        register,
        reset,
        // formState: { errors },
    } = useForm<FormBudgetsType>({
        resolver: yupResolver(budgetsSchema),
    });

    const [budgetsOption, setBudgetsOption] =
        useState<BudgetsOptionType[]>(_budgetsTypeOption);
    const [currencyOption, setCurrencyOption] =
        useState<CurrencyOptionType[]>(_currencyOption);

    const handleCreateTypeBudgets = async () => {
        setBudgetsOption(budgetsOption);
        setCurrencyOption(currencyOption);
        reset();
    };
    return (
        <>
            <Grid columnNumber={1} gap="18px">
                <form
                    onSubmit={handleSubmit(handleCreateTypeBudgets)}
                    className="form-year"
                >
                    <Grid gap="18px" columnNumber={3}>
                        <div className="form-flex-cl">
                            <label htmlFor="">2024 - Amount budgets</label>
                            <InputText
                                refinput={register("amount")}
                                placeholder="20.000.000 vnd"
                            />
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">July - Amount budgets</label>
                            <InputText
                                refinput={register("amount")}
                                placeholder="20.000.000 vnd"
                            />
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Currency option</label>
                            <SelectBox
                                control={control}
                                options={currencyOption}
                                selectValue={_currencyOption[0].value}
                                name={"currency"}
                            />
                        </div>
                    </Grid>
                    <Button
                        classNames="btn-submit"
                        size="md"
                        icon={<PlusIcon width="14px" height="14px" />}
                    >
                        Create budgets
                    </Button>
                </form>
                <form onSubmit={handleSubmit(handleCreateTypeBudgets)}>
                    <Grid gap="18px" columnNumber={3}>
                        <div className="form-flex-cl">
                            <label htmlFor="">Budgets type option</label>
                            <SelectBox
                                control={control}
                                options={_budgetsTypeOption}
                                selectValue={budgetsOption[0].value}
                                name={"budgetsOption"}
                            />
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Amount budgets</label>
                            <InputText
                                refinput={register("amount")}
                                placeholder="20.000.000 vnd"
                            />
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Currency option</label>
                            <SelectBox
                                control={control}
                                options={currencyOption}
                                selectValue={_currencyOption[0].value}
                                name={"currency"}
                            />
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Description</label>
                            <InputText
                                refinput={register("description")}
                                placeholder="description expense month"
                            />
                        </div>
                    </Grid>
                    <Button
                        classNames="btn-submit"
                        size="md"
                        icon={<PlusIcon width="14px" height="14px" />}
                    >
                        Create budgets
                    </Button>
                </form>
            </Grid>
        </>
    );
};

export default FormBudgets;
