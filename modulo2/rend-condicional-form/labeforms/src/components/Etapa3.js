import React, {Component} from "react";
import styled from "styled-components"

const DadosGerais = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Etapa3 extends Component {
    state = {
        motivo: "",
    }

    escrevaMotivo = (event) => {
        this.setState ({motivo: event.target.value})
    }

    render () {
    return (
        <DadosGerais>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h2>Essas perguntas são para quem não se formou no ensino superior</h2>
            <div>
                <p>5. Qual o motivo de não terminado sua graduação?</p>
                <input value={this.state.motivo} onChange = {this.escrevaMotivo} />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                    <option value="Curso técnico">Curso técnico</option>
                    <option value="Curso de inglês">Curso de inglês</option>
                </select>
                
            </div>
        </DadosGerais>
    )
}
}
export default Etapa3;