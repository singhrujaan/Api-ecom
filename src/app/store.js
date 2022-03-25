import { configureStore } from '@reduxjs/toolkit';
import EcomReducer from '../features/EcomSlice';

export const store = configureStore({
  reducer: {
    Ecom : EcomReducer
  },
});
