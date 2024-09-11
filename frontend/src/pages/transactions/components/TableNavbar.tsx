/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popover } from "@/components/popover";
import { Button } from "@/components/ui";
import { ArrowDownOnSquareIcon, FunnelFilterIcon } from "@/components/ui/icon";
import { FC } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "@/components/pdf/PDF";
import { useConfirmDialog } from "@/components/dialog/ConfirmDialogContext";
import { Dialog } from "@/components/dialog";

interface TableNavbarPropsType {
    setFilterTypeOption: (value: string) => void;
    setDurationFilter: (value: string) => void;
    onFilter: () => void;
    filterTypeOption: string;
    data: any;
    headerData: any;
}

interface TableNavbarListActionsPropsType {
    data: any;
    headerData: any;
}

const TableNavbarListActions: FC<TableNavbarListActionsPropsType> = ({
    data,
    headerData,
}) => {
    // const confirm = useConfirmDialog();
    // const handleExportWithPDF = async (e) => {
    //     e.preventDefault();
    //     const result = await confirm({
    //         title: "Confirm Deletion",
    //         message: "Are you sure download",
    //         confirmLabel: "Yes, delete",
    //         cancelLabel: "No, keep it",
    //     });

    //     if (result) {
    //         alert("s");
    //     }
    // };

    return (
        <div>
            <ul className="dropdown-menu">
                <li className="dropdown-menu__item">
                    <PDFDownloadLink
                        document={
                            <MyDocument data={data} headerData={headerData} />
                        }
                        fileName="report.pdf"
                    >
                        {({ loading }) =>
                            loading ? "Generating PDF..." : "Export with PDF"
                        }
                    </PDFDownloadLink>
                </li>
                <li className="dropdown-menu__item">Export with CVS</li>
                <li className="dropdown-menu__item">Export with WORK</li>
            </ul>
        </div>
    );
};

const TableNavbar: FC<TableNavbarPropsType> = ({
    setFilterTypeOption,
    setDurationFilter,
    onFilter,
    filterTypeOption,
    data,
    headerData,
}) => {
    return (
        <div className="table-navbar">
            <div className="table-navbar__inner">
                <div className="table-navbar__search-wrapper">
                    <FunnelFilterIcon width="18px" height="18px" />
                    <select
                        name="filterType"
                        onChange={(e) => setFilterTypeOption(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="year">Year</option>
                        <option value="month">Month</option>
                        <option value="date">Date</option>
                    </select>
                    {filterTypeOption === "year" && (
                        <select
                            name="duration"
                            onChange={(e) => setDurationFilter(e.target.value)}
                        >
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    )}

                    {filterTypeOption === "month" && (
                        <input
                            type="date"
                            onChange={(e) => setDurationFilter(e.target.value)}
                        ></input>
                    )}

                    {filterTypeOption === "date" && (
                        <input
                            type="date"
                            onChange={(e) => setDurationFilter(e.target.value)}
                        ></input>
                    )}

                    <Button
                        onClick={onFilter}
                        rounder="sm"
                        classNames="search-btn"
                    >
                        Search
                    </Button>
                </div>
                <div className="table-navbar__actions-wrapper">
                    <Popover
                        content={
                            <TableNavbarListActions
                                data={data}
                                headerData={headerData}
                            />
                        }
                        placement="bottom"
                    >
                        <div>
                            <ArrowDownOnSquareIcon />
                        </div>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default TableNavbar;
