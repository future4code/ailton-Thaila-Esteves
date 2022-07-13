import React from 'react'
import { goReturn } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Formulário para o administrador criar uma nova viagem</p>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button>CRIAR SEM</button>
    </div>
  )
}

export default CreateTripPage