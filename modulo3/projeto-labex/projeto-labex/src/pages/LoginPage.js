import React from 'react'
import { useNavigate } from "react-router-dom";
import { fazerLogin } from '../hook/requests';
import useForm from '../hook/useForm';
import { goReturn } from "../routes/coordinator";

const LoginPage = () => {
  const { form, onChange } = useForm({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
    event.preventDefault()
    fazerLogin(form, navigate)
  }

  return (
    <div>
      <div>Login</div>
      <form onSubmit={onSubmitLogin}>
        <input
          placeholder={'email'}
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          required
        />

        <input
          placeholder={'senha'}
          type={'password'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          required
        />
        <button type={'submit'}>Entrar</button>
      </form>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
    </div>
  )
}

export default LoginPage