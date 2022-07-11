import React from "react";
import styled from "styled-components";
import AddPlaylist from "./pages/AddPlaylist";
import SeeAllPlaylists from "./pages/GeralPlaylists";

const Background = styled.div`
  border: 2px solid lightsalmon;
  width: 100wh;
  height: 100vh;
  margin: 10px;
  padding: 10px;
`


class App extends React.Component {
  state = {
    currentScreen: "add"
  }

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "add":
        return <AddPlaylist goToList={this.goToList}/>
      case "list":
        return <SeeAllPlaylists goToAdd={this.goToAdd} goToDetails={this.goToDetails}/>
      default:
        return <div>Essa página está errada.</div>
    }
  }

  goToAdd = () => {
    this.setState({currentScreen: "add"})
  }
  
  goToList = () => {
    this.setState({currentScreen: "list"})
  }
  
  render () {
    return (
      <Background>
       {this.chooseScreen()}
      </Background>
    )
  }
}

export default App



