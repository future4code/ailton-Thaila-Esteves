import React from 'react'
import { goReturn, goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react"
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

const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [duractionInDays, setDuractionInDays] = useState("")
  const [create, setCreate] = useState({});

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const onChangeDurationInDays = (event) => {
    setDuractionInDays(event.target.value)
  }

  const onClickSubmit = () => {
    const token = localStorage.getItem("token");
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      duractionInDays: duractionInDays
    }

    axios
    .post( `${BASE_URL}/trips`, {
      headers: {
        auth: token
      },
      body
    }
    )
    .then((res) => {
      setCreate(res.data.trip);
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
    
  return (
    <div>
      <p>Formulário para o administrador criar uma nova viagem</p>
      <input
        placeholder='name'
        value={name}
        onChange={onChangeName}
      />
      <input
        placeholder='planet'
        value={planet}
        onChange={onChangePlanet}
      />
        <input
        placeholder='date'
        value={date}
        onChange={onChangeDate}
      />
        <input
        placeholder='description'
        value={description}
        onChange={onChangeDescription}
      />
        <input
        placeholder='duractionInDays'
        value={duractionInDays}
        onChange={onChangeDurationInDays}
      />
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={onClickSubmit}>CRIAR</button>
    </div>
  )
}

export default CreateTripPage