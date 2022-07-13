import React from 'react'
import { useNavigate } from "react-router-dom";
import { goReturn } from "../routes/coordinator";

const ApplicationFormPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Faça sua inscrição para viajar</p>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button>Enviar SEM</button>
    </div>
  )
}

export default ApplicationFormPage