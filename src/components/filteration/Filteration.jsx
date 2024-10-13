import React from "react";
import { IoSearch } from "react-icons/io5";

function Filteration() {
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
            placeholder="Search for a country..."
            className="border-none outline-none text-[hsl(0,0%,52%)] dark:text-[#fff] w-full text-[14px] light-bg dark:dark-bg"
          />
        </div>

        <div className="w-full lg:w-[200px] mt-5 lg:mt-0">
          <select className="border-none outline-none w-full rounded-md p-5 shadow-md dark:placeholder-[#fff] text-[14px] light-bg dark:dark-bg">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Filteration;
