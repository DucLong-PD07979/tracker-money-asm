import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ExpensesType } from "@/api/models/expensesGuard";

type expensesStateType = {
    expensesData: ExpensesType[];
};

const initialState: expensesStateType = {
    expensesData: [],
};

export const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        getExpenses: (state, action) => {
            state.expensesData = action.payload;
        },
    },
});

export const { getExpenses } = expensesSlice.actions;
export const expensesSelector = (state: RootState) => state.expense;
export default expensesSlice.reducer;
