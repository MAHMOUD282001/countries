import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesData } from "../../redux/actions/Actions";
import { allCountries } from "../../redux/slice/countriesSlice";
import CountryCard from "../countryCard/CountryCard";

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(allCountries);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  console.log(countries);

  return (
    <section className="mt-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16">
          {countries.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
