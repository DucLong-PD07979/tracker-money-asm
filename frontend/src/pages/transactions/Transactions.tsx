import { useState } from "react";
import { SectionWrapper } from "@/components/section";
import tableTransactionData from "@/components/table/tableTransaction.json";
import { createColumnHelper } from "@tanstack/react-table";
import { TanstackTable } from "@/components/table";

type Transaction = {
    _id: string;
    Amount: string;
    Option: string;
    Duration: string;
    Currency: string;
    Month: string;
    Description: string;
    Paid: boolean;
};

const columnHelper = createColumnHelper<Transaction>();

const columns = [
    columnHelper.accessor("Option", {
        header: "Budgets type option",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Amount", {
        header: "Amount",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Duration", {
        header: "Duration",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Description", {
        header: "Description",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Month", {
        header: "Month",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Paid", {
        header: "Paid",
        cell: (info) => info.getValue(),
    }),
];
const Transactions = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<Transaction[]>(tableTransactionData);

    return (
        <div>
            <SectionWrapper title="Expenses recent">
                <div className="section-inner">
                    <TanstackTable data={data} columns={columns} />
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Transactions;
