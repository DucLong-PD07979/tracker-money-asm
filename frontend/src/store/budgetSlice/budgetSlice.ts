/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BudgetSliceState {
    budgetDetails: any;
}

const initialState: BudgetSliceState = {
    budgetDetails: [],
};

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        getBudgetYear: (state, actions: PayloadAction<any>) => {
            state.budgetDetails = actions.payload;
        },
    },
});

export const { getBudgetYear } = budgetSlice.actions;
export const budgetsSelector = (state: RootState) => state.budget;
export default budgetSlice.reducer;
