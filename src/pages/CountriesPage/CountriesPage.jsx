import React from "react";
import Filteration from "../../components/countriesPage/filteration/Filteration";
import Countries from "../../components/countriesPage/countries/Countries";

function CountriesPage() {
  return (
    <div>
      <Filteration />
      <Countries />
    </div>
  );
}

export default CountriesPage;
