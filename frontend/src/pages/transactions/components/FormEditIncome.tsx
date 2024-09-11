import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date } from "yup";

import { Button, Grid } from "@/components/ui";
import { InputText, InputDate, ErrorMess } from "@/components/ui/form/input";
import { PlusIcon } from "@/components/ui/icon";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { IncomeType } from "@/api/models/incomeGuard";
import { updateIncomeWithUserId } from "@/api/incomeApi";
import { FC } from "react";

const incomeSchema = object({
    amount: number().required("Trường này không được bỏ trống"),
    date: date().default(() => new Date()),
    description: string().required("Trường này không được bỏ trống"),
    category: string().required("Trường này không được bỏ trống"),
    _id: string().required(),
});

interface IncomeDataType extends IncomeType {
    _id: string;
}

interface ProductEditFormProps {
    income: IncomeDataType;
    onCancel: () => void;
}

const FormEditIncome: FC<ProductEditFormProps> = ({ income, onCancel }) => {
    const queryClient = useQueryClient();
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<IncomeDataType>({
        resolver: yupResolver(incomeSchema),
        defaultValues: income,
    });

    const handleUpdate = async (data: IncomeDataType) => {
        const { _id, ...newData } = data;
        const resultUpdate = await updateIncomeWithUserId(_id, newData);
        if (resultUpdate) {
            toast.success(resultUpdate.message);
            queryClient.invalidateQueries({ queryKey: ["income"] });
            onCancel();
        }
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className="form-edit-icom">
            <form onSubmit={handleSubmit(handleUpdate)}>
                <Grid classNames="lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="hide">
                        <label htmlFor="">_id</label>
                        <InputText refinput={register("_id")} />
                        {errors._id && (
                            <ErrorMess>{errors._id.message}</ErrorMess>
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
                        <label htmlFor="date">Date</label>
                        <InputDate control={control} name="date"></InputDate>
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
                            <ErrorMess>{errors.description.message}</ErrorMess>
                        )}
                    </div>
                </Grid>
                <Grid classNames="md:grid-cols-4">
                    <Button
                        type="submit"
                        classNames="btn-submit"
                        size="md"
                        style={{ marginTop: 12 }}
                        icon={<PlusIcon width="14px" height="14px" />}
                    >
                        Update Income
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

export default FormEditIncome;
