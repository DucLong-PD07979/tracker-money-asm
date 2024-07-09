import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UiStateType = {
    siderbarOpen: boolean;
};

const initialState: UiStateType = {
    siderbarOpen: true,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        siderBarMainToggle: (state) => {
            state.siderbarOpen = !state.siderbarOpen;
        },
    },
});

export const { siderBarMainToggle } = uiSlice.actions;
export const uiSelector = (state: RootState) => state.ui;
export default uiSlice.reducer;
