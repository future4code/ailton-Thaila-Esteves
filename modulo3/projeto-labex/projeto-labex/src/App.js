import React from "react";
import { Router } from "./routes/Router";
import astra from "./assets/astra.jpg"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    background-image: url(${astra});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #8C704D;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 15px Verdana;
    font-family: sans-serif;
  }
  h2 {
    color: white;
  }
  button {
    background-color: white;
    border: 2px solid #8C6849;
    border-radius: 12px;
    font-size: medium;
    width: 8rem;
    height: 2rem;
    margin: 4px;
    :hover {
      background-color: #8C6849;
      color: white;
    }
  
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
