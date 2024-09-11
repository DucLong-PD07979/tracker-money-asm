import { getAllCategoriesExpense } from "@/api/categoryExpenseApi";
import {
    deleteExpensesWithUserId,
    getExpensesWithUserId,
} from "@/api/expensesApi";
import { Dialog } from "@/components/dialog";
import { useConfirmDialog } from "@/components/dialog/ConfirmDialogContext";
import { TanstackTable } from "@/components/table";
import { Button } from "@/components/ui";
import { PencilSquareIcon, TrashIcon } from "@/components/ui/icon";
import { useAppDispatch } from "@/hooks";
import { getExpenses } from "@/store/expenseSlice/expenseSlice";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createColumnHelper, CellContext } from "@tanstack/react-table";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormEditExpenses from "./FormEditExpenses";

interface ExpensesTypesss {
    _id: string;
    id_expense_cate: string;
    amount: number;
    duration: Date;
    is_paid: boolean;
    currency_code: string;
    description: string;
}

const columnHelper = createColumnHelper<ExpensesTypesss>();
type InfoType = CellContext<ExpensesTypesss, unknown>;

interface ActionTableHandleProps {
    data: ExpensesTypesss;
}

const ActionTableHandle: FC<ActionTableHandleProps> = ({ data }) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const confirm = useConfirmDialog();
    const queryClient = useQueryClient();
    const handleDetele = async (id: string) => {
        const result = await confirm({
            title: "Confirm Deletion",
            message: "Are you sure you want to delete this item?",
            confirmLabel: "Yes, delete",
            cancelLabel: "No, keep it",
        });

        if (result) {
            const result = await deleteExpensesWithUserId([id]);
            toast.success(result.message);
            queryClient.invalidateQueries({ queryKey: ["expenses"] });
        }
    };
    return (
        <div>
            <Button
                classNames="table-action-btn table-action-btn__edit"
                onClick={() => setIsOpenDialog(true)}
            >
                <PencilSquareIcon />
                <Dialog
                    isOpen={isOpenDialog}
                    onClose={() => setIsOpenDialog(!isOpenDialog)}
                >
                    <FormEditExpenses
                        expensesData={data}
                        onCancel={() => setIsOpenDialog(false)}
                    />
                </Dialog>
            </Button>
            <Button
                classNames="table-action-btn table-action-btn__remove"
                onClick={() => handleDetele(data._id)}
            >
                <TrashIcon />
            </Button>
        </div>
    );
};

const TableExpenses = () => {
    const { data: expensesData, isLoading } = useQuery({
        queryKey: ["expenses"],
        queryFn: getExpensesWithUserId,
    });

    const { data: cateExpenses, isLoading: isLoadingCateExpense } = useQuery({
        queryKey: ["cateExpenses"],
        queryFn: getAllCategoriesExpense,
    });

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (expensesData) {
            dispatch(getExpenses(expensesData.expenses));
        }
    }, [expensesData, dispatch]);

    if (isLoading || isLoadingCateExpense) {
        return "...loading";
    }

    if (expensesData.expenses.length === 0) {
        return <div style={{ marginTop: 16 }}>Bạn chưa tạo phần chi phí</div>;
    }

    const columns = [
        columnHelper.accessor("id_expense_cate", {
            header: "Expense category",
            cell: (info) => {
                const categoryId = info.getValue();
                const category = cateExpenses.find(
                    (cate: { _id: string }) => cate._id === categoryId
                );
                return category ? category.label : "Unknown category";
            },
        }),
        columnHelper.accessor("amount", {
            header: "Amount",
            cell: (info) => formatCurrency(info.getValue()),
        }),
        columnHelper.accessor("duration", {
            header: "Duration",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("description", {
            header: "Description",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("is_paid", {
            header: "Paid",
            cell: (info) => {
                if (info.getValue() === true) {
                    return "Đã thanh toán";
                } else {
                    return "Chưa thanh toán";
                }
            },
        }),
        {
            header: "Action",
            cell: (info: InfoType) => {
                const row = info.row.original;
                return <ActionTableHandle data={row} />;
            },
        },
    ];

    return (
        <div className="table-wrapper">
            <TanstackTable data={expensesData.expenses} columns={columns} />
        </div>
    );
};

export default TableExpenses;
