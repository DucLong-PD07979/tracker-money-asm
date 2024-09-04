import { FC } from "react";

interface DiaLogAlertProps {
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
    isOpen: boolean;
}

const DiaLogAlert: FC<DiaLogAlertProps> = ({
    title,
    message,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    onCancel,
    isOpen,
}) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-alert-overlay">
            <div className="dialog-alert">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="dialog-alert-actions">
                    <button onClick={onCancel} className="dialog-alert-cancel">
                        {cancelLabel}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="dialog-alert-confirm"
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiaLogAlert;
