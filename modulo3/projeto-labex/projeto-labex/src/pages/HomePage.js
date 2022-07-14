import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToList, goToLogin } from "../routes/coordinator";
import styled from 'styled-components';
import astra from "../assets/astra.jpg"

const AreaCadastro = styled.div`
    background-image: url(${astra});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`

const AreaCard = styled.div`
    border: 1px solid white;
    border-radius: 8px;
    background-color: #f5eedc;
    margin-left: 250px;
    margin-top: 150px;
    height: 50vh;
    width: 20vw;
    padding-top: 100px;
`

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <AreaCadastro>
      <AreaCard>
        <h1>LabeX</h1>

        <button onClick={() => goToList(navigate)}>Ver Viagens</button>
        <button onClick={() => goToLogin(navigate)}>Área Admin</button>
      </AreaCard>
    </AreaCadastro>
  )
}

export default HomePage