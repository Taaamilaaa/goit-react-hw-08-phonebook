import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, fetchContactsThunk, deleteContactThunk } from './contacts-thunks';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    cont: [],
    error: '',
    isLoading: false,
  },
  extraReducers: {
     [fetchContactsThunk.pending](state, action) {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    },
    [fetchContactsThunk.fulfilled](state, {payload}) {
      return {
        ...state,
        isLoading: false,
        cont: [ ...payload],
      };
    },
    [fetchContactsThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContactThunk.pending](state, action) {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    },
    [addContactThunk.fulfilled](state, {payload}) {
      return {
        ...state,
        isLoading: false,
        cont: [...state.cont, payload],
      };
    },
    [addContactThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
     [deleteContactThunk.pending](state, action) {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    },
    [deleteContactThunk.fulfilled](state, {payload}) {
      return {
        ...state,
        isLoading: false,
        cont: [...payload],
      };
    },
    [deleteContactThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default contactsSlice.reducer;
