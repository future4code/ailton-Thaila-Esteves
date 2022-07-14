import React from 'react'
import axios from "axios"
import { useState } from "react"
import { goReturn } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';

const ApplicationFormPage = () => {
  
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
 
  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  }

  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const onSubmitApply = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }
    axios
    .post(
      `${BASE_URL}/trips/application`,
      body
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <p>Faça sua inscrição para viajar</p>
      <input
        placeholder="name"
        value={name}
        onChange={onChangeName}
      />
      <input
        placeholder="age"
        value={age}
        onChange={onChangeAge}
      />
      <input
        placeholder="text"
        value={applicationText}
        onChange={onChangeApplicationText}
      />
      <input
        placeholder="profession"
        value={profession}
        onChange={onChangeProfession}
      />
      <input
        placeholder="country"
        value={country}
        onChange={onChangeCountry}
      />
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <button onClick={onSubmitApply}>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage