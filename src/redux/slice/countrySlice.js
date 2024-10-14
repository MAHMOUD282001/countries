// src/features/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getCountryDataByName } from "../actions/Actions";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountryDataByName.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(getCountryDataByName.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        state.countries = action.payload; // Store the fetched data
      })
      .addCase(getCountryDataByName.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export const country = (state) => state.country.countries;
export const countryStatus = (state) => state.country.status;
export const countryError = (state) => state.country.error;

export default countrySlice.reducer;
