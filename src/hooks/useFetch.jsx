import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        // If fetch is successfull
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        // If fetch is unsuccessfull
        setLoading(false);
        setError("Something went wrong!");
        console.log(error);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
