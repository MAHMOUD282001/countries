import React from "react";

function CountryImg({img}) {
  return (
    <div className="lg:w-[85%] h-[400px]">
      <img
        src={img}
        alt="Country Img"
        className="w-full h-full"
      />
    </div>
  );
}

export default CountryImg;
