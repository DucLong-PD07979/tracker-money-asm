import { FC } from "react";
import Portal from "../portal/Portal";
import { Button } from "../ui";
import { XcircleIcon } from "../ui/icon";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <Portal wrapperElementID="portal-dialog">
            <div className="dialog-overlay" onClick={onClose}>
                <div
                    className="dialog-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button classNames="dialog-close" onClick={onClose}>
                        <XcircleIcon />
                    </Button>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Dialog;
