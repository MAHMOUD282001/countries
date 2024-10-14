import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesData } from "../../../redux/actions/Actions";
import {
  allCountries,
  allCountriesError,
  allCountriesStatus,
} from "../../../redux/slice/countriesSlice";
import {
  regionCountries,
  regionCountriesError,
  regionCountriesStatus,
} from "../../../redux/slice/regionCountriesSlice";
import { FilterationContext } from "../../../context/FilterationContext";

function CountriesLogic() {
  let dispatch = useDispatch();

  let { filterBy } = useContext(FilterationContext);

  const allCountriesData = useSelector(allCountries);
  const allCountriesDataStatus = useSelector(allCountriesStatus);
  const allCountriesDataError = useSelector(allCountriesError);

  const regionCountriesData = useSelector(regionCountries);
  const regionCountriesDataStatus = useSelector(regionCountriesStatus);
  const regionCountriesDataError = useSelector(regionCountriesError);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  const [finalData, setFinalData] = useState(allCountriesData);

  useEffect(() => {
    const commonData = allCountriesData
      .filter((obj1) =>
        regionCountriesData.some(
          (obj2) => obj1.name.common === obj2.name.common
        )
      )
      .filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(filterBy.countryName.toLowerCase())
      );

    setFinalData(commonData);
  }, [regionCountriesDataStatus, allCountriesDataStatus, filterBy]);

  return [
    finalData,
    allCountriesDataStatus,
    allCountriesDataError,
    regionCountriesDataStatus,
    regionCountriesDataError,
  ];
}

export default CountriesLogic;
