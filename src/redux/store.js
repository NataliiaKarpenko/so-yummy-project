import { configureStore } from '@reduxjs/toolkit';
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

import { userReducer } from '../redux/reduxAuth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'accessToken'],
};

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    auth: persistReducer(authPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
