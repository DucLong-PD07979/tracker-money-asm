import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
    name: string;
    email: string;
    role: string;
    avatar: string;
    _id: string;
}

export interface AuthSliceState {
    user: UserState | null;
    loading: boolean;
    error: string | undefined;
}

const initialState: AuthSliceState = {
    user: null,
    loading: false,
    error: "",
};

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=1`
    );
    return await response.json();
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        });
    },
    reducers: {
        getUserInfor: (state, actions: PayloadAction<UserState>) => {
            state.user = actions.payload;
        },
    },
});

export const { getUserInfor } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
