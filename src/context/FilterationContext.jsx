import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesDataByRegion } from "../redux/actions/Actions";

export const FilterationContext = createContext();

export const FilterationProvider = ({ children }) => {
  const [filterBy, setFilterBy] = useState({
    countryName: "",
    countriesRegion: "",
  });

  const setFilterValues = (name, value) => {
    setFilterBy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesDataByRegion(filterBy.countriesRegion));
    // dispatch(fetchCountriesDataByName(filterBy.countryName));
  }, [filterBy, dispatch]);

  return (
    <FilterationContext.Provider value={{ filterBy, setFilterValues }}>
      {children}
    </FilterationContext.Provider>
  );
};
