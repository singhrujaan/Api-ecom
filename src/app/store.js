import { configureStore } from '@reduxjs/toolkit';
import EcomReducer from '../features/EcomSlice';
import FavReducer from '../features/FavSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  Ecom : EcomReducer,
    Fav:FavReducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:
    persistedReducer
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// export const store = configureStore({
//   reducer: {
//     Ecom : EcomReducer,
//     Fav:FavReducer
//   },
// });
