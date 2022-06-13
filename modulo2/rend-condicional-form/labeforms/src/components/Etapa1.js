import React, {Component} from "react";
import styled from "styled-components"
import PerguntasAbertas from "./PerguntasAbertas";

const DadosGerais = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`

class Etapa1 extends Component {
    state = {
        nome: "",
        idade: "",
        email: "",
    }

    escrevaNome = (event) => {
        this.setState ({nome: event.target.value})
    }

    escrevaIdade = (event) => {
        this.setState ({email: event.target.value})
    }

    escrevaEmail = (event) => {
        this.setState ({email: event.target.value})
    }

    render () {
    return (
        <DadosGerais>
            <h1><b>ETAPA 1 - DADOS GERAIS</b></h1>
            <div>
                <PerguntasAbertas pergunta={"1. Qual seu nome?"} />
                <input value={this.state.nome} onChange = {this.escrevaNome} />
                <PerguntasAbertas pergunta={"2. Qual sua idade?"} />
                <input value={this.state.idade} onChange = {this.escrevaIdade} />
                <PerguntasAbertas pergunta={"3. Qual seu email?"} />
                <input value={this.state.nome} onChange = {this.escrevaEmail} />
                <PerguntasAbertas pergunta={"4. Qual é sua escolaridade?"} />
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
                
            </div>
        </DadosGerais>
    )
}
}
export default Etapa1;


// Antes do desafio 1 na div do return
{/* <PerguntasAbertas pergunta={"1. Qual seu nome?"} />
<input value={this.state.nome} onChange = {this.escrevaNome} />
<p>2. Qual sua idade?</p>
<input value={this.state.idade} onChange = {this.escrevaIdade} />
<p>3. Qual seu email?</p>
<input value={this.state.nome} onChange = {this.escrevaEmail} />
<p>4. Qual é sua escolaridade?</p> */}
