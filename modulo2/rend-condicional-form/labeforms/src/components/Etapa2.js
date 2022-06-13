import React, {Component} from "react";
import styled from "styled-components"

const DadosGerais = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Etapa2 extends Component {
    state = {
        curso: "",
        unidade: "",
    }

    escrevaCurso = (event) => {
        this.setState ({curso: event.target.value})
    }

    escrevaUnidade = (event) => {
        this.setState ({unidade: event.target.value})
    }

    render () {
    return (
        <DadosGerais>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h2>Essas perguntas são para quem está cursando (ou já terminou) o ensino superior</h2>
            <div>
                <p>5. Qual curso?</p>
                <input value={this.state.curso} onChange = {this.escrevaCurso} />
                <p>6. Qual a unidade de ensino?</p>
                <input value={this.state.unidade} onChange = {this.escrevaUnidade} />
                
                
            </div>
        </DadosGerais>
    )
}
}
export default Etapa2;