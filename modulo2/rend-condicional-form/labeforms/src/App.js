import React, { Component } from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Extra from "./components/Extra";

const DadosTotais = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align: center;
`

const BotaoCentralizado = styled.button `
  margin-left: 50vw;
  margin-top: 4vh;
`

class App extends Component {
  state = {
    etapa: 1,
  }

  escolheEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
          return <Etapa3 />;
          break;
      case 4:
          return <Extra />;
          break;
      
    }
  };

  passaEtapa = () => {
    this.setState ({
      etapa: this.state.etapa + 1
    })
  }

   render () {
    return (
    <div>

      {this.escolheEtapa()}

      <BotaoCentralizado onClick={this.passaEtapa}>
          {this.state.passaEtapa ? "Ir para próxima etapa" : "Próxima etapa"}
      </BotaoCentralizado>
      
    </div>
    )
    }
}

export default App;