import React from 'react'
import { goReturn } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useForm from '../hook/useForm';
import useProtectedPage from '../hook/useProtectedPage';
import { createNewTrip } from '../hook/requests';

const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
 
  const { form, onChange, cleanFields} = useForm ({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const onClickSubmit = (event) => {
    event.preventDefault()
    createNewTrip(form, cleanFields)
  }
  
  const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

  return (
    <div>
      <h2>Crie uma nova viagem</h2>
      <form onSubmit={onClickSubmit}>
      <input
        placeholder='name'
        value={form.name}
        onChange={onChange}
        name={"name"}
        required
      />
      <select
        placeholder='Planeta'
        name={'planet'}
        defaultValue={""}
        onChange={onChange}
        required
      >
        <option value={''} disabled>Selecione um planeta</option>
        <option>Marte</option>
        <option>Venus</option>
      </select>
        <input
        placeholder='Data'
        type={'date'}
        name={'date'}
        value={form.date}
        onChange={onChange}
        required
        min={stringToday}
      />
        <input
        placeholder='Descrição'
        name='description'
        value={form.description}
        onChange={onChange}
        required
      />
        <input
        placeholder='Duração da viagem em dias'
        type={'number'}
        name={'duractionInDays'}
        value={form.duractionInDays}
        onChange={onChange}
        min={50}
      />
      <button type={'submit'}>CRIAR</button>
      </form>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
    </div>
  )
}

export default CreateTripPage