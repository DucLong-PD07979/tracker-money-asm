enum PageRouters {
    HOME_ROOT = "/",
    HOME_PAGE = "/profile",
    REGISTER = "/register",
    LOGIN = "login",
    DASHBOARD = "/dashboard",
    BUDGETS = "/budgets",
    EDIT_BUDGETS = "/budgets/:id/edit",

    ERROR_404_PAGE = "/page-error-404",
    ERROR_405_PAGE = "/page-error-500",
}

export default PageRouters;
