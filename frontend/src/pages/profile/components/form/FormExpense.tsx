import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date } from "yup";

import { Button, Grid } from "@/components/ui";
import {
    SelectBox,
    InputText,
    InputDate,
    InputRadio,
    ErrorMess,
} from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategoriesExpense } from "@/api/categoryExpenseApi";
import { ExpensesType } from "@/api/models/expensesGuard";
import { createExpenses } from "@/api/expensesApi";
import { toast } from "react-toastify";

// interface BudgetsOptionType {
//     value: string;
//     label: string;
// }

// const _budgetsTypeOption: BudgetsOptionType[] = [
//     { value: "groceries", label: "Groceries" },
//     { value: "electricity", label: "Electricity" },
//     { value: "rent", label: "Rent" },
//     { value: "education", label: "Education" },
//     { value: "entertainment", label: "Entertainment" },
//     { value: "shopping", label: "Shopping" },
//     { value: "internet", label: "Internet" },
//     { value: "healthcare", label: "Healthcare" },
//     { value: "income", label: "Income" },
//     { value: "another", label: "Another" },
// ];

interface CurrencyOptionType {
    value: string;
    label: string;
    _id: number;
}
const _currencyOption: CurrencyOptionType[] = [
    { value: "VND", label: "VND", _id: 123 },
    { value: "USD", label: "USD", _id: 123 },
    { value: "EUR", label: "EUR", _id: 123 },
];

const expensesSchema = object({
    id_expense_cate: string().required(),
    amount: number().required(),
    duration: date().default(() => new Date()),
    // is_paid: boolean().default(false),
    description: string().default(""),
    currency_code: string().default("VND").required(),
});

const FormExpense = () => {
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<ExpensesType>({
        resolver: yupResolver(expensesSchema),
    });

    const [currencyOption, setCurrencyOption] =
        useState<CurrencyOptionType[]>(_currencyOption);

    const { isPending, data: cateExpenseData } = useQuery({
        queryKey: ["cate-expenses"],
        queryFn: getAllCategoriesExpense,
        staleTime: 5 * 1000,
    });

    const mutation = useMutation({
        mutationFn: createExpenses,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateExpenses = async (data: any) => {
        mutation.mutate(data);
    };

    if (isPending) {
        return "...loading!";
    }

    const cateExpenseDefaultSelect =
        cateExpenseData.data.categoriesExpenes[0]._id;

    return (
        <>
            <Grid columnNumber={1} gap="18px">
                <form onSubmit={handleSubmit(handleCreateExpenses)}>
                    <Grid gap="18px" columnNumber={3}>
                        <div className="form-flex-cl">
                            <label htmlFor="">Budgets type option</label>
                            <SelectBox
                                control={control}
                                options={cateExpenseData.data.categoriesExpenes}
                                selectValue={cateExpenseDefaultSelect}
                                name={"id_expense_cate"}
                            />

                            {errors.id_expense_cate && (
                                <ErrorMess>
                                    {errors.id_expense_cate.message}
                                </ErrorMess>
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
                                selectValue={"ss"}
                                name={"currency_code"}
                            />
                            {errors.currency_code && (
                                <ErrorMess>
                                    {errors.currency_code.message}
                                </ErrorMess>
                            )}
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Duration</label>
                            <InputDate
                                control={control}
                                name="duration"
                            ></InputDate>
                            {errors.duration && (
                                <ErrorMess>{errors.duration.message}</ErrorMess>
                            )}
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Paid</label>
                            <Grid gap="18px" columnNumber={2}>
                                <div>
                                    <InputRadio
                                        refinput={register("is_paid")}
                                        placeholder="description expense month"
                                        value="true"
                                    />
                                    <label
                                        htmlFor=""
                                        style={{ marginLeft: "4px" }}
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div>
                                    <InputRadio
                                        refinput={register("is_paid")}
                                        placeholder="description expense month"
                                        value="false"
                                    />
                                    <label
                                        htmlFor=""
                                        style={{ marginLeft: "4px" }}
                                    >
                                        No
                                    </label>
                                </div>
                            </Grid>
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Description</label>
                            <InputText
                                refinput={register("description")}
                                placeholder="description expense month"
                            />
                            {errors.description && (
                                <ErrorMess>
                                    {errors.description.message}
                                </ErrorMess>
                            )}
                        </div>
                    </Grid>
                    <Button
                        classNames="btn-submit"
                        size="md"
                        icon={<PlusIcon width="14px" height="14px" />}
                    >
                        Create expenses
                    </Button>
                </form>
            </Grid>
        </>
    );
};

export default FormExpense;
