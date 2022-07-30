import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createNewPost = (body, clear, getPosts, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        console.log(res.data)
        clear()
        setIsLoading(false)
        getPosts()
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
}

export const createNewComment = (id, body, clear, getComments, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        console.log(res.data)
        clear()
        setIsLoading(false)
        getComments()
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
}
