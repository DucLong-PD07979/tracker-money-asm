import React, { lazy } from "react";

import PageRouters from "@/enum/routers/routers";
import RootPage from "@/pages/rootPage/RootPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { DefaultLayout } from "@/layouts";
import PrivateRouter from "./privateRouter/PrivateRouter";

const Profile = lazy(() => import("../pages/profile/Profile"));

const ROUTER_LAYOUT_NONE = "none";
const ROUTER_LAYOUT_DEFAULT = "default";

const ROUTER_ROLE_PUBLIC = "public";
const ROUTER_ROLE_PRIVATE = "private";

const routerDataWithLayout = [
    {
        path: PageRouters.HOME_ROOT,
        element: <RootPage />,
        layout: ROUTER_LAYOUT_NONE,
        role: ROUTER_ROLE_PUBLIC,
    },
    {
        path: PageRouters.HOME_PAGE,
        element: <Profile />,
        layout: ROUTER_LAYOUT_DEFAULT,
        role: ROUTER_ROLE_PRIVATE,
    },
];

const handleRouterData = () => {
    const pathData: RouteObject[] = [];

    routerDataWithLayout.forEach((item) => {
        switch (item.layout) {
            case "none":
                pathData.push({
                    path: item.path,
                    element: item.element,
                });
                if (item.role === ROUTER_ROLE_PRIVATE) {
                    item.element = <PrivateRouter children={item.element} />;
                }
                break;
            case "default":
                item.element = <DefaultLayout children={item.element} />;
                if (item.role === ROUTER_ROLE_PRIVATE) {
                    item.element = <PrivateRouter children={item.element} />;
                }
                pathData.push({
                    path: item.path,
                    element: item.element,
                });
                break;
        }
    });

    return pathData;
};

const routes: RouteObject[] = handleRouterData();

const router = createBrowserRouter(routes);

export default router;
