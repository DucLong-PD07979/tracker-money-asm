import { lazy, ReactElement, ReactNode, Suspense } from "react";

import PageRouters from "@/enum/routers/routers";
import RootPage from "@/pages/rootPage/RootPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { DefaultLayout } from "@/layouts";
import PrivateRouter from "./privateRouter/PrivateRouter";

const Profile = lazy(() => import("../pages/profile/Profile"));
const Register = lazy(() => import("../pages/register/Register"));
const Budgets = lazy(() => import("../pages/budgets/Budgets"));
const Transactions = lazy(() => import("../pages/transactions/Transactions"));
const Reports = lazy(() => import("../pages/reports/Reports"));
const Goals = lazy(() => import("../pages/goals/Goals"));
const BudgetsDetails = lazy(() => import("../pages/budgets/BudgetsDetails"));

const ROUTER_LAYOUT_NONE = "none";
const ROUTER_LAYOUT_DEFAULT = "default";

const ROUTER_ROLE_PUBLIC = "public";
const ROUTER_ROLE_PRIVATE = "private";

type RouterDataWithLayout = {
    path: string;
    element: ReactNode;
    layout: string;
    role: string;
    children?: ReactElement;
};
const routerDataWithLayout: RouterDataWithLayout[] = [
    {
        path: PageRouters.HOME_ROOT,
        element: (
            <Suspense fallback="loading...">
                <RootPage />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_NONE,
        role: ROUTER_ROLE_PUBLIC,
    },
    {
        path: PageRouters.HOME_PAGE,
        element: (
            <Suspense fallback="loading...">
                <Profile />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
    {
        path: PageRouters.REGISTER,
        element: (
            <Suspense fallback="loading...">
                <Register />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_NONE,
        role: ROUTER_ROLE_PUBLIC,
    },
    {
        path: PageRouters.BUDGETS,
        element: (
            <Suspense fallback="loading...">
                <Budgets />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
    {
        path: PageRouters.BUDGETS_DETAILS,
        element: (
            <Suspense fallback="loading...">
                <BudgetsDetails />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
    {
        path: PageRouters.TRANSACTIONS,
        element: (
            <Suspense fallback="loading...">
                <Transactions />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
    {
        path: PageRouters.REPORTS,
        element: (
            <Suspense fallback="loading...">
                <Reports />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
    {
        path: PageRouters.GOALS,
        element: (
            <Suspense fallback="loading...">
                <Goals />
            </Suspense>
        ),
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
];

const handleRouterData = () => {
    const pathData: RouteObject[] = [];

    routerDataWithLayout.forEach((item) => {
        switch (item.layout) {
            case "none":
                if (item.children) {
                    pathData.push({
                        path: item.path,
                        element: item.element,
                        children: "" || undefined,
                    });
                } else {
                    pathData.push({
                        path: item.path,
                        element: item.element,
                    });
                }
                if (item.role === ROUTER_ROLE_PRIVATE) {
                    item.element = <PrivateRouter children={item.element} />;
                }
                break;
            case "default":
                item.element = <DefaultLayout children={item.element} />;
                if (item.role === ROUTER_ROLE_PRIVATE) {
                    item.element = <PrivateRouter children={item.element} />;
                }
                if (item.children) {
                    pathData.push({
                        path: item.path,
                        element: item.element,
                        children: "" || undefined,
                    });
                } else {
                    pathData.push({
                        path: item.path,
                        element: item.element,
                    });
                }
                break;
        }
    });

    return pathData;
};

const routes: RouteObject[] = handleRouterData();

const router = createBrowserRouter(routes);

export default router;
