import React from 'react';
import { useRequestList } from '../hook/useRequestList';
import { useNavigate } from "react-router-dom";
import { goReturn, goToApplication } from "../routes/coordinator";
import { BASE_URL } from '../constants/urls';

export default function ListTripsPage () {
  const navigate = useNavigate()

  const [trips, isLoading, error] = useRequestList(
    `${BASE_URL}/trips`
  )

  const tripsList = trips && trips.map((trip) => {
    return <li key={trip.id}>{trip.name}</li>
  })
  
  return (
    <div>
      <h2>Lista de viagens</h2>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>{error.message}</p>}
      {!isLoading && trips && trips.length > 0 && tripsList}
      {!isLoading && trips && trips.length === 0 && <p>Não há dados</p>}
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToApplication(navigate)}>Inscreva-se</button>
    </div>
    
  )
}

