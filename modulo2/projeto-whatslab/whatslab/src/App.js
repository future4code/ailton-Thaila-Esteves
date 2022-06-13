import React from "react";
import './App.css';
import ListaDeMensagem from "./components/ListaDeMensagem";


class App extends React.Component() {
  state = {
    mensagem: [
    {
        nome: "Ana",
        msg: "OIII"
    },
    {
        nome: "Nilde",
        msg: "OLA"
    }
]

};

adicionaPessoa = () => {
    const novaMensagem = {
        nome: this.state.valorInputNome,
        nome: this.state.valorInputMensagem
    }

    const novoMensagens = [...this.setState, novaMensagem]

    this.setState({mensagem: novoMensagens})
}

onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value})
}

onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value})
}

render () {
    const lista = this.state.mensagem.map((mensagem)=> {
        return (
            <p>
                {mensagem.nome}: {mensagem.mensagem} 
            </p>
        )
    })

    return (
        <div>
            <input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
            />
             <input 
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
            />
            <div>
                <div>{lista}</div>
            </div>
        </div>
    )
}
}

export default App
