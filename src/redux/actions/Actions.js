import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch data from an API
export const fetchCountriesData = createAsyncThunk(
  "countries/fetchData",
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data; // this will be the payload
  }
);
