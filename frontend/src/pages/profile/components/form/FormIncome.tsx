import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date } from "yup";

import { Button, Grid } from "@/components/ui";
import { InputText, InputDate, ErrorMess } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { IncomeType } from "@/api/models/incomeGuard";
import { createIncome } from "@/api/incomeApi";

const incomeSchema = object({
    amount: number()
        .required("Trường này không được bỏ trống")
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        ),
    date: date().default(() => new Date()),
    description: string()
        .required("Trường này không được bỏ trống")
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        ),
    category: string()
        .required("Trường này không được bỏ trống")
        .transform((value, originalValue) =>
            originalValue.trim() === "" ? undefined : value
        ),
});
const FormIncome = () => {
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<IncomeType>({
        resolver: yupResolver(incomeSchema),
    });

    const mutation = useMutation({
        mutationFn: createIncome,
        onSuccess: (data) => {
            const messages = data.data.messages || "tạo thành công!";
            toast.success(messages);
            reset();
        },
        onError: (error) => {
            toast.error(`Tạo thu nhập thất bại ${error.message}`);
        },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateExpenses = async (data: any) => {
        mutation.mutate(data);
    };

    return (
        <>
            <Grid columnNumber={1} gap="18px">
                <form onSubmit={handleSubmit(handleCreateExpenses)}>
                    <Grid gap="18px" columnNumber={3}>
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
                            <label htmlFor="date">Date</label>
                            <InputDate
                                control={control}
                                name="date"
                            ></InputDate>
                            {errors.date && (
                                <ErrorMess>{errors.date.message}</ErrorMess>
                            )}
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="category">Category</label>
                            <InputText
                                refinput={register("category")}
                                placeholder="salary , bonus ..."
                                id="category"
                            />
                            {errors.category && (
                                <ErrorMess>{errors.category.message}</ErrorMess>
                            )}
                        </div>
                        <div className="form-flex-cl">
                            <label htmlFor="">Description</label>
                            <InputText
                                refinput={register("description")}
                                placeholder="description income"
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
                        icon={
                            !mutation.isPending && (
                                <PlusIcon width="14px" height="14px" />
                            )
                        }
                    >
                        Create expenses
                    </Button>
                </form>
            </Grid>
        </>
    );
};

export default FormIncome;
