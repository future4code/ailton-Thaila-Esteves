import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloInput = styled.input`
    width: 18rem;
    border: 1px solid orangered;
`

class AddPlaylist extends React.Component {
    state = {
        playlistInput: ""
    }

    addToPlaylist = () => {
        const body = {
            name: this.state.playlistInput
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "thaila-esteves-ailton"
            }
          }
        ).then((res) => {
                   
            alert("Playlist criada e adicionada a sua lista de playlist!")
            this.setState({playlistInput: ""}) 
        }).catch(() => {
            alert("Uma playlist com esse nome já foi adicionada, por favor escolha outro nome")
        })
    }

    onChangePlaylist = (event) => {
        this.setState({playlistInput: event.target.value})
    }

  render () {
    return (
      <div>
        <h1>Adicione uma nova playlist</h1>
        <EstiloInput
            placeholder="Escreva o nome que quer colocar na sua nova playlist"
            value={this.state.playlistInput}
            onChange={this.onChangePlaylist}
        />
        <button onClick={this.addToPlaylist}>Adicionar</button>
        <hr />
        <button onClick={this.props.goToList}>Ver todas suas playlist</button>
      </div>
    )
  }
}

export default AddPlaylist