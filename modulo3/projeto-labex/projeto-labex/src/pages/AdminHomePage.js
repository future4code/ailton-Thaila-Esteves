import React from 'react'
import { useNavigate } from "react-router-dom";
import { goReturn, goToCreate, goToDetails } from "../routes/coordinator";
import styled from 'styled-components';

const Clicou = styled.div`
  cursor: pointer;
`

const AdminHomePage = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>Área admin</div>
      <div>
        <Clicou onClick={() => goToDetails(navigate)}>Viagem 1</Clicou>
        <button>x SEM</button>
      </div>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToCreate(navigate)}>Criar Viagem</button>
      <button>SAIR SEM</button>
    </div>
  )
}

export default AdminHomePage