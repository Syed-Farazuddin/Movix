import React from "react";
import "./styles.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Similar from "../details/carousels/Similar.jsx";
import Recommendation from "../details/carousels/Recommendation.jsx";

import Cast from "./cast/Cast";
import VideosSection from "./videosSection/videoSection";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
}

export default Details;
