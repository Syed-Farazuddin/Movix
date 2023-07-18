import axios from "axios";

// base url to fetch data from api
const BASE_URL = "https://api.themoviedb.org/3";

// TMDB data access token
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ3OWE5ZGY1NzczMWFkZDJlZjUwZTA2M2Y4ZjAzMiIsInN1YiI6IjY0YTViMmUyMWJmMjY2MDBhY2FlZmJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wGlTnz_tEdfXlptzVgdxpAKrtGKebH5PC9r8kdHDr_U";

// TMDB headers instructions
const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};

// Fetching data from TMDB
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
