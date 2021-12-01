import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsAPI } from "./contacts/contactsSlice";
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
   auth: persistReducer(authPersistConfig, authReducer),
   [contactsAPI.reducerPath]: contactsAPI.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }), contactsAPI.middleware
  ],
});
 export const persistor = persistStore(store);
setupListeners(store.dispatch);



