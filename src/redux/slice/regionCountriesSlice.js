// src/features/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCountriesDataByRegion } from "../actions/Actions";

const regionCountriesSlice = createSlice({
  name: "filter countries by name",
  initialState: {
    countries: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesDataByRegion.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(fetchCountriesDataByRegion.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.countries = action.payload; // Store the fetched data
      })
      .addCase(fetchCountriesDataByRegion.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export const regionCountries = (state) => state.regionCountries.countries;
export const regionCountriesStatus = (state) => state.regionCountries.status;
export const regionCountriesError = (state) => state.regionCountries.error;

export default regionCountriesSlice.reducer;
