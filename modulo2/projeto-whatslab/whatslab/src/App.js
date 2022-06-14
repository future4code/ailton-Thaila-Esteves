import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid green;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`
const MensagensTela = styled.div`
  border: 1px solid red;
  background-color: lightblue;
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  `

const Inputs = styled.div`
  border: 1px solid blue;
  display: flex;
  `

const NameInput = styled.input` 
width: 100px;
`

const MsgInput = styled.input` 
 flex-grow: 1;
`

class App extends React.Component {
  state = {
    lista: [
     
    ],
    valorInputUser: '',
    valorInputText: ''
  }

  onChangeUserValue = (event) => {
    this.setState({valorInputUser: event.target.value})
  }

  onChangeUserMsg = (event) => {
    this.setState({valorInputText: event.target.value})
  }

  enviarMsg = () => {
    const novaMsg = {
      user: this.state.valorInputUser,
      text: this.state.valorInputText
    }
    const newArray = [novaMsg, ...this.state.lista]
    this.setState({lista: newArray, valorInputText: '', valorInputUser: ''})
  }

  render() {
    
        return (
            <AppContainer>
            <MensagensTela>
              {this.state.lista.map((msg, index) => {
                return <p key={index}><b>{msg.user}</b>: {msg.text}</p>
              }
                )}
        
            </MensagensTela>
            <Inputs>
            <NameInput onChange={this.onChangeUserValue} value={this.state.valorInputUser} placeholder={'Nome'}/>
            <MsgInput onChange={this.onChangeUserMsg} value={this.state.valorInputText} placeholder={'Mensagem'}/>
            <button onClick={this.enviarMsg}>Enviar</button>
            </Inputs>
            </AppContainer>
        );
  }
}
 
export default App;