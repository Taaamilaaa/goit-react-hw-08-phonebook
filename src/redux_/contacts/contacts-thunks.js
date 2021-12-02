import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';
const contacts = '/contacts';

export const addContactThunk = createAsyncThunk(
    "contacts/add",
     async (newContact, { rejectWithValue, getState }) => {
         const state = getState();

         try {
      const response = await fetch(BASE_URL + contacts, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify(newContact),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
)