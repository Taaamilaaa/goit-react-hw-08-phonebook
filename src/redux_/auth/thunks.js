import { createAsyncThunk } from '@reduxjs/toolkit';


const BASE_URL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();   
    if (state.auth.token === '') { return } else {
      try {
        const response = await fetch(BASE_URL + userCurrent, {
          method: "GET",
          headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
    }
    
  },
);

export const logoutThunk = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
       if (!state.auth.token) return;
    try {
      const response = await fetch(BASE_URL + userLogout, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue({ error: error.message });
    }
  },
);