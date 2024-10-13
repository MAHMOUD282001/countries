import React from "react";

function CountryCard({ country }) {
  const countryInfo = [
    {
      name: "Population:",
      value: country.population.toLocaleString(),
    },
    {
      name: "Region:",
      value: country.region,
    },
    {
      name: "Capital:",
      value: country.capital,
    },
  ];

  return (
    <div className="light-bg dark:dark-bg shadow-sm rounded-md">
      <div className="w-full h-[200px]">
        <img
          src={country.flags.png}
          alt="Country Img"
          className="w-full h-full rounded-tl-md rounded-tr-md"
        />
      </div>

      <div className="p-7">
        <h5 className="text-lg font-[800] mb-3">{country.name.common}</h5>

        {countryInfo.map((info) => (
          <div>
            <span className="font-[600]">{info.name} </span>
            <span className="font-[400] text-[15px]">{info.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryCard;
