import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, currentThunk, logoutThunk } from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
  },
  reducers: {
    registerUser: (state, actions) => {
      return { ...state, user: actions.payload };
    },
  },
  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
        isAuth: false,
      };
    },
    [currentThunk.fulfilled](state, action) {
       return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        user: { name: '', email: '' },
        token: '',
        isLoading: false,
        isAuth: false,       
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: true,
      };
    },
  },
});


export default authSlice.reducer;

