// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountriesData } from "../actions/Actions";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesData.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.countries = action.payload; // Store the fetched data
      })
      .addCase(fetchCountriesData.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export const allCountries = (state) => state.countries.countries;
export const allCountriesStatus = (state) => state.countries.status;
export const allCountriesError = (state) => state.countries.error;

export default countriesSlice.reducer;
