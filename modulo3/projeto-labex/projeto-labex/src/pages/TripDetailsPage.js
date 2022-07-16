import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useProtectedPage from '../hook/useProtectedPage';
import CardDetalhes from '../components/CardDetalhes';
import { useRequestData } from '../hook/useRequestData';
import { goReturn } from "../routes/coordinator";
import styled from 'styled-components';

const ContainerDetails = styled.div`
  display: flex;
  justify-contents: justify-between;
  
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardInscritos = styled.div`
  border: 2px solid #8C6849;
  padding: 12px;
  background-color: #BFA08E;
`

const Detalhar = styled.div`
  border: 2px solid #8C6849;
  padding: 12px;
  background-color: #BFA08E;
`

const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { id } = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

  const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((inscrito) => {
    return <CardDetalhes key={inscrito.id} candidate={inscrito} tripId={id} getTripDetails={getTripDetails}/>
  })

  const aprovacao = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((inscrito) => {
    return <li key={inscrito.id}>{inscrito.name}</li>
  })
  
  return (
    <div>
      <Nav>
      {tripDetails && tripDetails.trip && <h2>Detalhes da viagem</h2>}
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      </Nav>
      <ContainerDetails>
      {tripDetails && tripDetails.trip && <Detalhar>
          <p><b>Nome:</b> {tripDetails.trip.name}</p>
          <p><b>Descrição:</b> {tripDetails.trip.description}</p>
          <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
          <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
          <p><b>Data:</b> {tripDetails.trip.date}</p>
      </Detalhar>
      }

      <CardInscritos>
      <h3>Candidatos inscritos</h3>
      {candidates && candidates.length > 0 ? candidates : <p>Sem nenhum candidato para revisão</p>}

      <h3>Candidatos Aprovados</h3>
      {aprovacao && aprovacao.length > 0 ? aprovacao : <div>Nenhum candidato foi aprovado</div>}

      </CardInscritos>
    </ContainerDetails>
    </div>
  )
}

export default TripDetailsPage


