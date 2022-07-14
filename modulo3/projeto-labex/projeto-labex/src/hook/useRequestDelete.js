import axios from "axios"
import { useState, useEffect } from "react"

export const useRequestDelete = (url) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .del(url)
      .then((res) => {
        setData(res);
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, [url]);

  return [data];
};