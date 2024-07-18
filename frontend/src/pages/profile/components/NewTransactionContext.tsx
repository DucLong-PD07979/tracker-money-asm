import {
    createContext,
    useContext,
    FC,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

interface NewTransactionProviderProps {
    children: ReactNode;
}

export type contextState = {
    sectionActive: sectionActiveType;
    setSectionActive: Dispatch<SetStateAction<sectionActiveType>>;
};

export type sectionActiveType = "expense" | "transfer" | "inCome" | "budgets";

const NewTransactionContext = createContext<contextState | null>(null);

const NewTransactionProvider: FC<NewTransactionProviderProps> = ({
    children,
}) => {
    const [sectionActive, setSectionActive] =
        useState<sectionActiveType>("budgets");
    return (
        <NewTransactionContext.Provider
            value={{ sectionActive, setSectionActive }}
        >
            {children}
        </NewTransactionContext.Provider>
    );
};

export const useNewTransactionContext = () => {
    const context = useContext(NewTransactionContext);
    if (context === null) {
        throw new Error(
            "useNewTransactionContext must be used within a NewTransactionProvider"
        );
    }
    return context;
};

export default NewTransactionProvider;
