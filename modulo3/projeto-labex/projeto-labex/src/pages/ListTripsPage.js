import React from 'react'
import { useNavigate } from "react-router-dom";
import { goReturn, goToApplication } from "../routes/coordinator";
import styled from 'styled-components';

const HomeEstilo = styled.div`
  background-color: lightgreen;
`

const ListTripsPage = () => {
  const navigate = useNavigate()
  
  return (
    <HomeEstilo>
      <h2>Lista de viagens</h2>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToApplication(navigate)}>Inscreva-se</button>
    </HomeEstilo>
  )
}

export default ListTripsPage