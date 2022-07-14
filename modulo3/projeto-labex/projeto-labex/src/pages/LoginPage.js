import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goReturn, goToAdmin } from "../routes/coordinator";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickSubmit = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password
    }
    axios
    .post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/thaila-esteves-ailton/login', 
      body
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToAdmin(navigate)
      }) 
      .catch((err) => {
        console.log('Nop', err.response)
      })
  }

  return (
    <div>
      <div>Login</div>
      <input
        placeholder='email'
        type='email'
        value={email}
        onChange={onChangeEmail}
      />

      <input
        placeholder='password'
        type='password'
        value={password}
        onChange={onChangePassword}
      />

      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={onClickSubmit}>Entrar</button>
    </div>
  )
}

export default LoginPage