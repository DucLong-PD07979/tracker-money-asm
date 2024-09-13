/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TanstackTable } from "@/components/table";

type Budgets = {
    Time: string;
    Feature: string;
    Method: string;
};

const columnHelper = createColumnHelper<Budgets>();

const columns = [
    columnHelper.accessor("Time", {
        header: "Time",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Feature", {
        header: "Feature",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Method", {
        header: "Method",
        cell: (info) => info.getValue(),
    }),
];

interface RecentProps {}

const Recent: FC<RecentProps> = () => {
    const [data] = useState<Budgets[]>([]);

    const handleGetDetailsCell = (e: any, cell: any) => {
        console.log(e);
        console.log(cell);
    };

    return (
        <div className="recent-content-wrapper">
            <TanstackTable
                data={data}
                columns={columns}
                onClickItem={handleGetDetailsCell}
            ></TanstackTable>
        </div>
    );
};

export default Recent;
