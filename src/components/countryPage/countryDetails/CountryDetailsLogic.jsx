import React from "react";
import { countryError, countryStatus } from "../../../redux/slice/countrySlice";

function CountryDetailsLogic(countryData) {
  const getCurrences = () => {
    let returnedCurences = [];
    const currencies = countryData[0]?.currencies;
    for (let currency in currencies) {
      returnedCurences.push(
        `${currencies[currency]["name"]} (${currencies[currency]["symbol"]})`
      );
    }

    return returnedCurences.join(", ");
  };

  const getLanguages = () => {
    const returnedLanguages = [];
    const languages = countryData[0]?.languages;
    for (let lang in languages) {
      returnedLanguages.push(languages[lang]);
    }

    return returnedLanguages.join(", ");
  };

  const leftCountryInfo = [
    {
      name: "Population:",
      value: countryData[0]?.population.toLocaleString(),
    },
    {
      name: "Region:",
      value: countryData[0]?.region,
    },
    countryData[0]?.subregion && {
      name: "Sub Region:",
      value: countryData[0]?.subregion,
    },
    {
      name: "Capital:",
      value: countryData[0]?.capital,
    },
  ];

  const rightCountryInfo = [
    {
      name: "Top Level Domain:",
      value: countryData[0]?.tld[0],
    },

    {
      name: "Currencies:",
      value: getCurrences(),
    },
    {
      name: "Languages:",
      value: getLanguages(),
    },
  ];

  const borderCountries = countryData[0]?.borders;

  return [
    leftCountryInfo,
    rightCountryInfo,
    borderCountries,
  ];
}

export default CountryDetailsLogic;
