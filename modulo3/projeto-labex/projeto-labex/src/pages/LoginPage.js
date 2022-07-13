import React from 'react'
import { useNavigate } from "react-router-dom";
import { goReturn, goToAdmin } from "../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>Login</div>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToAdmin(navigate)}>Entrar</button>
    </div>
  )
}

export default LoginPage