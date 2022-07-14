import React from 'react'
import { useRequestList } from '../hook/useRequestList';
import { useRequestDelete } from '../hook/useRequestDelete';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { goReturn, goToCreate, goToDetails } from "../routes/coordinator";
import { BASE_URL } from '../constants/urls';
import styled from 'styled-components';

const Detalhes = styled.li`
  cursor: pointer;
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
  // GRFcRDsRNxIKuvhJ4KmB
  const tripsList = trips && trips.map((trip) => {
    return <Detalhes key={trip.id} onClick={() => goToDetails(navigate)}>
      {trip.name}
      <button>X</button>
      </Detalhes>
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
