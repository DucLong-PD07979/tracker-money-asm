import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import uiReducer from "./uiSlice/uiSlice";
import budgetReducer from "./budgetSlice/budgetSlice";
import expenseReducer from "./expenseSlice/expenseSlice";
import incomeReducer from "./inomeSlice/incomeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        budget: budgetReducer,
        expense: expenseReducer,
        income: incomeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
