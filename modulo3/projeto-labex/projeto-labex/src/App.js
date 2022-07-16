import React from "react";
import { Router } from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: #BFA08E;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: white;
    border: 2px solid #8C6849;
    border-radius: 12px;
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
