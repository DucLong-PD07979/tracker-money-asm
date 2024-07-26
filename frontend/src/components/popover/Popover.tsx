import Tippy, { TippyProps } from "@tippyjs/react";
import { ElementType, FC } from "react";
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
                hideOnClick="toggle"
                trigger="click"
                interactive={true}
                className="popover-wrapper"
                {...tippyProps}
            >
                {children}
            </Tippy>
        </>
    );
};

export default Popover;
