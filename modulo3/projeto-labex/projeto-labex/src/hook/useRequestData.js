import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/urls";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

      useEffect(() => {
        getData()
      }, [url])

  return [data, getData];
}