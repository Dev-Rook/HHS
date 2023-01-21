import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);

    try {
      const Result = await axios.get(url);
      setData(Result.data);
      console.log(Result.data);
    } catch (err) {
      setError(err.massage);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, error, loading };
};

export default useAxios;
