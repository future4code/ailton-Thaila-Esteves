import React from 'react'
import styled from "styled-components"
import img from "./images/astrona.png"

const CardHome = styled.div`
  border: 6px solid red;
`

const HomePage = () => {
  return (
    <CardHome>
      <h1>LabeX</h1>
      <button>Ver Viagens</button>
      <button>Área Admin</button>
      <img src={img} />
    </CardHome>
  )
}

export default HomePage