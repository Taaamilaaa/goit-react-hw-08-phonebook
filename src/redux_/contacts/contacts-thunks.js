import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';
const contacts = '/contacts';
const delContact = '/contacts/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return;
    } else {
      try {
        const response = await fetch(BASE_URL + contacts, {
          method: 'GET',
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

export const addContactThunk = createAsyncThunk(
  'contacts/add',
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
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) {
      return;
    } else {
      try {
        await fetch(BASE_URL + `${delContact}${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.auth.token}`,
          },
        });
        const data = state.contacts.cont.filter(cont => cont.id !== id);
        return data;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  },
);
