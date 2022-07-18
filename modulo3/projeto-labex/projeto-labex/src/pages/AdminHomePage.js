import React from 'react'
import { useRequestData } from '../hook/useRequestData';
import useProtectedPage from '../hook/useProtectedPage';
import { fazerLogout } from '../hook/requests';
import { useNavigate } from "react-router-dom";
import CardTripNames from '../components/CardTripNames';
import { goReturn, goToCreate } from "../routes/coordinator";
import styled from 'styled-components';

const Carrega = styled.p`
  color: white;
  font-size:large;
`

const AdminHomePage = () => {
  useProtectedPage()

  const navigate = useNavigate()

  const [tripsInfo, getTrips] = useRequestData("/trips", {})
  
  const tripsList = tripsInfo.trips && tripsInfo.trips.map((trip) => {
    return <CardTripNames key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
  })

  return (
    <div>
      <h2>Área admin</h2>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToCreate(navigate)}>Criar Viagem</button>
      <button onClick={() => fazerLogout(navigate)}>SAIR</button>
      {tripsList && tripsList.length > 0 ? tripsList : <Carrega>Carregando...</Carrega>}
    </div>
  )
}

export default AdminHomePage
