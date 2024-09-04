import { SectionWrapper } from "@/components/section";
import TableExpenses from "./components/TableExpenses";
import TableIncome from "./components/TableIncome";

const Transactions = () => {
    return (
        <div>
            <SectionWrapper title="Income of you">
                <TableIncome />
            </SectionWrapper>
            <SectionWrapper title="Expenses">
                <TableExpenses />
            </SectionWrapper>
        </div>
    );
};

export default Transactions;
