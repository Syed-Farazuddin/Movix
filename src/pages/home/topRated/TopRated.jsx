import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import Carousel from "../../../components/carousel/Carousel";

function TopRated() {
  const [endpoint, setEndPoint] = useState("movie");
  // url is passed into the useFetch method
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
}

export default TopRated;
