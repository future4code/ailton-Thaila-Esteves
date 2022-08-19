import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)

  const getData = () => {
    setIsLoading(true)
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }

  useEffect(() => {
    getData()
  }, [url])

  return [data, getData, isLoading]
}

export default useRequestData