import React from 'react'
import { useRequestData } from '../hook/useRequestData';
import useProtectedPage from '../hook/useProtectedPage';
import { fazerLogout } from '../hook/requests';
import { useNavigate } from "react-router-dom";
import CardTripNames from '../components/CardTripNames';
import { goReturn, goToCreate } from "../routes/coordinator";

const AdminHomePage = () => {
  useProtectedPage();

  const navigate = useNavigate()

  const [allTrips, verTrips] = useRequestData("/trips", {})
  
  const tripsList = allTrips.trips && allTrips.trips.map((trip) => {
    return <CardTripNames key={trip.id} name={trip.name} verTrips={verTrips} />
  })

  return (
    <div>
      <div>Área admin</div>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={() => goToCreate(navigate)}>Criar Viagem</button>
      <button onClick={() => fazerLogout(navigate)}>SAIR</button>
      {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
    </div>
  )
}

export default AdminHomePage
