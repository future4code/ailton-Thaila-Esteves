import React from "react";
import styled from 'styled-components';

const CardTrip = styled.div`
  border: 4px solid #8C6849;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`

const CardListTrips = (props) => {
    const { name, description, planet, durationInDays, date } = props.trip

    return (
        <CardTrip>
            <h3>{name}</h3>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            <p><b>Data:</b> {date}</p>
        </CardTrip>
    )
}

export default CardListTrips