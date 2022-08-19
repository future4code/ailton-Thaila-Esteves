import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { goToAdmin, goToLogin } from "../routes/coordinator"

// REQUEST POST

// CADASTRO - com id da viagem que quer se cadastrar
export const requestToApply = (body, tripId, clear) => {
    axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Cadastrado!")
            clear()
        })
        .catch((err) => alert(err.response.message))
}

// CRIAR NOVA VIAGEM (com auth token do login)
export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem criada!")
        clear()
    })
    .catch((err) => alert(err.response.data.message))
}

// LOGIN (cria auth token)
export const fazerLogin = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToAdmin(navigate)
    })
    .catch((error) => alert(error.message))
}

// Logout (limpa auth token)

export const fazerLogout = (navigate) => {
    localStorage.removeItem("token")
    goToLogin(navigate)
}

// REQUEST DEL (com auth token do login) - com id da viagem que for deletar

export const deletarTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem deletada!")
        getTrips()
    })
    .catch((error) => alert(error.message))
    
}

// REQUEST PUT (com auth token do login) - com id da viagem que tiver vendo e com id 
// do candidato para decidir aprovação

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Registrado!")
        getTripDetails()
    })
    .catch((error) => alert(error.message))
}

  