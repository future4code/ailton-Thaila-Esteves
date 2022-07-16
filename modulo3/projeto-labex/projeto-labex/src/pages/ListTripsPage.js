import React from 'react';
import CardListTrips from '../components/CardListTrips';
import { useRequestData } from '../hook/useRequestData';
import { useNavigate } from "react-router-dom";
import { goReturn, goToApplication } from "../routes/coordinator";
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const AreaBotoes = styled.div`
  margin-right: 60px;
`
const Title = styled.h2`
  // display: flex;
  // justify-content: flex-start;
  
`

export default function ListTripsPage () {
  const [allTrips] = useRequestData("/trips", {})
  const navigate = useNavigate()

  const tripsList = allTrips.trips && allTrips.trips.map((trip) => {
    return <CardListTrips key={trip.id} trip={trip}/>
  })
  
  return (
    <div>
      <Nav>
        <AreaBotoes>
        <button onClick={() => goReturn(navigate)}>Voltar</button>
        <button onClick={() => goToApplication(navigate)}>Inscreva-se</button>
        </AreaBotoes>
        <Title>Lista de viagens</Title>
      </Nav>
      {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
    </div>
  )
}

