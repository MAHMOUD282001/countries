import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { FilterationContext } from "../../../context/FilterationContext";

function Filteration() {
  const regions = {
    "": "Filter by Region",
    africa: "Africa",
    americas: "Americas",
    asia: "Asia",
    europe: "Europe",
    oceania: "Oceania",
  };

  const { filterBy, setFilterValues } = useContext(FilterationContext);

  return (
    <section className="mt-10">
      <div className="container flex items-center justify-between lg:flex-row flex-col">
        <div className="text-[14px] background-white rounded-md p-4 shadow-md flex items-center gap-3 light-bg dark:dark-bg w-full lg:w-[500px]">
          <IoSearch
            size={15}
            className="text-[hsl(0,0%,52%)] dark:text-[#fff]"
          />
          <input
            type="text"
            value={filterBy.countryName}
            onChange={(e) => setFilterValues("countryName", e.target.value)}
            placeholder="Search for a country..."
            className="border-none outline-none text-[hsl(0,0%,52%)] dark:text-[#fff] w-full text-[14px] light-bg dark:dark-bg"
          />
        </div>

        <div className="w-full lg:w-[200px] mt-5 lg:mt-0">
          <select
            value={filterBy.countriesRegion}
            onChange={(e) => setFilterValues("countriesRegion", e.target.value)}
            className="border-none outline-none w-full rounded-md p-5 shadow-md dark:placeholder-[#fff] text-[14px] light-bg dark:dark-bg"
          >
            {Object.entries(regions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default Filteration;
