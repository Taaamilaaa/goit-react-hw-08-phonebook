import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk } from './contacts-thunks';

 const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [
             {
                name: "",
                phone: "",
                id: "",
            }
        ],
        error: "",
        isLoading: false,        
    },
    extraReducers: {
 [addContactThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContactThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
       contacts: [...state.contacts, action.payload]
      };
    },
    [addContactThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    }
}
)

export default contactsSlice.reducer;