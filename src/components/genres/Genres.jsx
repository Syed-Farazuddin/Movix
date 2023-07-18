/* eslint-disable react/prop-types */
import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
function Genres({ data }) {
  console.log("The genres data is", data);
  const { genres } = useSelector((state) => state.home);
  console.log("the genres is", genres);
  return (
    <div className="genres">
      {data.map((g) => {
        if (genres[g]?.name) {
          return (
            <div key={g} className="genre">
              {genres[g]?.name}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Genres;
