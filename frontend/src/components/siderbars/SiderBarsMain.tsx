import React, { ReactNode } from "react";
import PageRouters from "@/enum/routers/routers";
import { Link, NavLink } from "react-router-dom";
import {
    ArrowsRightLeftIcon,
    ChevronLef,
    ChevronRight,
    CreditCardIcon,
    CursorArrowRipple,
    FlagIcon,
    QuestionMarkCircle,
    UserCircleIcon,
} from "../ui/icon";
import { Button } from "../ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { siderBarMainToggle, uiSelector } from "@/store/uiSlice/uiSlice";

type MenuDataType = {
    path: string;
    label: string;
    icon: ReactNode;
};

const SiderBarsMain = () => {
    const menuData: MenuDataType[] = [
        {
            path: PageRouters.HOME_PAGE,
            label: "Profile",
            icon: <UserCircleIcon height="20" width="20" />,
        },
        {
            path: PageRouters.TRANSACTIONS,
            label: "Transactions",
            icon: <ArrowsRightLeftIcon height="20" width="20" />,
        },
        {
            path: PageRouters.BUDGETS,
            label: "Budgets",
            icon: <CreditCardIcon height="20" width="20" />,
        },

        {
            path: PageRouters.REPORTS,
            label: "Reports",
            icon: <FlagIcon height="20" width="20" />,
        },
        {
            path: PageRouters.GOALS,
            label: "Goals",
            icon: <CursorArrowRipple height="20" width="20" />,
        },
    ];

    const { siderbarOpen } = useAppSelector(uiSelector);
    const dispatch = useAppDispatch();

    const handleTogleMenu = () => {
        dispatch(siderBarMainToggle());
    };
    return (
        <div
            className={
                siderbarOpen
                    ? "siderbar-main-wrapper"
                    : "siderbar-main-wrapper close"
            }
        >
            <div className="siderbar-inner">
                {siderbarOpen && (
                    <Button
                        onClick={() => handleTogleMenu()}
                        classNames="btn-toggle-close"
                    >
                        <ChevronLef width="15" height="15" />
                    </Button>
                )}
                <div className="siderbar-logo">
                    <div className="siderbar-logo-wrapper">
                        <Link
                            className="siderbar-logo__link"
                            to={PageRouters.HOME_PAGE}
                        >
                            {siderbarOpen ? "Tracker money asm" : "ASM"}
                        </Link>
                    </div>
                </div>
                <div className="siderbar-nav">
                    <ul className="siderbar-nav__list">
                        {!siderbarOpen && (
                            <Button
                                onClick={() => handleTogleMenu()}
                                classNames="btn-toggle"
                            >
                                <ChevronRight width="20" height="20" />
                            </Button>
                        )}
                        {menuData.map((item, i) => {
                            return (
                                <li
                                    className="siderbar-nav__list-item"
                                    key={item.label + i}
                                >
                                    <NavLink
                                        to={item.path}
                                        className="siderbar-nav__list-item-link"
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="siderbar-footer">
                    <Link to="" className="siderbar-footer__link">
                        <QuestionMarkCircle height="20" width="20" />
                        {siderbarOpen && "Helper"}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SiderBarsMain;
