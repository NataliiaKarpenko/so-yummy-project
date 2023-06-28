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
import { recipesReducer } from './reduxRecipes/recipesSlice';
import { shoppingListReducer } from '../redux/reduxShoppingList/shoppingListSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'refreshToken', 'accessToken'],
};

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    auth: persistReducer(authPersistConfig, userReducer),
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
