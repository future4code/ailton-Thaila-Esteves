import React from 'react'
import { useRequestList } from '../hook/useRequestList';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { goReturn, goToCreate, goToDetails } from "../routes/coordinator";
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';
import axios from 'axios';

const ClicaVerDetalhes = styled.div`
  border: 1px solid red;
  padding: 8px;
`

const useProtectedPage = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
    }
  }, []);
};

const AdminHomePage = () => {
  useProtectedPage();

  const navigate = useNavigate()

  const [trips, isLoading, error] = useRequestList(
    `${BASE_URL}/trips`
  )
 
  const tripsList = trips && trips.map((trip) => {
    return <ClicaVerDetalhes key={trip.id}>
      <p onClick={() => goToDetails(navigate)}>{trip.name}</p> 
      <button>X</button>
      </ClicaVerDetalhes>
  })

  return (
    <div>
      <div>Área admin</div>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>{error.message}</p>}
      {!isLoading && trips && trips.length > 0 && tripsList}
      {!isLoading && trips && trips.length === 0 && <p>Não há dados</p>}
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToCreate(navigate)}>Criar Viagem</button>
      <button>SAIR SEM</button>
    </div>
  )
}

export default AdminHomePage
