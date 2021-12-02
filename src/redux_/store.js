import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-slice';
//-----
// import { contactsApiSlice } from './contacts/contactsSlice';
//-----

const authPersistConfig = {
  key: "authToken",
  storage,
  whitelist: ["token"]
};
const authPersistReducer =  persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
   auth: authPersistReducer,
   contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER]
    }
  })
});
export const persistor = persistStore(store)
