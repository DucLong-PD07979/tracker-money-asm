/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, number, string } from "yup";

import { Button, Grid } from "@/components/ui";
import { InputText, ErrorMess, SelectBox } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
    createBudgetMonthWithUser,
    createBudgetYearWithUser,
    getBudgetYearWithUserId,
} from "@/api/budgetsApi";

import { toast } from "react-toastify";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { FormBugetMonth, FormBugetYear } from "@/api/models/budgetsGuard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBudgetYear } from "@/store/budgetSlice/budgetSlice";
import monthArr from "@/utils/helper/monthData";
import DotSpinner from "@/components/ui/loading/DotSpinner";

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
    month: string().required("Trường này không được bỏ trống!"),
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
            const message = data.message;
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: ["budget"] });
            reset();
        },
        onError: (error) => {
            toast.error(`Tạo ngân sách năm thất bại : ${error.message}`);
        },
    });

    const {
        isPending,
        data: budgetYear,
        isError,
        error,
    } = useQuery({
        queryKey: ["budget"],
        queryFn: () => getBudgetYearWithUserId(yearNow),
        staleTime: 5 * 1000,
    });

    const handleCreateBudgetYear: SubmitHandler<FormBugetYear> = (data) => {
        mutation.mutate(data);
    };

    useEffect(() => {
        if (budgetYear) {
            dispatch(getBudgetYear(budgetYear));
        }
    }, [budgetYear, dispatch, yearNow]);

    if (isPending) {
        return <DotSpinner />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <form
            onSubmit={handleSubmit(handleCreateBudgetYear)}
            className="form-year"
        >
            <div className="form-flex-cl">
                <label htmlFor="amountYear">Budget for {yearNow}</label>
                <InputText
                    type="number"
                    refinput={register("amountYear")}
                    placeholder={formatCurrency(200000000)}
                    id="amountYear"
                    // disabled={budgetYear}
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
                // disabled={isPending || budgetYear}
                isLoading={mutation.isPending}
                type="submit"
            >
                Create budgets
            </Button>
        </form>
    );
};

const FormCreateBudgetMonth = () => {
    const monthNow = new Date().getMonth();
    const queryClient = useQueryClient();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
        control,
    } = useForm<FormBugetMonth>({
        resolver: yupResolver(budgetMonthchema),
    });

    const mutation = useMutation({
        mutationFn: createBudgetMonthWithUser,
        onSuccess: (data) => {
            const message = data.message;
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

    return (
        <form
            onSubmit={handleSubmit(handleCreateMonthBudget)}
            className="form-year"
        >
            <Grid classNames="md:grid-cols-3">
                <div className="form-flex-cl col-1-2">
                    <label htmlFor="amountMonth">
                        Savings in {monthArr[monthNow].label}
                    </label>
                    <InputText
                        type="number"
                        refinput={register("amountMonth")}
                        placeholder={formatCurrency(9000000)}
                        id="amountMonth"
                    />
                    {errors.amountMonth && (
                        <ErrorMess>{errors.amountMonth.message}</ErrorMess>
                    )}
                </div>
                <div className="form-flex-cl">
                    <label htmlFor="month">Option month</label>
                    <SelectBox
                        selectValue={monthArr[monthNow].value}
                        control={control}
                        name="month"
                        options={monthArr}
                    ></SelectBox>
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

const FormBudgets = () => {
    return (
        <>
            <Grid classNames="lg:grid-cols-2 md:gird-cols-1">
                <FormCreateBudgetYear />
                <FormCreateBudgetMonth />
            </Grid>
        </>
    );
};

export default FormBudgets;
