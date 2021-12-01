import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: "", email: "" },
        token: "",
        error: null,
        isLoading: false,
        isAuth: false,
    },
    reducers: {
        registerUser: (state, actions)=> 
            {return{ ...state,  user: actions.payload }}
           

        
    }

});

export default authSlice.reducer