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
import { ownRecipesReducer } from './reduxOwnRecipes/ownRecipesSlice';
import { themeReducer } from './reduxTheme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'refreshToken', 'accessToken'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['type'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userReducer),
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
    ownRecipes: ownRecipesReducer,

    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
