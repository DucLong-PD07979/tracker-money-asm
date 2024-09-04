import {
    useContext,
    createContext,
    FC,
    ReactNode,
    useState,
    useRef,
} from "react";
import DiaLogAlert from "./DiaLogAlert";

interface ConfirmDialogProvider {
    children: ReactNode;
}

interface ConfirmDialogState {
    isOpen: boolean;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

type ConfirmFn = (choice: boolean) => void;

const ConfirmDialogContext = createContext<
    (data: Partial<ConfirmDialogState>) => Promise<boolean>
>(Promise.reject);

const ConfirmDialogProvider: FC<ConfirmDialogProvider> = ({ children }) => {
    const [state, setState] = useState({ isOpen: false });
    const fn = useRef<ConfirmFn | null>();
    const confirm = (data: Partial<ConfirmDialogState>): Promise<boolean> => {
        return new Promise((resolve) => {
            setState({ ...data, isOpen: true });
            fn.current = (choice: boolean) => {
                resolve(choice);
                setState({ isOpen: false });
            };
        });
    };
    return (
        <ConfirmDialogContext.Provider value={confirm}>
            {children}
            <DiaLogAlert
                {...state}
                onCancel={() => fn.current && fn.current(false)}
                onConfirm={() => fn.current && fn.current(true)}
            />
        </ConfirmDialogContext.Provider>
    );
};

const useConfirmDialog = () => {
    return useContext(ConfirmDialogContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useConfirmDialog, ConfirmDialogProvider };
