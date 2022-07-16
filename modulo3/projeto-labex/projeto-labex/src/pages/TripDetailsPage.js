import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useProtectedPage from '../hook/useProtectedPage';
import CardDetalhes from '../components/CardDetalhes';
import { useRequestData } from '../hook/useRequestData';
import { goReturn } from "../routes/coordinator";

const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { id } = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

  const inscritos = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((inscrito) => {
    return <CardDetalhes key={inscrito.id} inscrito={inscrito} tripId={id} getTripDetails={getTripDetails}/>
  })

  const aprovacao = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((inscrito) => {
    return <li key={inscrito.id}>{inscrito.name}</li>
  })
  
  return (
    <div>
      <p>DETALHES:</p>
      {tripDetails && tripDetails.trip && <h3>{tripDetails.trip.name}</h3>}
      {tripDetails && tripDetails.trip && <CardDetalhes>
          <p><b>Nome:</b> {tripDetails.trip.name}</p>
          <p><b>Descrição:</b> {tripDetails.trip.description}</p>
          <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
          <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
          <p><b>Data:</b> {tripDetails.trip.date}</p>
      </CardDetalhes>
      }
      <button onClick={() => goReturn(navigate)}>Voltar</button>

      <h3>Candidatos inscritos</h3>
      {inscritos && inscritos.length > 0 ? inscritos : <p>Sem nenhum candidato para revisão</p>}

      <h3>Candidatos Aprovados</h3>
      {aprovacao && aprovacao.length > 0 ? aprovacao : <p>Nenhum candidato foi aprovado</p>}

    </div>
  )
}

export default TripDetailsPage


