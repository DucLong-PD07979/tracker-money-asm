import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getUserWithToken } from "@/api/userApi";

interface UserState {
    username: string;
    email: string;
    role: string;
    avatar: string;
    _id: string;
    emailVerify: boolean;
    provider: string;
}

const userState = {
    username: "",
    email: "",
    role: "",
    avatar: "",
    _id: "",
    provider: "",
    emailVerify: false,
};
export interface AuthSliceState {
    user: UserState;
    loading: boolean;
    error: string | undefined;
    isAuthenticated: boolean;
}

const initialState: AuthSliceState = {
    user: userState,
    loading: false,
    error: "",
    isAuthenticated: false,
};

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
    const userInfor = await getUserWithToken();
    return userInfor;
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
            state.user = userState;
            state.error = action.error.message;
        });
    },
    reducers: {
        getUserInfor: (state, actions: PayloadAction<UserState>) => {
            state.user = actions.payload;
            state.isAuthenticated = true;
        },
        logoutSuccess: (state) => {
            state.user = userState;
            state.isAuthenticated = false;
        },
    },
});

export const { getUserInfor, logoutSuccess } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
