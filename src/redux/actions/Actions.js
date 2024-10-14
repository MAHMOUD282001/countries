import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch Countries from an API
export const fetchCountriesData = createAsyncThunk(
  "countries/fetchData",
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data; // this will be the payload
  }
);

// Async thunk to fetch Countries By Region from an API
export const fetchCountriesDataByRegion = createAsyncThunk(
  "countriesRegion/fetchData",
  async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/${
        region.length > 0 ? `region/${region}` : "all"
      }`
    );
    const data = await response.json();
    return data; // this will be the payload
  }
);

// Async thunk to fetch Countries By Name from an API
export const getCountryDataByName = createAsyncThunk(
  "countriesName/fetchData",
  async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    return data; // this will be the payload
  }
);
