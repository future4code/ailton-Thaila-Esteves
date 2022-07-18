import React from "react"
import { decideCandidate } from "../hook/requests"
import styled from "styled-components"

const Detalhar = styled.div`
  border: 4px solid #8C6849;
  padding: 12px;
  margin: 0 20px;
  background-color: #BFA08E;
`

const BotaoCentro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const CardDetalhes = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

    const decide = (decision) => {
        decideCandidate(props.tripId, id, decision, props.getTripDetails)
    }

    return (
        <Detalhar>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <BotaoCentro>
                <button onClick={() => decide(true)}>Aprovar</button>
                <button onClick={() => decide(false)}>Reprovar</button>
            </BotaoCentro>

        </Detalhar>
    )
}

export default CardDetalhes