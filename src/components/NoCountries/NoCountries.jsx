import React from "react";
import noCountries from "../../assets/no countries.svg";


function NoCountries({ error }) {
  return (
    <div className="flex items-center justify-center flex-col mt-32">
      <img src={noCountries} className="w-[300px]" alt="No Countries" />

      <p className="text-[20px] font-[400] mt-3">{error}</p>
    </div>
  );
}

export default NoCountries;
