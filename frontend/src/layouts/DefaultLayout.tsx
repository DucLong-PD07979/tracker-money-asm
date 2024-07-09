import React, { FC, ReactNode } from "react";
import { Header } from "./header";
import { SiderBarsMain } from "@/components/siderbars";
import { useAppSelector } from "@/hooks";
import { uiSelector } from "@/store/uiSlice/uiSlice";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    const { siderbarOpen } = useAppSelector(uiSelector);
    return (
        <div className="app">
            <Header />
            <div>
                <SiderBarsMain />
                <div
                    className={`main-content-container ${
                        siderbarOpen ? "siderBarOpen" : ""
                    }`}
                >
                    <div className="main-content-inner">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
