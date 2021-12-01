import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

export const registerThunk = createAsyncThunk(
  'users/register', async(user, rejectWithValue) => {
    try {
      const response = await fetch(BASE_URL + userRegister, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    } catch (error) {}
  },
);
