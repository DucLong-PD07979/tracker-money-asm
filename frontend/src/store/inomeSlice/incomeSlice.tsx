import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IncomeUpdateType } from "@/api/models/incomeGuard";

type IncomeInitialStateType = {
    incomeData: IncomeUpdateType[];
};

const initialState: IncomeInitialStateType = {
    incomeData: [],
};

export const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {
        getDataIncome: (state, action) => {
            state.incomeData = action.payload;
        },
    },
});

export const { getDataIncome } = incomeSlice.actions;
export const incomeSelector = (state: RootState) => state.expense;
export default incomeSlice.reducer;
