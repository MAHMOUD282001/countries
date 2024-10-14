import React from "react";
import CountryDetailsLogic from "./CountryDetailsLogic";

function CountryDetails({ countryData }) {
  const [
    leftCountryInfo,
    rightCountryInfo,
    borderCountries,
  ] = CountryDetailsLogic(countryData);

  return (
    <div className="mt-10 lg:mt-0">
      <h5 className="text-2xl font-[800] mb-6">
        {countryData[0]?.name.common}
      </h5>{" "}
      <div className="grid lg:grid-cols-2">
        <div>
          {leftCountryInfo.map((info) => (
            <div key={info?.name} className="mb-2">
              <span className="font-[600]">{info?.name} </span>
              <span className="font-[400] text-[15px]">{info?.value}</span>
            </div>
          ))}
        </div>

        <div>
          {rightCountryInfo.map((info) => (
            <div key={info?.name} className="mb-2">
              <span className="font-[600]">{info?.name} </span>
              <span className="font-[400] text-[15px]">{info?.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h6 className="text-sm font-[700] mb-6">Border Countries</h6>{" "}
        <div className="flex items-center flex-wrap gap-3">
          {borderCountries?.map((country) => (
            <div
              key={country}
              className="mr-4 py-2 w-[100px] light-bg dark:dark-bg flex items-center justify-center rounded-[4px] shadow-md"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
