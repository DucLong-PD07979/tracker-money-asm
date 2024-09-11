import Tippy, { TippyProps } from "@tippyjs/react";
import { ElementType, FC, useState } from "react";
import "tippy.js/dist/tippy.css";

interface PopoverProps extends TippyProps {
    ComponentChildren?: ElementType | undefined;
    title?: string;
}
const Popover: FC<PopoverProps> = ({
    children,
    ComponentChildren,
    title = "",
    ...tippyProps
}) => {
    const [visible, setVisible] = useState(false);

    const handleClickOutside = () => {
        setVisible(false);
    };

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Tippy
                content={
                    ComponentChildren ? (
                        <div className="">
                            <ComponentChildren />
                        </div>
                    ) : (
                        title
                    )
                }
                interactive={true}
                visible={visible}
                onClickOutside={handleClickOutside}
                className="popover-wrapper"
                {...tippyProps}
            >
                <div onClick={handleToggle}>{children}</div>
            </Tippy>
        </>
    );
};

export default Popover;
