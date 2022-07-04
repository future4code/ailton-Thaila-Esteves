import React from "react";
import axios from "axios";
import Details from "./Details";
import styled from "styled-components";

class SeeAllPlaylist extends React.Component {
    state = {
        listaTodasPlaylists: []
    }
    
    componentDidMount = () => {
        this.mostraPlaylists()
    }

    mostraPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "thaila-esteves-ailton"
            }
        }).then (res => {
            this.setState({listaTodasPlaylists: res.data.result.list})
        }).catch (err => {
            alert(err.message)
        })
    }

    deletarPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "thaila-esteves-ailton"
            }

        }).then (() => {
            alert("Playlist deletada")
            this.mostraPlaylists()
        }).catch ((err) => {
            alert(err.message)
        })
    }

  render () {     
    const mapeandoPlaylist = this.state.listaTodasPlaylists.map((playlist) => {  
        return (
            <div key={playlist.id}>
            <button onClick={() => this.props.mudarPagina("details", this.props.id)}>Ver detalhes</button>
            {playlist.name}
            <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar playlist</button>
            </div>
        )
    })   
    return (            
      <div>
        {mapeandoPlaylist}
      </div>
    )
  }
}

export default SeeAllPlaylist

        