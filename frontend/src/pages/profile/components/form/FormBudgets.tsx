/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, number } from "yup";

import { Button, Grid } from "@/components/ui";
import { InputText, ErrorMess } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
    createBudgetMonthWithUser,
    createBudgetYearWithUser,
    getBudgetYearWithUserId,
} from "@/api/budgetsApi";

import { toast } from "react-toastify";
import { format } from "date-fns";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { FormBugetMonth, FormBugetYear } from "@/api/models/budgetsGuard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    budgetsSelector,
    getBudgetYear,
} from "@/store/budgetSlice/budgetSlice";
import { useAppSelector } from "@/hooks";

const budgetYearSchema = object({
    amountYear: number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .required("Trường này không được bỏ trống!"),
});

const budgetMonthchema = object({
    amountMonth: number()
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        )
        .required("Trường này không được bỏ trống!"),
});

const FormCreateBudgetYear = () => {
    const yearNow = new Date().getFullYear();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormBugetYear>({
        resolver: yupResolver(budgetYearSchema),
    });

    const mutation = useMutation({
        mutationFn: createBudgetYearWithUser,
        onSuccess: (data) => {
            const message = data.data.message || "Tạo ngân sách năm thành công";
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: ["budget"] });
            reset();
        },
        onError: (error) => {
            toast.error(`Tạo ngân sách năm thất bại : ${error.message}`);
        },
    });

    const { isPending, data: bugetYear } = useQuery({
        queryKey: ["budget"],
        queryFn: () => getBudgetYearWithUserId(yearNow),
        staleTime: 5 * 1000,
    });

    const handleCreateBudgetYear: SubmitHandler<FormBugetYear> = (data) => {
        mutation.mutate(data);
    };

    useEffect(() => {
        if (bugetYear) {
            // console.log(bugetYear);
            dispatch(getBudgetYear(bugetYear.budgets[yearNow]));
        }
    }, [bugetYear, dispatch, yearNow]);

    return (
        <form
            onSubmit={handleSubmit(handleCreateBudgetYear)}
            className="form-year"
        >
            <div className="form-flex-cl">
                <label htmlFor="amountYear">
                    {bugetYear
                        ? `Your ${yearNow} Amount Budget`
                        : `${yearNow} - Amount budgets`}
                </label>
                <InputText
                    type="number"
                    refinput={register("amountYear")}
                    placeholder={
                        bugetYear
                            ? formatCurrency(bugetYear.budgets[yearNow].amount)
                            : formatCurrency(200000000)
                    }
                    id="amountYear"
                    disabled={bugetYear}
                />
                {errors.amountYear && (
                    <ErrorMess>{errors.amountYear.message}</ErrorMess>
                )}
            </div>
            <Button
                classNames="btn-submit"
                size="md"
                icon={
                    !mutation.isPending && (
                        <PlusIcon width="14px" height="14px" />
                    )
                }
                disabled={isPending || bugetYear}
                isLoading={mutation.isPending}
                type="submit"
            >
                Create budgets
            </Button>
        </form>
    );
};

const FormCreateBudgetMonth = () => {
    const monthNow = format(new Date(), "MMMM");
    const queryClient = useQueryClient();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormBugetMonth>({
        resolver: yupResolver(budgetMonthchema),
    });

    const mutation = useMutation({
        mutationFn: createBudgetMonthWithUser,
        onSuccess: (data) => {
            const message =
                data.data.message || "Tạo ngân sách tháng thành công";
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: ["budget"] });
            reset();
        },
        onError: (error) => {
            toast.error(`Tạo ngân sách tháng thất bại : ${error.message}`);
        },
    });

    const handleCreateMonthBudget: SubmitHandler<FormBugetMonth> = (data) => {
        mutation.mutate(data);
    };

    const { budgetYear } = useAppSelector(budgetsSelector);
    console.log(budgetYear);
    return (
        <form
            onSubmit={handleSubmit(handleCreateMonthBudget)}
            className="form-year"
        >
            <div className="form-flex-cl">
                <label htmlFor="amountMonth">{monthNow} - Amount budgets</label>
                <InputText
                    type="number"
                    refinput={register("amountMonth")}
                    placeholder={
                        budgetYear.month && budgetYear.month[monthNow]
                            ? formatCurrency(budgetYear.month[monthNow].amount)
                            : formatCurrency(9000000)
                    }
                    id="amountMonth"
                    disabled={budgetYear.month && budgetYear.month[monthNow]}
                />
                {errors.amountMonth && (
                    <ErrorMess>{errors.amountMonth.message}</ErrorMess>
                )}
            </div>
            <Button
                classNames="btn-submit"
                size="md"
                icon={
                    !mutation.isPending && (
                        <PlusIcon width="14px" height="14px" />
                    )
                }
                disabled={budgetYear.month && budgetYear.month[monthNow]}
                isLoading={mutation.isPending}
            >
                Create budgets
            </Button>
        </form>
    );
};

const FormBudgets = () => {
    return (
        <>
            <Grid columnNumber={2} gap="18px">
                <FormCreateBudgetYear />
                <FormCreateBudgetMonth />
            </Grid>
        </>
    );
};

export default FormBudgets;
