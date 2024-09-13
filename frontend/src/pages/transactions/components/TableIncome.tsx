import { deleteIncomeWithUserId, getIncomeWithUserId } from "@/api/incomeApi";
import { Dialog } from "@/components/dialog";
import { useConfirmDialog } from "@/components/dialog/ConfirmDialogContext";
import { TanstackTable } from "@/components/table";
import { Button } from "@/components/ui";
import { PencilSquareIcon, TrashIcon } from "@/components/ui/icon";
import { formatCurrency } from "@/utils/helper/formatHelpler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createColumnHelper, CellContext } from "@tanstack/react-table";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormEditIncome from "./FormEditIncome";
import TableNavbar from "./TableNavbar";
import { useAppDispatch } from "@/hooks";
import { getDataIncome } from "@/store/inomeSlice/incomeSlice";

interface IncomeTypes {
    _id: string;
    user_id: string;
    date: Date;
    amount: number;
    category: string;
    description: string;
}
type InfoType = CellContext<IncomeTypes, unknown>;

const columnHelper = createColumnHelper<IncomeTypes>();

interface ActionTableHandleProps {
    data: IncomeTypes;
}

const ActionTableHandle: FC<ActionTableHandleProps> = ({ data }) => {
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
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
            const deleteSuccess = await deleteIncomeWithUserId([id]);
            toast.success(deleteSuccess.message);
            console.log(deleteSuccess);
            queryClient.invalidateQueries({ queryKey: ["income"] });
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
                    <FormEditIncome
                        income={data}
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

const columns = [
    columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
        header: "Amount",
        cell: (info) => formatCurrency(info.getValue()),
    }),
    columnHelper.accessor("date", {
        header: "Date",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
        header: "Description",
        cell: (info) => info.getValue(),
    }),
    {
        header: "Action",
        cell: (info: InfoType) => {
            const row = info.row.original;
            return <ActionTableHandle data={row} />;
        },
    },
];

const TableIncome = () => {
    const [filterTypeOption, setFilterTypeOption] = useState<string>("all");
    const [durationFilter, setDurationFilter] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [headerData, setHeaderData] = useState<any>([]);
    const dispatch = useAppDispatch();
    const {
        data: incomeData,
        isLoading,
        isError,
        isSuccess,
        error,
        refetch,
    } = useQuery({
        queryKey: ["income"],
        queryFn: () =>
            getIncomeWithUserId(
                `?filterType=${filterTypeOption}&duration=${durationFilter}`
            ),
    });

    const handleSearchFilter = async () => {
        refetch();
    };

    useEffect(() => {
        if (
            isSuccess &&
            incomeData.income.length > 0 &&
            Array.isArray(incomeData.income)
        ) {
            const headerFilterPDF = Object.keys(incomeData.income[0]).map(
                (key) => {
                    if (!key.includes("_id") || !key.includes("description")) {
                        return key;
                    }
                }
            );
            setHeaderData(headerFilterPDF);
            dispatch(getDataIncome(incomeData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [incomeData, dispatch]);

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (isLoading) {
        return "...loading";
    }

    return (
        <div className="table-wrapper">
            <TableNavbar
                setFilterTypeOption={setFilterTypeOption}
                setDurationFilter={setDurationFilter}
                onFilter={handleSearchFilter}
                filterTypeOption={filterTypeOption}
                data={incomeData.income}
                headerData={headerData}
            />
            {incomeData.income.length === 0 && (
                <div style={{ marginTop: 16 }}>
                    Bạn chưa tạo phần doanh thu trong thời gian {durationFilter}
                </div>
            )}
            {incomeData.income.length > 0 && (
                <TanstackTable data={incomeData.income} columns={columns} />
            )}
        </div>
    );
};

export default TableIncome;
