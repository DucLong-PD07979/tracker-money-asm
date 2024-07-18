import { Button } from "@/components/ui";
import {
    sectionActiveType,
    useNewTransactionContext,
} from "./NewTransactionContext";
import {
    ArrowRightStartOnRectangle,
    ArrowTrendUp,
    CreditCardIcon,
    ScaleIcon,
} from "@/components/ui/icon";
import { ReactNode } from "react";
import { FormBudgets, FormWrapper, FormExpense } from "./form";

type HeaderBtnDataType = {
    value: sectionActiveType;
    text: string;
    icon: ReactNode;
};

const headerBtnData: HeaderBtnDataType[] = [
    {
        value: "budgets",
        text: "budgets",
        icon: <CreditCardIcon height="16" width="16" />,
    },
    {
        value: "expense",
        text: "expense",
        icon: <ScaleIcon height="16" width="16" />,
    },
    {
        value: "transfer",
        text: "transfer",
        icon: <ArrowRightStartOnRectangle height="16" width="16" />,
    },
    {
        value: "inCome",
        text: "inCome",
        icon: <ArrowTrendUp height="16" width="16" />,
    },
];

const NewTransactions = () => {
    const { sectionActive, setSectionActive } = useNewTransactionContext();
    const handleSelectSection = (value: sectionActiveType) => {
        setSectionActive(value);
    };

    return (
        <div className="new-transaction-wrapper">
            <div className="new-transaction__header">
                {headerBtnData.map((btn, i) => {
                    return (
                        <Button
                            key={btn.text + i}
                            classNames={`new-transaction__header-btn ${
                                sectionActive === btn.value && "active"
                            }`}
                            icon={btn.icon}
                            onClick={() => handleSelectSection(btn.value)}
                        >
                            {btn.text}
                        </Button>
                    );
                })}
            </div>
            <div className="new-transaction__content">
                {sectionActive === "budgets" && (
                    <FormWrapper>
                        <FormBudgets />
                    </FormWrapper>
                )}
                {sectionActive === "expense" && (
                    <FormWrapper>
                        <FormExpense />
                    </FormWrapper>
                )}
                {sectionActive === "transfer" && (
                    <div style={{ margin: "100px 0" }}>
                        Tính năng sẽ sớm có!
                    </div>
                )}
                {sectionActive === "inCome" && (
                    <div style={{ margin: "100px 0" }}>
                        Tính năng sẽ sớm có!{" "}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewTransactions;
