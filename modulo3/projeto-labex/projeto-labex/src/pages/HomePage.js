import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToList, goToLogin } from "../routes/coordinator";
import styled from 'styled-components';
import astra from "../assets/astra.jpg"

const AreaCadastro = styled.div`
    background-image: url(${astra});
    background-color: #BFA08E;
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
    
    border-radius: 12px;
    background-color: #8C704D;
    margin-left: 250px;
    margin-top: 100px;
    height: 40vh;
    width: 20vw;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

const Botoes = styled.button`
    border-radius: 8px;
    border: 4px solid #8C6849;
    font-size: medium;
    width: 8rem;
    margin: 8px;
`

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <AreaCadastro>
      <AreaCard>
        <h1>LabeX</h1>

        <Botoes onClick={() => goToList(navigate)}>Ver Viagens</Botoes>
        <Botoes onClick={() => goToLogin(navigate)}>Área Admin</Botoes>
      </AreaCard>
    </AreaCadastro>
  )
}

export default HomePage