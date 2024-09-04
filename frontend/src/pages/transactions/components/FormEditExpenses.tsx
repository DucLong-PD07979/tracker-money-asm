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
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getAllCategoriesExpense } from "@/api/categoryExpenseApi";
import { ExpensesType } from "@/api/models/expensesGuard";
import { updateExpensesWithUserId } from "@/api/expensesApi";
import { toast } from "react-toastify";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import DotSpinner from "@/components/ui/loading/DotSpinner";
import { FC } from "react";

const expensesSchema = object({
    id_expense_cate: string().required(),
    amount: number().required("Trường này không được bỏ trống"),
    duration: date().default(() => new Date()),
    is_paid: string().default("false"),
    description: string().required("Trường này không được bỏ trống"),
    _id: string().required(),
});

interface ExpensesDataType extends ExpensesType {
    _id: string;
}

interface FormEditExpensesPropsType {
    expensesData: ExpensesType;
    onCancel: () => void;
}

const FormEditExpenses: FC<FormEditExpensesPropsType> = ({
    expensesData,
    onCancel,
}) => {
    const queryClient = useQueryClient();

    const {
        control,
        handleSubmit,
        register,
        reset,
        watch,
        formState: { errors },
    } = useForm<ExpensesDataType>({
        resolver: yupResolver(expensesSchema),
        defaultValues: expensesData,
    });

    const isPaidSelectStatus = watch("is_paid");
    console.log(isPaidSelectStatus);

    const { isPending, data: cateExpenseData } = useQuery({
        queryKey: ["cate-expenses"],
        queryFn: getAllCategoriesExpense,
        staleTime: 5 * 1000,
    });

    const handleUpdate = async (data: ExpensesDataType) => {
        const { _id, ...newData } = data;
        const resultUpdate = await updateExpensesWithUserId(_id, newData);
        if (resultUpdate) {
            toast.success(resultUpdate.message);
            queryClient.invalidateQueries({ queryKey: ["expenses"] });
            onCancel();
        }
    };

    if (isPending) {
        return <DotSpinner />;
    }

    const cateExpenseDefaultSelect = cateExpenseData._id;

    const handleReset = () => {
        reset();
    };

    return (
        <div className="edit-form-expenses">
            <form onSubmit={handleSubmit(handleUpdate)}>
                <Grid gap="18px" columnNumber={3}>
                    <div className="hide">
                        <label htmlFor="">_id</label>
                        <InputText refinput={register("_id")} />
                        {errors._id && (
                            <ErrorMess>{errors._id.message}</ErrorMess>
                        )}
                    </div>
                    <div className="form-flex-cl">
                        <label htmlFor="">Budgets type option</label>
                        <SelectBox
                            control={control}
                            options={cateExpenseData}
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
                            placeholder={formatCurrency(20000000)}
                        />
                        {errors.amount && (
                            <ErrorMess>{errors.amount.message}</ErrorMess>
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
                        <label htmlFor="">Description</label>
                        <InputText
                            refinput={register("description")}
                            placeholder="description expense month"
                        />
                        {errors.description && (
                            <ErrorMess>{errors.description.message}</ErrorMess>
                        )}
                    </div>
                    <div className="form-flex-cl">
                        <label htmlFor="">Paid</label>
                        <Grid gap="18px" columnNumber={2}>
                            <div>
                                <InputRadio
                                    refinput={register("is_paid")}
                                    placeholder="description expense month"
                                    classNames="input-radio"
                                    id="is_paid_true"
                                    defaultValue={"true"}
                                />
                                <label
                                    htmlFor="is_paid_true"
                                    style={{ marginLeft: "4px" }}
                                >
                                    Yes
                                </label>
                            </div>
                            <div>
                                <InputRadio
                                    refinput={register("is_paid")}
                                    placeholder="description expense month"
                                    classNames="input-radio"
                                    id="is_paid_false"
                                    defaultValue={"false"}
                                />
                                <label
                                    htmlFor="is_paid_false"
                                    style={{
                                        marginLeft: "4px",
                                    }}
                                >
                                    No
                                </label>
                            </div>
                        </Grid>
                    </div>
                </Grid>
                <Grid gap="10px" columnNumber={4}>
                    <Button
                        classNames="btn-submit"
                        size="md"
                        icon={<PlusIcon width="14px" height="14px" />}
                        style={{ marginTop: 12 }}
                    >
                        Update expenses
                    </Button>
                    <Button
                        type="button"
                        onClick={handleReset}
                        size="md"
                        style={{ marginTop: 12 }}
                    >
                        Reset field
                    </Button>
                </Grid>
            </form>
        </div>
    );
};

export default FormEditExpenses;
