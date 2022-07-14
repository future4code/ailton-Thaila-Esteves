import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { goReturn, goToLogin } from "../routes/coordinator";
import { BASE_URL } from '../constants/urls';


const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      goToLogin(navigate)
    }
  }, []);
};

const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
    .get( `${BASE_URL}/trip/GRFcRDsRNxIKuvhJ4KmB`, {
      headers: {
        auth: token
      }
    }
    )
    .then((res) => {
      setIsLoading(false);
      setDetails(res.data.trip);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err);
    });
}, []);
  
  return (
    <div>
      <p>DETALHES: Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>{error.message}</p>}
      {!isLoading && details && details.length > 0 && details.name}
      {!isLoading && details && details.length === 0 && <p>Não há dados</p>}
      <button onClick={() => goReturn(navigate)}>Voltar</button>
    </div>
  )
}

export default TripDetailsPage


