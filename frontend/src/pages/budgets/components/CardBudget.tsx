import { updateBudgetYear } from "@/api/budgetsApi";
import { FormBugetYear } from "@/api/models/budgetsGuard";
import { Dialog } from "@/components/dialog";
import { Button, Grid, Separate } from "@/components/ui";
import { ErrorMess, InputText } from "@/components/ui/form/input";
import { EyeIcon, PencilSquareIcon, PlusIcon } from "@/components/ui/icon";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { number, object } from "yup";

const budgetYearSchema = object({
    amountYear: number().required("Trường này không được bỏ trống!"),
});

interface CardBudgets {
    year: number;
    _id: string;
    amount: number;
}

interface FormUpdateBudgetPropsType {
    budgets: {
        amountYear: number;
    };
    onCancel: () => void;
}

const FormUpdateBudget: FC<FormUpdateBudgetPropsType> = ({
    budgets,
    onCancel,
}) => {
    const yearNow = new Date().getFullYear();
    const queryClient = useQueryClient();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormBugetYear>({
        resolver: yupResolver(budgetYearSchema),
        defaultValues: budgets,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = async (data: any) => {
        const { _id, ...newData } = data;
        const resultUpdate = await updateBudgetYear(_id, newData);
        if (resultUpdate) {
            toast.success(resultUpdate.message);
            queryClient.invalidateQueries({ queryKey: ["budget"] });
            onCancel();
        }
    };

    const handleReset = () => {
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleUpdate)} className="form-year">
            <div
                className="form-flex-cl col-1-3"
                style={{ marginBottom: "12px" }}
            >
                <label htmlFor="amountYear">Update budget for {yearNow}</label>
                <InputText
                    type="number"
                    refinput={register("amountYear")}
                    placeholder={formatCurrency(200000000)}
                    id="amountYear"
                />
                {errors.amountYear && (
                    <ErrorMess>{errors.amountYear.message}</ErrorMess>
                )}
            </div>
            <Grid classNames="md:grid-cols-4">
                <Button
                    size="md"
                    icon={<PlusIcon width="14px" height="14px" />}
                    type="submit"
                >
                    update budgets
                </Button>
                <Button
                    size="md"
                    icon={<PlusIcon width="14px" height="14px" />}
                    type="button"
                    onClick={() => handleReset()}
                >
                    reset field
                </Button>
            </Grid>
        </form>
    );
};

const CardBudget: FC<CardBudgets> = ({ year, _id, amount }) => {
    const yearNow = new Date().getFullYear();
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

    const handleUpdateBudget = () => {
        setIsOpenDialog(!isOpenDialog);
    };

    const budgets = { _id, amountYear: amount };

    return (
        <div className="budget-card">
            <Link
                className="budget-menu__link"
                to={`/year/${year}`}
                key={year + _id}
            >
                <div className="box-link">
                    <span
                        className={
                            yearNow === year ? `year-active` : "year-label"
                        }
                    >
                        {year}
                    </span>
                    <Separate
                        thickness="1px"
                        orientation="vertical"
                        margin="0 6px"
                        style={{ height: "12px" }}
                    />
                    <span>{formatCurrency(amount)} </span>
                    <Separate
                        thickness="1px"
                        orientation="vertical"
                        margin="0 6px"
                        style={{ height: "12px" }}
                    />
                    <EyeIcon />
                </div>
            </Link>
            <Button className="btn-update" onClick={() => handleUpdateBudget()}>
                <PencilSquareIcon />
                <Dialog
                    isOpen={isOpenDialog}
                    onClose={() => setIsOpenDialog(false)}
                >
                    <FormUpdateBudget
                        budgets={budgets}
                        onCancel={() => setIsOpenDialog(false)}
                    />
                </Dialog>
            </Button>
        </div>
    );
};

export default CardBudget;
