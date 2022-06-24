import React from 'react';
import styled from 'styled-components';
import ListAllCharacters from './components/ListAllCharacters';
import DetailsPersonagens from './components/DetailsPersonagens';

const AppPage = styled.div`
  font-size: medium;
`

export default class App extends React.Component{
  state={
    currentPage: "list"
  }

  escolhePage = () => {
    switch (this.state.currentPage) {
      case "list":
        return <ListAllCharacters />
      case "details":
        return <DetailsPersonagens />
      default:
        return <ListAllCharacters />
    }
  }
  render () {
    return (
      <AppPage>
        {this.escolhePage()}
      </AppPage>
    );
  }
}

