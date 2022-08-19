import React, { useState } from 'react'
import { goReturn } from "../routes/coordinator";
import { requestToApply } from '../hook/requests';
import { useNavigate } from 'react-router-dom';
import useForm from '../hook/useForm';
import { useRequestData } from '../hook/useRequestData';
import styled from 'styled-components';

const CadastroEstilo = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
const FormularioEstilo = styled.form`
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
const Espaco = styled.input`
  border: 2px solid #8C6849;
  border-radius: 4px;
  width: 40rem;
  padding: 8px;
  margin: 4px;
`

const Selecionar = styled.select`
  border: 2px solid #8C6849;
  border-radius: 4px;
  width: 660px;
  height: 34px;
  margin: 8px;
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
    <CadastroEstilo>
      <h2>Faça seu cadastro</h2>
      <button onClick={() => goReturn(navigate)}>Voltar</button>
      <FormularioEstilo onSubmit={fazerCadastro}>
        <Selecionar defaultValue="" onChange={mudaTrip}>
          <option value="" disabled>Escolha a viagem desejada</option>
          {chooseTrip}
        </Selecionar>
        <Espaco
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <Espaco
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <Espaco
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto com sua incrição"
          required
        />
        <Espaco
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
        />
        <Selecionar
          placeholder="País"
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value={""} disabled>País</option>
          <option>Brasil</option>
          <option>Espanha</option>
          <option>França</option>
          <option>México</option>
          <option>Estados Unidos</option>
          <option>Itália</option>
          <option>Portugal</option>
          <option>Holanda</option>
          <option>Hungria</option>
          <option>Suíça</option>
          <option>Suecia</option>
          <option>Croácia</option>
          <option>Alemanha</option>
          <option>Gana</option>
          <option>Bolívia</option>
          <option>Peru</option>
          <option>Costa Rica</option>
          <option>Paraguai</option>
          <option>Bélgica</option>
          <option>Reino Unido</option>
          <option>Irlanda</option>
          <option>Quênia</option>
          <option>Egito</option>
          <option>República Dominicana</option>
          <option>Colombia</option>
          <option>Árabia Saudita</option>
          <option>Turquia</option>
          <option>Austria</option>
          <option>Noruega</option>
          <option>Sérvia</option>
          <option>Argentina</option>
          <option>Uruguai</option>
          <option>Canada</option>
          <option>Chile</option>
          <option>Venezuela</option>
          <option>Equador</option>
          <option>Índia</option>
          <option>Indonésia</option>
          <option>África do Sul</option>
          <option>Senegal</option>
          <option>Porto Rico</option>
          <option>Emirados Árabes</option>
          <option>Rússia</option>
          <option>Hong Kong</option>
          <option>Marrocos</option>
          <option>China</option>
          <option>Japão</option>
          <option>Aústralia</option>
          <option>Nova Zelândia</option>
          <option>Córeia do Sul</option>
          <option>Outro</option>
        </Selecionar>
        <button type={"submit"}>Cadastrar</button>
      </FormularioEstilo>
    </CadastroEstilo>
  )
}

export default ApplicationFormPage