import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import uiReducer from "./uiSlice/uiSlice";
import budgetReducer from "./budgetSlice/budgetSlice";
import expenseReducer from "./expenseSlice/expenseSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        budget: budgetReducer,
        expense: expenseReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
