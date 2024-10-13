import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slice/countriesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});