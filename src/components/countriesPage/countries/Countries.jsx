import React from "react";
import CountryCard from "../countryCard/CountryCard";
import NoCountries from "../../NoCountries/NoCountries";
import CountriesLogic from "./CountriesLogic";

function Countries() {
  const [
    finalData,
    allCountriesDataStatus,
    allCountriesDataError,
    regionCountriesDataStatus,
    regionCountriesDataError,
  ] = CountriesLogic();

  return (
    <section className="mt-10">
      <div className="container">
        {allCountriesDataStatus === "LOADING" ||
        regionCountriesDataStatus === "LOADING" ? (
          <div className="loader"></div>
        ) : allCountriesDataStatus === "FAILED" ? (
          <NoCountries error={allCountriesDataError} />
        ) : regionCountriesDataStatus === "FAILED" ? (
          <NoCountries error={regionCountriesDataError} />
        ) : finalData.length === 0 ? (
          <NoCountries error={"There are No Countries"} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16">
            {finalData.map((country) => (
              <CountryCard country={country} key={country.name.common} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Countries;
