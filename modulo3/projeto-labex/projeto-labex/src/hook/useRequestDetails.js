import axios from "axios"
import { useState, useEffect } from "react"

export const useRequestAdmin = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('token')
    axios
      .get(url, {
        headers: {
            auth: token
          }
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  return [data, isLoading, error];
};

