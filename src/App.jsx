import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api.js";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getApiConfiguration, getGenres } from "./store/homeSlice.js";

import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((response) => {
      const url = {
        backdrop: response.images.base_url + "original",
        poster: response.images.base_url + "original",
        logo: response.images.base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"];
    let allGenres = {};
    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
