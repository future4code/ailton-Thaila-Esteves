import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToList, goToLogin } from "../routes/coordinator";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>LabeX</h1>

      <button onClick={() => goToList(navigate)}>Ver Viagens</button>
      <button onClick={() => goToLogin(navigate)}>Área Admin</button>
    </div>
  )
}

export default HomePage