import React from 'react'
import { goReturn } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useForm from '../hook/useForm';
import useProtectedPage from '../hook/useProtectedPage';
import { createTrip } from '../hook/requests';
import styled from 'styled-components';

const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid #8C6849;
  margin: 8px;
  padding: 8px;
  font-size: medium;
  background-color: #BFA08E;
  justify-contents: center;
  align-items: center;
`

const EspacoInput = styled.input`
  border: 2px solid #8C6849;
  border-radius: 4px;
  width: 20rem;
  padding: 8px;
  margin: 4px;
`

const Selecionar = styled.select`
  border: 2px solid #8C6849;
  border-radius: 4px;
  width: 21rem;
  height: 34px;
  margin: 8px;
`

const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
 
  const { form, onChange, cleanFields } = useForm ({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const onClickCriar = (event) => {
    event.preventDefault()
    createTrip(form, cleanFields)
  }

  const today = new Date()
  const stringToday = today.getFullYear() + "-" +
  ("0" + (today.getMonth() + 1)).substring(-2) + "-"
  + ("0" + today.getDate()).substring(-2)

  return (
    <ContainerCreate>
      <h2>Crie uma nova viagem</h2>
      <Formulario onSubmit={onClickCriar}>
      <EspacoInput
        placeholder={'Nome'}
        value={form.name}
        onChange={onChange}
        name={"name"}
        required
      />
        <EspacoInput
        placeholder={'Data'}
        type={'date'}
        name={'date'}
        value={form.date}
        onChange={onChange}
        required
        min={stringToday}
      />
        <EspacoInput
        placeholder={'Descrição'}
        name={'description'}
        value={form.description}
        onChange={onChange}
        required
      />
        <EspacoInput
        placeholder={'Duração da viagem em dias'}
        type={'number'}
        name={'durationInDays'}
        value={form.durationInDays}
        onChange={onChange}
        min={50}
      />
      
      <Selecionar
        placeholder={'Planeta'}
        name={'planet'}
        defaultValue={""}
        onChange={onChange}
        required
      >
        <option value={''} disabled>Selecione um planeta</option>
        <option>Marte</option>
        <option>Mercúrio</option>
        <option>Plutão</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Jupiter</option>
        <option>Netuno</option>
        <option>Saturno</option>
        <option>Urano</option>
      </Selecionar>
      
      <button type={'submit'}>CRIAR</button>
      </Formulario>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
    </ContainerCreate>
  )
}

export default CreateTripPage