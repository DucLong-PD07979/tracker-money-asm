/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

import { Button, Grid } from "@/components/ui";
import { SelectBox, InputText, ErrorMess } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useMutation, useQuery } from "@tanstack/react-query";

import { createBudgets } from "@/api/budgetsApi";
import { createBudgetsCate } from "@/api/budgetsCateApi";

import { toast } from "react-toastify";
import { getAllCategoriesExpense } from "@/api/categoryExpenseApi";
interface BudgetsOptionType {
    value: string;
    label: string;
    _id: number;
}

const _budgetsTypeOption: BudgetsOptionType[] = [
    { value: "groceries", label: "Groceries", _id: 123 },
    { value: "electricity", label: "Electricity", _id: 123 },
    { value: "rent", label: "Rent", _id: 123 },
    { value: "education", label: "Education", _id: 123 },
    { value: "entertainment", label: "Entertainment", _id: 123 },
    { value: "shopping", label: "Shopping", _id: 123 },
    { value: "internet", label: "Internet", _id: 123 },
    { value: "healthcare", label: "Healthcare", _id: 123 },
    { value: "income", label: "Income", _id: 123 },
    { value: "another", label: "Another", _id: 123 },
];

interface CurrencyOptionType {
    value: string;
    label: string;
    _id: number;
}
const _currencyOption: CurrencyOptionType[] = [
    { value: "VND", label: "VND", _id: 5555 },
    { value: "USD", label: "USD", _id: 5555 },
    { value: "EUR", label: "EUR", _id: 5555 },
];
interface FormBudgetsType {
    amountMonth: number;
    amountYear: number;
    currency: string;
}
interface FormBudgetsOptionType {
    amount: number;
    id_expense_cate: string;
    description: string;
    currency_code: string;
}

const budgetYearMonthSchema = object({
    amountYear: number().required(),
    amountMonth: number().required(),
    currency: string().default("VND").required(),
});

const optionBudgetSchema = object({
    amount: number().required(),
    description: string().required(),
    id_expense_cate: string().required(),
    currency_code: string().default("VND").required(),
});
// currency: mixed().oneOf(["VND", "USD", "EUR"]).required(),

const FormCreateBudgetsYearAndMonth = () => {
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormBudgetsType>({
        resolver: yupResolver(budgetYearMonthSchema),
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currencyOption, setCurrencyOption] =
        useState<CurrencyOptionType[]>(_currencyOption);

    const mutation = useMutation({
        mutationFn: createBudgets,
        onSuccess: (data) => {
            const messages = data.data.messages;
            toast.success(messages);
            reset();
        },
        onError: (error) => {
            console.error("Error posting product:", error);
            toast.error("Tạo budget thất bại");
        },
    });

    const handleCreateBudgets = async (data: FormBudgetsType) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(handleCreateBudgets)}
            className="form-year"
        >
            <Grid gap="18px" columnNumber={3}>
                <div className="form-flex-cl">
                    <label htmlFor="">2024 - Amount budgets</label>
                    <InputText
                        refinput={register("amountYear")}
                        placeholder="20.000.000 vnd"
                    />
                    {errors.amountYear && (
                        <ErrorMess>{errors.amountYear.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="">July - Amount budgets</label>
                    <InputText
                        refinput={register("amountMonth")}
                        placeholder="20.000.000 vnd"
                    />
                    {errors.amountMonth && (
                        <ErrorMess>{errors.amountMonth.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="">Currency option</label>
                    <SelectBox
                        control={control}
                        options={currencyOption}
                        selectValue={_currencyOption[0].value}
                        name={"currency"}
                    />
                    {errors.currency && (
                        <ErrorMess>{errors.currency.message}</ErrorMess>
                    )}
                </div>
            </Grid>
            <Button
                classNames="btn-submit"
                size="md"
                icon={
                    !mutation.isPending && (
                        <PlusIcon width="14px" height="14px" />
                    )
                }
                isLoading={mutation.isPending}
            >
                Create budgets
            </Button>
        </form>
    );
};

const FormCreateBudgetsOptionType = () => {
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormBudgetsOptionType>({
        resolver: yupResolver(optionBudgetSchema),
    });

    const [budgetsOption, setBudgetsOption] =
        useState<BudgetsOptionType[]>(_budgetsTypeOption);
    const [currencyOption, setCurrencyOption] =
        useState<CurrencyOptionType[]>(_currencyOption);

    const { isPending, data: cateExpenseData } = useQuery({
        queryKey: ["cate-expenses"],
        queryFn: getAllCategoriesExpense,
        staleTime: 5 * 1000,
    });

    const mutation = useMutation({
        mutationFn: createBudgetsCate,
        onSuccess: (data) => {
            const messages = data.data.messages || "tạo thành công!";
            toast.success(messages);
            reset();
        },
        onError: (error) => {
            console.error("Error posting product:", error);
            toast.error("Tạo budget thất bại");
        },
    });

    const handleCreateBudgetsCate = async (data: FormBudgetsOptionType) => {
        mutation.mutate(data);
        reset();
    };

    if (isPending) {
        return "...loading!";
    }

    return (
        <form onSubmit={handleSubmit(handleCreateBudgetsCate)}>
            <Grid gap="18px" columnNumber={3}>
                <div className="form-flex-cl">
                    <label htmlFor="">Budgets type option</label>
                    <SelectBox
                        control={control}
                        options={cateExpenseData.data.categoriesExpenes}
                        selectValue={
                            cateExpenseData.data.categoriesExpenes[0]._id
                        }
                        name={"id_expense_cate"}
                    />
                    {errors.id_expense_cate && (
                        <ErrorMess>{errors.id_expense_cate.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="">Amount budgets</label>
                    <InputText
                        refinput={register("amount")}
                        placeholder="20.000.000 vnd"
                    />
                    {errors.amount && (
                        <ErrorMess>{errors.amount.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="">Currency option</label>
                    <SelectBox
                        control={control}
                        options={currencyOption}
                        selectValue={_currencyOption[0].value}
                        name={"currency_code"}
                    />
                    {errors.currency_code && (
                        <ErrorMess>{errors.currency_code.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="">Description</label>
                    <InputText
                        refinput={register("description")}
                        placeholder="description expense month"
                    />
                    {errors.description && (
                        <ErrorMess>{errors.description.message}</ErrorMess>
                    )}
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
    );
};

const FormBudgets = () => {
    return (
        <>
            <Grid columnNumber={1} gap="18px">
                <FormCreateBudgetsYearAndMonth />
                <FormCreateBudgetsOptionType />
            </Grid>
        </>
    );
};

export default FormBudgets;
