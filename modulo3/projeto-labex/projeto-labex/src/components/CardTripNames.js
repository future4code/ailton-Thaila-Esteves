import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../routes/coordinator";
import { deletarTrip } from "../hook/requests";
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #8C6849;
  margin: 8px;
  background-color: #BFA08E;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`

const Detalhar = styled.h3`
  cursor: pointer;
  :hover {
    color: white;
  }
`

const CardTripNames = (props) => {
    const navigate = useNavigate()

    const deletar = (event) => {
        deletarTrip(props.id, props.getTrips)
    }

    return (
        <Container onClick={() => goToDetails(navigate, props.id)}>
            <Detalhar>{props.name}</Detalhar>
            <button onClick={deletar}>Deletar viagem</button>
        </Container>
    )
}

export default CardTripNames





    


