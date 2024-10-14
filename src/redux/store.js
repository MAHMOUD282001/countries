import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slice/countriesSlice';
import regionCountriesReducer from './slice/regionCountriesSlice';
import countryReducer from './slice/countrySlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    regionCountries: regionCountriesReducer,
    country: countryReducer
  },
});