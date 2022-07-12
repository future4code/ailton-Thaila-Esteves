import React from 'react'
import styled from "styled-components"

const CardLogin = styled.div`
  border: 6px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginPage = () => {
  return (
    <CardLogin>
      <h2>Faça seu login</h2>
      <input 
        placeholder={"E-mail"}
      />
      <input 
        placeholder={"Senha"}
      />
      <button>Voltar</button>
      <button>Entrar</button>
    </CardLogin>
  )
}

export default LoginPage