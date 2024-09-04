import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

const createElementApendChildren = (idElement: string): HTMLElement => {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", idElement);
    document.body.appendChild(portalRoot);
    return portalRoot;
};

interface PortalPropsType {
    children: ReactNode;
    wrapperElementID: string;
}

const Portal: FC<PortalPropsType> = ({
    children,
    wrapperElementID = "portal-root",
}) => {
    let element = document.getElementById(wrapperElementID);
    if (!element) {
        element = createElementApendChildren(wrapperElementID);
    }
    return createPortal(children, element);
};

export default Portal;
