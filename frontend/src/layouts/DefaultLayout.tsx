import React, { FC, ReactNode } from "react";
import { Header } from "./header";
import { SiderBarsMain } from "@/components/siderbars";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="app">
            <Header />
            <div>
                <SiderBarsMain />
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
