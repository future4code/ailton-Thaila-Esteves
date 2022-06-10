import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: 'joaninha',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'filipinhaa',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ]
  };

  render() {

    const listaComponentes = this.state.posts.map((box) => {
      return (
        <div>
        {box.nomeUsuario}
        {box.fotoUsuario}
        {box.fotoPost}
        </div>
      );
    });

    return (
      <MainContainer>
       <div>{listaComponentes}</div>
      </MainContainer>
    );
  }
}

export default App;
