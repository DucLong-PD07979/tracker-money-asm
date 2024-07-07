import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceState {
    token: string | null;
}

const initialState: AuthSliceState = {
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        incrementByAmount: (state, action: PayloadAction<string>) => {
            state.token += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
