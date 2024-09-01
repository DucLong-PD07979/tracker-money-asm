/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BudgetSliceState {
    budgetYear: any;
}

const initialState: BudgetSliceState = {
    budgetYear: {
        month: {},
    },
};

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        getBudgetYear: (state, actions: PayloadAction<any>) => {
            state.budgetYear = actions.payload;
        },
    },
});

export const { getBudgetYear } = budgetSlice.actions;
export const budgetsSelector = (state: RootState) => state.budget;
export default budgetSlice.reducer;
