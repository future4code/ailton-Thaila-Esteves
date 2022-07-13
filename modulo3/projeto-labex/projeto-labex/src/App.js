import React from "react";
import { Router } from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
