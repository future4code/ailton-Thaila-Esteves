import axios from "axios"
import { goToFeed } from '../routes/coordinator'
import { BASE_URL } from "../constants/urls"

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/login`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(navigate)
    setRightButtonText("Logout")
    setIsLoading(false)
  })
  .catch((err) => { 
    alert(err.response.data.message)
    setIsLoading(false)
  })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToFeed(navigate)
    setRightButtonText("Logout")
    setIsLoading(false)
  })
  .catch((err) => {
    alert(err.response.data.message)
    setIsLoading(false)
  })
}