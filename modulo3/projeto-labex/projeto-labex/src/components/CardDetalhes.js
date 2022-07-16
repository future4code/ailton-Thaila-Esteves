import React from "react"
import { decideCandidate } from "../hook/requests"

const CardDetalhes = (props) => {

    const escolhaInscritos = (decision) => {
        decideCandidate(props.tripId, props.inscrito.id, decision, props.getTripDetails)
    }

    return (
        <div>
            <p><b>Nome:</b> {props.inscrito.name}</p>
            <p><b>Profissão:</b> {props.inscrito.profession}</p>
            <p><b>Idade:</b> {props.inscrito.age}</p>
            <p><b>País:</b> {props.inscrito.country}</p>
            <p><b>Texto de Candidatura:</b> {props.inscrito.applicationText}</p>
            <div>
                <button onClick={() => escolhaInscritos(true)}>Aprovar</button>
                <button onClick={() => escolhaInscritos(false)}>Reprovar</button>
            </div>

        </div>
    )
}

export default CardDetalhes