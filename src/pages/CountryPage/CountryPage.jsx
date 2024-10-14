import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountryDataByName } from "../../redux/actions/Actions";
import {
  country,
  countryError,
  countryStatus,
} from "../../redux/slice/countrySlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CountryImg from "../../components/countryPage/countryImg/CountryImg";
import CountryDetails from "../../components/countryPage/countryDetails/CountryDetails";
import NoCountries from "../../components/NoCountries/NoCountries";

function CountryPage() {
  let { countryName } = useParams();
  let dispatch = useDispatch();

  const countryData = useSelector(country);
  const countryDataStatus = useSelector(countryStatus);
  const countryDataError = useSelector(countryError);

  useEffect(() => {
    dispatch(getCountryDataByName(countryName));
  }, [countryName]);

  return (
    <div className="">
      <div className="container">
        {countryDataStatus === "LOADING" ? (
          <div className="loader"></div>
        ) : countryDataStatus === "FAILED" ? (
          <NoCountries error={countryDataError} />
        ) : (
          <>
              <Link to={"/"} className="w-[150px] block">
                <span className="py-3 w-[150px] flex items-center justify-center gap-4 my-16 shadow-xl cursor-pointer light-bg dark:dark-bg rounded-[4px]">
                  <FaArrowLeftLong size={20} />
                  Back
                </span>
              </Link>
            <div className="grid lg:grid-cols-2 text-light-text dark:text-dark-text items-center">
              <CountryImg img={countryData[0]?.flags.png} />
              <CountryDetails countryData={countryData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CountryPage;
