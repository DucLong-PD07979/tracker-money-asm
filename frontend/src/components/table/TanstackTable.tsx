/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    PaginationState,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";
import { FC, MouseEvent, useState } from "react";
import { InputText } from "../ui/form/input";

interface TanstackTableProps {
    data: any;
    columns: any;
    onClickItem?: (e: MouseEvent<HTMLTableCellElement>, cell: any) => void;
}

const TanstackTable: FC<TanstackTableProps> = ({
    data,
    columns,
    onClickItem = () => {},
}) => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    onClick={(e) =>
                                        onClickItem(e, cell.row.original)
                                    }
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-container">
                <button
                    className="pagination-button"
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<<"}
                </button>
                <button
                    className="pagination-button"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<"}
                </button>
                <button
                    className="pagination-button"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {">"}
                </button>
                <button
                    className="pagination-button"
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {">>"}
                </button>
                <span className="pagination-info">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount().toLocaleString()}
                    </strong>
                </span>
                <span className="pagination-go">
                    | Go to page:
                    <InputText
                        classNames="pagination-input"
                        type="number"
                        min="1"
                        max={table.getPageCount()}
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>
            </div>
        </div>
    );
};

export default TanstackTable;
