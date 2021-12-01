import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initState = {
    user: { name: null, email: null },
    token: "",
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: "auth",
    initState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }
    },
});

export default authSlice.reducer;