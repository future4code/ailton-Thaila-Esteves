import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../routes/coordinator";
import { deletarTrip } from "../hook/requests";

const CardTripNames = (props) => {
    const navigate = useNavigate()

    const deletar = (event) => {
        deletarTrip(props.id, props.verTrips)
    }

    return (
        <div onClick={() => goToDetails(navigate, props.id)}>
            <p>{props.name}</p>
            <button onClick={deletar}>X</button>
        </div>
    )
}

export default CardTripNames





    


