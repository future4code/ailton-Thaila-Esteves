import React from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/LoginPage"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: lightblue;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
     <HomePage />
    </div>
  );
}

export default App;
