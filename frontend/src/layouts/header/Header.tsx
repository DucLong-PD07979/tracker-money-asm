import React from "react";
import { useAppSelector } from "@/hooks";
import { uiSelector } from "@/store/uiSlice/uiSlice";

const Header = () => {
    const { siderbarOpen } = useAppSelector(uiSelector);

    return (
        <header className={`header-main ${siderbarOpen ? "siderbarOpen" : ""}`}>
            <div className={`header-inner `}>
                <div className="header-user-wrapper"></div>
                <div className="header-right-wrapper"></div>
            </div>
        </header>
    );
};

export default Header;
