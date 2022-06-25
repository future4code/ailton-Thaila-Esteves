import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloInput = styled.input`
    width: 12rem;
    border: 1px solid orangered;
`

export default class AddPlaylist extends React.Component {
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
        ).then(() => {
            alert("Playlist adicionada!")
        }).catch((err) => {
            console.log(err.message)
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
            placeholder="escreva o nome da sua nova playlist"
            value={this.state.playlistInput}
            onChange={this.onChangePlaylist}
        />
        <button onClick={this.addToPlaylist}>Adicionar</button>
      </div>
    )
  }
}