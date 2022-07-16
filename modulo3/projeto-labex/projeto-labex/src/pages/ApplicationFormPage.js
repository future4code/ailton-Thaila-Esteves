import React, { useState } from 'react'
import { goReturn } from "../routes/coordinator";
import { requestToApply } from '../hook/requests';
import { useNavigate } from 'react-router-dom';
import useForm from '../hook/useForm';
import { useRequestData } from '../hook/useRequestData';
import styled from 'styled-components';

const CadastroEstilo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40rem;
  height: 20rem;
`

const BotaoCentro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`

const ApplicationFormPage = () => {
  const [tripId, setTripId] = useState("")
  const [listandoTrips] = useRequestData("/trips", {})
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  });
  
  const navigate = useNavigate()

  const cleanAllForms = () => {
    cleanFields()
    setTripId("")
  };

  const fazerCadastro = (event) => {
    event.preventDefault();
    requestToApply(form, tripId, cleanAllForms)
  };

  const mudaTrip = (event) => {
    setTripId(event.target.value)
  };
 
  const chooseTrip = listandoTrips.trips && listandoTrips.trips.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  return (
    <div>
      <h2>Faça seu cadastro</h2>
      <CadastroEstilo onSubmit={fazerCadastro}>
        <select defaultValue="" onChange={mudaTrip}>
          <option value="" disabled>Escolha a viagem desejada</option>
          {chooseTrip}
        </select>
        <input
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto com sua incrição"
          required
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
        />
        <select
          placeholder="País"
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value={""} disabled>País</option>
          <option>Brasil</option>
          <option>Espanha</option>
        </select>
        <BotaoCentro>
        <button type={"submit"}>Cadastrar</button>
        <button onClick={() => goReturn(navigate)}>Voltar</button>
        </BotaoCentro>
      </CadastroEstilo>
    </div>
  )
}

export default ApplicationFormPage